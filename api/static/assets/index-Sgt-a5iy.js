(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var wd={exports:{}},Ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function Py(){if(f_)return Ko;f_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Ko.Fragment=t,Ko.jsx=i,Ko.jsxs=i,Ko}var d_;function zy(){return d_||(d_=1,wd.exports=Py()),wd.exports}var xt=zy(),Dd={exports:{}},Qo={},Ud={exports:{}},Nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function Iy(){return h_||(h_=1,(function(s){function t(U,I){var ot=U.length;U.push(I);t:for(;0<ot;){var dt=ot-1>>>1,st=U[dt];if(0<l(st,I))U[dt]=I,U[ot]=st,ot=dt;else break t}}function i(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var I=U[0],ot=U.pop();if(ot!==I){U[0]=ot;t:for(var dt=0,st=U.length,P=st>>>1;dt<P;){var q=2*(dt+1)-1,vt=U[q],At=q+1,wt=U[At];if(0>l(vt,ot))At<st&&0>l(wt,vt)?(U[dt]=wt,U[At]=ot,dt=At):(U[dt]=vt,U[q]=ot,dt=q);else if(At<st&&0>l(wt,ot))U[dt]=wt,U[At]=ot,dt=At;else break t}}return I}function l(U,I){var ot=U.sortIndex-I.sortIndex;return ot!==0?ot:U.id-I.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var m=[],h=[],v=1,y=null,g=3,M=!1,T=!1,C=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(U){for(var I=i(h);I!==null;){if(I.callback===null)r(h);else if(I.startTime<=U)r(h),I.sortIndex=I.expirationTime,t(m,I);else break;I=i(h)}}function F(U){if(C=!1,N(U),!T)if(i(m)!==null)T=!0,B||(B=!0,j());else{var I=i(h);I!==null&&Z(F,I.startTime-U)}}var B=!1,z=-1,b=5,D=-1;function ct(){return S?!0:!(s.unstable_now()-D<b)}function H(){if(S=!1,B){var U=s.unstable_now();D=U;var I=!0;try{t:{T=!1,C&&(C=!1,w(z),z=-1),M=!0;var ot=g;try{e:{for(N(U),y=i(m);y!==null&&!(y.expirationTime>U&&ct());){var dt=y.callback;if(typeof dt=="function"){y.callback=null,g=y.priorityLevel;var st=dt(y.expirationTime<=U);if(U=s.unstable_now(),typeof st=="function"){y.callback=st,N(U),I=!0;break e}y===i(m)&&r(m),N(U)}else r(m);y=i(m)}if(y!==null)I=!0;else{var P=i(h);P!==null&&Z(F,P.startTime-U),I=!1}}break t}finally{y=null,g=ot,M=!1}I=void 0}}finally{I?j():B=!1}}}var j;if(typeof L=="function")j=function(){L(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,et=J.port2;J.port1.onmessage=H,j=function(){et.postMessage(null)}}else j=function(){x(H,0)};function Z(U,I){z=x(function(){U(s.unstable_now())},I)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(U){U.callback=null},s.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<U?Math.floor(1e3/U):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(U){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var ot=g;g=I;try{return U()}finally{g=ot}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(U,I){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ot=g;g=U;try{return I()}finally{g=ot}},s.unstable_scheduleCallback=function(U,I,ot){var dt=s.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?dt+ot:dt):ot=dt,U){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=ot+st,U={id:v++,callback:I,priorityLevel:U,startTime:ot,expirationTime:st,sortIndex:-1},ot>dt?(U.sortIndex=ot,t(h,U),i(m)===null&&U===i(h)&&(C?(w(z),z=-1):C=!0,Z(F,ot-dt))):(U.sortIndex=st,t(m,U),T||M||(T=!0,B||(B=!0,j()))),U},s.unstable_shouldYield=ct,s.unstable_wrapCallback=function(U){var I=g;return function(){var ot=g;g=I;try{return U.apply(this,arguments)}finally{g=ot}}}})(Nd)),Nd}var p_;function By(){return p_||(p_=1,Ud.exports=Iy()),Ud.exports}var Ld={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function Fy(){if(m_)return le;m_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),g=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function x(P,q,vt){this.props=P,this.context=q,this.refs=S,this.updater=vt||T}x.prototype.isReactComponent={},x.prototype.setState=function(P,q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,q,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function w(){}w.prototype=x.prototype;function L(P,q,vt){this.props=P,this.context=q,this.refs=S,this.updater=vt||T}var N=L.prototype=new w;N.constructor=L,C(N,x.prototype),N.isPureReactComponent=!0;var F=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function D(P,q,vt){var At=vt.ref;return{$$typeof:s,type:P,key:q,ref:At!==void 0?At:null,props:vt}}function ct(P,q){return D(P.type,q,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function j(P){var q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(vt){return q[vt]})}var J=/\/+/g;function et(P,q){return typeof P=="object"&&P!==null&&P.key!=null?j(""+P.key):q.toString(36)}function Z(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(B,B):(P.status="pending",P.then(function(q){P.status==="pending"&&(P.status="fulfilled",P.value=q)},function(q){P.status==="pending"&&(P.status="rejected",P.reason=q)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function U(P,q,vt,At,wt){var $=typeof P;($==="undefined"||$==="boolean")&&(P=null);var _t=!1;if(P===null)_t=!0;else switch($){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(P.$$typeof){case s:case t:_t=!0;break;case v:return _t=P._init,U(_t(P._payload),q,vt,At,wt)}}if(_t)return wt=wt(P),_t=At===""?"."+et(P,0):At,F(wt)?(vt="",_t!=null&&(vt=_t.replace(J,"$&/")+"/"),U(wt,q,vt,"",function(Qt){return Qt})):wt!=null&&(H(wt)&&(wt=ct(wt,vt+(wt.key==null||P&&P.key===wt.key?"":(""+wt.key).replace(J,"$&/")+"/")+_t)),q.push(wt)),1;_t=0;var Mt=At===""?".":At+":";if(F(P))for(var Ut=0;Ut<P.length;Ut++)At=P[Ut],$=Mt+et(At,Ut),_t+=U(At,q,vt,$,wt);else if(Ut=M(P),typeof Ut=="function")for(P=Ut.call(P),Ut=0;!(At=P.next()).done;)At=At.value,$=Mt+et(At,Ut++),_t+=U(At,q,vt,$,wt);else if($==="object"){if(typeof P.then=="function")return U(Z(P),q,vt,At,wt);throw q=String(P),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return _t}function I(P,q,vt){if(P==null)return P;var At=[],wt=0;return U(P,At,"","",function($){return q.call(vt,$,wt++)}),At}function ot(P){if(P._status===-1){var q=P._result;q=q(),q.then(function(vt){(P._status===0||P._status===-1)&&(P._status=1,P._result=vt)},function(vt){(P._status===0||P._status===-1)&&(P._status=2,P._result=vt)}),P._status===-1&&(P._status=0,P._result=q)}if(P._status===1)return P._result.default;throw P._result}var dt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},st={map:I,forEach:function(P,q,vt){I(P,function(){q.apply(this,arguments)},vt)},count:function(P){var q=0;return I(P,function(){q++}),q},toArray:function(P){return I(P,function(q){return q})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return le.Activity=y,le.Children=st,le.Component=x,le.Fragment=i,le.Profiler=l,le.PureComponent=L,le.StrictMode=r,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,le.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},le.cache=function(P){return function(){return P.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(P,q,vt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var At=C({},P.props),wt=P.key;if(q!=null)for($ in q.key!==void 0&&(wt=""+q.key),q)!b.call(q,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&q.ref===void 0||(At[$]=q[$]);var $=arguments.length-2;if($===1)At.children=vt;else if(1<$){for(var _t=Array($),Mt=0;Mt<$;Mt++)_t[Mt]=arguments[Mt+2];At.children=_t}return D(P.type,wt,At)},le.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},le.createElement=function(P,q,vt){var At,wt={},$=null;if(q!=null)for(At in q.key!==void 0&&($=""+q.key),q)b.call(q,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(wt[At]=q[At]);var _t=arguments.length-2;if(_t===1)wt.children=vt;else if(1<_t){for(var Mt=Array(_t),Ut=0;Ut<_t;Ut++)Mt[Ut]=arguments[Ut+2];wt.children=Mt}if(P&&P.defaultProps)for(At in _t=P.defaultProps,_t)wt[At]===void 0&&(wt[At]=_t[At]);return D(P,$,wt)},le.createRef=function(){return{current:null}},le.forwardRef=function(P){return{$$typeof:p,render:P}},le.isValidElement=H,le.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:ot}},le.memo=function(P,q){return{$$typeof:h,type:P,compare:q===void 0?null:q}},le.startTransition=function(P){var q=z.T,vt={};z.T=vt;try{var At=P(),wt=z.S;wt!==null&&wt(vt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(B,dt)}catch($){dt($)}finally{q!==null&&vt.types!==null&&(q.types=vt.types),z.T=q}},le.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},le.use=function(P){return z.H.use(P)},le.useActionState=function(P,q,vt){return z.H.useActionState(P,q,vt)},le.useCallback=function(P,q){return z.H.useCallback(P,q)},le.useContext=function(P){return z.H.useContext(P)},le.useDebugValue=function(){},le.useDeferredValue=function(P,q){return z.H.useDeferredValue(P,q)},le.useEffect=function(P,q){return z.H.useEffect(P,q)},le.useEffectEvent=function(P){return z.H.useEffectEvent(P)},le.useId=function(){return z.H.useId()},le.useImperativeHandle=function(P,q,vt){return z.H.useImperativeHandle(P,q,vt)},le.useInsertionEffect=function(P,q){return z.H.useInsertionEffect(P,q)},le.useLayoutEffect=function(P,q){return z.H.useLayoutEffect(P,q)},le.useMemo=function(P,q){return z.H.useMemo(P,q)},le.useOptimistic=function(P,q){return z.H.useOptimistic(P,q)},le.useReducer=function(P,q,vt){return z.H.useReducer(P,q,vt)},le.useRef=function(P){return z.H.useRef(P)},le.useState=function(P){return z.H.useState(P)},le.useSyncExternalStore=function(P,q,vt){return z.H.useSyncExternalStore(P,q,vt)},le.useTransition=function(){return z.H.useTransition()},le.version="19.2.5",le}var g_;function pp(){return g_||(g_=1,Ld.exports=Fy()),Ld.exports}var Od={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function Hy(){if(__)return Nn;__=1;var s=pp();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:m,containerInfo:h,implementation:v}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,v)},Nn.flushSync=function(m){var h=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=v,r.d.f()}},Nn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,y=p(v,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:g,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:y,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Nn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Nn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,y=p(v,h.crossOrigin);r.d.L(m,v,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Nn.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,h){return m(h)},Nn.useFormState=function(m,h,v){return d.H.useFormState(m,h,v)},Nn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Nn.version="19.2.5",Nn}var v_;function Gy(){if(v_)return Od.exports;v_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Od.exports=Hy(),Od.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function Vy(){if(x_)return Qo;x_=1;var s=By(),t=pp(),i=Gy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,A=u.child;A;){if(A===a){_=!0,a=u,o=f;break}if(A===o){_=!0,o=u,a=f;break}A=A.sibling}if(!_){for(A=f.child;A;){if(A===a){_=!0,a=f,o=u;break}if(A===o){_=!0,o=f,a=u;break}A=A.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),ct=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case L:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:et(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return et(e(n))}catch{}}return null}var Z=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},dt=[],st=-1;function P(e){return{current:e}}function q(e){0>st||(e.current=dt[st],dt[st]=null,st--)}function vt(e,n){st++,dt[st]=e.current,e.current=n}var At=P(null),wt=P(null),$=P(null),_t=P(null);function Mt(e,n){switch(vt($,n),vt(wt,e),vt(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?O0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=O0(n),e=P0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(At),vt(At,e)}function Ut(){q(At),q(wt),q($)}function Qt(e){e.memoizedState!==null&&vt(_t,e);var n=At.current,a=P0(n,e.type);n!==a&&(vt(wt,e),vt(At,a))}function $t(e){wt.current===e&&(q(At),q(wt)),_t.current===e&&(q(_t),qo._currentValue=ot)}var Ye,ge;function ue(e){if(Ye===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ye=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ye+e+ge}var Oe=!1;function ce(e,n){if(!e||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ut){var rt=ut}Reflect.construct(e,[],St)}else{try{St.call()}catch(ut){rt=ut}e.call(St.prototype)}}else{try{throw Error()}catch(ut){rt=ut}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ut){if(ut&&rt&&typeof ut.stack=="string")return[ut.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],A=f[1];if(_&&A){var G=_.split(`
`),it=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===it.length)for(o=G.length-1,u=it.length-1;1<=o&&0<=u&&G[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==it[u]){var pt=`
`+G[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ue(a):""}function nn(e,n){switch(e.tag){case 26:case 27:case 5:return ue(e.type);case 16:return ue("Lazy");case 13:return e.child!==n&&n!==null?ue("Suspense Fallback"):ue("Suspense");case 19:return ue("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return ue("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=nn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Qe=Object.prototype.hasOwnProperty,Re=s.unstable_scheduleCallback,ze=s.unstable_cancelCallback,jt=s.unstable_shouldYield,O=s.unstable_requestPaint,E=s.unstable_now,Y=s.unstable_getCurrentPriorityLevel,mt=s.unstable_ImmediatePriority,yt=s.unstable_UserBlockingPriority,ht=s.unstable_NormalPriority,Wt=s.unstable_LowPriority,Dt=s.unstable_IdlePriority,Jt=s.log,ne=s.unstable_setDisableYieldValue,Tt=null,bt=null;function zt(e){if(typeof Jt=="function"&&ne(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Tt,e)}catch{}}var Pt=Math.clz32?Math.clz32:W,It=Math.log,de=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(It(e)/de|0)|0}var Ct=256,Rt=262144,Bt=4194304;function Et(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ft(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Et(o):(_&=A,_!==0?u=Et(_):a||(a=A&~e,a!==0&&(u=Et(a))))):(A=o&~f,A!==0?u=Et(A):_!==0?u=Et(_):a||(a=o&~e,a!==0&&(u=Et(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ht(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function Ce(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bi(e,n,a,o,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,it=e.hiddenUpdates;for(a=_&~a;0<a;){var pt=31-Pt(a),St=1<<pt;A[pt]=0,G[pt]=-1;var rt=it[pt];if(rt!==null)for(it[pt]=null,pt=0;pt<rt.length;pt++){var ut=rt[pt];ut!==null&&(ut.lane&=-536870913)}a&=~St}o!==0&&so(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function so(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Kr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function gl(e,n){var a=n&-n;return a=(a&42)!==0?1:Qr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Jr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ii(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:a_(e.type))}function $r(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var Ei=Math.random().toString(36).slice(2),cn="__reactFiber$"+Ei,_n="__reactProps$"+Ei,Ji="__reactContainer$"+Ei,wa="__reactEvents$"+Ei,_l="__reactListeners$"+Ei,vl="__reactHandles$"+Ei,xl="__reactResources$"+Ei,pr="__reactMarker$"+Ei;function oo(e){delete e[cn],delete e[_n],delete e[wa],delete e[_l],delete e[vl]}function Da(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ji]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=V0(e);e!==null;){if(a=e[cn])return a;e=V0(e)}return n}e=a,a=e.parentNode}return null}function Ua(e){if(e=e[cn]||e[Ji]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function mr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function R(e){var n=e[xl];return n||(n=e[xl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(e){e[pr]=!0}var lt=new Set,at={};function tt(e,n){Nt(e,n),Nt(e+"Capture",n)}function Nt(e,n){for(at[e]=n,e=0;e<n.length;e++)lt.add(n[e])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lt={},qt={};function Kt(e){return Qe.call(qt,e)?!0:Qe.call(Lt,e)?!1:Ft.test(e)?qt[e]=!0:(Lt[e]=!0,!1)}function ie(e,n,a){if(Kt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function oe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Gt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Je(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ue(e){if(!e._valueTracker){var n=Je(e)?"checked":"value";e._valueTracker=$e(e,n,""+e[n])}}function vn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Je(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fn=/[\n"\\]/g;function se(e){return e.replace(Fn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Hn(e,n,a,o,u,f,_,A){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+he(n)):e.value!==""+he(n)&&(e.value=""+he(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Ti(e,_,he(n)):a!=null?Ti(e,_,he(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+he(A):e.removeAttribute("name")}function $n(e,n,a,o,u,f,_,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ue(e);return}a=a!=null?""+he(a):"",n=n!=null?""+he(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Ue(e)}function Ti(e,n,a){n==="number"&&kt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ti(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+he(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ie(e,n,a){if(n!=null&&(n=""+he(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+he(a):""}function un(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Z(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=he(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ue(e)}function Gn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var fn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ai(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||fn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function $i(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ai(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Ai(e,f,n[f])}function ts(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ux=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sl(e){return Nx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var Tu=null;function Au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var es=null,ns=null;function Lp(e){var n=Ua(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;t:switch(e=n.stateNode,n.type){case"input":if(Hn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[_n]||null;if(!u)throw Error(r(90));Hn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&vn(o)}break t;case"textarea":Ie(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ti(e,!!a.multiple,n,!1)}}}var Ru=!1;function Op(e,n,a){if(Ru)return e(n,a);Ru=!0;try{var o=e(n);return o}finally{if(Ru=!1,(es!==null||ns!==null)&&(oc(),es&&(n=es,e=ns,ns=es=null,Lp(n),e)))for(n=0;n<e.length;n++)Lp(e[n])}}function lo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=!1;if(ea)try{var co={};Object.defineProperty(co,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Cu=!1}var Na=null,wu=null,yl=null;function Pp(){if(yl)return yl;var e,n=wu,a=n.length,o,u="value"in Na?Na.value:Na.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return yl=u.slice(e,1<o?1-o:void 0)}function Ml(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function bl(){return!0}function zp(){return!1}function qn(e){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?bl:zp,this.isPropagationStopped=zp,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),n}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=qn(gr),uo=y({},gr,{view:0,detail:0}),Lx=qn(uo),Du,Uu,fo,Tl=y({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fo&&(fo&&e.type==="mousemove"?(Du=e.screenX-fo.screenX,Uu=e.screenY-fo.screenY):Uu=Du=0,fo=e),Du)},movementY:function(e){return"movementY"in e?e.movementY:Uu}}),Ip=qn(Tl),Ox=y({},Tl,{dataTransfer:0}),Px=qn(Ox),zx=y({},uo,{relatedTarget:0}),Nu=qn(zx),Ix=y({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bx=qn(Ix),Fx=y({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hx=qn(Fx),Gx=y({},gr,{data:0}),Bp=qn(Gx),Vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Xx[e])?!!n[e]:!1}function Lu(){return Wx}var qx=y({},uo,{key:function(e){if(e.key){var n=Vx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(e){return e.type==="keypress"?Ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yx=qn(qx),jx=y({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=qn(jx),Zx=y({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),Kx=qn(Zx),Qx=y({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jx=qn(Qx),$x=y({},Tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tS=qn($x),eS=y({},gr,{newState:0,oldState:0}),nS=qn(eS),iS=[9,13,27,32],Ou=ea&&"CompositionEvent"in window,ho=null;ea&&"documentMode"in document&&(ho=document.documentMode);var aS=ea&&"TextEvent"in window&&!ho,Hp=ea&&(!Ou||ho&&8<ho&&11>=ho),Gp=" ",Vp=!1;function kp(e,n){switch(e){case"keyup":return iS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var is=!1;function rS(e,n){switch(e){case"compositionend":return Xp(n);case"keypress":return n.which!==32?null:(Vp=!0,Gp);case"textInput":return e=n.data,e===Gp&&Vp?null:e;default:return null}}function sS(e,n){if(is)return e==="compositionend"||!Ou&&kp(e,n)?(e=Pp(),yl=wu=Na=null,is=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hp&&n.locale!=="ko"?null:n.data;default:return null}}var oS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!oS[e.type]:n==="textarea"}function qp(e,n,a,o){es?ns?ns.push(o):ns=[o]:es=o,n=pc(n,"onChange"),0<n.length&&(a=new El("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var po=null,mo=null;function lS(e){C0(e,0)}function Al(e){var n=mr(e);if(vn(n))return e}function Yp(e,n){if(e==="change")return n}var jp=!1;if(ea){var Pu;if(ea){var zu="oninput"in document;if(!zu){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),zu=typeof Zp.oninput=="function"}Pu=zu}else Pu=!1;jp=Pu&&(!document.documentMode||9<document.documentMode)}function Kp(){po&&(po.detachEvent("onpropertychange",Qp),mo=po=null)}function Qp(e){if(e.propertyName==="value"&&Al(mo)){var n=[];qp(n,mo,e,Au(e)),Op(lS,n)}}function cS(e,n,a){e==="focusin"?(Kp(),po=n,mo=a,po.attachEvent("onpropertychange",Qp)):e==="focusout"&&Kp()}function uS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Al(mo)}function fS(e,n){if(e==="click")return Al(n)}function dS(e,n){if(e==="input"||e==="change")return Al(n)}function hS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:hS;function go(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Qe.call(n,u)||!ei(e[u],n[u]))return!1}return!0}function Jp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $p(e,n){var a=Jp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Jp(a)}}function tm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?tm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function em(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=kt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=kt(e.document)}return n}function Iu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var pS=ea&&"documentMode"in document&&11>=document.documentMode,as=null,Bu=null,_o=null,Fu=!1;function nm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fu||as==null||as!==kt(o)||(o=as,"selectionStart"in o&&Iu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),_o&&go(_o,o)||(_o=o,o=pc(Bu,"onSelect"),0<o.length&&(n=new El("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=as)))}function _r(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var rs={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionrun:_r("Transition","TransitionRun"),transitionstart:_r("Transition","TransitionStart"),transitioncancel:_r("Transition","TransitionCancel"),transitionend:_r("Transition","TransitionEnd")},Hu={},im={};ea&&(im=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function vr(e){if(Hu[e])return Hu[e];if(!rs[e])return e;var n=rs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in im)return Hu[e]=n[a];return e}var am=vr("animationend"),rm=vr("animationiteration"),sm=vr("animationstart"),mS=vr("transitionrun"),gS=vr("transitionstart"),_S=vr("transitioncancel"),om=vr("transitionend"),lm=new Map,Gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gu.push("scrollEnd");function Ri(e,n){lm.set(e,n),tt(n,[e])}var Rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],ss=0,Vu=0;function Cl(){for(var e=ss,n=Vu=ss=0;n<e;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&cm(a,u,f)}}function wl(e,n,a,o){fi[ss++]=e,fi[ss++]=n,fi[ss++]=a,fi[ss++]=o,Vu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ku(e,n,a,o){return wl(e,n,a,o),Dl(e)}function xr(e,n){return wl(e,null,null,n),Dl(e)}function cm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Dl(e){if(50<Fo)throw Fo=0,$f=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var os={};function vS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,n,a,o){return new vS(e,n,a,o)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function na(e,n){var a=e.alternate;return a===null?(a=ni(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function um(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ul(e,n,a,o,u,f){var _=0;if(o=e,typeof e=="function")Xu(e)&&(_=1);else if(typeof e=="string")_=by(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=ni(31,a,n,u),e.elementType=D,e.lanes=f,e;case C:return Sr(a.children,u,f,n);case S:_=8,u|=24;break;case x:return e=ni(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case F:return e=ni(13,a,n,u),e.elementType=F,e.lanes=f,e;case B:return e=ni(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:_=10;break t;case w:_=9;break t;case N:_=11;break t;case z:_=14;break t;case b:_=16,o=null;break t}_=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=ni(_,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Sr(e,n,a,o){return e=ni(7,e,o,n),e.lanes=a,e}function Wu(e,n,a){return e=ni(6,e,null,n),e.lanes=a,e}function fm(e){var n=ni(18,null,null,0);return n.stateNode=e,n}function qu(e,n,a){return n=ni(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var dm=new WeakMap;function di(e,n){if(typeof e=="object"&&e!==null){var a=dm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},dm.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var ls=[],cs=0,Nl=null,vo=0,hi=[],pi=0,La=null,Bi=1,Fi="";function ia(e,n){ls[cs++]=vo,ls[cs++]=Nl,Nl=e,vo=n}function hm(e,n,a){hi[pi++]=Bi,hi[pi++]=Fi,hi[pi++]=La,La=e;var o=Bi;e=Fi;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Bi=1<<32-Pt(n)+u|a<<u|o,Fi=f+e}else Bi=1<<f|a<<u|o,Fi=e}function Yu(e){e.return!==null&&(ia(e,1),hm(e,1,0))}function ju(e){for(;e===Nl;)Nl=ls[--cs],ls[cs]=null,vo=ls[--cs],ls[cs]=null;for(;e===La;)La=hi[--pi],hi[pi]=null,Fi=hi[--pi],hi[pi]=null,Bi=hi[--pi],hi[pi]=null}function pm(e,n){hi[pi++]=Bi,hi[pi++]=Fi,hi[pi++]=La,Bi=n.id,Fi=n.overflow,La=e}var Rn=null,Ze=null,Te=!1,Oa=null,mi=!1,Zu=Error(r(519));function Pa(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xo(di(n,e)),Zu}function mm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[_n]=o,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<Go.length;a++)ye(Go[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),$n(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),un(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||N0(n.textContent,a)?(o.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),o.onScroll!=null&&ye("scroll",n),o.onScrollEnd!=null&&ye("scrollend",n),o.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||Pa(e,!0)}function gm(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Rn=Rn.return}}function us(e){if(e!==Rn)return!1;if(!Te)return gm(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||pd(e.type,e.memoizedProps)),a=!a),a&&Ze&&Pa(e),gm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ze=G0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ze=G0(e)}else n===27?(n=Ze,Za(e.type)?(e=xd,xd=null,Ze=e):Ze=n):Ze=Rn?_i(e.stateNode.nextSibling):null;return!0}function yr(){Ze=Rn=null,Te=!1}function Ku(){var e=Oa;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),Oa=null),e}function xo(e){Oa===null?Oa=[e]:Oa.push(e)}var Qu=P(null),Mr=null,aa=null;function za(e,n,a){vt(Qu,n._currentValue),n._currentValue=a}function ra(e){e._currentValue=Qu.current,q(Qu)}function Ju(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function $u(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Ju(f.return,a,e),o||(_=null);break t}f=A.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Ju(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function fs(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var A=u.type;ei(u.pendingProps.value,_.value)||(e!==null?e.push(A):e=[A])}}else if(u===_t.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(qo):e=[qo])}u=u.return}e!==null&&$u(n,e,a,o),n.flags|=262144}function Ll(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function br(e){Mr=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return _m(Mr,e)}function Ol(e,n){return Mr===null&&br(e),_m(e,n)}function _m(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},aa===null){if(e===null)throw Error(r(308));aa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else aa=aa.next=n;return a}var xS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},SS=s.unstable_scheduleCallback,yS=s.unstable_NormalPriority,dn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tf(){return{controller:new xS,data:new Map,refCount:0}}function So(e){e.refCount--,e.refCount===0&&SS(yS,function(){e.controller.abort()})}var yo=null,ef=0,ds=0,hs=null;function MS(e,n){if(yo===null){var a=yo=[];ef=0,ds=rd(),hs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ef++,n.then(vm,vm),n}function vm(){if(--ef===0&&yo!==null){hs!==null&&(hs.status="fulfilled");var e=yo;yo=null,ds=0,hs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function bS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var xm=U.S;U.S=function(e,n){n0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&MS(e,n),xm!==null&&xm(e,n)};var Er=P(null);function nf(){var e=Er.current;return e!==null?e:je.pooledCache}function Pl(e,n){n===null?vt(Er,Er.current):vt(Er,n.pool)}function Sm(){var e=nf();return e===null?null:{parent:dn._currentValue,pool:e}}var ps=Error(r(460)),af=Error(r(474)),zl=Error(r(542)),Il={then:function(){}};function ym(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Em(e),e;default:if(typeof n.status=="string")n.then(ta,ta);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Em(e),e}throw Ar=n,ps}}function Tr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ar=a,ps):a}}var Ar=null;function bm(){if(Ar===null)throw Error(r(459));var e=Ar;return Ar=null,e}function Em(e){if(e===ps||e===zl)throw Error(r(483))}var ms=null,Mo=0;function Bl(e){var n=Mo;return Mo+=1,ms===null&&(ms=[]),Mm(ms,e,n)}function bo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Fl(e,n){throw n.$$typeof===g?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Tm(e){function n(K,k){if(e){var nt=K.deletions;nt===null?(K.deletions=[k],K.flags|=16):nt.push(k)}}function a(K,k){if(!e)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function o(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function u(K,k){return K=na(K,k),K.index=0,K.sibling=null,K}function f(K,k,nt){return K.index=nt,e?(nt=K.alternate,nt!==null?(nt=nt.index,nt<k?(K.flags|=67108866,k):nt):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function _(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,k,nt,gt){return k===null||k.tag!==6?(k=Wu(nt,K.mode,gt),k.return=K,k):(k=u(k,nt),k.return=K,k)}function G(K,k,nt,gt){var te=nt.type;return te===C?pt(K,k,nt.props.children,gt,nt.key):k!==null&&(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===b&&Tr(te)===k.type)?(k=u(k,nt.props),bo(k,nt),k.return=K,k):(k=Ul(nt.type,nt.key,nt.props,null,K.mode,gt),bo(k,nt),k.return=K,k)}function it(K,k,nt,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==nt.containerInfo||k.stateNode.implementation!==nt.implementation?(k=qu(nt,K.mode,gt),k.return=K,k):(k=u(k,nt.children||[]),k.return=K,k)}function pt(K,k,nt,gt,te){return k===null||k.tag!==7?(k=Sr(nt,K.mode,gt,te),k.return=K,k):(k=u(k,nt),k.return=K,k)}function St(K,k,nt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Wu(""+k,K.mode,nt),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return nt=Ul(k.type,k.key,k.props,null,K.mode,nt),bo(nt,k),nt.return=K,nt;case T:return k=qu(k,K.mode,nt),k.return=K,k;case b:return k=Tr(k),St(K,k,nt)}if(Z(k)||j(k))return k=Sr(k,K.mode,nt,null),k.return=K,k;if(typeof k.then=="function")return St(K,Bl(k),nt);if(k.$$typeof===L)return St(K,Ol(K,k),nt);Fl(K,k)}return null}function rt(K,k,nt,gt){var te=k!==null?k.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return te!==null?null:A(K,k,""+nt,gt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case M:return nt.key===te?G(K,k,nt,gt):null;case T:return nt.key===te?it(K,k,nt,gt):null;case b:return nt=Tr(nt),rt(K,k,nt,gt)}if(Z(nt)||j(nt))return te!==null?null:pt(K,k,nt,gt,null);if(typeof nt.then=="function")return rt(K,k,Bl(nt),gt);if(nt.$$typeof===L)return rt(K,k,Ol(K,nt),gt);Fl(K,nt)}return null}function ut(K,k,nt,gt,te){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return K=K.get(nt)||null,A(k,K,""+gt,te);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case M:return K=K.get(gt.key===null?nt:gt.key)||null,G(k,K,gt,te);case T:return K=K.get(gt.key===null?nt:gt.key)||null,it(k,K,gt,te);case b:return gt=Tr(gt),ut(K,k,nt,gt,te)}if(Z(gt)||j(gt))return K=K.get(nt)||null,pt(k,K,gt,te,null);if(typeof gt.then=="function")return ut(K,k,nt,Bl(gt),te);if(gt.$$typeof===L)return ut(K,k,nt,Ol(k,gt),te);Fl(k,gt)}return null}function Vt(K,k,nt,gt){for(var te=null,Ne=null,Zt=k,pe=k=0,Ee=null;Zt!==null&&pe<nt.length;pe++){Zt.index>pe?(Ee=Zt,Zt=null):Ee=Zt.sibling;var Le=rt(K,Zt,nt[pe],gt);if(Le===null){Zt===null&&(Zt=Ee);break}e&&Zt&&Le.alternate===null&&n(K,Zt),k=f(Le,k,pe),Ne===null?te=Le:Ne.sibling=Le,Ne=Le,Zt=Ee}if(pe===nt.length)return a(K,Zt),Te&&ia(K,pe),te;if(Zt===null){for(;pe<nt.length;pe++)Zt=St(K,nt[pe],gt),Zt!==null&&(k=f(Zt,k,pe),Ne===null?te=Zt:Ne.sibling=Zt,Ne=Zt);return Te&&ia(K,pe),te}for(Zt=o(Zt);pe<nt.length;pe++)Ee=ut(Zt,K,pe,nt[pe],gt),Ee!==null&&(e&&Ee.alternate!==null&&Zt.delete(Ee.key===null?pe:Ee.key),k=f(Ee,k,pe),Ne===null?te=Ee:Ne.sibling=Ee,Ne=Ee);return e&&Zt.forEach(function(tr){return n(K,tr)}),Te&&ia(K,pe),te}function ee(K,k,nt,gt){if(nt==null)throw Error(r(151));for(var te=null,Ne=null,Zt=k,pe=k=0,Ee=null,Le=nt.next();Zt!==null&&!Le.done;pe++,Le=nt.next()){Zt.index>pe?(Ee=Zt,Zt=null):Ee=Zt.sibling;var tr=rt(K,Zt,Le.value,gt);if(tr===null){Zt===null&&(Zt=Ee);break}e&&Zt&&tr.alternate===null&&n(K,Zt),k=f(tr,k,pe),Ne===null?te=tr:Ne.sibling=tr,Ne=tr,Zt=Ee}if(Le.done)return a(K,Zt),Te&&ia(K,pe),te;if(Zt===null){for(;!Le.done;pe++,Le=nt.next())Le=St(K,Le.value,gt),Le!==null&&(k=f(Le,k,pe),Ne===null?te=Le:Ne.sibling=Le,Ne=Le);return Te&&ia(K,pe),te}for(Zt=o(Zt);!Le.done;pe++,Le=nt.next())Le=ut(Zt,K,pe,Le.value,gt),Le!==null&&(e&&Le.alternate!==null&&Zt.delete(Le.key===null?pe:Le.key),k=f(Le,k,pe),Ne===null?te=Le:Ne.sibling=Le,Ne=Le);return e&&Zt.forEach(function(Oy){return n(K,Oy)}),Te&&ia(K,pe),te}function We(K,k,nt,gt){if(typeof nt=="object"&&nt!==null&&nt.type===C&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case M:t:{for(var te=nt.key;k!==null;){if(k.key===te){if(te=nt.type,te===C){if(k.tag===7){a(K,k.sibling),gt=u(k,nt.props.children),gt.return=K,K=gt;break t}}else if(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===b&&Tr(te)===k.type){a(K,k.sibling),gt=u(k,nt.props),bo(gt,nt),gt.return=K,K=gt;break t}a(K,k);break}else n(K,k);k=k.sibling}nt.type===C?(gt=Sr(nt.props.children,K.mode,gt,nt.key),gt.return=K,K=gt):(gt=Ul(nt.type,nt.key,nt.props,null,K.mode,gt),bo(gt,nt),gt.return=K,K=gt)}return _(K);case T:t:{for(te=nt.key;k!==null;){if(k.key===te)if(k.tag===4&&k.stateNode.containerInfo===nt.containerInfo&&k.stateNode.implementation===nt.implementation){a(K,k.sibling),gt=u(k,nt.children||[]),gt.return=K,K=gt;break t}else{a(K,k);break}else n(K,k);k=k.sibling}gt=qu(nt,K.mode,gt),gt.return=K,K=gt}return _(K);case b:return nt=Tr(nt),We(K,k,nt,gt)}if(Z(nt))return Vt(K,k,nt,gt);if(j(nt)){if(te=j(nt),typeof te!="function")throw Error(r(150));return nt=te.call(nt),ee(K,k,nt,gt)}if(typeof nt.then=="function")return We(K,k,Bl(nt),gt);if(nt.$$typeof===L)return We(K,k,Ol(K,nt),gt);Fl(K,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,k!==null&&k.tag===6?(a(K,k.sibling),gt=u(k,nt),gt.return=K,K=gt):(a(K,k),gt=Wu(nt,K.mode,gt),gt.return=K,K=gt),_(K)):a(K,k)}return function(K,k,nt,gt){try{Mo=0;var te=We(K,k,nt,gt);return ms=null,te}catch(Zt){if(Zt===ps||Zt===zl)throw Zt;var Ne=ni(29,Zt,null,K.mode);return Ne.lanes=gt,Ne.return=K,Ne}finally{}}}var Rr=Tm(!0),Am=Tm(!1),Ia=!1;function rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Dl(e),cm(e,null,a),n}return wl(e,o,n,a),Dl(e)}function Eo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kr(e,a)}}function of(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var lf=!1;function To(){if(lf){var e=hs;if(e!==null)throw e}}function Ao(e,n,a,o){lf=!1;var u=e.updateQueue;Ia=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,it=G.next;G.next=null,_===null?f=it:_.next=it,_=G;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==_&&(A===null?pt.firstBaseUpdate=it:A.next=it,pt.lastBaseUpdate=G))}if(f!==null){var St=u.baseState;_=0,pt=it=G=null,A=f;do{var rt=A.lane&-536870913,ut=rt!==A.lane;if(ut?(be&rt)===rt:(o&rt)===rt){rt!==0&&rt===ds&&(lf=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Vt=e,ee=A;rt=n;var We=a;switch(ee.tag){case 1:if(Vt=ee.payload,typeof Vt=="function"){St=Vt.call(We,St,rt);break t}St=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ee.payload,rt=typeof Vt=="function"?Vt.call(We,St,rt):Vt,rt==null)break t;St=y({},St,rt);break t;case 2:Ia=!0}}rt=A.callback,rt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[rt]:ut.push(rt))}else ut={lane:rt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?(it=pt=ut,G=St):pt=pt.next=ut,_|=rt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);pt===null&&(G=St),u.baseState=G,u.firstBaseUpdate=it,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),Xa|=_,e.lanes=_,e.memoizedState=St}}function Rm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Cm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Rm(a[e],n)}var gs=P(null),Hl=P(0);function wm(e,n){e=pa,vt(Hl,e),vt(gs,n),pa=e|n.baseLanes}function cf(){vt(Hl,pa),vt(gs,gs.current)}function uf(){pa=Hl.current,q(gs),q(Hl)}var ii=P(null),gi=null;function Ha(e){var n=e.alternate;vt(on,on.current&1),vt(ii,e),gi===null&&(n===null||gs.current!==null||n.memoizedState!==null)&&(gi=e)}function ff(e){vt(on,on.current),vt(ii,e),gi===null&&(gi=e)}function Dm(e){e.tag===22?(vt(on,on.current),vt(ii,e),gi===null&&(gi=e)):Ga()}function Ga(){vt(on,on.current),vt(ii,ii.current)}function ai(e){q(ii),gi===e&&(gi=null),q(on)}var on=P(0);function Gl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||_d(a)||vd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sa=0,fe=null,ke=null,hn=null,Vl=!1,_s=!1,Cr=!1,kl=0,Ro=0,vs=null,ES=0;function an(){throw Error(r(321))}function df(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function hf(e,n,a,o,u,f){return sa=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?hg:Cf,Cr=!1,f=a(o,u),Cr=!1,_s&&(f=Nm(n,a,o,u)),Um(e),f}function Um(e){U.H=Do;var n=ke!==null&&ke.next!==null;if(sa=0,hn=ke=fe=null,Vl=!1,Ro=0,vs=null,n)throw Error(r(300));e===null||pn||(e=e.dependencies,e!==null&&Ll(e)&&(pn=!0))}function Nm(e,n,a,o){fe=e;var u=0;do{if(_s&&(vs=null),Ro=0,_s=!1,25<=u)throw Error(r(301));if(u+=1,hn=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=pg,f=n(a,o)}while(_s);return f}function TS(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?Co(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(fe.flags|=1024),n}function pf(){var e=kl!==0;return kl=0,e}function mf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function gf(e){if(Vl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Vl=!1}sa=0,hn=ke=fe=null,_s=!1,Ro=kl=0,vs=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?fe.memoizedState=hn=e:hn=hn.next=e,hn}function ln(){if(ke===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=hn===null?fe.memoizedState:hn.next;if(n!==null)hn=n,ke=e;else{if(e===null)throw fe.alternate===null?Error(r(467)):Error(r(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},hn===null?fe.memoizedState=hn=e:hn=hn.next=e}return hn}function Xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Co(e){var n=Ro;return Ro+=1,vs===null&&(vs=[]),e=Mm(vs,e,n),n=fe,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?hg:Cf),e}function Wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Co(e);if(e.$$typeof===L)return Cn(e)}throw Error(r(438,String(e)))}function _f(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Xl(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ct;return n.index++,a}function oa(e,n){return typeof n=="function"?n(e):n}function ql(e){var n=ln();return vf(n,ke,e)}function vf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=_=null,G=null,it=n,pt=!1;do{var St=it.lane&-536870913;if(St!==it.lane?(be&St)===St:(sa&St)===St){var rt=it.revertLane;if(rt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),St===ds&&(pt=!0);else if((sa&rt)===rt){it=it.next,rt===ds&&(pt=!0);continue}else St={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(A=G=St,_=f):G=G.next=St,fe.lanes|=rt,Xa|=rt;St=it.action,Cr&&a(f,St),f=it.hasEagerState?it.eagerState:a(f,St)}else rt={lane:St,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(A=G=rt,_=f):G=G.next=rt,fe.lanes|=St,Xa|=St;it=it.next}while(it!==null&&it!==n);if(G===null?_=f:G.next=A,!ei(f,e.memoizedState)&&(pn=!0,pt&&(a=hs,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function xf(e){var n=ln(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);ei(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Lm(e,n,a){var o=fe,u=ln(),f=Te;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!ei((ke||u).memoizedState,a);if(_&&(u.memoizedState=a,pn=!0),u=u.queue,Mf(zm.bind(null,o,u,e),[e]),u.getSnapshot!==n||_||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,xs(9,{destroy:void 0},Pm.bind(null,o,u,a,n),null),je===null)throw Error(r(349));f||(sa&127)!==0||Om(o,n,a)}return a}function Om(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Xl(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Pm(e,n,a,o){n.value=a,n.getSnapshot=o,Im(n)&&Bm(e)}function zm(e,n,a){return a(function(){Im(n)&&Bm(e)})}function Im(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function Bm(e){var n=xr(e,2);n!==null&&Qn(n,e,2)}function Sf(e){var n=Vn();if(typeof e=="function"){var a=e;if(e=a(),Cr){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},n}function Fm(e,n,a,o){return e.baseState=a,vf(e,ke,typeof o=="function"?o:oa)}function AS(e,n,a,o,u){if(Zl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};U.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Hm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Hm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=U.T,_={};U.T=_;try{var A=a(u,o),G=U.S;G!==null&&G(_,A),Gm(e,n,A)}catch(it){yf(e,n,it)}finally{f!==null&&_.types!==null&&(f.types=_.types),U.T=f}}else try{f=a(u,o),Gm(e,n,f)}catch(it){yf(e,n,it)}}function Gm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Vm(e,n,o)},function(o){return yf(e,n,o)}):Vm(e,n,a)}function Vm(e,n,a){n.status="fulfilled",n.value=a,km(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Hm(e,a)))}function yf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,km(n),n=n.next;while(n!==o)}e.action=null}function km(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Xm(e,n){return n}function Wm(e,n){if(Te){var a=je.formState;if(a!==null){t:{var o=fe;if(Te){if(Ze){e:{for(var u=Ze,f=mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=_i(u.nextSibling),o=u.data==="F!";break t}}Pa(o)}o=!1}o&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xm,lastRenderedState:n},a.queue=o,a=ug.bind(null,fe,o),o.dispatch=a,o=Sf(!1),f=Rf.bind(null,fe,!1,o.queue),o=Vn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=AS.bind(null,fe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function qm(e){var n=ln();return Ym(n,ke,e)}function Ym(e,n,a){if(n=vf(e,n,Xm)[0],e=ql(oa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Co(n)}catch(_){throw _===ps?zl:_}else o=n;n=ln();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,xs(9,{destroy:void 0},RS.bind(null,u,a),null)),[o,f,e]}function RS(e,n){e.action=n}function jm(e){var n=ln(),a=ke;if(a!==null)return Ym(n,a,e);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function xs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Xl(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Zm(){return ln().memoizedState}function Yl(e,n,a,o){var u=Vn();fe.flags|=e,u.memoizedState=xs(1|n,{destroy:void 0},a,o===void 0?null:o)}function jl(e,n,a,o){var u=ln();o=o===void 0?null:o;var f=u.memoizedState.inst;ke!==null&&o!==null&&df(o,ke.memoizedState.deps)?u.memoizedState=xs(n,f,a,o):(fe.flags|=e,u.memoizedState=xs(1|n,f,a,o))}function Km(e,n){Yl(8390656,8,e,n)}function Mf(e,n){jl(2048,8,e,n)}function CS(e){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=Xl(),fe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Qm(e){var n=ln().memoizedState;return CS({ref:n,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Jm(e,n){return jl(4,2,e,n)}function $m(e,n){return jl(4,4,e,n)}function tg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function eg(e,n,a){a=a!=null?a.concat([e]):null,jl(4,4,tg.bind(null,n,e),a)}function bf(){}function ng(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&df(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function ig(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&df(n,o[1]))return o[0];if(o=e(),Cr){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,n],o}function Ef(e,n,a){return a===void 0||(sa&1073741824)!==0&&(be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=a0(),fe.lanes|=e,Xa|=e,a)}function ag(e,n,a,o){return ei(a,n)?a:gs.current!==null?(e=Ef(e,a,o),ei(e,n)||(pn=!0),e):(sa&42)===0||(sa&1073741824)!==0&&(be&261930)===0?(pn=!0,e.memoizedState=a):(e=a0(),fe.lanes|=e,Xa|=e,n)}function rg(e,n,a,o,u){var f=I.p;I.p=f!==0&&8>f?f:8;var _=U.T,A={};U.T=A,Rf(e,!1,n,a);try{var G=u(),it=U.S;if(it!==null&&it(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var pt=bS(G,o);wo(e,n,pt,oi(e))}else wo(e,n,o,oi(e))}catch(St){wo(e,n,{then:function(){},status:"rejected",reason:St},oi())}finally{I.p=f,_!==null&&A.types!==null&&(_.types=A.types),U.T=_}}function wS(){}function Tf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=sg(e).queue;rg(e,u,n,ot,a===null?wS:function(){return og(e),a(o)})}function sg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function og(e){var n=sg(e);n.next===null&&(n=e.alternate.memoizedState),wo(e,n.next.queue,{},oi())}function Af(){return Cn(qo)}function lg(){return ln().memoizedState}function cg(){return ln().memoizedState}function DS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();e=Ba(a);var o=Fa(n,e,a);o!==null&&(Qn(o,n,a),Eo(o,n,a)),n={cache:tf()},e.payload=n;return}n=n.return}}function US(e,n,a){var o=oi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Zl(e)?fg(n,a):(a=ku(e,n,a,o),a!==null&&(Qn(a,e,o),dg(a,n,o)))}function ug(e,n,a){var o=oi();wo(e,n,a,o)}function wo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zl(e))fg(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,A=f(_,a);if(u.hasEagerState=!0,u.eagerState=A,ei(A,_))return wl(e,n,u,0),je===null&&Cl(),!1}catch{}finally{}if(a=ku(e,n,u,o),a!==null)return Qn(a,e,o),dg(a,n,o),!0}return!1}function Rf(e,n,a,o){if(o={lane:2,revertLane:rd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Zl(e)){if(n)throw Error(r(479))}else n=ku(e,a,o,2),n!==null&&Qn(n,e,2)}function Zl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function fg(e,n){_s=Vl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function dg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kr(e,a)}}var Do={readContext:Cn,use:Wl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Do.useEffectEvent=an;var hg={readContext:Cn,use:Wl,useCallback:function(e,n){return Vn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:Km,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Yl(4194308,4,tg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Yl(4194308,4,e,n)},useInsertionEffect:function(e,n){Yl(4,2,e,n)},useMemo:function(e,n){var a=Vn();n=n===void 0?null:n;var o=e();if(Cr){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Vn();if(a!==void 0){var u=a(n);if(Cr){zt(!0);try{a(n)}finally{zt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=US.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=Vn();return e={current:e},n.memoizedState=e},useState:function(e){e=Sf(e);var n=e.queue,a=ug.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:bf,useDeferredValue:function(e,n){var a=Vn();return Ef(a,e,n)},useTransition:function(){var e=Sf(!1);return e=rg.bind(null,fe,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,u=Vn();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),je===null)throw Error(r(349));(be&127)!==0||Om(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Km(zm.bind(null,o,f,e),[e]),o.flags|=2048,xs(9,{destroy:void 0},Pm.bind(null,o,f,a,n),null),a},useId:function(){var e=Vn(),n=je.identifierPrefix;if(Te){var a=Fi,o=Bi;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=kl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ES++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Af,useFormState:Wm,useActionState:Wm,useOptimistic:function(e){var n=Vn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Rf.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:_f,useCacheRefresh:function(){return Vn().memoizedState=DS.bind(null,fe)},useEffectEvent:function(e){var n=Vn(),a={impl:e};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Cf={readContext:Cn,use:Wl,useCallback:ng,useContext:Cn,useEffect:Mf,useImperativeHandle:eg,useInsertionEffect:Jm,useLayoutEffect:$m,useMemo:ig,useReducer:ql,useRef:Zm,useState:function(){return ql(oa)},useDebugValue:bf,useDeferredValue:function(e,n){var a=ln();return ag(a,ke.memoizedState,e,n)},useTransition:function(){var e=ql(oa)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:Co(e),n]},useSyncExternalStore:Lm,useId:lg,useHostTransitionStatus:Af,useFormState:qm,useActionState:qm,useOptimistic:function(e,n){var a=ln();return Fm(a,ke,e,n)},useMemoCache:_f,useCacheRefresh:cg};Cf.useEffectEvent=Qm;var pg={readContext:Cn,use:Wl,useCallback:ng,useContext:Cn,useEffect:Mf,useImperativeHandle:eg,useInsertionEffect:Jm,useLayoutEffect:$m,useMemo:ig,useReducer:xf,useRef:Zm,useState:function(){return xf(oa)},useDebugValue:bf,useDeferredValue:function(e,n){var a=ln();return ke===null?Ef(a,e,n):ag(a,ke.memoizedState,e,n)},useTransition:function(){var e=xf(oa)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:Co(e),n]},useSyncExternalStore:Lm,useId:lg,useHostTransitionStatus:Af,useFormState:jm,useActionState:jm,useOptimistic:function(e,n){var a=ln();return ke!==null?Fm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:_f,useCacheRefresh:cg};pg.useEffectEvent=Qm;function wf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:y({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Df={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=oi(),u=Ba(o);u.payload=n,a!=null&&(u.callback=a),n=Fa(e,u,o),n!==null&&(Qn(n,e,o),Eo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=oi(),u=Ba(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Fa(e,u,o),n!==null&&(Qn(n,e,o),Eo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=oi(),o=Ba(a);o.tag=2,n!=null&&(o.callback=n),n=Fa(e,o,a),n!==null&&(Qn(n,e,a),Eo(n,e,a))}};function mg(e,n,a,o,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!go(a,o)||!go(u,f):!0}function gg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Df.enqueueReplaceState(n,n.state,null)}function wr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=y({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function _g(e){Rl(e)}function vg(e){console.error(e)}function xg(e){Rl(e)}function Kl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Sg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Uf(e,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Kl(e,n)},a}function yg(e){return e=Ba(e),e.tag=3,e}function Mg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Sg(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Sg(n,a,o),typeof u!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function NS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&fs(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?lc():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Il?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),nd(e,o,u)),!1;case 22:return a.flags|=65536,o===Il?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),nd(e,o,u)),!1}throw Error(r(435,a.tag))}return nd(e,o,u),lc(),!1}if(Te)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Zu&&(e=Error(r(422),{cause:o}),xo(di(e,a)))):(o!==Zu&&(n=Error(r(423),{cause:o}),xo(di(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=di(o,a),u=Uf(e.stateNode,o,u),of(e,u),rn!==4&&(rn=2)),!1;var f=Error(r(520),{cause:o});if(f=di(f,a),Bo===null?Bo=[f]:Bo.push(f),rn!==4&&(rn=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Uf(a.stateNode,o,e),of(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wa===null||!Wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=yg(u),Mg(u,e,a,o),of(a,u),!1}a=a.return}while(a!==null);return!1}var Nf=Error(r(461)),pn=!1;function wn(e,n,a,o){n.child=e===null?Am(n,null,a,o):Rr(n,e.child,a,o)}function bg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var A in o)A!=="ref"&&(_[A]=o[A])}else _=o;return br(n),o=hf(e,n,a,_,f,u),A=pf(),e!==null&&!pn?(mf(e,n,u),la(e,n,u)):(Te&&A&&Yu(n),n.flags|=1,wn(e,n,o,u),n.child)}function Eg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Tg(e,n,f,o,u)):(e=Ul(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Hf(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:go,a(_,o)&&e.ref===n.ref)return la(e,n,u)}return n.flags|=1,e=na(f,o),e.ref=n.ref,e.return=n,n.child=e}function Tg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(go(f,o)&&e.ref===n.ref)if(pn=!1,n.pendingProps=o=f,Hf(e,u))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,la(e,n,u)}return Lf(e,n,a,o,u)}function Ag(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Rg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pl(n,f!==null?f.cachePool:null),f!==null?wm(n,f):cf(),Dm(n);else return o=n.lanes=536870912,Rg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Pl(n,f.cachePool),wm(n,f),Ga(),n.memoizedState=null):(e!==null&&Pl(n,null),cf(),Ga());return wn(e,n,u,a),n.child}function Uo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Rg(e,n,a,o,u){var f=nf();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Pl(n,null),cf(),Dm(n),e!==null&&fs(e,n,o,!0),n.childLanes=u,null}function Ql(e,n){return n=$l({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Cg(e,n,a){return Rr(n,e.child,null,a),e=Ql(n,n.pendingProps),e.flags|=2,ai(n),n.memoizedState=null,e}function LS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=Ql(n,o),n.lanes=536870912,Uo(null,e);if(ff(n),(e=Ze)?(e=H0(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:La!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=fm(e),a.return=n,n.child=a,Rn=n,Ze=null)):e=null,e===null)throw Pa(n);return n.lanes=536870912,null}return Ql(n,o)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(ff(n),u)if(n.flags&256)n.flags&=-257,n=Cg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(pn||fs(e,n,a,!1),u=(a&e.childLanes)!==0,pn||u){if(o=je,o!==null&&(_=gl(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,xr(e,_),Qn(o,e,_),Nf;lc(),n=Cg(e,n,a)}else e=f.treeContext,Ze=_i(_.nextSibling),Rn=n,Te=!0,Oa=null,mi=!1,e!==null&&pm(n,e),n=Ql(n,o),n.flags|=4096;return n}return e=na(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Jl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Lf(e,n,a,o,u){return br(n),a=hf(e,n,a,o,void 0,u),o=pf(),e!==null&&!pn?(mf(e,n,u),la(e,n,u)):(Te&&o&&Yu(n),n.flags|=1,wn(e,n,a,u),n.child)}function wg(e,n,a,o,u,f){return br(n),n.updateQueue=null,a=Nm(n,o,a,u),Um(e),o=pf(),e!==null&&!pn?(mf(e,n,f),la(e,n,f)):(Te&&o&&Yu(n),n.flags|=1,wn(e,n,a,f),n.child)}function Dg(e,n,a,o,u){if(br(n),n.stateNode===null){var f=os,_=a.contextType;typeof _=="object"&&_!==null&&(f=Cn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Df,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},rf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Cn(_):os,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(wf(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Df.enqueueReplaceState(f,f.state,null),Ao(n,o,f,u),To(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,G=wr(a,A);f.props=G;var it=f.context,pt=a.contextType;_=os,typeof pt=="object"&&pt!==null&&(_=Cn(pt));var St=a.getDerivedStateFromProps;pt=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||it!==_)&&gg(n,f,o,_),Ia=!1;var rt=n.memoizedState;f.state=rt,Ao(n,o,f,u),To(),it=n.memoizedState,A||rt!==it||Ia?(typeof St=="function"&&(wf(n,a,St,o),it=n.memoizedState),(G=Ia||mg(n,a,G,o,rt,it,_))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=_,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,sf(e,n),_=n.memoizedProps,pt=wr(a,_),f.props=pt,St=n.pendingProps,rt=f.context,it=a.contextType,G=os,typeof it=="object"&&it!==null&&(G=Cn(it)),A=a.getDerivedStateFromProps,(it=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==St||rt!==G)&&gg(n,f,o,G),Ia=!1,rt=n.memoizedState,f.state=rt,Ao(n,o,f,u),To();var ut=n.memoizedState;_!==St||rt!==ut||Ia||e!==null&&e.dependencies!==null&&Ll(e.dependencies)?(typeof A=="function"&&(wf(n,a,A,o),ut=n.memoizedState),(pt=Ia||mg(n,a,pt,o,rt,ut,G)||e!==null&&e.dependencies!==null&&Ll(e.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ut,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ut,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=G,o=pt):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Jl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Rr(n,e.child,null,u),n.child=Rr(n,null,a,u)):wn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=la(e,n,u),e}function Ug(e,n,a,o){return yr(),n.flags|=256,wn(e,n,a,o),n.child}var Of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pf(e){return{baseLanes:e,cachePool:Sm()}}function zf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function Ng(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?Ha(n):Ga(),(e=Ze)?(e=H0(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:La!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=fm(e),a.return=n,n.child=a,Rn=n,Ze=null)):e=null,e===null)throw Pa(n);return vd(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ga(),u=n.mode,A=$l({mode:"hidden",children:A},u),o=Sr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Pf(a),o.childLanes=zf(e,_,a),n.memoizedState=Of,Uo(null,o)):(Ha(n),If(n,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(f)n.flags&256?(Ha(n),n.flags&=-257,n=Bf(e,n,a)):n.memoizedState!==null?(Ga(),n.child=e.child,n.flags|=128,n=null):(Ga(),A=o.fallback,u=n.mode,o=$l({mode:"visible",children:o.children},u),A=Sr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Rr(n,e.child,null,a),o=n.child,o.memoizedState=Pf(a),o.childLanes=zf(e,_,a),n.memoizedState=Of,n=Uo(null,o));else if(Ha(n),vd(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var it=_.dgst;_=it,o=Error(r(419)),o.stack="",o.digest=_,xo({value:o,source:null,stack:null}),n=Bf(e,n,a)}else if(pn||fs(e,n,a,!1),_=(a&e.childLanes)!==0,pn||_){if(_=je,_!==null&&(o=gl(_,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,xr(e,o),Qn(_,e,o),Nf;_d(A)||lc(),n=Bf(e,n,a)}else _d(A)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Ze=_i(A.nextSibling),Rn=n,Te=!0,Oa=null,mi=!1,e!==null&&pm(n,e),n=If(n,o.children),n.flags|=4096);return n}return u?(Ga(),A=o.fallback,u=n.mode,G=e.child,it=G.sibling,o=na(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,it!==null?A=na(it,A):(A=Sr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Uo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Pf(a):(u=A.cachePool,u!==null?(G=dn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Sm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=zf(e,_,a),n.memoizedState=Of,Uo(e.child,o)):(Ha(n),a=e.child,e=a.sibling,a=na(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function If(e,n){return n=$l({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function $l(e,n){return e=ni(22,e,null,n),e.lanes=0,e}function Bf(e,n,a){return Rr(n,e.child,null,a),e=If(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Lg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ju(e.return,n,a)}function Ff(e,n,a,o,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function Og(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=on.current,A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,vt(on,_),wn(e,n,o,a),o=Te?vo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lg(e,a,n);else if(e.tag===19)Lg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Gl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ff(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Gl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ff(n,!0,a,null,f,o);break;case"together":Ff(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function la(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(fs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=na(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=na(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Hf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ll(e)))}function OS(e,n,a){switch(n.tag){case 3:Mt(n,n.stateNode.containerInfo),za(n,dn,e.memoizedState.cache),yr();break;case 27:case 5:Qt(n);break;case 4:Mt(n,n.stateNode.containerInfo);break;case 10:za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ff(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ng(e,n,a):(Ha(n),e=la(e,n,a),e!==null?e.sibling:null);Ha(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(fs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Og(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),vt(on,on.current),o)break;return null;case 22:return n.lanes=0,Ag(e,n,a,n.pendingProps);case 24:za(n,dn,e.memoizedState.cache)}return la(e,n,a)}function Pg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!Hf(e,a)&&(n.flags&128)===0)return pn=!1,OS(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,Te&&(n.flags&1048576)!==0&&hm(n,vo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Tr(n.elementType),n.type=e,typeof e=="function")Xu(e)?(o=wr(e,o),n.tag=1,n=Dg(null,n,e,o,a)):(n.tag=0,n=Lf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===N){n.tag=11,n=bg(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=Eg(null,n,e,o,a);break t}}throw n=et(e)||e,Error(r(306,n,""))}}return n;case 0:return Lf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=wr(o,n.pendingProps),Dg(e,n,o,u,a);case 3:t:{if(Mt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,sf(e,n),Ao(n,o,null,a);var _=n.memoizedState;if(o=_.cache,za(n,dn,o),o!==f.cache&&$u(n,[dn],a,!0),To(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Ug(e,n,o,a);break t}else if(o!==u){u=di(Error(r(424)),n),xo(u),n=Ug(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=_i(e.firstChild),Rn=n,Te=!0,Oa=null,mi=!0,a=Am(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(yr(),o===u){n=la(e,n,a);break t}wn(e,n,o,a)}n=n.child}return n;case 26:return Jl(e,n),e===null?(a=q0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,o=mc($.current).createElement(a),o[cn]=n,o[_n]=e,Dn(o,a,e),X(o),n.stateNode=o):n.memoizedState=q0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qt(n),e===null&&Te&&(o=n.stateNode=k0(n.type,n.pendingProps,$.current),Rn=n,mi=!0,u=Ze,Za(n.type)?(xd=u,Ze=_i(o.firstChild)):Ze=u),wn(e,n,n.pendingProps.children,a),Jl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=o=Ze)&&(o=uy(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Rn=n,Ze=_i(o.firstChild),mi=!1,u=!0):u=!1),u||Pa(n)),Qt(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,o=f.children,pd(u,f)?o=null:_!==null&&pd(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=hf(e,n,TS,null,null,a),qo._currentValue=u),Jl(e,n),wn(e,n,o,a),n.child;case 6:return e===null&&Te&&((e=a=Ze)&&(a=fy(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Rn=n,Ze=null,e=!0):e=!1),e||Pa(n)),null;case 13:return Ng(e,n,a);case 4:return Mt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Rr(n,null,o,a):wn(e,n,o,a),n.child;case 11:return bg(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,za(n,n.type,o.value),wn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,br(n),u=Cn(u),o=o(u),n.flags|=1,wn(e,n,o,a),n.child;case 14:return Eg(e,n,n.type,n.pendingProps,a);case 15:return Tg(e,n,n.type,n.pendingProps,a);case 19:return Og(e,n,a);case 31:return LS(e,n,a);case 22:return Ag(e,n,a,n.pendingProps);case 24:return br(n),o=Cn(dn),e===null?(u=nf(),u===null&&(u=je,f=tf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},rf(n),za(n,dn,u)):((e.lanes&a)!==0&&(sf(e,n),Ao(n,null,null,a),To()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),za(n,dn,o)):(o=f.cache,za(n,dn,o),o!==u.cache&&$u(n,[dn],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ca(e){e.flags|=4}function Gf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(l0())e.flags|=8192;else throw Ar=Il,af}else e.flags&=-16777217}function zg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Q0(n))if(l0())e.flags|=8192;else throw Ar=Il,af}function tc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Fe():536870912,e.lanes|=n,bs|=n)}function No(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function PS(e,n,a){var o=n.pendingProps;switch(ju(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(dn),Ut(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(us(n)?ca(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ku())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ca(n),f!==null?(Ke(n),zg(n,f)):(Ke(n),Gf(n,u,null,o,a))):f?f!==e.memoizedState?(ca(n),Ke(n),zg(n,f)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ca(n),Ke(n),Gf(n,u,e,o,a)),null;case 27:if($t(n),a=$.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}e=At.current,us(n)?mm(n):(e=k0(u,o,a),n.stateNode=e,ca(n))}return Ke(n),null;case 5:if($t(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}if(f=At.current,us(n))mm(n);else{var _=mc($.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[cn]=n,f[_n]=o;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Dn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ca(n)}}return Ke(n),Gf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ca(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=$.current,us(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||N0(e.nodeValue,a)),e||Pa(n,!0)}else e=mc(e).createTextNode(o),e[cn]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=us(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[cn]=n}else yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=us(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),tc(n,n.updateQueue),Ke(n),null);case 4:return Ut(),e===null&&cd(n.stateNode.containerInfo),Ke(n),null;case 10:return ra(n.type),Ke(n),null;case 19:if(q(on),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)No(o,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Gl(e),f!==null){for(n.flags|=128,No(o,!1),e=f.updateQueue,n.updateQueue=e,tc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)um(a,e),a=a.sibling;return vt(on,on.current&1|2),Te&&ia(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>rc&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304)}else{if(!u)if(e=Gl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,tc(n,e),No(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Te)return Ke(n),null}else 2*E()-o.renderingStartTime>rc&&a!==536870912&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=on.current,vt(on,u?a&1|2:a&1),Te&&ia(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return ai(n),uf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&tc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&q(Er),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(dn),Ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function zS(e,n){switch(ju(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ra(dn),Ut(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(r(340));yr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ai(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));yr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(on),null;case 4:return Ut(),null;case 10:return ra(n.type),null;case 22:case 23:return ai(n),uf(),e!==null&&q(Er),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ra(dn),null;case 25:return null;default:return null}}function Ig(e,n){switch(ju(n),n.tag){case 3:ra(dn),Ut();break;case 26:case 27:case 5:$t(n);break;case 4:Ut();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:q(on);break;case 10:ra(n.type);break;case 22:case 23:ai(n),uf(),e!==null&&q(Er);break;case 24:ra(dn)}}function Lo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(A){Ge(n,n.return,A)}}function Va(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var _=o.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,u=n;var G=a,it=A;try{it()}catch(pt){Ge(u,G,pt)}}}o=o.next}while(o!==f)}}catch(pt){Ge(n,n.return,pt)}}function Bg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Cm(n,a)}catch(o){Ge(e,e.return,o)}}}function Fg(e,n,a){a.props=wr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function Oo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Hi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function Hg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Vf(e,n,a){try{var o=e.stateNode;ay(o,e.type,a,n),o[_n]=n}catch(u){Ge(e,e.return,u)}}function Gg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function kf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Gg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta));else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Xf(e,n,a),e=e.sibling;e!==null;)Xf(e,n,a),e=e.sibling}function ec(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ec(e,n,a),e=e.sibling;e!==null;)ec(e,n,a),e=e.sibling}function Vg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[cn]=e,n[_n]=a}catch(f){Ge(e,e.return,f)}}var ua=!1,mn=!1,Wf=!1,kg=typeof WeakSet=="function"?WeakSet:Set,En=null;function IS(e,n){if(e=e.containerInfo,dd=Mc,e=em(e),Iu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,A=-1,G=-1,it=0,pt=0,St=e,rt=null;e:for(;;){for(var ut;St!==a||u!==0&&St.nodeType!==3||(A=_+u),St!==f||o!==0&&St.nodeType!==3||(G=_+o),St.nodeType===3&&(_+=St.nodeValue.length),(ut=St.firstChild)!==null;)rt=St,St=ut;for(;;){if(St===e)break e;if(rt===a&&++it===u&&(A=_),rt===f&&++pt===o&&(G=_),(ut=St.nextSibling)!==null)break;St=rt,rt=St.parentNode}St=ut}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(hd={focusedElem:e,selectionRange:a},Mc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Vt=wr(a.type,u);e=o.getSnapshotBeforeUpdate(Vt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ge(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)gd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function Xg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:da(e,a),o&4&&Lo(5,a);break;case 1:if(da(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Ge(a,a.return,_)}else{var u=wr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Ge(a,a.return,_)}}o&64&&Bg(a),o&512&&Oo(a,a.return);break;case 3:if(da(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cm(e,n)}catch(_){Ge(a,a.return,_)}}break;case 27:n===null&&o&4&&Vg(a);case 26:case 5:da(e,a),n===null&&o&4&&Hg(a),o&512&&Oo(a,a.return);break;case 12:da(e,a);break;case 31:da(e,a),o&4&&Yg(e,a);break;case 13:da(e,a),o&4&&jg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=qS.bind(null,a),dy(e,a))));break;case 22:if(o=a.memoizedState!==null||ua,!o){n=n!==null&&n.memoizedState!==null||mn,u=ua;var f=mn;ua=o,(mn=n)&&!f?ha(e,a,(a.subtreeFlags&8772)!==0):da(e,a),ua=u,mn=f}break;case 30:break;default:da(e,a)}}function Wg(e){var n=e.alternate;n!==null&&(e.alternate=null,Wg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&oo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,Yn=!1;function fa(e,n,a){for(a=a.child;a!==null;)qg(e,n,a),a=a.sibling}function qg(e,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:mn||Hi(a,n),fa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||Hi(a,n);var o=tn,u=Yn;Za(a.type)&&(tn=a.stateNode,Yn=!1),fa(e,n,a),ko(a.stateNode),tn=o,Yn=u;break;case 5:mn||Hi(a,n);case 6:if(o=tn,u=Yn,tn=null,fa(e,n,a),tn=o,Yn=u,tn!==null)if(Yn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{tn.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:tn!==null&&(Yn?(e=tn,B0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Us(e)):B0(tn,a.stateNode));break;case 4:o=tn,u=Yn,tn=a.stateNode.containerInfo,Yn=!0,fa(e,n,a),tn=o,Yn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),mn||Va(4,a,n),fa(e,n,a);break;case 1:mn||(Hi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Fg(a,n,o)),fa(e,n,a);break;case 21:fa(e,n,a);break;case 22:mn=(o=mn)||a.memoizedState!==null,fa(e,n,a),mn=o;break;default:fa(e,n,a)}}function Yg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Us(e)}catch(a){Ge(n,n.return,a)}}}function jg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Us(e)}catch(a){Ge(n,n.return,a)}}function BS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new kg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new kg),n;default:throw Error(r(435,e.tag))}}function nc(e,n){var a=BS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=YS.bind(null,e,o);o.then(u,u)}})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,_=n,A=_;t:for(;A!==null;){switch(A.tag){case 27:if(Za(A.type)){tn=A.stateNode,Yn=!1;break t}break;case 5:tn=A.stateNode,Yn=!1;break t;case 3:case 4:tn=A.stateNode.containerInfo,Yn=!0;break t}A=A.return}if(tn===null)throw Error(r(160));qg(f,_,u),tn=null,Yn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Zg(n,e),n=n.sibling}var Ci=null;function Zg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Zn(e),o&4&&(Va(3,e,e.return),Lo(3,e),Va(5,e,e.return));break;case 1:jn(n,e),Zn(e),o&512&&(mn||a===null||Hi(a,a.return)),o&64&&ua&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ci;if(jn(n,e),Zn(e),o&512&&(mn||a===null||Hi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[pr]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,o,a),f[cn]=e,X(f),o=f;break t;case"link":var _=Z0("link","href",u).get(o+(a.href||""));if(_){for(var A=0;A<_.length;A++)if(f=_[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(A,1);break e}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=Z0("meta","content",u).get(o+(a.content||""))){for(A=0;A<_.length;A++)if(f=_[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(A,1);break e}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[cn]=e,X(f),o=f}e.stateNode=o}else K0(u,e.type,e.stateNode);else e.stateNode=j0(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?K0(u,e.type,e.stateNode):j0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Vf(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),Zn(e),o&512&&(mn||a===null||Hi(a,a.return)),a!==null&&o&4&&Vf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),Zn(e),o&512&&(mn||a===null||Hi(a,a.return)),e.flags&32){u=e.stateNode;try{Gn(u,"")}catch(Vt){Ge(e,e.return,Vt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Vf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Wf=!0);break;case 6:if(jn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Vt){Ge(e,e.return,Vt)}}break;case 3:if(vc=null,u=Ci,Ci=gc(n.containerInfo),jn(n,e),Ci=u,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Us(n.containerInfo)}catch(Vt){Ge(e,e.return,Vt)}Wf&&(Wf=!1,Kg(e));break;case 4:o=Ci,Ci=gc(e.stateNode.containerInfo),jn(n,e),Zn(e),Ci=o;break;case 12:jn(n,e),Zn(e);break;case 31:jn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 13:jn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ac=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,it=ua,pt=mn;if(ua=it||u,mn=pt||G,jn(n,e),mn=pt,ua=it,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ua||mn||Dr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=G.stateNode;var St=G.memoizedProps.style,rt=St!=null&&St.hasOwnProperty("display")?St.display:null;A.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Vt){Ge(G,G.return,Vt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Vt){Ge(G,G.return,Vt)}}}else if(n.tag===18){if(a===null){G=n;try{var ut=G.stateNode;u?F0(ut,!0):F0(G.stateNode,!1)}catch(Vt){Ge(G,G.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,nc(e,a))));break;case 19:jn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 30:break;case 21:break;default:jn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Gg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=kf(e);ec(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Gn(_,""),a.flags&=-33);var A=kf(e);ec(e,A,_);break;case 3:case 4:var G=a.stateNode.containerInfo,it=kf(e);Xf(e,it,G);break;default:throw Error(r(161))}}catch(pt){Ge(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Kg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Kg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function da(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Xg(e,n.alternate,n),n=n.sibling}function Dr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Dr(n);break;case 1:Hi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Fg(n,n.return,a),Dr(n);break;case 27:ko(n.stateNode);case 26:case 5:Hi(n,n.return),Dr(n);break;case 22:n.memoizedState===null&&Dr(n);break;case 30:Dr(n);break;default:Dr(n)}e=e.sibling}}function ha(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ha(u,f,a),Lo(4,f);break;case 1:if(ha(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){Ge(o,o.return,it)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Rm(G[u],A)}catch(it){Ge(o,o.return,it)}}a&&_&64&&Bg(f),Oo(f,f.return);break;case 27:Vg(f);case 26:case 5:ha(u,f,a),a&&o===null&&_&4&&Hg(f),Oo(f,f.return);break;case 12:ha(u,f,a);break;case 31:ha(u,f,a),a&&_&4&&Yg(u,f);break;case 13:ha(u,f,a),a&&_&4&&jg(u,f);break;case 22:f.memoizedState===null&&ha(u,f,a),Oo(f,f.return);break;case 30:break;default:ha(u,f,a)}n=n.sibling}}function qf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&So(a))}function Yf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&So(e))}function wi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Qg(e,n,a,o),n=n.sibling}function Qg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,o),u&2048&&Lo(9,n);break;case 1:wi(e,n,a,o);break;case 3:wi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&So(e)));break;case 12:if(u&2048){wi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,A=f.onPostCommit;typeof A=="function"&&A(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Ge(n,n.return,G)}}else wi(e,n,a,o);break;case 31:wi(e,n,a,o);break;case 13:wi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?wi(e,n,a,o):Po(e,n):f._visibility&2?wi(e,n,a,o):(f._visibility|=2,Ss(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&qf(_,n);break;case 24:wi(e,n,a,o),u&2048&&Yf(n.alternate,n);break;default:wi(e,n,a,o)}}function Ss(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,A=a,G=o,it=_.flags;switch(_.tag){case 0:case 11:case 15:Ss(f,_,A,G,u),Lo(8,_);break;case 23:break;case 22:var pt=_.stateNode;_.memoizedState!==null?pt._visibility&2?Ss(f,_,A,G,u):Po(f,_):(pt._visibility|=2,Ss(f,_,A,G,u)),u&&it&2048&&qf(_.alternate,_);break;case 24:Ss(f,_,A,G,u),u&&it&2048&&Yf(_.alternate,_);break;default:Ss(f,_,A,G,u)}n=n.sibling}}function Po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Po(a,o),u&2048&&qf(o.alternate,o);break;case 24:Po(a,o),u&2048&&Yf(o.alternate,o);break;default:Po(a,o)}n=n.sibling}}var zo=8192;function ys(e,n,a){if(e.subtreeFlags&zo)for(e=e.child;e!==null;)Jg(e,n,a),e=e.sibling}function Jg(e,n,a){switch(e.tag){case 26:ys(e,n,a),e.flags&zo&&e.memoizedState!==null&&Ey(a,Ci,e.memoizedState,e.memoizedProps);break;case 5:ys(e,n,a);break;case 3:case 4:var o=Ci;Ci=gc(e.stateNode.containerInfo),ys(e,n,a),Ci=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=zo,zo=16777216,ys(e,n,a),zo=o):ys(e,n,a));break;default:ys(e,n,a)}}function $g(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Io(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,e0(o,e)}$g(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)t0(e),e=e.sibling}function t0(e){switch(e.tag){case 0:case 11:case 15:Io(e),e.flags&2048&&Va(9,e,e.return);break;case 3:Io(e);break;case 12:Io(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ic(e)):Io(e);break;default:Io(e)}}function ic(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,e0(o,e)}$g(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Va(8,n,n.return),ic(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ic(n));break;default:ic(n)}e=e.sibling}}function e0(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:So(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var u=o.sibling,f=o.return;if(Wg(o),o===a){En=null;break t}if(u!==null){u.return=f,En=u;break t}En=f}}}var FS={getCacheForType:function(e){var n=Cn(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(dn).controller.signal}},HS=typeof WeakMap=="function"?WeakMap:Map,Pe=0,je=null,Se=null,be=0,He=0,ri=null,ka=!1,Ms=!1,jf=!1,pa=0,rn=0,Xa=0,Ur=0,Zf=0,si=0,bs=0,Bo=null,Kn=null,Kf=!1,ac=0,n0=0,rc=1/0,sc=null,Wa=null,xn=0,qa=null,Es=null,ma=0,Qf=0,Jf=null,i0=null,Fo=0,$f=null;function oi(){return(Pe&2)!==0&&be!==0?be&-be:U.T!==null?rd():Ii()}function a0(){if(si===0)if((be&536870912)===0||Te){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),si=e}else si=536870912;return e=ii.current,e!==null&&(e.flags|=32),si}function Qn(e,n,a){(e===je&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(Ts(e,0),Ya(e,be,si,!1)),Bn(e,a),((Pe&2)===0||e!==je)&&(e===je&&((Pe&2)===0&&(Ur|=a),rn===4&&Ya(e,be,si,!1)),Gi(e))}function r0(e,n,a){if((Pe&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ht(e,n),u=o?kS(e,n):ed(e,n,!0),f=o;do{if(u===0){Ms&&!o&&Ya(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!GS(a)){u=ed(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=e;u=Bo;var G=A.current.memoizedState.isDehydrated;if(G&&(Ts(A,_).flags|=256),_=ed(A,_,!1),_!==2){if(jf&&!G){A.errorRecoveryDisabledLanes|=f,Ur|=f,u=4;break t}f=Kn,Kn=u,f!==null&&(Kn===null?Kn=f:Kn.push.apply(Kn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Ts(e,0),Ya(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ya(o,n,si,!ka);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=ac+300-E(),10<u)){if(Ya(o,n,si,!ka),ft(o,0,!0)!==0)break t;ma=n,o.timeoutHandle=z0(s0.bind(null,o,a,Kn,sc,Kf,n,si,Ur,bs,ka,f,"Throttled",-0,0),u);break t}s0(o,a,Kn,sc,Kf,n,si,Ur,bs,ka,f,null,-0,0)}}break}while(!0);Gi(e)}function s0(e,n,a,o,u,f,_,A,G,it,pt,St,rt,ut){if(e.timeoutHandle=-1,St=n.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},Jg(n,f,St);var Vt=(f&62914560)===f?ac-E():(f&4194048)===f?n0-E():0;if(Vt=Ty(St,Vt),Vt!==null){ma=f,e.cancelPendingCommit=Vt(p0.bind(null,e,n,f,a,o,u,_,A,G,pt,St,null,rt,ut)),Ya(e,f,_,!it);return}}p0(e,n,f,a,o,u,_,A,G)}function GS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ei(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(e,n,a,o){n&=~Zf,n&=~Ur,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&so(e,a,n)}function oc(){return(Pe&6)===0?(Ho(0),!1):!0}function td(){if(Se!==null){if(He===0)var e=Se.return;else e=Se,aa=Mr=null,gf(e),ms=null,Mo=0,e=Se;for(;e!==null;)Ig(e.alternate,e),e=e.return;Se=null}}function Ts(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,oy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ma=0,td(),je=e,Se=a=na(e.current,null),be=n,He=0,ri=null,ka=!1,Ms=Ht(e,n),jf=!1,bs=si=Zf=Ur=Xa=rn=0,Kn=Bo=null,Kf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),f=1<<u;n|=e[u],o&=~f}return pa=n,Cl(),a}function o0(e,n){fe=null,U.H=Do,n===ps||n===zl?(n=bm(),He=3):n===af?(n=bm(),He=4):He=n===Nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,Se===null&&(rn=1,Kl(e,di(n,e.current)))}function l0(){var e=ii.current;return e===null?!0:(be&4194048)===be?gi===null:(be&62914560)===be||(be&536870912)!==0?e===gi:!1}function c0(){var e=U.H;return U.H=Do,e===null?Do:e}function u0(){var e=U.A;return U.A=FS,e}function lc(){rn=4,ka||(be&4194048)!==be&&ii.current!==null||(Ms=!0),(Xa&134217727)===0&&(Ur&134217727)===0||je===null||Ya(je,be,si,!1)}function ed(e,n,a){var o=Pe;Pe|=2;var u=c0(),f=u0();(je!==e||be!==n)&&(sc=null,Ts(e,n)),n=!1;var _=rn;t:do try{if(He!==0&&Se!==null){var A=Se,G=ri;switch(He){case 8:td(),_=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var it=He;if(He=0,ri=null,As(e,A,G,it),a&&Ms){_=0;break t}break;default:it=He,He=0,ri=null,As(e,A,G,it)}}VS(),_=rn;break}catch(pt){o0(e,pt)}while(!0);return n&&e.shellSuspendCounter++,aa=Mr=null,Pe=o,U.H=u,U.A=f,Se===null&&(je=null,be=0,Cl()),_}function VS(){for(;Se!==null;)f0(Se)}function kS(e,n){var a=Pe;Pe|=2;var o=c0(),u=u0();je!==e||be!==n?(sc=null,rc=E()+500,Ts(e,n)):Ms=Ht(e,n);t:do try{if(He!==0&&Se!==null){n=Se;var f=ri;e:switch(He){case 1:He=0,ri=null,As(e,n,f,1);break;case 2:case 9:if(ym(f)){He=0,ri=null,d0(n);break}n=function(){He!==2&&He!==9||je!==e||(He=7),Gi(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:ym(f)?(He=0,ri=null,d0(n)):(He=0,ri=null,As(e,n,f,7));break;case 5:var _=null;switch(Se.tag){case 26:_=Se.memoizedState;case 5:case 27:var A=Se;if(_?Q0(_):A.stateNode.complete){He=0,ri=null;var G=A.sibling;if(G!==null)Se=G;else{var it=A.return;it!==null?(Se=it,cc(it)):Se=null}break e}}He=0,ri=null,As(e,n,f,5);break;case 6:He=0,ri=null,As(e,n,f,6);break;case 8:td(),rn=6;break t;default:throw Error(r(462))}}XS();break}catch(pt){o0(e,pt)}while(!0);return aa=Mr=null,U.H=o,U.A=u,Pe=a,Se!==null?0:(je=null,be=0,Cl(),rn)}function XS(){for(;Se!==null&&!jt();)f0(Se)}function f0(e){var n=Pg(e.alternate,e,pa);e.memoizedProps=e.pendingProps,n===null?cc(e):Se=n}function d0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=wg(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=wg(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:gf(n);default:Ig(a,n),n=Se=um(n,pa),n=Pg(a,n,pa)}e.memoizedProps=e.pendingProps,n===null?cc(e):Se=n}function As(e,n,a,o){aa=Mr=null,gf(n),ms=null,Mo=0;var u=n.return;try{if(NS(e,u,n,a,be)){rn=1,Kl(e,di(a,e.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;rn=1,Kl(e,di(a,e.current)),Se=null;return}n.flags&32768?(Te||o===1?e=!0:Ms||(be&536870912)!==0?e=!1:(ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),h0(n,e)):cc(n)}function cc(e){var n=e;do{if((n.flags&32768)!==0){h0(n,ka);return}e=n.return;var a=PS(n.alternate,n,pa);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);rn===0&&(rn=5)}function h0(e,n){do{var a=zS(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);rn=6,Se=null}function p0(e,n,a,o,u,f,_,A,G){e.cancelPendingCommit=null;do uc();while(xn!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Vu,bi(e,a,f,_,A,G),e===je&&(Se=je=null,be=0),Es=n,qa=e,ma=a,Qf=f,Jf=u,i0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jS(ht,function(){return x0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=I.p,I.p=2,_=Pe,Pe|=4;try{IS(e,n,a)}finally{Pe=_,I.p=u,U.T=o}}xn=1,m0(),g0(),_0()}}function m0(){if(xn===1){xn=0;var e=qa,n=Es,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=I.p;I.p=2;var u=Pe;Pe|=4;try{Zg(n,e);var f=hd,_=em(e.containerInfo),A=f.focusedElem,G=f.selectionRange;if(_!==A&&A&&A.ownerDocument&&tm(A.ownerDocument.documentElement,A)){if(G!==null&&Iu(A)){var it=G.start,pt=G.end;if(pt===void 0&&(pt=it),"selectionStart"in A)A.selectionStart=it,A.selectionEnd=Math.min(pt,A.value.length);else{var St=A.ownerDocument||document,rt=St&&St.defaultView||window;if(rt.getSelection){var ut=rt.getSelection(),Vt=A.textContent.length,ee=Math.min(G.start,Vt),We=G.end===void 0?ee:Math.min(G.end,Vt);!ut.extend&&ee>We&&(_=We,We=ee,ee=_);var K=$p(A,ee),k=$p(A,We);if(K&&k&&(ut.rangeCount!==1||ut.anchorNode!==K.node||ut.anchorOffset!==K.offset||ut.focusNode!==k.node||ut.focusOffset!==k.offset)){var nt=St.createRange();nt.setStart(K.node,K.offset),ut.removeAllRanges(),ee>We?(ut.addRange(nt),ut.extend(k.node,k.offset)):(nt.setEnd(k.node,k.offset),ut.addRange(nt))}}}}for(St=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&St.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var gt=St[A];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Mc=!!dd,hd=dd=null}finally{Pe=u,I.p=o,U.T=a}}e.current=n,xn=2}}function g0(){if(xn===2){xn=0;var e=qa,n=Es,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=I.p;I.p=2;var u=Pe;Pe|=4;try{Xg(e,n.alternate,n)}finally{Pe=u,I.p=o,U.T=a}}xn=3}}function _0(){if(xn===4||xn===3){xn=0,O();var e=qa,n=Es,a=ma,o=i0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Es=qa=null,v0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Wa=null),Jr(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,u=I.p,I.p=2,U.T=null;try{for(var f=e.onRecoverableError,_=0;_<o.length;_++){var A=o[_];f(A.value,{componentStack:A.stack})}}finally{U.T=n,I.p=u}}(ma&3)!==0&&uc(),Gi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===$f?Fo++:(Fo=0,$f=e):Fo=0,Ho(0)}}function v0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,So(n)))}function uc(){return m0(),g0(),_0(),x0()}function x0(){if(xn!==5)return!1;var e=qa,n=Qf;Qf=0;var a=Jr(ma),o=U.T,u=I.p;try{I.p=32>a?32:a,U.T=null,a=Jf,Jf=null;var f=qa,_=ma;if(xn=0,Es=qa=null,ma=0,(Pe&6)!==0)throw Error(r(331));var A=Pe;if(Pe|=4,t0(f.current),Qg(f,f.current,_,a),Pe=A,Ho(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Tt,f)}catch{}return!0}finally{I.p=u,U.T=o,v0(e,n)}}function S0(e,n,a){n=di(a,n),n=Uf(e.stateNode,n,2),e=Fa(e,n,2),e!==null&&(Bn(e,2),Gi(e))}function Ge(e,n,a){if(e.tag===3)S0(e,e,a);else for(;n!==null;){if(n.tag===3){S0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wa===null||!Wa.has(o))){e=di(a,e),a=yg(2),o=Fa(n,a,2),o!==null&&(Mg(a,o,n,e),Bn(o,2),Gi(o));break}}n=n.return}}function nd(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new HS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(jf=!0,u.add(a),e=WS.bind(null,e,n,a),n.then(e,e))}function WS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(be&a)===a&&(rn===4||rn===3&&(be&62914560)===be&&300>E()-ac?(Pe&2)===0&&Ts(e,0):Zf|=a,bs===be&&(bs=0)),Gi(e)}function y0(e,n){n===0&&(n=Fe()),e=xr(e,n),e!==null&&(Bn(e,n),Gi(e))}function qS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),y0(e,a)}function YS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),y0(e,a)}function jS(e,n){return Re(e,n)}var fc=null,Rs=null,id=!1,dc=!1,ad=!1,ja=0;function Gi(e){e!==Rs&&e.next===null&&(Rs===null?fc=Rs=e:Rs=Rs.next=e),dc=!0,id||(id=!0,KS())}function Ho(e,n){if(!ad&&dc){ad=!0;do for(var a=!1,o=fc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=u&~(_&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,T0(o,f))}else f=be,f=ft(o,o===je?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ht(o,f)||(a=!0,T0(o,f));o=o.next}while(a);ad=!1}}function ZS(){M0()}function M0(){dc=id=!1;var e=0;ja!==0&&sy()&&(e=ja);for(var n=E(),a=null,o=fc;o!==null;){var u=o.next,f=b0(o,n);f===0?(o.next=null,a===null?fc=u:a.next=u,u===null&&(Rs=a)):(a=o,(e!==0||(f&3)!==0)&&(dc=!0)),o=u}xn!==0&&xn!==5||Ho(e),ja!==0&&(ja=0)}function b0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Pt(f),A=1<<_,G=u[_];G===-1?((A&a)===0||(A&o)!==0)&&(u[_]=ae(A,n)):G<=n&&(e.expiredLanes|=A),f&=~A}if(n=je,a=be,a=ft(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ze(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ht(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ze(o),Jr(a)){case 2:case 8:a=yt;break;case 32:a=ht;break;case 268435456:a=Dt;break;default:a=ht}return o=E0.bind(null,e),a=Re(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ze(o),e.callbackPriority=2,e.callbackNode=null,2}function E0(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(uc()&&e.callbackNode!==a)return null;var o=be;return o=ft(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(r0(e,o,n),b0(e,E()),e.callbackNode!=null&&e.callbackNode===a?E0.bind(null,e):null)}function T0(e,n){if(uc())return null;r0(e,n,!0)}function KS(){ly(function(){(Pe&6)!==0?Re(mt,ZS):M0()})}function rd(){if(ja===0){var e=ds;e===0&&(e=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),ja=e}return ja}function A0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Sl(""+e)}function R0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function QS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=A0((u[_n]||null).action),_=o.submitter;_&&(n=(n=_[_n]||null)?A0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var A=new El("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ja!==0){var G=_?R0(u,_):new FormData(u);Tf(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(A.preventDefault(),G=_?R0(u,_):new FormData(u),Tf(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var sd=0;sd<Gu.length;sd++){var od=Gu[sd],JS=od.toLowerCase(),$S=od[0].toUpperCase()+od.slice(1);Ri(JS,"on"+$S)}Ri(am,"onAnimationEnd"),Ri(rm,"onAnimationIteration"),Ri(sm,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(mS,"onTransitionRun"),Ri(gS,"onTransitionStart"),Ri(_S,"onTransitionCancel"),Ri(om,"onTransitionEnd"),Nt("onMouseEnter",["mouseout","mouseover"]),Nt("onMouseLeave",["mouseout","mouseover"]),Nt("onPointerEnter",["pointerout","pointerover"]),Nt("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ty=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function C0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var A=o[_],G=A.instance,it=A.currentTarget;if(A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=it;try{f(u)}catch(pt){Rl(pt)}u.currentTarget=null,f=G}else for(_=0;_<o.length;_++){if(A=o[_],G=A.instance,it=A.currentTarget,A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=it;try{f(u)}catch(pt){Rl(pt)}u.currentTarget=null,f=G}}}}function ye(e,n){var a=n[wa];a===void 0&&(a=n[wa]=new Set);var o=e+"__bubble";a.has(o)||(w0(n,e,2,!1),a.add(o))}function ld(e,n,a){var o=0;n&&(o|=4),w0(a,e,o,n)}var hc="_reactListening"+Math.random().toString(36).slice(2);function cd(e){if(!e[hc]){e[hc]=!0,lt.forEach(function(a){a!=="selectionchange"&&(ty.has(a)||ld(a,!1,e),ld(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[hc]||(n[hc]=!0,ld("selectionchange",!1,n))}}function w0(e,n,a,o){switch(a_(n)){case 2:var u=Cy;break;case 8:u=wy;break;default:u=Ed}a=u.bind(null,n,a,e),u=void 0,!Cu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ud(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var A=o.stateNode.containerInfo;if(A===u)break;if(_===4)for(_=o.return;_!==null;){var G=_.tag;if((G===3||G===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;A!==null;){if(_=Da(A),_===null)return;if(G=_.tag,G===5||G===6||G===26||G===27){o=f=_;continue t}A=A.parentNode}}o=o.return}Op(function(){var it=f,pt=Au(a),St=[];t:{var rt=lm.get(e);if(rt!==void 0){var ut=El,Vt=e;switch(e){case"keypress":if(Ml(a)===0)break t;case"keydown":case"keyup":ut=Yx;break;case"focusin":Vt="focus",ut=Nu;break;case"focusout":Vt="blur",ut=Nu;break;case"beforeblur":case"afterblur":ut=Nu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Kx;break;case am:case rm:case sm:ut=Bx;break;case om:ut=Jx;break;case"scroll":case"scrollend":ut=Lx;break;case"wheel":ut=tS;break;case"copy":case"cut":case"paste":ut=Hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Fp;break;case"toggle":case"beforetoggle":ut=nS}var ee=(n&4)!==0,We=!ee&&(e==="scroll"||e==="scrollend"),K=ee?rt!==null?rt+"Capture":null:rt;ee=[];for(var k=it,nt;k!==null;){var gt=k;if(nt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||nt===null||K===null||(gt=lo(k,K),gt!=null&&ee.push(Vo(k,gt,nt))),We)break;k=k.return}0<ee.length&&(rt=new ut(rt,Vt,null,a,pt),St.push({event:rt,listeners:ee}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",rt&&a!==Tu&&(Vt=a.relatedTarget||a.fromElement)&&(Da(Vt)||Vt[Ji]))break t;if((ut||rt)&&(rt=pt.window===pt?pt:(rt=pt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ut?(Vt=a.relatedTarget||a.toElement,ut=it,Vt=Vt?Da(Vt):null,Vt!==null&&(We=c(Vt),ee=Vt.tag,Vt!==We||ee!==5&&ee!==27&&ee!==6)&&(Vt=null)):(ut=null,Vt=it),ut!==Vt)){if(ee=Ip,gt="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Fp,gt="onPointerLeave",K="onPointerEnter",k="pointer"),We=ut==null?rt:mr(ut),nt=Vt==null?rt:mr(Vt),rt=new ee(gt,k+"leave",ut,a,pt),rt.target=We,rt.relatedTarget=nt,gt=null,Da(pt)===it&&(ee=new ee(K,k+"enter",Vt,a,pt),ee.target=nt,ee.relatedTarget=We,gt=ee),We=gt,ut&&Vt)e:{for(ee=ey,K=ut,k=Vt,nt=0,gt=K;gt;gt=ee(gt))nt++;gt=0;for(var te=k;te;te=ee(te))gt++;for(;0<nt-gt;)K=ee(K),nt--;for(;0<gt-nt;)k=ee(k),gt--;for(;nt--;){if(K===k||k!==null&&K===k.alternate){ee=K;break e}K=ee(K),k=ee(k)}ee=null}else ee=null;ut!==null&&D0(St,rt,ut,ee,!1),Vt!==null&&We!==null&&D0(St,We,Vt,ee,!0)}}t:{if(rt=it?mr(it):window,ut=rt.nodeName&&rt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&rt.type==="file")var Ne=Yp;else if(Wp(rt))if(jp)Ne=dS;else{Ne=uS;var Zt=cS}else ut=rt.nodeName,!ut||ut.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?it&&ts(it.elementType)&&(Ne=Yp):Ne=fS;if(Ne&&(Ne=Ne(e,it))){qp(St,Ne,a,pt);break t}Zt&&Zt(e,rt,it),e==="focusout"&&it&&rt.type==="number"&&it.memoizedProps.value!=null&&Ti(rt,"number",rt.value)}switch(Zt=it?mr(it):window,e){case"focusin":(Wp(Zt)||Zt.contentEditable==="true")&&(as=Zt,Bu=it,_o=null);break;case"focusout":_o=Bu=as=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,nm(St,a,pt);break;case"selectionchange":if(pS)break;case"keydown":case"keyup":nm(St,a,pt)}var pe;if(Ou)t:{switch(e){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else is?kp(e,a)&&(Ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Hp&&a.locale!=="ko"&&(is||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&is&&(pe=Pp()):(Na=pt,wu="value"in Na?Na.value:Na.textContent,is=!0)),Zt=pc(it,Ee),0<Zt.length&&(Ee=new Bp(Ee,e,null,a,pt),St.push({event:Ee,listeners:Zt}),pe?Ee.data=pe:(pe=Xp(a),pe!==null&&(Ee.data=pe)))),(pe=aS?rS(e,a):sS(e,a))&&(Ee=pc(it,"onBeforeInput"),0<Ee.length&&(Zt=new Bp("onBeforeInput","beforeinput",null,a,pt),St.push({event:Zt,listeners:Ee}),Zt.data=pe)),QS(St,e,it,a,pt)}C0(St,n)})}function Vo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function pc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=lo(e,a),u!=null&&o.unshift(Vo(e,u,f)),u=lo(e,n),u!=null&&o.push(Vo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function ey(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function D0(e,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var A=a,G=A.alternate,it=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||it===null||(G=it,u?(it=lo(a,f),it!=null&&_.unshift(Vo(a,it,G))):u||(it=lo(a,f),it!=null&&_.push(Vo(a,it,G)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var ny=/\r\n?/g,iy=/\u0000|\uFFFD/g;function U0(e){return(typeof e=="string"?e:""+e).replace(ny,`
`).replace(iy,"")}function N0(e,n){return n=U0(n),U0(e)===n}function Xe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Gn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Gn(e,""+o);break;case"className":oe(e,"class",o);break;case"tabIndex":oe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":oe(e,a,o);break;case"style":$i(e,o,f);break;case"data":if(n!=="object"){oe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Sl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Sl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ta);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Sl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),ie(e,"popover",o);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ie(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ux.get(a)||a,ie(e,a,o))}}function fd(e,n,a,o,u,f){switch(a){case"style":$i(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Gn(e,o):(typeof o=="number"||typeof o=="bigint")&&Gn(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!at.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ie(e,a,o)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xe(e,n,f,_,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":ye("invalid",e);var A=f=_=u=null,G=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":_=pt;break;case"checked":G=pt;break;case"defaultChecked":it=pt;break;case"value":f=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:Xe(e,n,o,pt,a,null)}}$n(e,f,A,G,it,_,u,!1);return;case"select":ye("invalid",e),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":_=A;break;case"multiple":o=A;default:Xe(e,n,u,A,a,null)}n=f,a=_,e.multiple=!!o,n!=null?ti(e,!!o,n,!1):a!=null&&ti(e,!!o,a,!0);return;case"textarea":ye("invalid",e),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Xe(e,n,_,A,a,null)}un(e,o,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,n,G,o,a,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<Go.length;o++)ye(Go[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xe(e,n,it,o,a,null)}return;default:if(ts(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&fd(e,n,pt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Xe(e,n,A,o,a,null))}function ay(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,A=null,G=null,it=null,pt=null;for(ut in a){var St=a[ut];if(a.hasOwnProperty(ut)&&St!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":G=St;default:o.hasOwnProperty(ut)||Xe(e,n,ut,null,o,St)}}for(var rt in o){var ut=o[rt];if(St=a[rt],o.hasOwnProperty(rt)&&(ut!=null||St!=null))switch(rt){case"type":f=ut;break;case"name":u=ut;break;case"checked":it=ut;break;case"defaultChecked":pt=ut;break;case"value":_=ut;break;case"defaultValue":A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:ut!==St&&Xe(e,n,rt,ut,o,St)}}Hn(e,_,A,G,it,pt,f,u);return;case"select":ut=_=A=rt=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ut=G;default:o.hasOwnProperty(f)||Xe(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":rt=f;break;case"defaultValue":A=f;break;case"multiple":_=f;default:f!==G&&Xe(e,n,u,f,o,G)}n=A,a=_,o=ut,rt!=null?ti(e,!!a,rt,!1):!!o!=!!a&&(n!=null?ti(e,!!a,n,!0):ti(e,!!a,a?[]:"",!1));return;case"textarea":ut=rt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xe(e,n,A,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":rt=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Xe(e,n,_,u,o,f)}Ie(e,rt,ut);return;case"option":for(var Vt in a)if(rt=a[Vt],a.hasOwnProperty(Vt)&&rt!=null&&!o.hasOwnProperty(Vt))switch(Vt){case"selected":e.selected=!1;break;default:Xe(e,n,Vt,null,o,rt)}for(G in o)if(rt=o[G],ut=a[G],o.hasOwnProperty(G)&&rt!==ut&&(rt!=null||ut!=null))switch(G){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Xe(e,n,G,rt,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)rt=a[ee],a.hasOwnProperty(ee)&&rt!=null&&!o.hasOwnProperty(ee)&&Xe(e,n,ee,null,o,rt);for(it in o)if(rt=o[it],ut=a[it],o.hasOwnProperty(it)&&rt!==ut&&(rt!=null||ut!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:Xe(e,n,it,rt,o,ut)}return;default:if(ts(n)){for(var We in a)rt=a[We],a.hasOwnProperty(We)&&rt!==void 0&&!o.hasOwnProperty(We)&&fd(e,n,We,void 0,o,rt);for(pt in o)rt=o[pt],ut=a[pt],!o.hasOwnProperty(pt)||rt===ut||rt===void 0&&ut===void 0||fd(e,n,pt,rt,o,ut);return}}for(var K in a)rt=a[K],a.hasOwnProperty(K)&&rt!=null&&!o.hasOwnProperty(K)&&Xe(e,n,K,null,o,rt);for(St in o)rt=o[St],ut=a[St],!o.hasOwnProperty(St)||rt===ut||rt==null&&ut==null||Xe(e,n,St,rt,o,ut)}function L0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ry(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,A=u.duration;if(f&&A&&L0(_)){for(_=0,A=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],it=G.startTime;if(it>A)break;var pt=G.transferSize,St=G.initiatorType;pt&&L0(St)&&(G=G.responseEnd,_+=pt*(G<A?1:(A-it)/(G-it)))}if(--o,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var dd=null,hd=null;function mc(e){return e.nodeType===9?e:e.ownerDocument}function O0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function P0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function pd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var md=null;function sy(){var e=window.event;return e&&e.type==="popstate"?e===md?!1:(md=e,!0):(md=null,!1)}var z0=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,ly=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(e){return I0.resolve(null).then(e).catch(cy)}:z0;function cy(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function B0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Us(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")ko(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ko(a);for(var f=a.firstChild;f;){var _=f.nextSibling,A=f.nodeName;f[pr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&ko(e.ownerDocument.body);a=u}while(a);Us(n)}function F0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function gd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":gd(a),oo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function uy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[pr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function fy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function H0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function _d(e){return e.data==="$?"||e.data==="$~"}function vd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var xd=null;function G0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _i(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function V0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function k0(e,n,a){switch(n=mc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function ko(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);oo(e)}var vi=new Map,X0=new Set;function gc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ga=I.d;I.d={f:hy,r:py,D:my,C:gy,L:_y,m:vy,X:Sy,S:xy,M:yy};function hy(){var e=ga.f(),n=oc();return e||n}function py(e){var n=Ua(e);n!==null&&n.tag===5&&n.type==="form"?og(n):ga.r(e)}var Cs=typeof document>"u"?null:document;function W0(e,n,a){var o=Cs;if(o&&typeof n=="string"&&n){var u=se(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),X0.has(u)||(X0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",e),X(n),o.head.appendChild(n)))}}function my(e){ga.D(e),W0("dns-prefetch",e,null)}function gy(e,n){ga.C(e,n),W0("preconnect",e,n)}function _y(e,n,a){ga.L(e,n,a);var o=Cs;if(o&&e&&n){var u='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+se(a.imageSizes)+'"]')):u+='[href="'+se(e)+'"]';var f=u;switch(n){case"style":f=ws(e);break;case"script":f=Ds(e)}vi.has(f)||(e=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Xo(f))||n==="script"&&o.querySelector(Wo(f))||(n=o.createElement("link"),Dn(n,"link",e),X(n),o.head.appendChild(n)))}}function vy(e,n){ga.m(e,n);var a=Cs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+se(o)+'"][href="'+se(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ds(e)}if(!vi.has(f)&&(e=y({rel:"modulepreload",href:e},n),vi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wo(f)))return}o=a.createElement("link"),Dn(o,"link",e),X(o),a.head.appendChild(o)}}}function xy(e,n,a){ga.S(e,n,a);var o=Cs;if(o&&e){var u=R(o).hoistableStyles,f=ws(e);n=n||"default";var _=u.get(f);if(!_){var A={loading:0,preload:null};if(_=o.querySelector(Xo(f)))A.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(f))&&Sd(e,a);var G=_=o.createElement("link");X(G),Dn(G,"link",e),G._p=new Promise(function(it,pt){G.onload=it,G.onerror=pt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,_c(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:A},u.set(f,_)}}}function Sy(e,n){ga.X(e,n);var a=Cs;if(a&&e){var o=R(a).hoistableScripts,u=Ds(e),f=o.get(u);f||(f=a.querySelector(Wo(u)),f||(e=y({src:e,async:!0},n),(n=vi.get(u))&&yd(e,n),f=a.createElement("script"),X(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function yy(e,n){ga.M(e,n);var a=Cs;if(a&&e){var o=R(a).hoistableScripts,u=Ds(e),f=o.get(u);f||(f=a.querySelector(Wo(u)),f||(e=y({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&yd(e,n),f=a.createElement("script"),X(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function q0(e,n,a,o){var u=(u=$.current)?gc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ws(a.href),a=R(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ws(a.href);var f=R(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(Xo(e)))&&!f._p&&(_.instance=f,_.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),f||My(u,e,a,_.state))),n&&o===null)throw Error(r(528,""));return _}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ds(a),a=R(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ws(e){return'href="'+se(e)+'"'}function Xo(e){return'link[rel="stylesheet"]['+e+"]"}function Y0(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function My(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),X(n),e.head.appendChild(n))}function Ds(e){return'[src="'+se(e)+'"]'}function Wo(e){return"script[async]"+e}function j0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+se(a.href)+'"]');if(o)return n.instance=o,X(o),o;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),X(o),Dn(o,"style",u),_c(o,a.precedence,e),n.instance=o;case"stylesheet":u=ws(a.href);var f=e.querySelector(Xo(u));if(f)return n.state.loading|=4,n.instance=f,X(f),f;o=Y0(a),(u=vi.get(u))&&Sd(o,u),f=(e.ownerDocument||e).createElement("link"),X(f);var _=f;return _._p=new Promise(function(A,G){_.onload=A,_.onerror=G}),Dn(f,"link",o),n.state.loading|=4,_c(f,a.precedence,e),n.instance=f;case"script":return f=Ds(a.src),(u=e.querySelector(Wo(f)))?(n.instance=u,X(u),u):(o=a,(u=vi.get(f))&&(o=y({},a),yd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),X(u),Dn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,_c(o,a.precedence,e));return n.instance}function _c(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var A=o[_];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Sd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function yd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var vc=null;function Z0(e,n,a){if(vc===null){var o=new Map,u=vc=new Map;u.set(a,o)}else u=vc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[pr]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var A=o.get(_);A?A.push(f):o.set(_,[f])}}return o}function K0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function by(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Q0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ey(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ws(o.href),f=n.querySelector(Xo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=xc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,X(f);return}f=n.ownerDocument||n,o=Y0(o),(u=vi.get(u))&&Sd(o,u),f=f.createElement("link"),X(f);var _=f;_._p=new Promise(function(A,G){_.onload=A,_.onerror=G}),Dn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=xc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Md=0;function Ty(e,n){return e.stylesheets&&e.count===0&&yc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&yc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Md===0&&(Md=62500*ry());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Md?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Sc=null;function yc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Sc=new Map,n.forEach(Ay,e),Sc=null,xc.call(e))}function Ay(e,n){if(!(n.state.loading&4)){var a=Sc.get(e);if(a)var o=a.get(null);else{a=new Map,Sc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=xc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var qo={$$typeof:L,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function Ry(e,n,a,o,u,f,_,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function J0(e,n,a,o,u,f,_,A,G,it,pt,St){return e=new Ry(e,n,a,_,G,it,pt,St,A),n=1,f===!0&&(n|=24),f=ni(3,null,null,n),e.current=f,f.stateNode=e,n=tf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},rf(f),e}function $0(e){return e?(e=os,e):os}function t_(e,n,a,o,u,f){u=$0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ba(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Fa(e,o,n),a!==null&&(Qn(a,e,n),Eo(a,e,n))}function e_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function bd(e,n){e_(e,n),(e=e.alternate)&&e_(e,n)}function n_(e){if(e.tag===13||e.tag===31){var n=xr(e,67108864);n!==null&&Qn(n,e,67108864),bd(e,67108864)}}function i_(e){if(e.tag===13||e.tag===31){var n=oi();n=Qr(n);var a=xr(e,n);a!==null&&Qn(a,e,n),bd(e,n)}}var Mc=!0;function Cy(e,n,a,o){var u=U.T;U.T=null;var f=I.p;try{I.p=2,Ed(e,n,a,o)}finally{I.p=f,U.T=u}}function wy(e,n,a,o){var u=U.T;U.T=null;var f=I.p;try{I.p=8,Ed(e,n,a,o)}finally{I.p=f,U.T=u}}function Ed(e,n,a,o){if(Mc){var u=Td(o);if(u===null)ud(e,n,o,bc,a),r_(e,o);else if(Uy(u,e,n,a,o))o.stopPropagation();else if(r_(e,o),n&4&&-1<Dy.indexOf(e)){for(;u!==null;){var f=Ua(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Et(f.pendingLanes);if(_!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var G=1<<31-Pt(_);A.entanglements[1]|=G,_&=~G}Gi(f),(Pe&6)===0&&(rc=E()+500,Ho(0))}}break;case 31:case 13:A=xr(f,2),A!==null&&Qn(A,f,2),oc(),bd(f,2)}if(f=Td(o),f===null&&ud(e,n,o,bc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else ud(e,n,o,null,a)}}function Td(e){return e=Au(e),Ad(e)}var bc=null;function Ad(e){if(bc=null,e=Da(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return bc=e,null}function a_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case mt:return 2;case yt:return 8;case ht:case Wt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var Rd=!1,Ka=null,Qa=null,Ja=null,Yo=new Map,jo=new Map,$a=[],Dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function r_(e,n){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(n.pointerId)}}function Zo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ua(n),n!==null&&n_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Uy(e,n,a,o,u){switch(n){case"focusin":return Ka=Zo(Ka,e,n,a,o,u),!0;case"dragenter":return Qa=Zo(Qa,e,n,a,o,u),!0;case"mouseover":return Ja=Zo(Ja,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Yo.set(f,Zo(Yo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,jo.set(f,Zo(jo.get(f)||null,e,n,a,o,u)),!0}return!1}function s_(e){var n=Da(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,$r(e.priority,function(){i_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,$r(e.priority,function(){i_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ec(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Td(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Tu=o,a.target.dispatchEvent(o),Tu=null}else return n=Ua(a),n!==null&&n_(n),e.blockedOn=a,!1;n.shift()}return!0}function o_(e,n,a){Ec(e)&&a.delete(n)}function Ny(){Rd=!1,Ka!==null&&Ec(Ka)&&(Ka=null),Qa!==null&&Ec(Qa)&&(Qa=null),Ja!==null&&Ec(Ja)&&(Ja=null),Yo.forEach(o_),jo.forEach(o_)}function Tc(e,n){e.blockedOn===n&&(e.blockedOn=null,Rd||(Rd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Ny)))}var Ac=null;function l_(e){Ac!==e&&(Ac=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Ac===e&&(Ac=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Ad(o||a)===null)continue;break}var f=Ua(a);f!==null&&(e.splice(n,3),n-=3,Tf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Us(e){function n(G){return Tc(G,e)}Ka!==null&&Tc(Ka,e),Qa!==null&&Tc(Qa,e),Ja!==null&&Tc(Ja,e),Yo.forEach(n),jo.forEach(n);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)s_(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[_n]||null;if(typeof f=="function")_||l_(a);else if(_){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[_n]||null)A=_.formAction;else if(Ad(u)!==null)continue}else A=_.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),l_(a)}}}function c_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Cd(e){this._internalRoot=e}Rc.prototype.render=Cd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=oi();t_(a,o,e,n,null,null)},Rc.prototype.unmount=Cd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;t_(e.current,2,null,e,null,null),oc(),n[Ji]=null}};function Rc(e){this._internalRoot=e}Rc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ii();e={blockedOn:null,target:e,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,e),a===0&&s_(e)}};var u_=t.version;if(u_!=="19.2.5")throw Error(r(527,u_,"19.2.5"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=h(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Ly={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{Tt=Cc.inject(Ly),bt=Cc}catch{}}return Qo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=_g,f=vg,_=xg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=J0(e,1,!1,null,null,a,o,null,u,f,_,c_),e[Ji]=n.current,cd(e),new Cd(n)},Qo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=_g,_=vg,A=xg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=J0(e,1,!0,n,a??null,o,u,G,f,_,A,c_),n.context=$0(null),a=n.current,o=oi(),o=Qr(o),u=Ba(o),u.callback=null,Fa(a,u,o),a=o,n.current.lanes=a,Bn(n,a),Gi(n),e[Ji]=n.current,cd(e),new Rc(n)},Qo.version="19.2.5",Qo}var S_;function ky(){if(S_)return Dd.exports;S_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Dd.exports=Vy(),Dd.exports}var Xy=ky(),Be=pp();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mp="183",Wy=0,y_=1,qy=2,ru=1,Yy=2,cl=3,dr=0,Jn=1,ba=2,Ta=0,Ks=1,xh=2,M_=3,b_=4,jy=5,Hr=100,Zy=101,Ky=102,Qy=103,Jy=104,$y=200,tM=201,eM=202,nM=203,Sh=204,yh=205,iM=206,aM=207,rM=208,sM=209,oM=210,lM=211,cM=212,uM=213,fM=214,Mh=0,bh=1,Eh=2,$s=3,Th=4,Ah=5,Rh=6,Ch=7,gp=0,dM=1,hM=2,ji=0,Dv=1,Uv=2,Nv=3,Lv=4,Ov=5,Pv=6,zv=7,Iv=300,Wr=301,to=302,Pd=303,zd=304,Su=306,wh=1e3,Ea=1001,Dh=1002,Un=1003,pM=1004,wc=1005,zn=1006,Id=1007,Vr=1008,ui=1009,Bv=1010,Fv=1011,fl=1012,_p=1013,Ki=1014,qi=1015,Ra=1016,vp=1017,xp=1018,dl=1020,Hv=35902,Gv=35899,Vv=1021,kv=1022,Li=1023,Ca=1026,kr=1027,Xv=1028,Sp=1029,eo=1030,yp=1031,Mp=1033,su=33776,ou=33777,lu=33778,cu=33779,Uh=35840,Nh=35841,Lh=35842,Oh=35843,Ph=36196,zh=37492,Ih=37496,Bh=37488,Fh=37489,Hh=37490,Gh=37491,Vh=37808,kh=37809,Xh=37810,Wh=37811,qh=37812,Yh=37813,jh=37814,Zh=37815,Kh=37816,Qh=37817,Jh=37818,$h=37819,tp=37820,ep=37821,np=36492,ip=36494,ap=36495,rp=36283,sp=36284,op=36285,lp=36286,mM=3200,Wv=0,gM=1,cr="",Si="srgb",no="srgb-linear",fu="linear",Ve="srgb",Ns=7680,E_=519,_M=512,vM=513,xM=514,bp=515,SM=516,yM=517,Ep=518,MM=519,cp=35044,T_="300 es",Yi=2e3,hl=2001;function bM(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function du(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function EM(){const s=du("canvas");return s.style.display="block",s}const A_={};function hu(...s){const t="THREE."+s.shift();console.log(t,...s)}function qv(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function re(...s){s=qv(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...s)}}function we(...s){s=qv(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...s)}}function pu(...s){const t=s.join(" ");t in A_||(A_[t]=!0,re(...s))}function TM(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const AM={[Mh]:bh,[Eh]:Rh,[Th]:Ch,[$s]:Ah,[bh]:Mh,[Rh]:Eh,[Ch]:Th,[Ah]:$s};class ao{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bd=Math.PI/180,up=180/Math.PI;function fr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Ae(s,t,i){return Math.max(t,Math.min(i,s))}function RM(s,t){return(s%t+t)%t}function Fd(s,t,i){return(1-i)*s+i*t}function Wi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function qe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class xe{constructor(t=0,i=0){xe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yr{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,p){let m=r[l+0],h=r[l+1],v=r[l+2],y=r[l+3],g=c[d+0],M=c[d+1],T=c[d+2],C=c[d+3];if(y!==C||m!==g||h!==M||v!==T){let S=m*g+h*M+v*T+y*C;S<0&&(g=-g,M=-M,T=-T,C=-C,S=-S);let x=1-p;if(S<.9995){const w=Math.acos(S),L=Math.sin(w);x=Math.sin(x*w)/L,p=Math.sin(p*w)/L,m=m*x+g*p,h=h*x+M*p,v=v*x+T*p,y=y*x+C*p}else{m=m*x+g*p,h=h*x+M*p,v=v*x+T*p,y=y*x+C*p;const w=1/Math.sqrt(m*m+h*h+v*v+y*y);m*=w,h*=w,v*=w,y*=w}}t[i]=m,t[i+1]=h,t[i+2]=v,t[i+3]=y}static multiplyQuaternionsFlat(t,i,r,l,c,d){const p=r[l],m=r[l+1],h=r[l+2],v=r[l+3],y=c[d],g=c[d+1],M=c[d+2],T=c[d+3];return t[i]=p*T+v*y+m*M-h*g,t[i+1]=m*T+v*g+h*y-p*M,t[i+2]=h*T+v*M+p*g-m*y,t[i+3]=v*T-p*y-m*g-h*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(r/2),v=p(l/2),y=p(c/2),g=m(r/2),M=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=g*v*y+h*M*T,this._y=h*M*y-g*v*T,this._z=h*v*T+g*M*y,this._w=h*v*y-g*M*T;break;case"YXZ":this._x=g*v*y+h*M*T,this._y=h*M*y-g*v*T,this._z=h*v*T-g*M*y,this._w=h*v*y+g*M*T;break;case"ZXY":this._x=g*v*y-h*M*T,this._y=h*M*y+g*v*T,this._z=h*v*T+g*M*y,this._w=h*v*y-g*M*T;break;case"ZYX":this._x=g*v*y-h*M*T,this._y=h*M*y+g*v*T,this._z=h*v*T-g*M*y,this._w=h*v*y+g*M*T;break;case"YZX":this._x=g*v*y+h*M*T,this._y=h*M*y+g*v*T,this._z=h*v*T-g*M*y,this._w=h*v*y-g*M*T;break;case"XZY":this._x=g*v*y-h*M*T,this._y=h*M*y-g*v*T,this._z=h*v*T+g*M*y,this._w=h*v*y+g*M*T;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],v=i[6],y=i[10],g=r+p+y;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-h)*M,this._z=(d-l)*M}else if(r>p&&r>y){const M=2*Math.sqrt(1+r-p-y);this._w=(v-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+h)/M}else if(p>y){const M=2*Math.sqrt(1+p-r-y);this._w=(c-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+y-r-p);this._w=(d-l)/M,this._x=(c+h)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,p=i._x,m=i._y,h=i._z,v=i._w;return this._x=r*v+d*p+l*h-c*m,this._y=l*v+d*m+c*p-r*h,this._z=c*v+d*h+r*m-l*p,this._w=d*v-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,c=t._z,d=t._w,p=this.dot(t);p<0&&(r=-r,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,i=Math.sin(i*h)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,r=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(R_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(R_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*r),v=2*(p*i-c*l),y=2*(c*r-d*i);return this.x=i+m*h+d*y-p*v,this.y=r+m*v+p*h-c*y,this.z=l+m*y+c*v-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-r*m,this.z=r*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Hd.copy(this).projectOnVector(t),this.sub(Hd)}reflect(t){return this.sub(Hd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hd=new Q,R_=new Yr;class me{constructor(t,i,r,l,c,d,p,m,h){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,p,m,h)}set(t,i,r,l,c,d,p,m,h){const v=this.elements;return v[0]=t,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=d,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],v=r[4],y=r[7],g=r[2],M=r[5],T=r[8],C=l[0],S=l[3],x=l[6],w=l[1],L=l[4],N=l[7],F=l[2],B=l[5],z=l[8];return c[0]=d*C+p*w+m*F,c[3]=d*S+p*L+m*B,c[6]=d*x+p*N+m*z,c[1]=h*C+v*w+y*F,c[4]=h*S+v*L+y*B,c[7]=h*x+v*N+y*z,c[2]=g*C+M*w+T*F,c[5]=g*S+M*L+T*B,c[8]=g*x+M*N+T*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],v=t[8];return i*d*v-i*p*h-r*c*v+r*p*m+l*c*h-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],v=t[8],y=v*d-p*h,g=p*m-v*c,M=h*c-d*m,T=i*y+r*g+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=y*C,t[1]=(l*h-v*r)*C,t[2]=(p*r-l*d)*C,t[3]=g*C,t[4]=(v*i-l*m)*C,t[5]=(l*c-p*i)*C,t[6]=M*C,t[7]=(r*m-h*i)*C,t[8]=(d*i-r*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Gd.makeScale(t,i)),this}rotate(t){return this.premultiply(Gd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Gd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gd=new me,C_=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),w_=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CM(){const s={enabled:!0,workingColorSpace:no,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ve&&(l.r=Aa(l.r),l.g=Aa(l.g),l.b=Aa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ve&&(l.r=Qs(l.r),l.g=Qs(l.g),l.b=Qs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===cr?fu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return pu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return pu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[no]:{primaries:t,whitePoint:r,transfer:fu,toXYZ:C_,fromXYZ:w_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:C_,fromXYZ:w_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),s}const De=CM();function Aa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class wM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Ls===void 0&&(Ls=du("canvas")),Ls.width=t.width,Ls.height=t.height;const l=Ls.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Ls}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=du("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Aa(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Aa(i[r]/255)*255):i[r]=Aa(i[r]);return{data:i,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let DM=0;class Tp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=fr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Vd(l[d].image)):c.push(Vd(l[d]))}else c=Vd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Vd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let UM=0;const kd=new Q;class In extends ao{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=Ea,l=Ea,c=zn,d=Vr,p=Li,m=ui,h=In.DEFAULT_ANISOTROPY,v=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=fr(),this.name="",this.source=new Tp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(kd).x}get height(){return this.source.getSize(kd).y}get depth(){return this.source.getSize(kd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Iv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wh:t.x=t.x-Math.floor(t.x);break;case Ea:t.x=t.x<0?0:1;break;case Dh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wh:t.y=t.y-Math.floor(t.y);break;case Ea:t.y=t.y<0?0:1;break;case Dh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Iv;In.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,r=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,h=m[0],v=m[4],y=m[8],g=m[1],M=m[5],T=m[9],C=m[2],S=m[6],x=m[10];if(Math.abs(v-g)<.01&&Math.abs(y-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(y+C)<.1&&Math.abs(T+S)<.1&&Math.abs(h+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(h+1)/2,N=(M+1)/2,F=(x+1)/2,B=(v+g)/4,z=(y+C)/4,b=(T+S)/4;return L>N&&L>F?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=B/r,c=z/r):N>F?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=B/l,c=b/l):F<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),r=z/c,l=b/c),this.set(r,l,c,i),this}let w=Math.sqrt((S-T)*(S-T)+(y-C)*(y-C)+(g-v)*(g-v));return Math.abs(w)<.001&&(w=1),this.x=(S-T)/w,this.y=(y-C)/w,this.z=(g-v)/w,this.w=Math.acos((h+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NM extends ao{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},c=new In(l),d=r.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Tp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends NM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Yv extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class LM extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(t,i,r,l,c,d,p,m,h,v,y,g,M,T,C,S){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,p,m,h,v,y,g,M,T,C,S)}set(t,i,r,l,c,d,p,m,h,v,y,g,M,T,C,S){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=d,x[9]=p,x[13]=m,x[2]=h,x[6]=v,x[10]=y,x[14]=g,x[3]=M,x[7]=T,x[11]=C,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/Os.setFromMatrixColumn(t,0).length(),c=1/Os.setFromMatrixColumn(t,1).length(),d=1/Os.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),v=Math.cos(c),y=Math.sin(c);if(t.order==="XYZ"){const g=d*v,M=d*y,T=p*v,C=p*y;i[0]=m*v,i[4]=-m*y,i[8]=h,i[1]=M+T*h,i[5]=g-C*h,i[9]=-p*m,i[2]=C-g*h,i[6]=T+M*h,i[10]=d*m}else if(t.order==="YXZ"){const g=m*v,M=m*y,T=h*v,C=h*y;i[0]=g+C*p,i[4]=T*p-M,i[8]=d*h,i[1]=d*y,i[5]=d*v,i[9]=-p,i[2]=M*p-T,i[6]=C+g*p,i[10]=d*m}else if(t.order==="ZXY"){const g=m*v,M=m*y,T=h*v,C=h*y;i[0]=g-C*p,i[4]=-d*y,i[8]=T+M*p,i[1]=M+T*p,i[5]=d*v,i[9]=C-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const g=d*v,M=d*y,T=p*v,C=p*y;i[0]=m*v,i[4]=T*h-M,i[8]=g*h+C,i[1]=m*y,i[5]=C*h+g,i[9]=M*h-T,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,M=d*h,T=p*m,C=p*h;i[0]=m*v,i[4]=C-g*y,i[8]=T*y+M,i[1]=y,i[5]=d*v,i[9]=-p*v,i[2]=-h*v,i[6]=M*y+T,i[10]=g-C*y}else if(t.order==="XZY"){const g=d*m,M=d*h,T=p*m,C=p*h;i[0]=m*v,i[4]=-y,i[8]=h*v,i[1]=g*y+C,i[5]=d*v,i[9]=M*y-T,i[2]=T*y-M,i[6]=p*v,i[10]=C*y+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(OM,t,PM)}lookAt(t,i,r){const l=this.elements;return li.subVectors(t,i),li.lengthSq()===0&&(li.z=1),li.normalize(),er.crossVectors(r,li),er.lengthSq()===0&&(Math.abs(r.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),er.crossVectors(r,li)),er.normalize(),Dc.crossVectors(li,er),l[0]=er.x,l[4]=Dc.x,l[8]=li.x,l[1]=er.y,l[5]=Dc.y,l[9]=li.y,l[2]=er.z,l[6]=Dc.z,l[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],v=r[1],y=r[5],g=r[9],M=r[13],T=r[2],C=r[6],S=r[10],x=r[14],w=r[3],L=r[7],N=r[11],F=r[15],B=l[0],z=l[4],b=l[8],D=l[12],ct=l[1],H=l[5],j=l[9],J=l[13],et=l[2],Z=l[6],U=l[10],I=l[14],ot=l[3],dt=l[7],st=l[11],P=l[15];return c[0]=d*B+p*ct+m*et+h*ot,c[4]=d*z+p*H+m*Z+h*dt,c[8]=d*b+p*j+m*U+h*st,c[12]=d*D+p*J+m*I+h*P,c[1]=v*B+y*ct+g*et+M*ot,c[5]=v*z+y*H+g*Z+M*dt,c[9]=v*b+y*j+g*U+M*st,c[13]=v*D+y*J+g*I+M*P,c[2]=T*B+C*ct+S*et+x*ot,c[6]=T*z+C*H+S*Z+x*dt,c[10]=T*b+C*j+S*U+x*st,c[14]=T*D+C*J+S*I+x*P,c[3]=w*B+L*ct+N*et+F*ot,c[7]=w*z+L*H+N*Z+F*dt,c[11]=w*b+L*j+N*U+F*st,c[15]=w*D+L*J+N*I+F*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],p=t[5],m=t[9],h=t[13],v=t[2],y=t[6],g=t[10],M=t[14],T=t[3],C=t[7],S=t[11],x=t[15],w=m*M-h*g,L=p*M-h*y,N=p*g-m*y,F=d*M-h*v,B=d*g-m*v,z=d*y-p*v;return i*(C*w-S*L+x*N)-r*(T*w-S*F+x*B)+l*(T*L-C*F+x*z)-c*(T*N-C*B+S*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],v=t[8],y=t[9],g=t[10],M=t[11],T=t[12],C=t[13],S=t[14],x=t[15],w=i*p-r*d,L=i*m-l*d,N=i*h-c*d,F=r*m-l*p,B=r*h-c*p,z=l*h-c*m,b=v*C-y*T,D=v*S-g*T,ct=v*x-M*T,H=y*S-g*C,j=y*x-M*C,J=g*x-M*S,et=w*J-L*j+N*H+F*ct-B*D+z*b;if(et===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/et;return t[0]=(p*J-m*j+h*H)*Z,t[1]=(l*j-r*J-c*H)*Z,t[2]=(C*z-S*B+x*F)*Z,t[3]=(g*B-y*z-M*F)*Z,t[4]=(m*ct-d*J-h*D)*Z,t[5]=(i*J-l*ct+c*D)*Z,t[6]=(S*N-T*z-x*L)*Z,t[7]=(v*z-g*N+M*L)*Z,t[8]=(d*j-p*ct+h*b)*Z,t[9]=(r*ct-i*j-c*b)*Z,t[10]=(T*B-C*N+x*w)*Z,t[11]=(y*N-v*B-M*w)*Z,t[12]=(p*D-d*H-m*b)*Z,t[13]=(i*H-r*D+l*b)*Z,t[14]=(C*L-T*F-S*w)*Z,t[15]=(v*F-y*L+g*w)*Z,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,p=t.y,m=t.z,h=c*d,v=c*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,v*p+r,v*m-l*d,0,h*m-l*p,v*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,v=d+d,y=p+p,g=c*h,M=c*v,T=c*y,C=d*v,S=d*y,x=p*y,w=m*h,L=m*v,N=m*y,F=r.x,B=r.y,z=r.z;return l[0]=(1-(C+x))*F,l[1]=(M+N)*F,l[2]=(T-L)*F,l[3]=0,l[4]=(M-N)*B,l[5]=(1-(g+x))*B,l[6]=(S+w)*B,l[7]=0,l[8]=(T+L)*z,l[9]=(S-w)*z,l[10]=(1-(g+C))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return r.set(1,1,1),i.identity(),this;let d=Os.set(l[0],l[1],l[2]).length();const p=Os.set(l[4],l[5],l[6]).length(),m=Os.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Di.copy(this);const h=1/d,v=1/p,y=1/m;return Di.elements[0]*=h,Di.elements[1]*=h,Di.elements[2]*=h,Di.elements[4]*=v,Di.elements[5]*=v,Di.elements[6]*=v,Di.elements[8]*=y,Di.elements[9]*=y,Di.elements[10]*=y,i.setFromRotationMatrix(Di),r.x=d,r.y=p,r.z=m,this}makePerspective(t,i,r,l,c,d,p=Yi,m=!1){const h=this.elements,v=2*c/(i-t),y=2*c/(r-l),g=(i+t)/(i-t),M=(r+l)/(r-l);let T,C;if(m)T=c/(d-c),C=d*c/(d-c);else if(p===Yi)T=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(p===hl)T=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=y,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,l,c,d,p=Yi,m=!1){const h=this.elements,v=2/(i-t),y=2/(r-l),g=-(i+t)/(i-t),M=-(r+l)/(r-l);let T,C;if(m)T=1/(d-c),C=d/(d-c);else if(p===Yi)T=-2/(d-c),C=-(d+c)/(d-c);else if(p===hl)T=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=y,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Os=new Q,Di=new en,OM=new Q(0,0,0),PM=new Q(1,1,1),er=new Q,Dc=new Q,li=new Q,D_=new en,U_=new Yr;class Pi{constructor(t=0,i=0,r=0,l=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],v=l[9],y=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ae(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Ae(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return D_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(D_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return U_.setFromEuler(this),this.setFromQuaternion(U_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class jv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zM=0;const N_=new Q,Ps=new Yr,_a=new en,Uc=new Q,Jo=new Q,IM=new Q,BM=new Yr,L_=new Q(1,0,0),O_=new Q(0,1,0),P_=new Q(0,0,1),z_={type:"added"},FM={type:"removed"},zs={type:"childadded",child:null},Xd={type:"childremoved",child:null};class An extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new Q,i=new Pi,r=new Yr,l=new Q(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new me}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ps.setFromAxisAngle(t,i),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,i){return Ps.setFromAxisAngle(t,i),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(L_,t)}rotateY(t){return this.rotateOnAxis(O_,t)}rotateZ(t){return this.rotateOnAxis(P_,t)}translateOnAxis(t,i){return N_.copy(t).applyQuaternion(this.quaternion),this.position.add(N_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(L_,t)}translateY(t){return this.translateOnAxis(O_,t)}translateZ(t){return this.translateOnAxis(P_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Uc.copy(t):Uc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(Jo,Uc,this.up):_a.lookAt(Uc,Jo,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Ps.setFromRotationMatrix(_a),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(z_),zs.child=t,this.dispatchEvent(zs),zs.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(FM),Xd.child=t,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_a.multiply(t.parent.matrixWorld)),t.applyMatrix4(_a),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(z_),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,t,IM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,BM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const y=m[h];c(t.shapes,y)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),v=d(t.images),y=d(t.shapes),g=d(t.skeletons),M=d(t.animations),T=d(t.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}An.DEFAULT_UP=new Q(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xr extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HM={type:"move"};class Wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const C of t.hand.values()){const S=i.getJointPose(C,r),x=this._getHandJoint(h,C);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const v=h.joints["index-finger-tip"],y=h.joints["thumb-tip"],g=v.position.distanceTo(y.position),M=.02,T=.005;h.inputState.pinching&&g>M+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=M-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(HM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Xr;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const Zv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function qd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Me{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=De.workingColorSpace){if(t=RM(t,1),i=Ae(i,0,1),r=Ae(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=qd(d,c,t+1/3),this.g=qd(d,c,t),this.b=qd(d,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=Si){function r(c){c!==void 0&&parseFloat(c)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:re("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const r=Zv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Aa(t.r),this.g=Aa(t.g),this.b=Aa(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return De.workingToColorSpace(On.copy(this),t),Math.round(Ae(On.r*255,0,255))*65536+Math.round(Ae(On.g*255,0,255))*256+Math.round(Ae(On.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,d=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const v=(p+d)/2;if(p===d)m=0,h=0;else{const y=d-p;switch(h=v<=.5?y/(d+p):y/(2-d-p),d){case r:m=(l-c)/y+(l<c?6:0);break;case l:m=(c-r)/y+2;break;case c:m=(r-l)/y+4;break}m/=6}return t.h=m,t.s=h,t.l=v,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=Si){De.workingToColorSpace(On.copy(this),t);const i=On.r,r=On.g,l=On.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(nr),this.setHSL(nr.h+t,nr.s+i,nr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(nr),t.getHSL(Nc);const r=Fd(nr.h,Nc.h,i),l=Fd(nr.s,Nc.s,i),c=Fd(nr.l,Nc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Me;Me.NAMES=Zv;class GM extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ui=new Q,va=new Q,Yd=new Q,xa=new Q,Is=new Q,Bs=new Q,I_=new Q,jd=new Q,Zd=new Q,Kd=new Q,Qd=new sn,Jd=new sn,$d=new sn;class Mi{constructor(t=new Q,i=new Q,r=new Q){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ui.subVectors(t,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ui.subVectors(l,i),va.subVectors(r,i),Yd.subVectors(t,i);const d=Ui.dot(Ui),p=Ui.dot(va),m=Ui.dot(Yd),h=va.dot(va),v=va.dot(Yd),y=d*h-p*p;if(y===0)return c.set(0,0,0),null;const g=1/y,M=(h*m-p*v)*g,T=(d*v-p*m)*g;return c.set(1-M-T,T,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(t,i,r,l,c,d,p,m){return this.getBarycoord(t,i,r,l,xa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,xa.x),m.addScaledVector(d,xa.y),m.addScaledVector(p,xa.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return Qd.setScalar(0),Jd.setScalar(0),$d.setScalar(0),Qd.fromBufferAttribute(t,i),Jd.fromBufferAttribute(t,r),$d.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Qd,c.x),d.addScaledVector(Jd,c.y),d.addScaledVector($d,c.z),d}static isFrontFacing(t,i,r,l){return Ui.subVectors(r,i),va.subVectors(t,i),Ui.cross(va).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ui.cross(va).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Mi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,p;Is.subVectors(l,r),Bs.subVectors(c,r),jd.subVectors(t,r);const m=Is.dot(jd),h=Bs.dot(jd);if(m<=0&&h<=0)return i.copy(r);Zd.subVectors(t,l);const v=Is.dot(Zd),y=Bs.dot(Zd);if(v>=0&&y<=v)return i.copy(l);const g=m*y-v*h;if(g<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(Is,d);Kd.subVectors(t,c);const M=Is.dot(Kd),T=Bs.dot(Kd);if(T>=0&&M<=T)return i.copy(c);const C=M*h-m*T;if(C<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(r).addScaledVector(Bs,p);const S=v*T-M*y;if(S<=0&&y-v>=0&&M-T>=0)return I_.subVectors(c,l),p=(y-v)/(y-v+(M-T)),i.copy(l).addScaledVector(I_,p);const x=1/(S+C+g);return d=C*x,p=g*x,i.copy(r).addScaledVector(Is,d).addScaledVector(Bs,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ml{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ni.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ni.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ni.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,Ni):Ni.fromBufferAttribute(c,d),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Lc.copy(r.boundingBox)),Lc.applyMatrix4(t.matrixWorld),this.union(Lc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($o),Oc.subVectors(this.max,$o),Fs.subVectors(t.a,$o),Hs.subVectors(t.b,$o),Gs.subVectors(t.c,$o),ir.subVectors(Hs,Fs),ar.subVectors(Gs,Hs),Nr.subVectors(Fs,Gs);let i=[0,-ir.z,ir.y,0,-ar.z,ar.y,0,-Nr.z,Nr.y,ir.z,0,-ir.x,ar.z,0,-ar.x,Nr.z,0,-Nr.x,-ir.y,ir.x,0,-ar.y,ar.x,0,-Nr.y,Nr.x,0];return!th(i,Fs,Hs,Gs,Oc)||(i=[1,0,0,0,1,0,0,0,1],!th(i,Fs,Hs,Gs,Oc))?!1:(Pc.crossVectors(ir,ar),i=[Pc.x,Pc.y,Pc.z],th(i,Fs,Hs,Gs,Oc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Sa=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Ni=new Q,Lc=new ml,Fs=new Q,Hs=new Q,Gs=new Q,ir=new Q,ar=new Q,Nr=new Q,$o=new Q,Oc=new Q,Pc=new Q,Lr=new Q;function th(s,t,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){Lr.fromArray(s,c);const p=l.x*Math.abs(Lr.x)+l.y*Math.abs(Lr.y)+l.z*Math.abs(Lr.z),m=t.dot(Lr),h=i.dot(Lr),v=r.dot(Lr);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const gn=new Q,zc=new xe;let VM=0;class Oi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=cp,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)zc.fromBufferAttribute(this,i),zc.applyMatrix3(t),this.setXY(i,zc.x,zc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Wi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=qe(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Wi(i,this.array)),i}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Wi(i,this.array)),i}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Wi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Wi(i,this.array)),i}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array),l=qe(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cp&&(t.usage=this.usage),t}}class Kv extends Oi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Qv extends Oi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class yn extends Oi{constructor(t,i,r){super(new Float32Array(t),i,r)}}const kM=new ml,tl=new Q,eh=new Q;class yu{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):kM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tl.subVectors(t,this.center);const i=tl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(tl,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tl.copy(t.center).add(eh)),this.expandByPoint(tl.copy(t.center).sub(eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let XM=0;const xi=new en,nh=new An,Vs=new Q,ci=new ml,el=new ml,Tn=new Q;class Wn extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bM(t)?Qv:Kv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new me().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,r){return xi.makeTranslation(t,i,r),this.applyMatrix4(xi),this}scale(t,i,r){return xi.makeScale(t,i,r),this.applyMatrix4(xi),this}lookAt(t){return nh.lookAt(t),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new yn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const r=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];el.setFromBufferAttribute(p),this.morphTargetsRelative?(Tn.addVectors(ci.min,el.min),ci.expandByPoint(Tn),Tn.addVectors(ci.max,el.max),ci.expandByPoint(Tn)):(ci.expandByPoint(el.min),ci.expandByPoint(el.max))}ci.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)Tn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Tn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)Tn.fromBufferAttribute(p,h),m&&(Vs.fromBufferAttribute(t,h),Tn.add(Vs)),l=Math.max(l,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let b=0;b<r.count;b++)p[b]=new Q,m[b]=new Q;const h=new Q,v=new Q,y=new Q,g=new xe,M=new xe,T=new xe,C=new Q,S=new Q;function x(b,D,ct){h.fromBufferAttribute(r,b),v.fromBufferAttribute(r,D),y.fromBufferAttribute(r,ct),g.fromBufferAttribute(c,b),M.fromBufferAttribute(c,D),T.fromBufferAttribute(c,ct),v.sub(h),y.sub(h),M.sub(g),T.sub(g);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(C.copy(v).multiplyScalar(T.y).addScaledVector(y,-M.y).multiplyScalar(H),S.copy(y).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(H),p[b].add(C),p[D].add(C),p[ct].add(C),m[b].add(S),m[D].add(S),m[ct].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let b=0,D=w.length;b<D;++b){const ct=w[b],H=ct.start,j=ct.count;for(let J=H,et=H+j;J<et;J+=3)x(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const L=new Q,N=new Q,F=new Q,B=new Q;function z(b){F.fromBufferAttribute(l,b),B.copy(F);const D=p[b];L.copy(D),L.sub(F.multiplyScalar(F.dot(D))).normalize(),N.crossVectors(B,D);const H=N.dot(m[b])<0?-1:1;d.setXYZW(b,L.x,L.y,L.z,H)}for(let b=0,D=w.length;b<D;++b){const ct=w[b],H=ct.start,j=ct.count;for(let J=H,et=H+j;J<et;J+=3)z(t.getX(J+0)),z(t.getX(J+1)),z(t.getX(J+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const l=new Q,c=new Q,d=new Q,p=new Q,m=new Q,h=new Q,v=new Q,y=new Q;if(t)for(let g=0,M=t.count;g<M;g+=3){const T=t.getX(g+0),C=t.getX(g+1),S=t.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,S),v.subVectors(d,c),y.subVectors(l,c),v.cross(y),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,S),p.add(v),m.add(v),h.add(v),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),v.subVectors(d,c),y.subVectors(l,c),v.cross(y),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Tn.fromBufferAttribute(t,i),Tn.normalize(),t.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(p,m){const h=p.array,v=p.itemSize,y=p.normalized,g=new h.constructor(m.length*v);let M=0,T=0;for(let C=0,S=m.length;C<S;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*v;for(let x=0;x<v;x++)g[T++]=h[M++]}return new Oi(g,v,y)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Wn,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let v=0,y=h.length;v<y;v++){const g=h[v],M=t(g,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let y=0,g=h.length;y<g;y++){const M=h[y];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const c=t.morphAttributes;for(const h in c){const v=[],y=c[h];for(let g=0,M=y.length;g<M;g++)v.push(y[g].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,v=d.length;h<v;h++){const y=d[h];this.addGroup(y.start,y.count,y.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class WM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=cp,this.updateRanges=[],this.version=0,this.uuid=fr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new Q;class mu{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)kn.fromBufferAttribute(this,i),kn.applyMatrix4(t),this.setXYZ(i,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)kn.fromBufferAttribute(this,i),kn.applyNormalMatrix(t),this.setXYZ(i,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)kn.fromBufferAttribute(this,i),kn.transformDirection(t),this.setXYZ(i,kn.x,kn.y,kn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Wi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=qe(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Wi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Wi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Wi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Wi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array),l=qe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){hu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Oi(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new mu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){hu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let qM=0;class jr extends ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=Ks,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=yh,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(r.blending=this.blending),this.side!==dr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Sh&&(r.blendSrc=this.blendSrc),this.blendDst!==yh&&(r.blendDst=this.blendDst),this.blendEquation!==Hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==E_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Jv extends jr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ks;const nl=new Q,Xs=new Q,Ws=new Q,qs=new xe,il=new xe,$v=new en,Ic=new Q,al=new Q,Bc=new Q,B_=new xe,ih=new xe,F_=new xe;class YM extends An{constructor(t=new Jv){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new Wn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new WM(i,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new mu(r,3,0,!1)),ks.setAttribute("uv",new mu(r,2,3,!1))}this.geometry=ks,this.material=t,this.center=new xe(.5,.5),this.count=1}raycast(t,i){t.camera===null&&we('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),$v.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-Ws.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const d=this.center;Fc(Ic.set(-.5,-.5,0),Ws,d,Xs,l,c),Fc(al.set(.5,-.5,0),Ws,d,Xs,l,c),Fc(Bc.set(.5,.5,0),Ws,d,Xs,l,c),B_.set(0,0),ih.set(1,0),F_.set(1,1);let p=t.ray.intersectTriangle(Ic,al,Bc,!1,nl);if(p===null&&(Fc(al.set(-.5,.5,0),Ws,d,Xs,l,c),ih.set(0,1),p=t.ray.intersectTriangle(Ic,Bc,al,!1,nl),p===null))return;const m=t.ray.origin.distanceTo(nl);m<t.near||m>t.far||i.push({distance:m,point:nl.clone(),uv:Mi.getInterpolation(nl,Ic,al,Bc,B_,ih,F_,new xe),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Fc(s,t,i,r,l,c){qs.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(il.x=c*qs.x-l*qs.y,il.y=l*qs.x+c*qs.y):il.copy(qs),s.copy(t),s.x+=il.x,s.y+=il.y,s.applyMatrix4($v)}const ya=new Q,ah=new Q,Hc=new Q,rr=new Q,rh=new Q,Gc=new Q,sh=new Q;class tx{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ya)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ya.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ah.copy(t).add(i).multiplyScalar(.5),Hc.copy(i).sub(t).normalize(),rr.copy(this.origin).sub(ah);const c=t.distanceTo(i)*.5,d=-this.direction.dot(Hc),p=rr.dot(this.direction),m=-rr.dot(Hc),h=rr.lengthSq(),v=Math.abs(1-d*d);let y,g,M,T;if(v>0)if(y=d*m-p,g=d*p-m,T=c*v,y>=0)if(g>=-T)if(g<=T){const C=1/v;y*=C,g*=C,M=y*(y+d*g+2*p)+g*(d*y+g+2*m)+h}else g=c,y=Math.max(0,-(d*g+p)),M=-y*y+g*(g+2*m)+h;else g=-c,y=Math.max(0,-(d*g+p)),M=-y*y+g*(g+2*m)+h;else g<=-T?(y=Math.max(0,-(-d*c+p)),g=y>0?-c:Math.min(Math.max(-c,-m),c),M=-y*y+g*(g+2*m)+h):g<=T?(y=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+h):(y=Math.max(0,-(d*c+p)),g=y>0?c:Math.min(Math.max(-c,-m),c),M=-y*y+g*(g+2*m)+h);else g=d>0?-c:c,y=Math.max(0,-(d*g+p)),M=-y*y+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(ah).addScaledVector(Hc,g),M}intersectSphere(t,i){ya.subVectors(t.center,this.origin);const r=ya.dot(this.direction),l=ya.dot(ya)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,p,m;const h=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,g=this.origin;return h>=0?(r=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(r=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),v>=0?(c=(t.min.y-g.y)*v,d=(t.max.y-g.y)*v):(c=(t.max.y-g.y)*v,d=(t.min.y-g.y)*v),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),y>=0?(p=(t.min.z-g.z)*y,m=(t.max.z-g.z)*y):(p=(t.max.z-g.z)*y,m=(t.min.z-g.z)*y),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ya)!==null}intersectTriangle(t,i,r,l,c){rh.subVectors(i,t),Gc.subVectors(r,t),sh.crossVectors(rh,Gc);let d=this.direction.dot(sh),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;rr.subVectors(this.origin,t);const m=p*this.direction.dot(Gc.crossVectors(rr,Gc));if(m<0)return null;const h=p*this.direction.dot(rh.cross(rr));if(h<0||m+h>d)return null;const v=-p*rr.dot(sh);return v<0?null:this.at(v/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gu extends jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const H_=new en,Or=new tx,Vc=new yu,G_=new Q,kc=new Q,Xc=new Q,Wc=new Q,oh=new Q,qc=new Q,V_=new Q,Yc=new Q;class Pn extends An{constructor(t=new Wn,i=new gu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){qc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const v=p[m],y=c[m];v!==0&&(oh.fromBufferAttribute(y,t),d?qc.addScaledVector(oh,v):qc.addScaledVector(oh.sub(i),v))}i.add(qc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Vc.copy(r.boundingSphere),Vc.applyMatrix4(c),Or.copy(t.ray).recast(t.near),!(Vc.containsPoint(Or.origin)===!1&&(Or.intersectSphere(Vc,G_)===null||Or.origin.distanceToSquared(G_)>(t.far-t.near)**2))&&(H_.copy(c).invert(),Or.copy(t.ray).applyMatrix4(H_),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Or)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,y=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let T=0,C=g.length;T<C;T++){const S=g[T],x=d[S.materialIndex],w=Math.max(S.start,M.start),L=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let N=w,F=L;N<F;N+=3){const B=p.getX(N),z=p.getX(N+1),b=p.getX(N+2);l=jc(this,x,t,r,h,v,y,B,z,b),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let S=T,x=C;S<x;S+=3){const w=p.getX(S),L=p.getX(S+1),N=p.getX(S+2);l=jc(this,d,t,r,h,v,y,w,L,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,C=g.length;T<C;T++){const S=g[T],x=d[S.materialIndex],w=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let N=w,F=L;N<F;N+=3){const B=N,z=N+1,b=N+2;l=jc(this,x,t,r,h,v,y,B,z,b),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=T,x=C;S<x;S+=3){const w=S,L=S+1,N=S+2;l=jc(this,d,t,r,h,v,y,w,L,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function jM(s,t,i,r,l,c,d,p){let m;if(t.side===Jn?m=r.intersectTriangle(d,c,l,!0,p):m=r.intersectTriangle(l,c,d,t.side===dr,p),m===null)return null;Yc.copy(p),Yc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Yc);return h<i.near||h>i.far?null:{distance:h,point:Yc.clone(),object:s}}function jc(s,t,i,r,l,c,d,p,m,h){s.getVertexPosition(p,kc),s.getVertexPosition(m,Xc),s.getVertexPosition(h,Wc);const v=jM(s,t,i,r,kc,Xc,Wc,V_);if(v){const y=new Q;Mi.getBarycoord(V_,kc,Xc,Wc,y),l&&(v.uv=Mi.getInterpolatedAttribute(l,p,m,h,y,new xe)),c&&(v.uv1=Mi.getInterpolatedAttribute(c,p,m,h,y,new xe)),d&&(v.normal=Mi.getInterpolatedAttribute(d,p,m,h,y,new Q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new Q,materialIndex:0};Mi.getNormal(kc,Xc,Wc,g.normal),v.face=g,v.barycoord=y}return v}class ZM extends In{constructor(t=null,i=1,r=1,l,c,d,p,m,h=Un,v=Un,y,g){super(null,d,p,m,h,v,l,c,y,g),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lh=new Q,KM=new Q,QM=new me;class Fr{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=lh.subVectors(r,i).cross(KM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(lh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||QM.getNormalMatrix(t),l=this.coplanarPoint(lh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new yu,JM=new xe(.5,.5),Zc=new Q;class Ap{constructor(t=new Fr,i=new Fr,r=new Fr,l=new Fr,c=new Fr,d=new Fr){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Yi,r=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],m=c[2],h=c[3],v=c[4],y=c[5],g=c[6],M=c[7],T=c[8],C=c[9],S=c[10],x=c[11],w=c[12],L=c[13],N=c[14],F=c[15];if(l[0].setComponents(h-d,M-v,x-T,F-w).normalize(),l[1].setComponents(h+d,M+v,x+T,F+w).normalize(),l[2].setComponents(h+p,M+y,x+C,F+L).normalize(),l[3].setComponents(h-p,M-y,x-C,F-L).normalize(),r)l[4].setComponents(m,g,S,N).normalize(),l[5].setComponents(h-m,M-g,x-S,F-N).normalize();else if(l[4].setComponents(h-m,M-g,x-S,F-N).normalize(),i===Yi)l[5].setComponents(h+m,M+g,x+S,F+N).normalize();else if(i===hl)l[5].setComponents(m,g,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(t){Pr.center.set(0,0,0);const i=JM.distanceTo(t.center);return Pr.radius=.7071067811865476+i,Pr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Zc.x=l.normal.x>0?t.max.x:t.min.x,Zc.y=l.normal.y>0?t.max.y:t.min.y,Zc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Zc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rp extends jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _u=new Q,vu=new Q,k_=new en,rl=new tx,Kc=new yu,ch=new Q,X_=new Q;class ex extends An{constructor(t=new Wn,i=new Rp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)_u.fromBufferAttribute(i,l-1),vu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=_u.distanceTo(vu);t.setAttribute("lineDistance",new yn(r,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Kc.copy(r.boundingSphere),Kc.applyMatrix4(l),Kc.radius+=c,t.ray.intersectsSphere(Kc)===!1)return;k_.copy(l).invert(),rl.copy(t.ray).applyMatrix4(k_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const M=Math.max(0,d.start),T=Math.min(v.count,d.start+d.count);for(let C=M,S=T-1;C<S;C+=h){const x=v.getX(C),w=v.getX(C+1),L=Qc(this,t,rl,m,x,w,C);L&&i.push(L)}if(this.isLineLoop){const C=v.getX(T-1),S=v.getX(M),x=Qc(this,t,rl,m,C,S,T-1);x&&i.push(x)}}else{const M=Math.max(0,d.start),T=Math.min(g.count,d.start+d.count);for(let C=M,S=T-1;C<S;C+=h){const x=Qc(this,t,rl,m,C,C+1,C);x&&i.push(x)}if(this.isLineLoop){const C=Qc(this,t,rl,m,T-1,M,T-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Qc(s,t,i,r,l,c,d){const p=s.geometry.attributes.position;if(_u.fromBufferAttribute(p,l),vu.fromBufferAttribute(p,c),i.distanceSqToSegment(_u,vu,ch,X_)>r)return;ch.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(ch);if(!(h<t.near||h>t.far))return{distance:h,point:X_.clone().applyMatrix4(s.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:s}}const W_=new Q,q_=new Q;class $M extends ex{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)W_.fromBufferAttribute(i,l),q_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+W_.distanceTo(q_);t.setAttribute("lineDistance",new yn(r,1))}else re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nx extends In{constructor(t=[],i=Wr,r,l,c,d,p,m,h,v){super(t,i,r,l,c,d,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tb extends In{constructor(t,i,r,l,c,d,p,m,h){super(t,i,r,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pl extends In{constructor(t,i,r=Ki,l,c,d,p=Un,m=Un,h,v=Ca,y=1){if(v!==Ca&&v!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:y};super(g,l,c,d,p,m,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class eb extends pl{constructor(t,i=Ki,r=Wr,l,c,d=Un,p=Un,m,h=Ca){const v={width:t,height:t,depth:1},y=[v,v,v,v,v,v];super(t,t,i,r,l,c,d,p,m,h),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ix extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class qr extends Wn{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],v=[],y=[];let g=0,M=0;T("z","y","x",-1,-1,r,i,t,d,c,0),T("z","y","x",1,-1,r,i,-t,d,c,1),T("x","z","y",1,1,t,r,i,l,d,2),T("x","z","y",1,-1,t,r,-i,l,d,3),T("x","y","z",1,-1,t,i,r,l,c,4),T("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new yn(h,3)),this.setAttribute("normal",new yn(v,3)),this.setAttribute("uv",new yn(y,2));function T(C,S,x,w,L,N,F,B,z,b,D){const ct=N/z,H=F/b,j=N/2,J=F/2,et=B/2,Z=z+1,U=b+1;let I=0,ot=0;const dt=new Q;for(let st=0;st<U;st++){const P=st*H-J;for(let q=0;q<Z;q++){const vt=q*ct-j;dt[C]=vt*w,dt[S]=P*L,dt[x]=et,h.push(dt.x,dt.y,dt.z),dt[C]=0,dt[S]=0,dt[x]=B>0?1:-1,v.push(dt.x,dt.y,dt.z),y.push(q/z),y.push(1-st/b),I+=1}}for(let st=0;st<b;st++)for(let P=0;P<z;P++){const q=g+P+Z*st,vt=g+P+Z*(st+1),At=g+(P+1)+Z*(st+1),wt=g+(P+1)+Z*st;m.push(q,vt,wt),m.push(vt,At,wt),ot+=6}p.addGroup(M,ot,D),M+=ot,g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Js extends Wn{constructor(t=1,i=1,r=1,l=32,c=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const v=[],y=[],g=[],M=[];let T=0;const C=[],S=r/2;let x=0;w(),d===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new yn(y,3)),this.setAttribute("normal",new yn(g,3)),this.setAttribute("uv",new yn(M,2));function w(){const N=new Q,F=new Q;let B=0;const z=(i-t)/r;for(let b=0;b<=c;b++){const D=[],ct=b/c,H=ct*(i-t)+t;for(let j=0;j<=l;j++){const J=j/l,et=J*m+p,Z=Math.sin(et),U=Math.cos(et);F.x=H*Z,F.y=-ct*r+S,F.z=H*U,y.push(F.x,F.y,F.z),N.set(Z,z,U).normalize(),g.push(N.x,N.y,N.z),M.push(J,1-ct),D.push(T++)}C.push(D)}for(let b=0;b<l;b++)for(let D=0;D<c;D++){const ct=C[D][b],H=C[D+1][b],j=C[D+1][b+1],J=C[D][b+1];(t>0||D!==0)&&(v.push(ct,H,J),B+=3),(i>0||D!==c-1)&&(v.push(H,j,J),B+=3)}h.addGroup(x,B,0),x+=B}function L(N){const F=T,B=new xe,z=new Q;let b=0;const D=N===!0?t:i,ct=N===!0?1:-1;for(let j=1;j<=l;j++)y.push(0,S*ct,0),g.push(0,ct,0),M.push(.5,.5),T++;const H=T;for(let j=0;j<=l;j++){const et=j/l*m+p,Z=Math.cos(et),U=Math.sin(et);z.x=D*U,z.y=S*ct,z.z=D*Z,y.push(z.x,z.y,z.z),g.push(0,ct,0),B.x=Z*.5+.5,B.y=U*.5*ct+.5,M.push(B.x,B.y),T++}for(let j=0;j<l;j++){const J=F+j,et=H+j;N===!0?v.push(et,et+1,J):v.push(et+1,et,J),b+=3}h.addGroup(x,b,N===!0?1:2),x+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cp extends Js{constructor(t=1,i=1,r=32,l=1,c=!1,d=0,p=Math.PI*2){super(0,t,i,r,l,c,d,p),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:p}}static fromJSON(t){return new Cp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mu extends Wn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,v=m+1,y=t/p,g=i/m,M=[],T=[],C=[],S=[];for(let x=0;x<v;x++){const w=x*g-d;for(let L=0;L<h;L++){const N=L*y-c;T.push(N,-w,0),C.push(0,0,1),S.push(L/p),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let w=0;w<p;w++){const L=w+h*x,N=w+h*(x+1),F=w+1+h*(x+1),B=w+1+h*x;M.push(L,N,B),M.push(N,F,B)}this.setIndex(M),this.setAttribute("position",new yn(T,3)),this.setAttribute("normal",new yn(C,3)),this.setAttribute("uv",new yn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mu(t.width,t.height,t.widthSegments,t.heightSegments)}}class wp extends Wn{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+p,Math.PI);let h=0;const v=[],y=new Q,g=new Q,M=[],T=[],C=[],S=[];for(let x=0;x<=r;x++){const w=[],L=x/r;let N=0;x===0&&d===0?N=.5/i:x===r&&m===Math.PI&&(N=-.5/i);for(let F=0;F<=i;F++){const B=F/i;y.x=-t*Math.cos(l+B*c)*Math.sin(d+L*p),y.y=t*Math.cos(d+L*p),y.z=t*Math.sin(l+B*c)*Math.sin(d+L*p),T.push(y.x,y.y,y.z),g.copy(y).normalize(),C.push(g.x,g.y,g.z),S.push(B+N,1-L),w.push(h++)}v.push(w)}for(let x=0;x<r;x++)for(let w=0;w<i;w++){const L=v[x][w+1],N=v[x][w],F=v[x+1][w],B=v[x+1][w+1];(x!==0||d>0)&&M.push(L,N,B),(x!==r-1||m<Math.PI)&&M.push(N,F,B)}this.setIndex(M),this.setAttribute("position",new yn(T,3)),this.setAttribute("normal",new yn(C,3)),this.setAttribute("uv",new yn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function io(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Xn(s){const t={};for(let i=0;i<s.length;i++){const r=io(s[i]);for(const l in r)t[l]=r[l]}return t}function nb(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function ax(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const ib={clone:io,merge:Xn};var ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ab,this.fragmentShader=rb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=io(t.uniforms),this.uniformsGroups=nb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class sb extends Qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jc extends jr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Me(16777215),this.specular=new Me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wv,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=gp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ob extends jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lb extends jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class rx extends An{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const uh=new en,Y_=new Q,j_=new Q;class cb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ap,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Y_.setFromMatrixPosition(t.matrixWorld),i.position.copy(Y_),j_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(j_),i.updateMatrixWorld(),uh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===hl||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(uh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $c=new Q,tu=new Yr,Vi=new Q;class sx extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($c,tu,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($c,tu,Vi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose($c,tu,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($c,tu,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const sr=new Q,Z_=new xe,K_=new xe;class yi extends sx{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=up*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return up*2*Math.atan(Math.tan(Bd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-t/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(sr.x,sr.y).multiplyScalar(-t/sr.z)}getViewSize(t,i){return this.getViewBounds(t,Z_,K_),i.subVectors(K_,Z_)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Bd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Dp extends sx{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ub extends cb{constructor(){super(new Dp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fb extends rx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new ub}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class db extends rx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ys=-90,js=1;class hb extends An{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Ys,js,t,i);l.layers=this.layers,this.add(l);const c=new yi(Ys,js,t,i);c.layers=this.layers,this.add(c);const d=new yi(Ys,js,t,i);d.layers=this.layers,this.add(d);const p=new yi(Ys,js,t,i);p.layers=this.layers,this.add(p);const m=new yi(Ys,js,t,i);m.layers=this.layers,this.add(m);const h=new yi(Ys,js,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(t===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===hl)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,v]=this.children,y=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(r,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(r,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(r,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(y,g,M),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class pb extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class mb extends $M{constructor(t=10,i=10,r=4473924,l=8947848){r=new Me(r),l=new Me(l);const c=i/2,d=t/i,p=t/2,m=[],h=[];for(let g=0,M=0,T=-p;g<=i;g++,T+=d){m.push(-p,0,T,p,0,T),m.push(T,0,-p,T,0,p);const C=g===c?r:l;C.toArray(h,M),M+=3,C.toArray(h,M),M+=3,C.toArray(h,M),M+=3,C.toArray(h,M),M+=3}const v=new Wn;v.setAttribute("position",new yn(m,3)),v.setAttribute("color",new yn(h,3));const y=new Rp({vertexColors:!0,toneMapped:!1});super(v,y),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Q_(s,t,i,r){const l=gb(r);switch(i){case Vv:return s*t;case Xv:return s*t/l.components*l.byteLength;case Sp:return s*t/l.components*l.byteLength;case eo:return s*t*2/l.components*l.byteLength;case yp:return s*t*2/l.components*l.byteLength;case kv:return s*t*3/l.components*l.byteLength;case Li:return s*t*4/l.components*l.byteLength;case Mp:return s*t*4/l.components*l.byteLength;case su:case ou:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case lu:case cu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nh:case Oh:return Math.max(s,16)*Math.max(t,8)/4;case Uh:case Lh:return Math.max(s,8)*Math.max(t,8)/2;case Ph:case zh:case Bh:case Fh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ih:case Hh:case Gh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case qh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Yh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case jh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Kh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case $h:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case tp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ep:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case np:case ip:case ap:return Math.ceil(s/4)*Math.ceil(t/4)*16;case rp:case sp:return Math.ceil(s/4)*Math.ceil(t/4)*8;case op:case lp:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function gb(s){switch(s){case ui:case Bv:return{byteLength:1,components:1};case fl:case Fv:case Ra:return{byteLength:2,components:1};case vp:case xp:return{byteLength:2,components:4};case Ki:case _p:case qi:return{byteLength:4,components:1};case Hv:case Gv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mp}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ox(){let s=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function _b(s){const t=new WeakMap;function i(p,m){const h=p.array,v=p.usage,y=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,v),p.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:y}}function r(p,m,h){const v=m.array,y=m.updateRanges;if(s.bindBuffer(h,p),y.length===0)s.bufferSubData(h,0,v);else{y.sort((M,T)=>M.start-T.start);let g=0;for(let M=1;M<y.length;M++){const T=y[g],C=y[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,y[g]=C)}y.length=g+1;for(let M=0,T=y.length;M<T;M++){const C=y[M];s.bufferSubData(h,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(s.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=t.get(p);(!v||v.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ab=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Db=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ub=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Gb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Qb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$b=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_E=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,OE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,YE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$E=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,t1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,n1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,i1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,o1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,f1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,g1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,T1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,A1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,N1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,z1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,B1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,F1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,V1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:vb,alphahash_pars_fragment:xb,alphamap_fragment:Sb,alphamap_pars_fragment:yb,alphatest_fragment:Mb,alphatest_pars_fragment:bb,aomap_fragment:Eb,aomap_pars_fragment:Tb,batching_pars_vertex:Ab,batching_vertex:Rb,begin_vertex:Cb,beginnormal_vertex:wb,bsdfs:Db,iridescence_fragment:Ub,bumpmap_pars_fragment:Nb,clipping_planes_fragment:Lb,clipping_planes_pars_fragment:Ob,clipping_planes_pars_vertex:Pb,clipping_planes_vertex:zb,color_fragment:Ib,color_pars_fragment:Bb,color_pars_vertex:Fb,color_vertex:Hb,common:Gb,cube_uv_reflection_fragment:Vb,defaultnormal_vertex:kb,displacementmap_pars_vertex:Xb,displacementmap_vertex:Wb,emissivemap_fragment:qb,emissivemap_pars_fragment:Yb,colorspace_fragment:jb,colorspace_pars_fragment:Zb,envmap_fragment:Kb,envmap_common_pars_fragment:Qb,envmap_pars_fragment:Jb,envmap_pars_vertex:$b,envmap_physical_pars_fragment:uE,envmap_vertex:tE,fog_vertex:eE,fog_pars_vertex:nE,fog_fragment:iE,fog_pars_fragment:aE,gradientmap_pars_fragment:rE,lightmap_pars_fragment:sE,lights_lambert_fragment:oE,lights_lambert_pars_fragment:lE,lights_pars_begin:cE,lights_toon_fragment:fE,lights_toon_pars_fragment:dE,lights_phong_fragment:hE,lights_phong_pars_fragment:pE,lights_physical_fragment:mE,lights_physical_pars_fragment:gE,lights_fragment_begin:_E,lights_fragment_maps:vE,lights_fragment_end:xE,logdepthbuf_fragment:SE,logdepthbuf_pars_fragment:yE,logdepthbuf_pars_vertex:ME,logdepthbuf_vertex:bE,map_fragment:EE,map_pars_fragment:TE,map_particle_fragment:AE,map_particle_pars_fragment:RE,metalnessmap_fragment:CE,metalnessmap_pars_fragment:wE,morphinstance_vertex:DE,morphcolor_vertex:UE,morphnormal_vertex:NE,morphtarget_pars_vertex:LE,morphtarget_vertex:OE,normal_fragment_begin:PE,normal_fragment_maps:zE,normal_pars_fragment:IE,normal_pars_vertex:BE,normal_vertex:FE,normalmap_pars_fragment:HE,clearcoat_normal_fragment_begin:GE,clearcoat_normal_fragment_maps:VE,clearcoat_pars_fragment:kE,iridescence_pars_fragment:XE,opaque_fragment:WE,packing:qE,premultiplied_alpha_fragment:YE,project_vertex:jE,dithering_fragment:ZE,dithering_pars_fragment:KE,roughnessmap_fragment:QE,roughnessmap_pars_fragment:JE,shadowmap_pars_fragment:$E,shadowmap_pars_vertex:t1,shadowmap_vertex:e1,shadowmask_pars_fragment:n1,skinbase_vertex:i1,skinning_pars_vertex:a1,skinning_vertex:r1,skinnormal_vertex:s1,specularmap_fragment:o1,specularmap_pars_fragment:l1,tonemapping_fragment:c1,tonemapping_pars_fragment:u1,transmission_fragment:f1,transmission_pars_fragment:d1,uv_pars_fragment:h1,uv_pars_vertex:p1,uv_vertex:m1,worldpos_vertex:g1,background_vert:_1,background_frag:v1,backgroundCube_vert:x1,backgroundCube_frag:S1,cube_vert:y1,cube_frag:M1,depth_vert:b1,depth_frag:E1,distance_vert:T1,distance_frag:A1,equirect_vert:R1,equirect_frag:C1,linedashed_vert:w1,linedashed_frag:D1,meshbasic_vert:U1,meshbasic_frag:N1,meshlambert_vert:L1,meshlambert_frag:O1,meshmatcap_vert:P1,meshmatcap_frag:z1,meshnormal_vert:I1,meshnormal_frag:B1,meshphong_vert:F1,meshphong_frag:H1,meshphysical_vert:G1,meshphysical_frag:V1,meshtoon_vert:k1,meshtoon_frag:X1,points_vert:W1,points_frag:q1,shadow_vert:Y1,shadow_frag:j1,sprite_vert:Z1,sprite_frag:K1},Ot={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Xi={basic:{uniforms:Xn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Xn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Xn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Xn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Xn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Me(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Xn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Xn([Ot.points,Ot.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Xn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Xn([Ot.common,Ot.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Xn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Xn([Ot.sprite,Ot.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:Xn([Ot.common,Ot.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:Xn([Ot.lights,Ot.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Xi.physical={uniforms:Xn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const eu={r:0,b:0,g:0},zr=new Pi,Q1=new en;function J1(s,t,i,r,l,c){const d=new Me(0);let p=l===!0?0:1,m,h,v=null,y=0,g=null;function M(w){let L=w.isScene===!0?w.background:null;if(L&&L.isTexture){const N=w.backgroundBlurriness>0;L=t.get(L,N)}return L}function T(w){let L=!1;const N=M(w);N===null?S(d,p):N&&N.isColor&&(S(N,1),L=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(w,L){const N=M(L);N&&(N.isCubeTexture||N.mapping===Su)?(h===void 0&&(h=new Pn(new qr(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:io(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),zr.copy(L.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Q1.makeRotationFromEuler(zr)),h.material.toneMapped=De.getTransfer(N.colorSpace)!==Ve,(v!==N||y!==N.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=N,y=N.version,g=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Pn(new Mu(2,2),new Qi({name:"BackgroundMaterial",uniforms:io(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=De.getTransfer(N.colorSpace)!==Ve,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||y!==N.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=N,y=N.version,g=s.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function S(w,L){w.getRGB(eu,ax(s)),i.buffers.color.setClear(eu.r,eu.g,eu.b,L,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,L=1){d.set(w),p=L,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,S(d,p)},render:T,addToRenderList:C,dispose:x}}function $1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,d=!1;function p(H,j,J,et,Z){let U=!1;const I=y(H,et,J,j);c!==I&&(c=I,h(c.object)),U=M(H,et,J,Z),U&&T(H,et,J,Z),Z!==null&&t.update(Z,s.ELEMENT_ARRAY_BUFFER),(U||d)&&(d=!1,N(H,j,J,et),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function m(){return s.createVertexArray()}function h(H){return s.bindVertexArray(H)}function v(H){return s.deleteVertexArray(H)}function y(H,j,J,et){const Z=et.wireframe===!0;let U=r[j.id];U===void 0&&(U={},r[j.id]=U);const I=H.isInstancedMesh===!0?H.id:0;let ot=U[I];ot===void 0&&(ot={},U[I]=ot);let dt=ot[J.id];dt===void 0&&(dt={},ot[J.id]=dt);let st=dt[Z];return st===void 0&&(st=g(m()),dt[Z]=st),st}function g(H){const j=[],J=[],et=[];for(let Z=0;Z<i;Z++)j[Z]=0,J[Z]=0,et[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:J,attributeDivisors:et,object:H,attributes:{},index:null}}function M(H,j,J,et){const Z=c.attributes,U=j.attributes;let I=0;const ot=J.getAttributes();for(const dt in ot)if(ot[dt].location>=0){const P=Z[dt];let q=U[dt];if(q===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(q=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(q=H.instanceColor)),P===void 0||P.attribute!==q||q&&P.data!==q.data)return!0;I++}return c.attributesNum!==I||c.index!==et}function T(H,j,J,et){const Z={},U=j.attributes;let I=0;const ot=J.getAttributes();for(const dt in ot)if(ot[dt].location>=0){let P=U[dt];P===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(P=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(P=H.instanceColor));const q={};q.attribute=P,P&&P.data&&(q.data=P.data),Z[dt]=q,I++}c.attributes=Z,c.attributesNum=I,c.index=et}function C(){const H=c.newAttributes;for(let j=0,J=H.length;j<J;j++)H[j]=0}function S(H){x(H,0)}function x(H,j){const J=c.newAttributes,et=c.enabledAttributes,Z=c.attributeDivisors;J[H]=1,et[H]===0&&(s.enableVertexAttribArray(H),et[H]=1),Z[H]!==j&&(s.vertexAttribDivisor(H,j),Z[H]=j)}function w(){const H=c.newAttributes,j=c.enabledAttributes;for(let J=0,et=j.length;J<et;J++)j[J]!==H[J]&&(s.disableVertexAttribArray(J),j[J]=0)}function L(H,j,J,et,Z,U,I){I===!0?s.vertexAttribIPointer(H,j,J,Z,U):s.vertexAttribPointer(H,j,J,et,Z,U)}function N(H,j,J,et){C();const Z=et.attributes,U=J.getAttributes(),I=j.defaultAttributeValues;for(const ot in U){const dt=U[ot];if(dt.location>=0){let st=Z[ot];if(st===void 0&&(ot==="instanceMatrix"&&H.instanceMatrix&&(st=H.instanceMatrix),ot==="instanceColor"&&H.instanceColor&&(st=H.instanceColor)),st!==void 0){const P=st.normalized,q=st.itemSize,vt=t.get(st);if(vt===void 0)continue;const At=vt.buffer,wt=vt.type,$=vt.bytesPerElement,_t=wt===s.INT||wt===s.UNSIGNED_INT||st.gpuType===_p;if(st.isInterleavedBufferAttribute){const Mt=st.data,Ut=Mt.stride,Qt=st.offset;if(Mt.isInstancedInterleavedBuffer){for(let $t=0;$t<dt.locationSize;$t++)x(dt.location+$t,Mt.meshPerAttribute);H.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let $t=0;$t<dt.locationSize;$t++)S(dt.location+$t);s.bindBuffer(s.ARRAY_BUFFER,At);for(let $t=0;$t<dt.locationSize;$t++)L(dt.location+$t,q/dt.locationSize,wt,P,Ut*$,(Qt+q/dt.locationSize*$t)*$,_t)}else{if(st.isInstancedBufferAttribute){for(let Mt=0;Mt<dt.locationSize;Mt++)x(dt.location+Mt,st.meshPerAttribute);H.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Mt=0;Mt<dt.locationSize;Mt++)S(dt.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,At);for(let Mt=0;Mt<dt.locationSize;Mt++)L(dt.location+Mt,q/dt.locationSize,wt,P,q*$,q/dt.locationSize*Mt*$,_t)}}else if(I!==void 0){const P=I[ot];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(dt.location,P);break;case 3:s.vertexAttrib3fv(dt.location,P);break;case 4:s.vertexAttrib4fv(dt.location,P);break;default:s.vertexAttrib1fv(dt.location,P)}}}}w()}function F(){D();for(const H in r){const j=r[H];for(const J in j){const et=j[J];for(const Z in et){const U=et[Z];for(const I in U)v(U[I].object),delete U[I];delete et[Z]}}delete r[H]}}function B(H){if(r[H.id]===void 0)return;const j=r[H.id];for(const J in j){const et=j[J];for(const Z in et){const U=et[Z];for(const I in U)v(U[I].object),delete U[I];delete et[Z]}}delete r[H.id]}function z(H){for(const j in r){const J=r[j];for(const et in J){const Z=J[et];if(Z[H.id]===void 0)continue;const U=Z[H.id];for(const I in U)v(U[I].object),delete U[I];delete Z[H.id]}}}function b(H){for(const j in r){const J=r[j],et=H.isInstancedMesh===!0?H.id:0,Z=J[et];if(Z!==void 0){for(const U in Z){const I=Z[U];for(const ot in I)v(I[ot].object),delete I[ot];delete Z[U]}delete J[et],Object.keys(J).length===0&&delete r[j]}}}function D(){ct(),d=!0,c!==l&&(c=l,h(c.object))}function ct(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:ct,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfObject:b,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:S,disableUnusedAttributes:w}}function tT(s,t,i){let r;function l(h){r=h}function c(h,v){s.drawArrays(r,h,v),i.update(v,r,1)}function d(h,v,y){y!==0&&(s.drawArraysInstanced(r,h,v,y),i.update(v,r,y))}function p(h,v,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,v,0,y);let M=0;for(let T=0;T<y;T++)M+=v[T];i.update(M,r,1)}function m(h,v,y,g){if(y===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<h.length;T++)d(h[T],v[T],g[T]);else{M.multiDrawArraysInstancedWEBGL(r,h,0,v,0,g,0,y);let T=0;for(let C=0;C<y;C++)T+=v[C]*g[C];i.update(T,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function eT(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Li&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const b=z===Ra&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ui&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==qi&&!b)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=m(h);v!==h&&(re("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const y=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),B=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:w,maxVaryings:L,maxFragmentUniforms:N,maxSamples:F,samples:B}}function nT(s){const t=this;let i=null,r=0,l=!1,c=!1;const d=new Fr,p=new me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const M=y.length!==0||g||r!==0||l;return l=g,r=y.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,g){i=v(y,g,0)},this.setState=function(y,g,M){const T=y.clippingPlanes,C=y.clipIntersection,S=y.clipShadows,x=s.get(y);if(!l||T===null||T.length===0||c&&!S)c?v(null):h();else{const w=c?0:r,L=w*4;let N=x.clippingState||null;m.value=N,N=v(T,g,L,M);for(let F=0;F!==L;++F)N[F]=i[F];x.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=w}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(y,g,M,T){const C=y!==null?y.length:0;let S=null;if(C!==0){if(S=m.value,T!==!0||S===null){const x=M+C*4,w=g.matrixWorldInverse;p.getNormalMatrix(w),(S===null||S.length<x)&&(S=new Float32Array(x));for(let L=0,N=M;L!==C;++L,N+=4)d.copy(y[L]).applyMatrix4(w,p),d.normal.toArray(S,N),S[N+3]=d.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,S}}const ur=4,J_=[.125,.215,.35,.446,.526,.582],Gr=20,iT=256,sl=new Dp,$_=new Me;let fh=null,dh=0,hh=0,ph=!1;const aT=new Q;class tv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:p=aT}=c;fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(fh,dh,hh),this._renderer.xr.enabled=ph,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Wr||t.mapping===to?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ra,format:Li,colorSpace:no,depthBuffer:!1},l=ev(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ev(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rT(c)),this._blurMaterial=oT(c,t,i),this._ggxMaterial=sT(c,t,i)}return l}_compileMaterial(t){const i=new Pn(new Wn,t);this._renderer.compile(i,sl)}_sceneToCubeUV(t,i,r,l,c){const m=new yi(90,1,i,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,M=y.toneMapping;y.getClearColor($_),y.toneMapping=ji,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(l),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pn(new qr,new gu({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let x=!1;const w=t.background;w?w.isColor&&(S.color.copy(w),t.background=null,x=!0):(S.color.copy($_),x=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(m.up.set(0,h[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[L],c.y,c.z)):N===1?(m.up.set(0,0,h[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[L],c.z)):(m.up.set(0,h[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[L]));const F=this._cubeSize;Zs(l,N*F,L>2?F:0,F,F),y.setRenderTarget(l),x&&y.render(C,m),y.render(t,m)}y.toneMapping=M,y.autoClear=g,t.background=w}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Wr||t.mapping===to;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=iv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Zs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,sl)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),y=Math.sqrt(h*h-v*v),g=0+h*1.25,M=y*g,{_lodMax:T}=this,C=this._sizeLods[r],S=3*C*(r>T-ur?r-T+ur:0),x=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=T-i,Zs(c,S,x,3*C,2*C),l.setRenderTarget(c),l.render(p,sl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-r,Zs(t,S,x,3*C,2*C),l.setRenderTarget(t),l.render(p,sl)}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const v=3,y=this._lodMeshes[l];y.material=h;const g=h.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Gr-1),C=c/T,S=isFinite(c)?1+Math.floor(v*C):Gr;S>Gr&&re(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Gr}`);const x=[];let w=0;for(let z=0;z<Gr;++z){const b=z/C,D=Math.exp(-b*b/2);x.push(D),z===0?w+=D:z<S&&(w+=2*D)}for(let z=0;z<x.length;z++)x[z]=x[z]/w;g.envMap.value=t.texture,g.samples.value=S,g.weights.value=x,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:L}=this;g.dTheta.value=T,g.mipInt.value=L-r;const N=this._sizeLods[l],F=3*N*(l>L-ur?l-L+ur:0),B=4*(this._cubeSize-N);Zs(i,F,B,3*N,2*N),m.setRenderTarget(i),m.render(y,sl)}}function rT(s){const t=[],i=[],r=[];let l=s;const c=s-ur+1+J_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);t.push(p);let m=1/p;d>s-ur?m=J_[d-s+ur-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),v=-h,y=1+h,g=[v,v,y,v,y,y,v,v,y,y,v,y],M=6,T=6,C=3,S=2,x=1,w=new Float32Array(C*T*M),L=new Float32Array(S*T*M),N=new Float32Array(x*T*M);for(let B=0;B<M;B++){const z=B%3*2/3-1,b=B>2?0:-1,D=[z,b,0,z+2/3,b,0,z+2/3,b+1,0,z,b,0,z+2/3,b+1,0,z,b+1,0];w.set(D,C*T*B),L.set(g,S*T*B);const ct=[B,B,B,B,B,B];N.set(ct,x*T*B)}const F=new Wn;F.setAttribute("position",new Oi(w,C)),F.setAttribute("uv",new Oi(L,S)),F.setAttribute("faceIndex",new Oi(N,x)),r.push(new Pn(F,null)),l>ur&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function ev(s,t,i){const r=new Zi(s,t,i);return r.texture.mapping=Su,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Zs(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function sT(s,t,i){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function oT(s,t,i){const r=new Float32Array(Gr),l=new Q(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function nv(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function iv(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function bu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class lx extends Zi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new nx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new qr(5,5,5),c=new Qi({name:"CubemapFromEquirect",uniforms:io(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:Ta});c.uniforms.tEquirect.value=i;const d=new Pn(l,c),p=i.minFilter;return i.minFilter===Vr&&(i.minFilter=zn),new hb(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}function lT(s){let t=new WeakMap,i=new WeakMap,r=null;function l(g,M=!1){return g==null?null:M?d(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Pd||M===zd)if(t.has(g)){const T=t.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new lx(T.height);return C.fromEquirectangularTexture(s,g),t.set(g,C),g.addEventListener("dispose",h),p(C.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,T=M===Pd||M===zd,C=M===Wr||M===to;if(T||C){let S=i.get(g);const x=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new tv(s)),S=T?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const w=g.image;return T&&w&&w.height>0||C&&w&&m(w)?(r===null&&(r=new tv(s)),S=T?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function p(g,M){return M===Pd?g.mapping=Wr:M===zd&&(g.mapping=to),g}function m(g){let M=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&M++;return M===T}function h(g){const M=g.target;M.removeEventListener("dispose",h);const T=t.get(M);T!==void 0&&(t.delete(M),T.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function y(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:y}}function cT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&pu("WebGLRenderer: "+r+" extension not supported."),l}}}function uT(s,t,i,r){const l={},c=new WeakMap;function d(y){const g=y.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",d),delete l[g.id];const M=c.get(g);M&&(t.remove(M),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(y,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(y){const g=y.attributes;for(const M in g)t.update(g[M],s.ARRAY_BUFFER)}function h(y){const g=[],M=y.index,T=y.attributes.position;let C=0;if(T===void 0)return;if(M!==null){const w=M.array;C=M.version;for(let L=0,N=w.length;L<N;L+=3){const F=w[L+0],B=w[L+1],z=w[L+2];g.push(F,B,B,z,z,F)}}else{const w=T.array;C=T.version;for(let L=0,N=w.length/3-1;L<N;L+=3){const F=L+0,B=L+1,z=L+2;g.push(F,B,B,z,z,F)}}const S=new(T.count>=65535?Qv:Kv)(g,1);S.version=C;const x=c.get(y);x&&t.remove(x),c.set(y,S)}function v(y){const g=c.get(y);if(g){const M=y.index;M!==null&&g.version<M.version&&h(y)}else h(y);return c.get(y)}return{get:p,update:m,getWireframeAttribute:v}}function fT(s,t,i){let r;function l(g){r=g}let c,d;function p(g){c=g.type,d=g.bytesPerElement}function m(g,M){s.drawElements(r,M,c,g*d),i.update(M,r,1)}function h(g,M,T){T!==0&&(s.drawElementsInstanced(r,M,c,g*d,T),i.update(M,r,T))}function v(g,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,g,0,T);let S=0;for(let x=0;x<T;x++)S+=M[x];i.update(S,r,1)}function y(g,M,T,C){if(T===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<g.length;x++)h(g[x]/d,M[x],C[x]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,g,0,C,0,T);let x=0;for(let w=0;w<T;w++)x+=M[w]*C[w];i.update(x,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function dT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,p){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:we("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function hT(s,t,i){const r=new WeakMap,l=new sn;function c(d,p,m){const h=d.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=v!==void 0?v.length:0;let g=r.get(p);if(g===void 0||g.count!==y){let ct=function(){b.dispose(),r.delete(p),p.removeEventListener("dispose",ct)};var M=ct;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],w=p.morphAttributes.normal||[],L=p.morphAttributes.color||[];let N=0;T===!0&&(N=1),C===!0&&(N=2),S===!0&&(N=3);let F=p.attributes.position.count*N,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const z=new Float32Array(F*B*4*y),b=new Yv(z,F,B,y);b.type=qi,b.needsUpdate=!0;const D=N*4;for(let H=0;H<y;H++){const j=x[H],J=w[H],et=L[H],Z=F*B*4*H;for(let U=0;U<j.count;U++){const I=U*D;T===!0&&(l.fromBufferAttribute(j,U),z[Z+I+0]=l.x,z[Z+I+1]=l.y,z[Z+I+2]=l.z,z[Z+I+3]=0),C===!0&&(l.fromBufferAttribute(J,U),z[Z+I+4]=l.x,z[Z+I+5]=l.y,z[Z+I+6]=l.z,z[Z+I+7]=0),S===!0&&(l.fromBufferAttribute(et,U),z[Z+I+8]=l.x,z[Z+I+9]=l.y,z[Z+I+10]=l.z,z[Z+I+11]=et.itemSize===4?l.w:1)}}g={count:y,texture:b,size:new xe(F,B)},r.set(p,g),p.addEventListener("dispose",ct)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let T=0;for(let S=0;S<h.length;S++)T+=h[S];const C=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function pT(s,t,i,r,l){let c=new WeakMap;function d(h){const v=l.render.frame,y=h.geometry,g=t.get(h,y);if(c.get(g)!==v&&(t.update(g),c.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==v&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==v&&(M.update(),c.set(M,v))}return g}function p(){c=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:p}}const mT={[Dv]:"LINEAR_TONE_MAPPING",[Uv]:"REINHARD_TONE_MAPPING",[Nv]:"CINEON_TONE_MAPPING",[Lv]:"ACES_FILMIC_TONE_MAPPING",[Pv]:"AGX_TONE_MAPPING",[zv]:"NEUTRAL_TONE_MAPPING",[Ov]:"CUSTOM_TONE_MAPPING"};function gT(s,t,i,r,l){const c=new Zi(t,i,{type:s,depthBuffer:r,stencilBuffer:l}),d=new Zi(t,i,{type:Ra,depthBuffer:!1,stencilBuffer:!1}),p=new Wn;p.setAttribute("position",new yn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new yn([0,2,0,0,2,0],2));const m=new sb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Pn(p,m),v=new Dp(-1,1,1,-1,0,1);let y=null,g=null,M=!1,T,C=null,S=[],x=!1;this.setSize=function(w,L){c.setSize(w,L),d.setSize(w,L);for(let N=0;N<S.length;N++){const F=S[N];F.setSize&&F.setSize(w,L)}},this.setEffects=function(w){S=w,x=S.length>0&&S[0].isRenderPass===!0;const L=c.width,N=c.height;for(let F=0;F<S.length;F++){const B=S[F];B.setSize&&B.setSize(L,N)}},this.begin=function(w,L){if(M||w.toneMapping===ji&&S.length===0)return!1;if(C=L,L!==null){const N=L.width,F=L.height;(c.width!==N||c.height!==F)&&this.setSize(N,F)}return x===!1&&w.setRenderTarget(c),T=w.toneMapping,w.toneMapping=ji,!0},this.hasRenderPass=function(){return x},this.end=function(w,L){w.toneMapping=T,M=!0;let N=c,F=d;for(let B=0;B<S.length;B++){const z=S[B];if(z.enabled!==!1&&(z.render(w,F,N,L),z.needsSwap!==!1)){const b=N;N=F,F=b}}if(y!==w.outputColorSpace||g!==w.toneMapping){y=w.outputColorSpace,g=w.toneMapping,m.defines={},De.getTransfer(y)===Ve&&(m.defines.SRGB_TRANSFER="");const B=mT[g];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,w.setRenderTarget(C),w.render(h,v),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const cx=new In,fp=new pl(1,1),ux=new Yv,fx=new LM,dx=new nx,av=[],rv=[],sv=new Float32Array(16),ov=new Float32Array(9),lv=new Float32Array(4);function ro(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=av[l];if(c===void 0&&(c=new Float32Array(l),av[l]=c),t!==0){r.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,s[d].toArray(c,p)}return c}function Mn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function bn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Eu(s,t){let i=rv[t];i===void 0&&(i=new Int32Array(t),rv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function _T(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function vT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Mn(i,t))return;s.uniform2fv(this.addr,t),bn(i,t)}}function xT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Mn(i,t))return;s.uniform3fv(this.addr,t),bn(i,t)}}function ST(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Mn(i,t))return;s.uniform4fv(this.addr,t),bn(i,t)}}function yT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Mn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),bn(i,t)}else{if(Mn(i,r))return;lv.set(r),s.uniformMatrix2fv(this.addr,!1,lv),bn(i,r)}}function MT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Mn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),bn(i,t)}else{if(Mn(i,r))return;ov.set(r),s.uniformMatrix3fv(this.addr,!1,ov),bn(i,r)}}function bT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Mn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),bn(i,t)}else{if(Mn(i,r))return;sv.set(r),s.uniformMatrix4fv(this.addr,!1,sv),bn(i,r)}}function ET(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function TT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Mn(i,t))return;s.uniform2iv(this.addr,t),bn(i,t)}}function AT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Mn(i,t))return;s.uniform3iv(this.addr,t),bn(i,t)}}function RT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Mn(i,t))return;s.uniform4iv(this.addr,t),bn(i,t)}}function CT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function wT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Mn(i,t))return;s.uniform2uiv(this.addr,t),bn(i,t)}}function DT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Mn(i,t))return;s.uniform3uiv(this.addr,t),bn(i,t)}}function UT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Mn(i,t))return;s.uniform4uiv(this.addr,t),bn(i,t)}}function NT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(fp.compareFunction=i.isReversedDepthBuffer()?Ep:bp,c=fp):c=cx,i.setTexture2D(t||c,l)}function LT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||fx,l)}function OT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||dx,l)}function PT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||ux,l)}function zT(s){switch(s){case 5126:return _T;case 35664:return vT;case 35665:return xT;case 35666:return ST;case 35674:return yT;case 35675:return MT;case 35676:return bT;case 5124:case 35670:return ET;case 35667:case 35671:return TT;case 35668:case 35672:return AT;case 35669:case 35673:return RT;case 5125:return CT;case 36294:return wT;case 36295:return DT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return PT}}function IT(s,t){s.uniform1fv(this.addr,t)}function BT(s,t){const i=ro(t,this.size,2);s.uniform2fv(this.addr,i)}function FT(s,t){const i=ro(t,this.size,3);s.uniform3fv(this.addr,i)}function HT(s,t){const i=ro(t,this.size,4);s.uniform4fv(this.addr,i)}function GT(s,t){const i=ro(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function VT(s,t){const i=ro(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function kT(s,t){const i=ro(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function XT(s,t){s.uniform1iv(this.addr,t)}function WT(s,t){s.uniform2iv(this.addr,t)}function qT(s,t){s.uniform3iv(this.addr,t)}function YT(s,t){s.uniform4iv(this.addr,t)}function jT(s,t){s.uniform1uiv(this.addr,t)}function ZT(s,t){s.uniform2uiv(this.addr,t)}function KT(s,t){s.uniform3uiv(this.addr,t)}function QT(s,t){s.uniform4uiv(this.addr,t)}function JT(s,t,i){const r=this.cache,l=t.length,c=Eu(i,l);Mn(r,c)||(s.uniform1iv(this.addr,c),bn(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=fp:d=cx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,c[p])}function $T(s,t,i){const r=this.cache,l=t.length,c=Eu(i,l);Mn(r,c)||(s.uniform1iv(this.addr,c),bn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||fx,c[d])}function tA(s,t,i){const r=this.cache,l=t.length,c=Eu(i,l);Mn(r,c)||(s.uniform1iv(this.addr,c),bn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||dx,c[d])}function eA(s,t,i){const r=this.cache,l=t.length,c=Eu(i,l);Mn(r,c)||(s.uniform1iv(this.addr,c),bn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||ux,c[d])}function nA(s){switch(s){case 5126:return IT;case 35664:return BT;case 35665:return FT;case 35666:return HT;case 35674:return GT;case 35675:return VT;case 35676:return kT;case 5124:case 35670:return XT;case 35667:case 35671:return WT;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return jT;case 36294:return ZT;case 36295:return KT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return tA;case 36289:case 36303:case 36311:case 36292:return eA}}class iA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=zT(i.type)}}class aA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=nA(i.type)}}class rA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],r)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function cv(s,t){s.seq.push(t),s.map[t.id]=t}function sA(s,t,i){const r=s.name,l=r.length;for(mh.lastIndex=0;;){const c=mh.exec(r),d=mh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){cv(i,h===void 0?new iA(p,s,t):new aA(p,s,t));break}else{let y=i.map[p];y===void 0&&(y=new rA(p),cv(i,y)),i=y}}}class uu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);sA(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function uv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const oA=37297;let lA=0;function cA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;r.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const fv=new me;function uA(s){De._getMatrix(fv,De.workingColorSpace,s);const t=`mat3( ${fv.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(s)){case fu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function dv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+cA(s.getShaderSource(t),p)}else return c}function fA(s,t){const i=uA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const dA={[Dv]:"Linear",[Uv]:"Reinhard",[Nv]:"Cineon",[Lv]:"ACESFilmic",[Pv]:"AgX",[zv]:"Neutral",[Ov]:"Custom"};function hA(s,t){const i=dA[t];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const nu=new Q;function pA(){De.getLuminanceCoefficients(nu);const s=nu.x.toFixed(4),t=nu.y.toFixed(4),i=nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function gA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function _A(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),d=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:s.getAttribLocation(t,d),locationSize:p}}return i}function ul(s){return s!==""}function hv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vA=/^[ \t]*#include +<([\w\d./]+)>/gm;function dp(s){return s.replace(vA,SA)}const xA=new Map;function SA(s,t){let i=_e[t];if(i===void 0){const r=xA.get(t);if(r!==void 0)i=_e[r],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return dp(i)}const yA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mv(s){return s.replace(yA,MA)}function MA(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function gv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const bA={[ru]:"SHADOWMAP_TYPE_PCF",[cl]:"SHADOWMAP_TYPE_VSM"};function EA(s){return bA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const TA={[Wr]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE",[Su]:"ENVMAP_TYPE_CUBE_UV"};function AA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":TA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const RA={[to]:"ENVMAP_MODE_REFRACTION"};function CA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":RA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wA={[gp]:"ENVMAP_BLENDING_MULTIPLY",[dM]:"ENVMAP_BLENDING_MIX",[hM]:"ENVMAP_BLENDING_ADD"};function DA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":wA[s.combine]||"ENVMAP_BLENDING_NONE"}function UA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function NA(s,t,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=EA(i),h=AA(i),v=CA(i),y=DA(i),g=UA(i),M=mA(i),T=gA(c),C=l.createProgram();let S,x,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ul).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ul).join(`
`),x.length>0&&(x+=`
`)):(S=[gv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),x=[gv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?_e.tonemapping_pars_fragment:"",i.toneMapping!==ji?hA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,fA("linearToOutputTexel",i.outputColorSpace),pA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ul).join(`
`)),d=dp(d),d=hv(d,i),d=pv(d,i),p=dp(p),p=hv(p,i),p=pv(p,i),d=mv(d),p=mv(p),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===T_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===T_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=w+S+d,N=w+x+p,F=uv(l,l.VERTEX_SHADER,L),B=uv(l,l.FRAGMENT_SHADER,N);l.attachShader(C,F),l.attachShader(C,B),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(H){if(s.debug.checkShaderErrors){const j=l.getProgramInfoLog(C)||"",J=l.getShaderInfoLog(F)||"",et=l.getShaderInfoLog(B)||"",Z=j.trim(),U=J.trim(),I=et.trim();let ot=!0,dt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ot=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,F,B);else{const st=dv(l,F,"vertex"),P=dv(l,B,"fragment");we("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Z+`
`+st+`
`+P)}else Z!==""?re("WebGLProgram: Program Info Log:",Z):(U===""||I==="")&&(dt=!1);dt&&(H.diagnostics={runnable:ot,programLog:Z,vertexShader:{log:U,prefix:S},fragmentShader:{log:I,prefix:x}})}l.deleteShader(F),l.deleteShader(B),b=new uu(l,C),D=_A(l,C)}let b;this.getUniforms=function(){return b===void 0&&z(this),b};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let ct=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ct===!1&&(ct=l.getProgramParameter(C,oA)),ct},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=lA++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=B,this}let LA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new PA(t),i.set(t,r)),r}}class PA{constructor(t){this.id=LA++,this.code=t,this.usedTimes=0}}function zA(s,t,i,r,l,c){const d=new jv,p=new OA,m=new Set,h=[],v=new Map,y=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function C(b,D,ct,H,j){const J=H.fog,et=j.geometry,Z=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,I=t.get(b.envMap||Z,U),ot=I&&I.mapping===Su?I.image.height:null,dt=M[b.type];b.precision!==null&&(g=r.getMaxPrecision(b.precision),g!==b.precision&&re("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const st=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,P=st!==void 0?st.length:0;let q=0;et.morphAttributes.position!==void 0&&(q=1),et.morphAttributes.normal!==void 0&&(q=2),et.morphAttributes.color!==void 0&&(q=3);let vt,At,wt,$;if(dt){const Ce=Xi[dt];vt=Ce.vertexShader,At=Ce.fragmentShader}else vt=b.vertexShader,At=b.fragmentShader,p.update(b),wt=p.getVertexShaderID(b),$=p.getFragmentShaderID(b);const _t=s.getRenderTarget(),Mt=s.state.buffers.depth.getReversed(),Ut=j.isInstancedMesh===!0,Qt=j.isBatchedMesh===!0,$t=!!b.map,Ye=!!b.matcap,ge=!!I,ue=!!b.aoMap,Oe=!!b.lightMap,ce=!!b.bumpMap,nn=!!b.normalMap,V=!!b.displacementMap,Qe=!!b.emissiveMap,Re=!!b.metalnessMap,ze=!!b.roughnessMap,jt=b.anisotropy>0,O=b.clearcoat>0,E=b.dispersion>0,Y=b.iridescence>0,mt=b.sheen>0,yt=b.transmission>0,ht=jt&&!!b.anisotropyMap,Wt=O&&!!b.clearcoatMap,Dt=O&&!!b.clearcoatNormalMap,Jt=O&&!!b.clearcoatRoughnessMap,ne=Y&&!!b.iridescenceMap,Tt=Y&&!!b.iridescenceThicknessMap,bt=mt&&!!b.sheenColorMap,zt=mt&&!!b.sheenRoughnessMap,Pt=!!b.specularMap,It=!!b.specularColorMap,de=!!b.specularIntensityMap,W=yt&&!!b.transmissionMap,Ct=yt&&!!b.thicknessMap,Rt=!!b.gradientMap,Bt=!!b.alphaMap,Et=b.alphaTest>0,ft=!!b.alphaHash,Ht=!!b.extensions;let ae=ji;b.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ae=s.toneMapping);const Fe={shaderID:dt,shaderType:b.type,shaderName:b.name,vertexShader:vt,fragmentShader:At,defines:b.defines,customVertexShaderID:wt,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&j._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&j.instanceColor!==null,instancingMorph:Ut&&j.morphTexture!==null,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:no,alphaToCoverage:!!b.alphaToCoverage,map:$t,matcap:Ye,envMap:ge,envMapMode:ge&&I.mapping,envMapCubeUVHeight:ot,aoMap:ue,lightMap:Oe,bumpMap:ce,normalMap:nn,displacementMap:V,emissiveMap:Qe,normalMapObjectSpace:nn&&b.normalMapType===gM,normalMapTangentSpace:nn&&b.normalMapType===Wv,metalnessMap:Re,roughnessMap:ze,anisotropy:jt,anisotropyMap:ht,clearcoat:O,clearcoatMap:Wt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Jt,dispersion:E,iridescence:Y,iridescenceMap:ne,iridescenceThicknessMap:Tt,sheen:mt,sheenColorMap:bt,sheenRoughnessMap:zt,specularMap:Pt,specularColorMap:It,specularIntensityMap:de,transmission:yt,transmissionMap:W,thicknessMap:Ct,gradientMap:Rt,opaque:b.transparent===!1&&b.blending===Ks&&b.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:ft,combine:b.combine,mapUv:$t&&T(b.map.channel),aoMapUv:ue&&T(b.aoMap.channel),lightMapUv:Oe&&T(b.lightMap.channel),bumpMapUv:ce&&T(b.bumpMap.channel),normalMapUv:nn&&T(b.normalMap.channel),displacementMapUv:V&&T(b.displacementMap.channel),emissiveMapUv:Qe&&T(b.emissiveMap.channel),metalnessMapUv:Re&&T(b.metalnessMap.channel),roughnessMapUv:ze&&T(b.roughnessMap.channel),anisotropyMapUv:ht&&T(b.anisotropyMap.channel),clearcoatMapUv:Wt&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:zt&&T(b.sheenRoughnessMap.channel),specularMapUv:Pt&&T(b.specularMap.channel),specularColorMapUv:It&&T(b.specularColorMap.channel),specularIntensityMapUv:de&&T(b.specularIntensityMap.channel),transmissionMapUv:W&&T(b.transmissionMap.channel),thicknessMapUv:Ct&&T(b.thicknessMap.channel),alphaMapUv:Bt&&T(b.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(nn||jt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!et.attributes.uv&&($t||Bt),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||et.attributes.normal===void 0&&nn===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Mt,skinning:j.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:q,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&ct.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:$t&&b.map.isVideoTexture===!0&&De.getTransfer(b.map.colorSpace)===Ve,decodeVideoTextureEmissive:Qe&&b.emissiveMap.isVideoTexture===!0&&De.getTransfer(b.emissiveMap.colorSpace)===Ve,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ba,flipSided:b.side===Jn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ht&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&b.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Fe.vertexUv1s=m.has(1),Fe.vertexUv2s=m.has(2),Fe.vertexUv3s=m.has(3),m.clear(),Fe}function S(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const ct in b.defines)D.push(ct),D.push(b.defines[ct]);return b.isRawShaderMaterial===!1&&(x(D,b),w(D,b),D.push(s.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function x(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function w(b,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),b.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),b.push(d.mask)}function L(b){const D=M[b.type];let ct;if(D){const H=Xi[D];ct=ib.clone(H.uniforms)}else ct=b.uniforms;return ct}function N(b,D){let ct=v.get(D);return ct!==void 0?++ct.usedTimes:(ct=new NA(s,D,b,l),h.push(ct),v.set(D,ct)),ct}function F(b){if(--b.usedTimes===0){const D=h.indexOf(b);h[D]=h[h.length-1],h.pop(),v.delete(b.cacheKey),b.destroy()}}function B(b){p.remove(b)}function z(){p.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:L,acquireProgram:N,releaseProgram:F,releaseShaderCache:B,programs:h,dispose:z}}function IA(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function r(d){s.delete(d)}function l(d,p,m){s.get(d)[p]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function BA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function _v(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function vv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,T,C,S,x){let w=s[t];return w===void 0?(w={id:g.id,object:g,geometry:M,material:T,materialVariant:d(g),groupOrder:C,renderOrder:g.renderOrder,z:S,group:x},s[t]=w):(w.id=g.id,w.object=g,w.geometry=M,w.material=T,w.materialVariant=d(g),w.groupOrder=C,w.renderOrder=g.renderOrder,w.z=S,w.group=x),t++,w}function m(g,M,T,C,S,x){const w=p(g,M,T,C,S,x);T.transmission>0?r.push(w):T.transparent===!0?l.push(w):i.push(w)}function h(g,M,T,C,S,x){const w=p(g,M,T,C,S,x);T.transmission>0?r.unshift(w):T.transparent===!0?l.unshift(w):i.unshift(w)}function v(g,M){i.length>1&&i.sort(g||BA),r.length>1&&r.sort(M||_v),l.length>1&&l.sort(M||_v)}function y(){for(let g=t,M=s.length;g<M;g++){const T=s[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:y,sort:v}}function FA(){let s=new WeakMap;function t(r,l){const c=s.get(r);let d;return c===void 0?(d=new vv,s.set(r,[d])):l>=c.length?(d=new vv,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function HA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new Me};break;case"SpotLight":i={position:new Q,direction:new Q,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new Me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":i={color:new Me,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[t.id]=i,i}}}function GA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let VA=0;function kA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function XA(s){const t=new HA,i=GA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new Q);const l=new Q,c=new en,d=new en;function p(h){let v=0,y=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,T=0,C=0,S=0,x=0,w=0,L=0,N=0,F=0,B=0,z=0;h.sort(kA);for(let D=0,ct=h.length;D<ct;D++){const H=h[D],j=H.color,J=H.intensity,et=H.distance;let Z=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===eo?Z=H.shadow.map.texture:Z=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=j.r*J,y+=j.g*J,g+=j.b*J;else if(H.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(H.sh.coefficients[U],J);z++}else if(H.isDirectionalLight){const U=t.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const I=H.shadow,ot=i.get(H);ot.shadowIntensity=I.intensity,ot.shadowBias=I.bias,ot.shadowNormalBias=I.normalBias,ot.shadowRadius=I.radius,ot.shadowMapSize=I.mapSize,r.directionalShadow[M]=ot,r.directionalShadowMap[M]=Z,r.directionalShadowMatrix[M]=H.shadow.matrix,w++}r.directional[M]=U,M++}else if(H.isSpotLight){const U=t.get(H);U.position.setFromMatrixPosition(H.matrixWorld),U.color.copy(j).multiplyScalar(J),U.distance=et,U.coneCos=Math.cos(H.angle),U.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),U.decay=H.decay,r.spot[C]=U;const I=H.shadow;if(H.map&&(r.spotLightMap[F]=H.map,F++,I.updateMatrices(H),H.castShadow&&B++),r.spotLightMatrix[C]=I.matrix,H.castShadow){const ot=i.get(H);ot.shadowIntensity=I.intensity,ot.shadowBias=I.bias,ot.shadowNormalBias=I.normalBias,ot.shadowRadius=I.radius,ot.shadowMapSize=I.mapSize,r.spotShadow[C]=ot,r.spotShadowMap[C]=Z,N++}C++}else if(H.isRectAreaLight){const U=t.get(H);U.color.copy(j).multiplyScalar(J),U.halfWidth.set(H.width*.5,0,0),U.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=U,S++}else if(H.isPointLight){const U=t.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity),U.distance=H.distance,U.decay=H.decay,H.castShadow){const I=H.shadow,ot=i.get(H);ot.shadowIntensity=I.intensity,ot.shadowBias=I.bias,ot.shadowNormalBias=I.normalBias,ot.shadowRadius=I.radius,ot.shadowMapSize=I.mapSize,ot.shadowCameraNear=I.camera.near,ot.shadowCameraFar=I.camera.far,r.pointShadow[T]=ot,r.pointShadowMap[T]=Z,r.pointShadowMatrix[T]=H.shadow.matrix,L++}r.point[T]=U,T++}else if(H.isHemisphereLight){const U=t.get(H);U.skyColor.copy(H.color).multiplyScalar(J),U.groundColor.copy(H.groundColor).multiplyScalar(J),r.hemi[x]=U,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=g;const b=r.hash;(b.directionalLength!==M||b.pointLength!==T||b.spotLength!==C||b.rectAreaLength!==S||b.hemiLength!==x||b.numDirectionalShadows!==w||b.numPointShadows!==L||b.numSpotShadows!==N||b.numSpotMaps!==F||b.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=T,r.hemi.length=x,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=N+F-B,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=z,b.directionalLength=M,b.pointLength=T,b.spotLength=C,b.rectAreaLength=S,b.hemiLength=x,b.numDirectionalShadows=w,b.numPointShadows=L,b.numSpotShadows=N,b.numSpotMaps=F,b.numLightProbes=z,r.version=VA++)}function m(h,v){let y=0,g=0,M=0,T=0,C=0;const S=v.matrixWorldInverse;for(let x=0,w=h.length;x<w;x++){const L=h[x];if(L.isDirectionalLight){const N=r.directional[y];N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),y++}else if(L.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const N=r.rectArea[T];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(S),d.identity(),c.copy(L.matrixWorld),c.premultiply(S),d.extractRotation(c),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),T++}else if(L.isPointLight){const N=r.point[g];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(S),g++}else if(L.isHemisphereLight){const N=r.hemi[C];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(S),C++}}}return{setup:p,setupView:m,state:r}}function xv(s){const t=new XA(s),i=[],r=[];function l(v){h.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function d(v){r.push(v)}function p(){t.setup(i)}function m(v){t.setupView(i,v)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function WA(s){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new xv(s),t.set(l,[p])):c>=d.length?(p=new xv(s),d.push(p)):p=d[c],p}function r(){t=new WeakMap}return{get:i,dispose:r}}const qA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jA=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],ZA=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Sv=new en,ol=new Q,gh=new Q;function KA(s,t,i){let r=new Ap;const l=new xe,c=new xe,d=new sn,p=new ob,m=new lb,h={},v=i.maxTextureSize,y={[dr]:Jn,[Jn]:dr,[ba]:ba},g=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:qA,fragmentShader:YA}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const T=new Wn;T.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Pn(T,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let x=this.type;this.render=function(B,z,b){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;this.type===Yy&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ru);const D=s.getRenderTarget(),ct=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),j=s.state;j.setBlending(Ta),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const J=x!==this.type;J&&z.traverse(function(et){et.material&&(Array.isArray(et.material)?et.material.forEach(Z=>Z.needsUpdate=!0):et.material.needsUpdate=!0)});for(let et=0,Z=B.length;et<Z;et++){const U=B[et],I=U.shadow;if(I===void 0){re("WebGLShadowMap:",U,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const ot=I.getFrameExtents();l.multiply(ot),c.copy(I.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ot.x),l.x=c.x*ot.x,I.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ot.y),l.y=c.y*ot.y,I.mapSize.y=c.y));const dt=s.state.buffers.depth.getReversed();if(I.camera._reversedDepth=dt,I.map===null||J===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===cl){if(U.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Zi(l.x,l.y,{format:eo,type:Ra,minFilter:zn,magFilter:zn,generateMipmaps:!1}),I.map.texture.name=U.name+".shadowMap",I.map.depthTexture=new pl(l.x,l.y,qi),I.map.depthTexture.name=U.name+".shadowMapDepth",I.map.depthTexture.format=Ca,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Un,I.map.depthTexture.magFilter=Un}else U.isPointLight?(I.map=new lx(l.x),I.map.depthTexture=new eb(l.x,Ki)):(I.map=new Zi(l.x,l.y),I.map.depthTexture=new pl(l.x,l.y,Ki)),I.map.depthTexture.name=U.name+".shadowMap",I.map.depthTexture.format=Ca,this.type===ru?(I.map.depthTexture.compareFunction=dt?Ep:bp,I.map.depthTexture.minFilter=zn,I.map.depthTexture.magFilter=zn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Un,I.map.depthTexture.magFilter=Un);I.camera.updateProjectionMatrix()}const st=I.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<st;P++){if(I.map.isWebGLCubeRenderTarget)s.setRenderTarget(I.map,P),s.clear();else{P===0&&(s.setRenderTarget(I.map),s.clear());const q=I.getViewport(P);d.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),j.viewport(d)}if(U.isPointLight){const q=I.camera,vt=I.matrix,At=U.distance||q.far;At!==q.far&&(q.far=At,q.updateProjectionMatrix()),ol.setFromMatrixPosition(U.matrixWorld),q.position.copy(ol),gh.copy(q.position),gh.add(jA[P]),q.up.copy(ZA[P]),q.lookAt(gh),q.updateMatrixWorld(),vt.makeTranslation(-ol.x,-ol.y,-ol.z),Sv.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Sv,q.coordinateSystem,q.reversedDepth)}else I.updateMatrices(U);r=I.getFrustum(),N(z,b,I.camera,U,this.type)}I.isPointLightShadow!==!0&&this.type===cl&&w(I,b),I.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(D,ct,H)};function w(B,z){const b=t.update(C);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Zi(l.x,l.y,{format:eo,type:Ra})),g.uniforms.shadow_pass.value=B.map.depthTexture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(z,null,b,g,C,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(z,null,b,M,C,null)}function L(B,z,b,D){let ct=null;const H=b.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)ct=H;else if(ct=b.isPointLight===!0?m:p,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const j=ct.uuid,J=z.uuid;let et=h[j];et===void 0&&(et={},h[j]=et);let Z=et[J];Z===void 0&&(Z=ct.clone(),et[J]=Z,z.addEventListener("dispose",F)),ct=Z}if(ct.visible=z.visible,ct.wireframe=z.wireframe,D===cl?ct.side=z.shadowSide!==null?z.shadowSide:z.side:ct.side=z.shadowSide!==null?z.shadowSide:y[z.side],ct.alphaMap=z.alphaMap,ct.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,ct.map=z.map,ct.clipShadows=z.clipShadows,ct.clippingPlanes=z.clippingPlanes,ct.clipIntersection=z.clipIntersection,ct.displacementMap=z.displacementMap,ct.displacementScale=z.displacementScale,ct.displacementBias=z.displacementBias,ct.wireframeLinewidth=z.wireframeLinewidth,ct.linewidth=z.linewidth,b.isPointLight===!0&&ct.isMeshDistanceMaterial===!0){const j=s.properties.get(ct);j.light=b}return ct}function N(B,z,b,D,ct){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&ct===cl)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,B.matrixWorld);const J=t.update(B),et=B.material;if(Array.isArray(et)){const Z=J.groups;for(let U=0,I=Z.length;U<I;U++){const ot=Z[U],dt=et[ot.materialIndex];if(dt&&dt.visible){const st=L(B,dt,D,ct);B.onBeforeShadow(s,B,z,b,J,st,ot),s.renderBufferDirect(b,null,J,st,B,ot),B.onAfterShadow(s,B,z,b,J,st,ot)}}}else if(et.visible){const Z=L(B,et,D,ct);B.onBeforeShadow(s,B,z,b,J,Z,null),s.renderBufferDirect(b,null,J,Z,B,null),B.onAfterShadow(s,B,z,b,J,Z,null)}}const j=B.children;for(let J=0,et=j.length;J<et;J++)N(j[J],z,b,D,ct)}function F(B){B.target.removeEventListener("dispose",F);for(const b in h){const D=h[b],ct=B.target.uuid;ct in D&&(D[ct].dispose(),delete D[ct])}}}function QA(s,t){function i(){let W=!1;const Ct=new sn;let Rt=null;const Bt=new sn(0,0,0,0);return{setMask:function(Et){Rt!==Et&&!W&&(s.colorMask(Et,Et,Et,Et),Rt=Et)},setLocked:function(Et){W=Et},setClear:function(Et,ft,Ht,ae,Fe){Fe===!0&&(Et*=ae,ft*=ae,Ht*=ae),Ct.set(Et,ft,Ht,ae),Bt.equals(Ct)===!1&&(s.clearColor(Et,ft,Ht,ae),Bt.copy(Ct))},reset:function(){W=!1,Rt=null,Bt.set(-1,0,0,0)}}}function r(){let W=!1,Ct=!1,Rt=null,Bt=null,Et=null;return{setReversed:function(ft){if(Ct!==ft){const Ht=t.get("EXT_clip_control");ft?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Ct=ft;const ae=Et;Et=null,this.setClear(ae)}},getReversed:function(){return Ct},setTest:function(ft){ft?_t(s.DEPTH_TEST):Mt(s.DEPTH_TEST)},setMask:function(ft){Rt!==ft&&!W&&(s.depthMask(ft),Rt=ft)},setFunc:function(ft){if(Ct&&(ft=AM[ft]),Bt!==ft){switch(ft){case Mh:s.depthFunc(s.NEVER);break;case bh:s.depthFunc(s.ALWAYS);break;case Eh:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case Th:s.depthFunc(s.EQUAL);break;case Ah:s.depthFunc(s.GEQUAL);break;case Rh:s.depthFunc(s.GREATER);break;case Ch:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Bt=ft}},setLocked:function(ft){W=ft},setClear:function(ft){Et!==ft&&(Et=ft,Ct&&(ft=1-ft),s.clearDepth(ft))},reset:function(){W=!1,Rt=null,Bt=null,Et=null,Ct=!1}}}function l(){let W=!1,Ct=null,Rt=null,Bt=null,Et=null,ft=null,Ht=null,ae=null,Fe=null;return{setTest:function(Ce){W||(Ce?_t(s.STENCIL_TEST):Mt(s.STENCIL_TEST))},setMask:function(Ce){Ct!==Ce&&!W&&(s.stencilMask(Ce),Ct=Ce)},setFunc:function(Ce,Bn,bi){(Rt!==Ce||Bt!==Bn||Et!==bi)&&(s.stencilFunc(Ce,Bn,bi),Rt=Ce,Bt=Bn,Et=bi)},setOp:function(Ce,Bn,bi){(ft!==Ce||Ht!==Bn||ae!==bi)&&(s.stencilOp(Ce,Bn,bi),ft=Ce,Ht=Bn,ae=bi)},setLocked:function(Ce){W=Ce},setClear:function(Ce){Fe!==Ce&&(s.clearStencil(Ce),Fe=Ce)},reset:function(){W=!1,Ct=null,Rt=null,Bt=null,Et=null,ft=null,Ht=null,ae=null,Fe=null}}}const c=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let v={},y={},g=new WeakMap,M=[],T=null,C=!1,S=null,x=null,w=null,L=null,N=null,F=null,B=null,z=new Me(0,0,0),b=0,D=!1,ct=null,H=null,j=null,J=null,et=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,I=0;const ot=s.getParameter(s.VERSION);ot.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(ot)[1]),U=I>=1):ot.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),U=I>=2);let dt=null,st={};const P=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),vt=new sn().fromArray(P),At=new sn().fromArray(q);function wt(W,Ct,Rt,Bt){const Et=new Uint8Array(4),ft=s.createTexture();s.bindTexture(W,ft),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<Rt;Ht++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ct,0,s.RGBA,1,1,Bt,0,s.RGBA,s.UNSIGNED_BYTE,Et):s.texImage2D(Ct+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Et);return ft}const $={};$[s.TEXTURE_2D]=wt(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=wt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=wt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=wt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),_t(s.DEPTH_TEST),d.setFunc($s),ce(!1),nn(y_),_t(s.CULL_FACE),ue(Ta);function _t(W){v[W]!==!0&&(s.enable(W),v[W]=!0)}function Mt(W){v[W]!==!1&&(s.disable(W),v[W]=!1)}function Ut(W,Ct){return y[W]!==Ct?(s.bindFramebuffer(W,Ct),y[W]=Ct,W===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Ct),W===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Qt(W,Ct){let Rt=M,Bt=!1;if(W){Rt=g.get(Ct),Rt===void 0&&(Rt=[],g.set(Ct,Rt));const Et=W.textures;if(Rt.length!==Et.length||Rt[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Ht=Et.length;ft<Ht;ft++)Rt[ft]=s.COLOR_ATTACHMENT0+ft;Rt.length=Et.length,Bt=!0}}else Rt[0]!==s.BACK&&(Rt[0]=s.BACK,Bt=!0);Bt&&s.drawBuffers(Rt)}function $t(W){return T!==W?(s.useProgram(W),T=W,!0):!1}const Ye={[Hr]:s.FUNC_ADD,[Zy]:s.FUNC_SUBTRACT,[Ky]:s.FUNC_REVERSE_SUBTRACT};Ye[Qy]=s.MIN,Ye[Jy]=s.MAX;const ge={[$y]:s.ZERO,[tM]:s.ONE,[eM]:s.SRC_COLOR,[Sh]:s.SRC_ALPHA,[oM]:s.SRC_ALPHA_SATURATE,[rM]:s.DST_COLOR,[iM]:s.DST_ALPHA,[nM]:s.ONE_MINUS_SRC_COLOR,[yh]:s.ONE_MINUS_SRC_ALPHA,[sM]:s.ONE_MINUS_DST_COLOR,[aM]:s.ONE_MINUS_DST_ALPHA,[lM]:s.CONSTANT_COLOR,[cM]:s.ONE_MINUS_CONSTANT_COLOR,[uM]:s.CONSTANT_ALPHA,[fM]:s.ONE_MINUS_CONSTANT_ALPHA};function ue(W,Ct,Rt,Bt,Et,ft,Ht,ae,Fe,Ce){if(W===Ta){C===!0&&(Mt(s.BLEND),C=!1);return}if(C===!1&&(_t(s.BLEND),C=!0),W!==jy){if(W!==S||Ce!==D){if((x!==Hr||N!==Hr)&&(s.blendEquation(s.FUNC_ADD),x=Hr,N=Hr),Ce)switch(W){case Ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xh:s.blendFunc(s.ONE,s.ONE);break;case M_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case b_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:we("WebGLState: Invalid blending: ",W);break}else switch(W){case Ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case M_:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case b_:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",W);break}w=null,L=null,F=null,B=null,z.set(0,0,0),b=0,S=W,D=Ce}return}Et=Et||Ct,ft=ft||Rt,Ht=Ht||Bt,(Ct!==x||Et!==N)&&(s.blendEquationSeparate(Ye[Ct],Ye[Et]),x=Ct,N=Et),(Rt!==w||Bt!==L||ft!==F||Ht!==B)&&(s.blendFuncSeparate(ge[Rt],ge[Bt],ge[ft],ge[Ht]),w=Rt,L=Bt,F=ft,B=Ht),(ae.equals(z)===!1||Fe!==b)&&(s.blendColor(ae.r,ae.g,ae.b,Fe),z.copy(ae),b=Fe),S=W,D=!1}function Oe(W,Ct){W.side===ba?Mt(s.CULL_FACE):_t(s.CULL_FACE);let Rt=W.side===Jn;Ct&&(Rt=!Rt),ce(Rt),W.blending===Ks&&W.transparent===!1?ue(Ta):ue(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const Bt=W.stencilWrite;p.setTest(Bt),Bt&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Qe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_t(s.SAMPLE_ALPHA_TO_COVERAGE):Mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ce(W){ct!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),ct=W)}function nn(W){W!==Wy?(_t(s.CULL_FACE),W!==H&&(W===y_?s.cullFace(s.BACK):W===qy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Mt(s.CULL_FACE),H=W}function V(W){W!==j&&(U&&s.lineWidth(W),j=W)}function Qe(W,Ct,Rt){W?(_t(s.POLYGON_OFFSET_FILL),(J!==Ct||et!==Rt)&&(J=Ct,et=Rt,d.getReversed()&&(Ct=-Ct),s.polygonOffset(Ct,Rt))):Mt(s.POLYGON_OFFSET_FILL)}function Re(W){W?_t(s.SCISSOR_TEST):Mt(s.SCISSOR_TEST)}function ze(W){W===void 0&&(W=s.TEXTURE0+Z-1),dt!==W&&(s.activeTexture(W),dt=W)}function jt(W,Ct,Rt){Rt===void 0&&(dt===null?Rt=s.TEXTURE0+Z-1:Rt=dt);let Bt=st[Rt];Bt===void 0&&(Bt={type:void 0,texture:void 0},st[Rt]=Bt),(Bt.type!==W||Bt.texture!==Ct)&&(dt!==Rt&&(s.activeTexture(Rt),dt=Rt),s.bindTexture(W,Ct||$[W]),Bt.type=W,Bt.texture=Ct)}function O(){const W=st[dt];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(W){we("WebGLState:",W)}}function Y(){try{s.compressedTexImage3D(...arguments)}catch(W){we("WebGLState:",W)}}function mt(){try{s.texSubImage2D(...arguments)}catch(W){we("WebGLState:",W)}}function yt(){try{s.texSubImage3D(...arguments)}catch(W){we("WebGLState:",W)}}function ht(){try{s.compressedTexSubImage2D(...arguments)}catch(W){we("WebGLState:",W)}}function Wt(){try{s.compressedTexSubImage3D(...arguments)}catch(W){we("WebGLState:",W)}}function Dt(){try{s.texStorage2D(...arguments)}catch(W){we("WebGLState:",W)}}function Jt(){try{s.texStorage3D(...arguments)}catch(W){we("WebGLState:",W)}}function ne(){try{s.texImage2D(...arguments)}catch(W){we("WebGLState:",W)}}function Tt(){try{s.texImage3D(...arguments)}catch(W){we("WebGLState:",W)}}function bt(W){vt.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),vt.copy(W))}function zt(W){At.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Pt(W,Ct){let Rt=h.get(Ct);Rt===void 0&&(Rt=new WeakMap,h.set(Ct,Rt));let Bt=Rt.get(W);Bt===void 0&&(Bt=s.getUniformBlockIndex(Ct,W.name),Rt.set(W,Bt))}function It(W,Ct){const Bt=h.get(Ct).get(W);m.get(Ct)!==Bt&&(s.uniformBlockBinding(Ct,Bt,W.__bindingPointIndex),m.set(Ct,Bt))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},dt=null,st={},y={},g=new WeakMap,M=[],T=null,C=!1,S=null,x=null,w=null,L=null,N=null,F=null,B=null,z=new Me(0,0,0),b=0,D=!1,ct=null,H=null,j=null,J=null,et=null,vt.set(0,0,s.canvas.width,s.canvas.height),At.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:_t,disable:Mt,bindFramebuffer:Ut,drawBuffers:Qt,useProgram:$t,setBlending:ue,setMaterial:Oe,setFlipSided:ce,setCullFace:nn,setLineWidth:V,setPolygonOffset:Qe,setScissorTest:Re,activeTexture:ze,bindTexture:jt,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:ne,texImage3D:Tt,updateUBOMapping:Pt,uniformBlockBinding:It,texStorage2D:Dt,texStorage3D:Jt,texSubImage2D:mt,texSubImage3D:yt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Wt,scissor:bt,viewport:zt,reset:de}}function JA(s,t,i,r,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new xe,v=new WeakMap;let y;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(O,E){return M?new OffscreenCanvas(O,E):du("canvas")}function C(O,E,Y){let mt=1;const yt=jt(O);if((yt.width>Y||yt.height>Y)&&(mt=Y/Math.max(yt.width,yt.height)),mt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ht=Math.floor(mt*yt.width),Wt=Math.floor(mt*yt.height);y===void 0&&(y=T(ht,Wt));const Dt=E?T(ht,Wt):y;return Dt.width=ht,Dt.height=Wt,Dt.getContext("2d").drawImage(O,0,0,ht,Wt),re("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ht+"x"+Wt+")."),Dt}else return"data"in O&&re("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),O;return O}function S(O){return O.generateMipmaps}function x(O){s.generateMipmap(O)}function w(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(O,E,Y,mt,yt=!1){if(O!==null){if(s[O]!==void 0)return s[O];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ht=E;if(E===s.RED&&(Y===s.FLOAT&&(ht=s.R32F),Y===s.HALF_FLOAT&&(ht=s.R16F),Y===s.UNSIGNED_BYTE&&(ht=s.R8)),E===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ht=s.R8UI),Y===s.UNSIGNED_SHORT&&(ht=s.R16UI),Y===s.UNSIGNED_INT&&(ht=s.R32UI),Y===s.BYTE&&(ht=s.R8I),Y===s.SHORT&&(ht=s.R16I),Y===s.INT&&(ht=s.R32I)),E===s.RG&&(Y===s.FLOAT&&(ht=s.RG32F),Y===s.HALF_FLOAT&&(ht=s.RG16F),Y===s.UNSIGNED_BYTE&&(ht=s.RG8)),E===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ht=s.RG8UI),Y===s.UNSIGNED_SHORT&&(ht=s.RG16UI),Y===s.UNSIGNED_INT&&(ht=s.RG32UI),Y===s.BYTE&&(ht=s.RG8I),Y===s.SHORT&&(ht=s.RG16I),Y===s.INT&&(ht=s.RG32I)),E===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),Y===s.UNSIGNED_INT&&(ht=s.RGB32UI),Y===s.BYTE&&(ht=s.RGB8I),Y===s.SHORT&&(ht=s.RGB16I),Y===s.INT&&(ht=s.RGB32I)),E===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),Y===s.UNSIGNED_INT&&(ht=s.RGBA32UI),Y===s.BYTE&&(ht=s.RGBA8I),Y===s.SHORT&&(ht=s.RGBA16I),Y===s.INT&&(ht=s.RGBA32I)),E===s.RGB&&(Y===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(ht=s.R11F_G11F_B10F)),E===s.RGBA){const Wt=yt?fu:De.getTransfer(mt);Y===s.FLOAT&&(ht=s.RGBA32F),Y===s.HALF_FLOAT&&(ht=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(ht=Wt===Ve?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function N(O,E){let Y;return O?E===null||E===Ki||E===dl?Y=s.DEPTH24_STENCIL8:E===qi?Y=s.DEPTH32F_STENCIL8:E===fl&&(Y=s.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ki||E===dl?Y=s.DEPTH_COMPONENT24:E===qi?Y=s.DEPTH_COMPONENT32F:E===fl&&(Y=s.DEPTH_COMPONENT16),Y}function F(O,E){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Un&&O.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function B(O){const E=O.target;E.removeEventListener("dispose",B),b(E),E.isVideoTexture&&v.delete(E)}function z(O){const E=O.target;E.removeEventListener("dispose",z),ct(E)}function b(O){const E=r.get(O);if(E.__webglInit===void 0)return;const Y=O.source,mt=g.get(Y);if(mt){const yt=mt[E.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&D(O),Object.keys(mt).length===0&&g.delete(Y)}r.remove(O)}function D(O){const E=r.get(O);s.deleteTexture(E.__webglTexture);const Y=O.source,mt=g.get(Y);delete mt[E.__cacheKey],d.memory.textures--}function ct(O){const E=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(E.__webglFramebuffer[mt]))for(let yt=0;yt<E.__webglFramebuffer[mt].length;yt++)s.deleteFramebuffer(E.__webglFramebuffer[mt][yt]);else s.deleteFramebuffer(E.__webglFramebuffer[mt]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[mt])}else{if(Array.isArray(E.__webglFramebuffer))for(let mt=0;mt<E.__webglFramebuffer.length;mt++)s.deleteFramebuffer(E.__webglFramebuffer[mt]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let mt=0;mt<E.__webglColorRenderbuffer.length;mt++)E.__webglColorRenderbuffer[mt]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[mt]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=O.textures;for(let mt=0,yt=Y.length;mt<yt;mt++){const ht=r.get(Y[mt]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),d.memory.textures--),r.remove(Y[mt])}r.remove(O)}let H=0;function j(){H=0}function J(){const O=H;return O>=l.maxTextures&&re("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),H+=1,O}function et(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function Z(O,E){const Y=r.get(O);if(O.isVideoTexture&&Re(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Y.__version!==O.version){const mt=O.image;if(mt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{$(Y,O,E);return}}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+E)}function U(O,E){const Y=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){$(Y,O,E);return}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+E)}function I(O,E){const Y=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){$(Y,O,E);return}i.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+E)}function ot(O,E){const Y=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Y.__version!==O.version){_t(Y,O,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+E)}const dt={[wh]:s.REPEAT,[Ea]:s.CLAMP_TO_EDGE,[Dh]:s.MIRRORED_REPEAT},st={[Un]:s.NEAREST,[pM]:s.NEAREST_MIPMAP_NEAREST,[wc]:s.NEAREST_MIPMAP_LINEAR,[zn]:s.LINEAR,[Id]:s.LINEAR_MIPMAP_NEAREST,[Vr]:s.LINEAR_MIPMAP_LINEAR},P={[_M]:s.NEVER,[MM]:s.ALWAYS,[vM]:s.LESS,[bp]:s.LEQUAL,[xM]:s.EQUAL,[Ep]:s.GEQUAL,[SM]:s.GREATER,[yM]:s.NOTEQUAL};function q(O,E){if(E.type===qi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===Id||E.magFilter===wc||E.magFilter===Vr||E.minFilter===zn||E.minFilter===Id||E.minFilter===wc||E.minFilter===Vr)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,dt[E.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,dt[E.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,dt[E.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,st[E.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,st[E.minFilter]),E.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==wc&&E.minFilter!==Vr||E.type===qi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function vt(O,E){let Y=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",B));const mt=E.source;let yt=g.get(mt);yt===void 0&&(yt={},g.set(mt,yt));const ht=et(E);if(ht!==O.__cacheKey){yt[ht]===void 0&&(yt[ht]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,Y=!0),yt[ht].usedTimes++;const Wt=yt[O.__cacheKey];Wt!==void 0&&(yt[O.__cacheKey].usedTimes--,Wt.usedTimes===0&&D(E)),O.__cacheKey=ht,O.__webglTexture=yt[ht].texture}return Y}function At(O,E,Y){return Math.floor(Math.floor(O/Y)/E)}function wt(O,E,Y,mt){const ht=O.updateRanges;if(ht.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,Y,mt,E.data);else{ht.sort((Tt,bt)=>Tt.start-bt.start);let Wt=0;for(let Tt=1;Tt<ht.length;Tt++){const bt=ht[Wt],zt=ht[Tt],Pt=bt.start+bt.count,It=At(zt.start,E.width,4),de=At(bt.start,E.width,4);zt.start<=Pt+1&&It===de&&At(zt.start+zt.count-1,E.width,4)===It?bt.count=Math.max(bt.count,zt.start+zt.count-bt.start):(++Wt,ht[Wt]=zt)}ht.length=Wt+1;const Dt=s.getParameter(s.UNPACK_ROW_LENGTH),Jt=s.getParameter(s.UNPACK_SKIP_PIXELS),ne=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Tt=0,bt=ht.length;Tt<bt;Tt++){const zt=ht[Tt],Pt=Math.floor(zt.start/4),It=Math.ceil(zt.count/4),de=Pt%E.width,W=Math.floor(Pt/E.width),Ct=It,Rt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,de),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,de,W,Ct,Rt,Y,mt,E.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Dt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Jt),s.pixelStorei(s.UNPACK_SKIP_ROWS,ne)}}function $(O,E,Y){let mt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(mt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(mt=s.TEXTURE_3D);const yt=vt(O,E),ht=E.source;i.bindTexture(mt,O.__webglTexture,s.TEXTURE0+Y);const Wt=r.get(ht);if(ht.version!==Wt.__version||yt===!0){i.activeTexture(s.TEXTURE0+Y);const Dt=De.getPrimaries(De.workingColorSpace),Jt=E.colorSpace===cr?null:De.getPrimaries(E.colorSpace),ne=E.colorSpace===cr||Dt===Jt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Tt=C(E.image,!1,l.maxTextureSize);Tt=ze(E,Tt);const bt=c.convert(E.format,E.colorSpace),zt=c.convert(E.type);let Pt=L(E.internalFormat,bt,zt,E.colorSpace,E.isVideoTexture);q(mt,E);let It;const de=E.mipmaps,W=E.isVideoTexture!==!0,Ct=Wt.__version===void 0||yt===!0,Rt=ht.dataReady,Bt=F(E,Tt);if(E.isDepthTexture)Pt=N(E.format===kr,E.type),Ct&&(W?i.texStorage2D(s.TEXTURE_2D,1,Pt,Tt.width,Tt.height):i.texImage2D(s.TEXTURE_2D,0,Pt,Tt.width,Tt.height,0,bt,zt,null));else if(E.isDataTexture)if(de.length>0){W&&Ct&&i.texStorage2D(s.TEXTURE_2D,Bt,Pt,de[0].width,de[0].height);for(let Et=0,ft=de.length;Et<ft;Et++)It=de[Et],W?Rt&&i.texSubImage2D(s.TEXTURE_2D,Et,0,0,It.width,It.height,bt,zt,It.data):i.texImage2D(s.TEXTURE_2D,Et,Pt,It.width,It.height,0,bt,zt,It.data);E.generateMipmaps=!1}else W?(Ct&&i.texStorage2D(s.TEXTURE_2D,Bt,Pt,Tt.width,Tt.height),Rt&&wt(E,Tt,bt,zt)):i.texImage2D(s.TEXTURE_2D,0,Pt,Tt.width,Tt.height,0,bt,zt,Tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Ct&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,Pt,de[0].width,de[0].height,Tt.depth);for(let Et=0,ft=de.length;Et<ft;Et++)if(It=de[Et],E.format!==Li)if(bt!==null)if(W){if(Rt)if(E.layerUpdates.size>0){const Ht=Q_(It.width,It.height,E.format,E.type);for(const ae of E.layerUpdates){const Fe=It.data.subarray(ae*Ht/It.data.BYTES_PER_ELEMENT,(ae+1)*Ht/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,ae,It.width,It.height,1,bt,Fe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,0,It.width,It.height,Tt.depth,bt,It.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Et,Pt,It.width,It.height,Tt.depth,0,It.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Rt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,0,It.width,It.height,Tt.depth,bt,zt,It.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Et,Pt,It.width,It.height,Tt.depth,0,bt,zt,It.data)}else{W&&Ct&&i.texStorage2D(s.TEXTURE_2D,Bt,Pt,de[0].width,de[0].height);for(let Et=0,ft=de.length;Et<ft;Et++)It=de[Et],E.format!==Li?bt!==null?W?Rt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Et,0,0,It.width,It.height,bt,It.data):i.compressedTexImage2D(s.TEXTURE_2D,Et,Pt,It.width,It.height,0,It.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Rt&&i.texSubImage2D(s.TEXTURE_2D,Et,0,0,It.width,It.height,bt,zt,It.data):i.texImage2D(s.TEXTURE_2D,Et,Pt,It.width,It.height,0,bt,zt,It.data)}else if(E.isDataArrayTexture)if(W){if(Ct&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,Pt,Tt.width,Tt.height,Tt.depth),Rt)if(E.layerUpdates.size>0){const Et=Q_(Tt.width,Tt.height,E.format,E.type);for(const ft of E.layerUpdates){const Ht=Tt.data.subarray(ft*Et/Tt.data.BYTES_PER_ELEMENT,(ft+1)*Et/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ft,Tt.width,Tt.height,1,bt,zt,Ht)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,bt,zt,Tt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,Tt.width,Tt.height,Tt.depth,0,bt,zt,Tt.data);else if(E.isData3DTexture)W?(Ct&&i.texStorage3D(s.TEXTURE_3D,Bt,Pt,Tt.width,Tt.height,Tt.depth),Rt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,bt,zt,Tt.data)):i.texImage3D(s.TEXTURE_3D,0,Pt,Tt.width,Tt.height,Tt.depth,0,bt,zt,Tt.data);else if(E.isFramebufferTexture){if(Ct)if(W)i.texStorage2D(s.TEXTURE_2D,Bt,Pt,Tt.width,Tt.height);else{let Et=Tt.width,ft=Tt.height;for(let Ht=0;Ht<Bt;Ht++)i.texImage2D(s.TEXTURE_2D,Ht,Pt,Et,ft,0,bt,zt,null),Et>>=1,ft>>=1}}else if(de.length>0){if(W&&Ct){const Et=jt(de[0]);i.texStorage2D(s.TEXTURE_2D,Bt,Pt,Et.width,Et.height)}for(let Et=0,ft=de.length;Et<ft;Et++)It=de[Et],W?Rt&&i.texSubImage2D(s.TEXTURE_2D,Et,0,0,bt,zt,It):i.texImage2D(s.TEXTURE_2D,Et,Pt,bt,zt,It);E.generateMipmaps=!1}else if(W){if(Ct){const Et=jt(Tt);i.texStorage2D(s.TEXTURE_2D,Bt,Pt,Et.width,Et.height)}Rt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,bt,zt,Tt)}else i.texImage2D(s.TEXTURE_2D,0,Pt,bt,zt,Tt);S(E)&&x(mt),Wt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function _t(O,E,Y){if(E.image.length!==6)return;const mt=vt(O,E),yt=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+Y);const ht=r.get(yt);if(yt.version!==ht.__version||mt===!0){i.activeTexture(s.TEXTURE0+Y);const Wt=De.getPrimaries(De.workingColorSpace),Dt=E.colorSpace===cr?null:De.getPrimaries(E.colorSpace),Jt=E.colorSpace===cr||Wt===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const ne=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let ft=0;ft<6;ft++)!ne&&!Tt?bt[ft]=C(E.image[ft],!0,l.maxCubemapSize):bt[ft]=Tt?E.image[ft].image:E.image[ft],bt[ft]=ze(E,bt[ft]);const zt=bt[0],Pt=c.convert(E.format,E.colorSpace),It=c.convert(E.type),de=L(E.internalFormat,Pt,It,E.colorSpace),W=E.isVideoTexture!==!0,Ct=ht.__version===void 0||mt===!0,Rt=yt.dataReady;let Bt=F(E,zt);q(s.TEXTURE_CUBE_MAP,E);let Et;if(ne){W&&Ct&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,de,zt.width,zt.height);for(let ft=0;ft<6;ft++){Et=bt[ft].mipmaps;for(let Ht=0;Ht<Et.length;Ht++){const ae=Et[Ht];E.format!==Li?Pt!==null?W?Rt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ht,0,0,ae.width,ae.height,Pt,ae.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ht,de,ae.width,ae.height,0,ae.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ht,0,0,ae.width,ae.height,Pt,It,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ht,de,ae.width,ae.height,0,Pt,It,ae.data)}}}else{if(Et=E.mipmaps,W&&Ct){Et.length>0&&Bt++;const ft=jt(bt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,de,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Tt){W?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,bt[ft].width,bt[ft].height,Pt,It,bt[ft].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,de,bt[ft].width,bt[ft].height,0,Pt,It,bt[ft].data);for(let Ht=0;Ht<Et.length;Ht++){const Fe=Et[Ht].image[ft].image;W?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ht+1,0,0,Fe.width,Fe.height,Pt,It,Fe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ht+1,de,Fe.width,Fe.height,0,Pt,It,Fe.data)}}else{W?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Pt,It,bt[ft]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,de,Pt,It,bt[ft]);for(let Ht=0;Ht<Et.length;Ht++){const ae=Et[Ht];W?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ht+1,0,0,Pt,It,ae.image[ft]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ht+1,de,Pt,It,ae.image[ft])}}}S(E)&&x(s.TEXTURE_CUBE_MAP),ht.__version=yt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Mt(O,E,Y,mt,yt,ht){const Wt=c.convert(Y.format,Y.colorSpace),Dt=c.convert(Y.type),Jt=L(Y.internalFormat,Wt,Dt,Y.colorSpace),ne=r.get(E),Tt=r.get(Y);if(Tt.__renderTarget=E,!ne.__hasExternalTextures){const bt=Math.max(1,E.width>>ht),zt=Math.max(1,E.height>>ht);yt===s.TEXTURE_3D||yt===s.TEXTURE_2D_ARRAY?i.texImage3D(yt,ht,Jt,bt,zt,E.depth,0,Wt,Dt,null):i.texImage2D(yt,ht,Jt,bt,zt,0,Wt,Dt,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),Qe(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,yt,Tt.__webglTexture,0,V(E)):(yt===s.TEXTURE_2D||yt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,mt,yt,Tt.__webglTexture,ht),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(O,E,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,O),E.depthBuffer){const mt=E.depthTexture,yt=mt&&mt.isDepthTexture?mt.type:null,ht=N(E.stencilBuffer,yt),Wt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Qe(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(E),ht,E.width,E.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(E),ht,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ht,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Wt,s.RENDERBUFFER,O)}else{const mt=E.textures;for(let yt=0;yt<mt.length;yt++){const ht=mt[yt],Wt=c.convert(ht.format,ht.colorSpace),Dt=c.convert(ht.type),Jt=L(ht.internalFormat,Wt,Dt,ht.colorSpace);Qe(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(E),Jt,E.width,E.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(E),Jt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Jt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qt(O,E,Y){const mt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=r.get(E.depthTexture);if(yt.__renderTarget=E,(!yt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),mt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),yt.__webglTexture===void 0){yt.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,yt.__webglTexture),q(s.TEXTURE_CUBE_MAP,E.depthTexture);const ne=c.convert(E.depthTexture.format),Tt=c.convert(E.depthTexture.type);let bt;E.depthTexture.format===Ca?bt=s.DEPTH_COMPONENT24:E.depthTexture.format===kr&&(bt=s.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,bt,E.width,E.height,0,ne,Tt,null)}}else Z(E.depthTexture,0);const ht=yt.__webglTexture,Wt=V(E),Dt=mt?s.TEXTURE_CUBE_MAP_POSITIVE_X+Y:s.TEXTURE_2D,Jt=E.depthTexture.format===kr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ca)Qe(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Jt,Dt,ht,0,Wt):s.framebufferTexture2D(s.FRAMEBUFFER,Jt,Dt,ht,0);else if(E.depthTexture.format===kr)Qe(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Jt,Dt,ht,0,Wt):s.framebufferTexture2D(s.FRAMEBUFFER,Jt,Dt,ht,0);else throw new Error("Unknown depthTexture format")}function $t(O){const E=r.get(O),Y=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const mt=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),mt){const yt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,mt.removeEventListener("dispose",yt)};mt.addEventListener("dispose",yt),E.__depthDisposeCallback=yt}E.__boundDepthTexture=mt}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let mt=0;mt<6;mt++)Qt(E.__webglFramebuffer[mt],O,mt);else{const mt=O.texture.mipmaps;mt&&mt.length>0?Qt(E.__webglFramebuffer[0],O,0):Qt(E.__webglFramebuffer,O,0)}else if(Y){E.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[mt]),E.__webglDepthbuffer[mt]===void 0)E.__webglDepthbuffer[mt]=s.createRenderbuffer(),Ut(E.__webglDepthbuffer[mt],O,!1);else{const yt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer[mt];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,ht)}}else{const mt=O.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ut(E.__webglDepthbuffer,O,!1);else{const yt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,ht)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(O,E,Y){const mt=r.get(O);E!==void 0&&Mt(mt.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&$t(O)}function ge(O){const E=O.texture,Y=r.get(O),mt=r.get(E);O.addEventListener("dispose",z);const yt=O.textures,ht=O.isWebGLCubeRenderTarget===!0,Wt=yt.length>1;if(Wt||(mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture()),mt.__version=E.version,d.memory.textures++),ht){Y.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Dt]=[];for(let Jt=0;Jt<E.mipmaps.length;Jt++)Y.__webglFramebuffer[Dt][Jt]=s.createFramebuffer()}else Y.__webglFramebuffer[Dt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)Y.__webglFramebuffer[Dt]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Wt)for(let Dt=0,Jt=yt.length;Dt<Jt;Dt++){const ne=r.get(yt[Dt]);ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture(),d.memory.textures++)}if(O.samples>0&&Qe(O)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Dt=0;Dt<yt.length;Dt++){const Jt=yt[Dt];Y.__webglColorRenderbuffer[Dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[Dt]);const ne=c.convert(Jt.format,Jt.colorSpace),Tt=c.convert(Jt.type),bt=L(Jt.internalFormat,ne,Tt,Jt.colorSpace,O.isXRRenderTarget===!0),zt=V(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,bt,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Ut(Y.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){i.bindTexture(s.TEXTURE_CUBE_MAP,mt.__webglTexture),q(s.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Jt=0;Jt<E.mipmaps.length;Jt++)Mt(Y.__webglFramebuffer[Dt][Jt],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Jt);else Mt(Y.__webglFramebuffer[Dt],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);S(E)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Dt=0,Jt=yt.length;Dt<Jt;Dt++){const ne=yt[Dt],Tt=r.get(ne);let bt=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(bt=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(bt,Tt.__webglTexture),q(bt,ne),Mt(Y.__webglFramebuffer,O,ne,s.COLOR_ATTACHMENT0+Dt,bt,0),S(ne)&&x(bt)}i.unbindTexture()}else{let Dt=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Dt=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Dt,mt.__webglTexture),q(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let Jt=0;Jt<E.mipmaps.length;Jt++)Mt(Y.__webglFramebuffer[Jt],O,E,s.COLOR_ATTACHMENT0,Dt,Jt);else Mt(Y.__webglFramebuffer,O,E,s.COLOR_ATTACHMENT0,Dt,0);S(E)&&x(Dt),i.unbindTexture()}O.depthBuffer&&$t(O)}function ue(O){const E=O.textures;for(let Y=0,mt=E.length;Y<mt;Y++){const yt=E[Y];if(S(yt)){const ht=w(O),Wt=r.get(yt).__webglTexture;i.bindTexture(ht,Wt),x(ht),i.unbindTexture()}}}const Oe=[],ce=[];function nn(O){if(O.samples>0){if(Qe(O)===!1){const E=O.textures,Y=O.width,mt=O.height;let yt=s.COLOR_BUFFER_BIT;const ht=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Wt=r.get(O),Dt=E.length>1;if(Dt)for(let ne=0;ne<E.length;ne++)i.bindFramebuffer(s.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Jt=O.texture.mipmaps;Jt&&Jt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let ne=0;ne<E.length;ne++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(yt|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(yt|=s.STENCIL_BUFFER_BIT)),Dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Wt.__webglColorRenderbuffer[ne]);const Tt=r.get(E[ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,Y,mt,0,0,Y,mt,yt,s.NEAREST),m===!0&&(Oe.length=0,ce.length=0,Oe.push(s.COLOR_ATTACHMENT0+ne),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Oe.push(ht),ce.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ce)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Oe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Dt)for(let ne=0;ne<E.length;ne++){i.bindFramebuffer(s.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,Wt.__webglColorRenderbuffer[ne]);const Tt=r.get(E[ne]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.TEXTURE_2D,Tt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function V(O){return Math.min(l.maxSamples,O.samples)}function Qe(O){const E=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Re(O){const E=d.render.frame;v.get(O)!==E&&(v.set(O,E),O.update())}function ze(O,E){const Y=O.colorSpace,mt=O.format,yt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Y!==no&&Y!==cr&&(De.getTransfer(Y)===Ve?(mt!==Li||yt!==ui)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",Y)),E}function jt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=j,this.setTexture2D=Z,this.setTexture2DArray=U,this.setTexture3D=I,this.setTextureCube=ot,this.rebindTextures=Ye,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function $A(s,t){function i(r,l=cr){let c;const d=De.getTransfer(l);if(r===ui)return s.UNSIGNED_BYTE;if(r===vp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===xp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Hv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Gv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Bv)return s.BYTE;if(r===Fv)return s.SHORT;if(r===fl)return s.UNSIGNED_SHORT;if(r===_p)return s.INT;if(r===Ki)return s.UNSIGNED_INT;if(r===qi)return s.FLOAT;if(r===Ra)return s.HALF_FLOAT;if(r===Vv)return s.ALPHA;if(r===kv)return s.RGB;if(r===Li)return s.RGBA;if(r===Ca)return s.DEPTH_COMPONENT;if(r===kr)return s.DEPTH_STENCIL;if(r===Xv)return s.RED;if(r===Sp)return s.RED_INTEGER;if(r===eo)return s.RG;if(r===yp)return s.RG_INTEGER;if(r===Mp)return s.RGBA_INTEGER;if(r===su||r===ou||r===lu||r===cu)if(d===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===su)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===su)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ou)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uh||r===Nh||r===Lh||r===Oh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Uh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Oh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ph||r===zh||r===Ih||r===Bh||r===Fh||r===Hh||r===Gh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ph||r===zh)return d===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ih)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Bh)return c.COMPRESSED_R11_EAC;if(r===Fh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Hh)return c.COMPRESSED_RG11_EAC;if(r===Gh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===jh||r===Zh||r===Kh||r===Qh||r===Jh||r===$h||r===tp||r===ep)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Vh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$h)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tp)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ep)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===np||r===ip||r===ap)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===np)return d===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ip)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ap)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rp||r===sp||r===op||r===lp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===rp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===sp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===op)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===dl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const tR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new ix(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Qi({vertexShader:tR,fragmentShader:eR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Pn(new Mu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iR extends ao{constructor(t,i){super();const r=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,v=null,y=null,g=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",S=new nR,x={},w=i.getContextAttributes();let L=null,N=null;const F=[],B=[],z=new xe;let b=null;const D=new yi;D.viewport=new sn;const ct=new yi;ct.viewport=new sn;const H=[D,ct],j=new pb;let J=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let _t=F[$];return _t===void 0&&(_t=new Wd,F[$]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function($){let _t=F[$];return _t===void 0&&(_t=new Wd,F[$]=_t),_t.getGripSpace()},this.getHand=function($){let _t=F[$];return _t===void 0&&(_t=new Wd,F[$]=_t),_t.getHandSpace()};function Z($){const _t=B.indexOf($.inputSource);if(_t===-1)return;const Mt=F[_t];Mt!==void 0&&(Mt.update($.inputSource,$.frame,h||d),Mt.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",I);for(let $=0;$<F.length;$++){const _t=B[$];_t!==null&&(B[$]=null,F[$].disconnect(_t))}J=null,et=null,S.reset();for(const $ in x)delete x[$];t.setRenderTarget(L),M=null,g=null,y=null,l=null,N=null,wt.stop(),r.isPresenting=!1,t.setPixelRatio(b),t.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){p=$,r.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return y===null&&C&&(y=new XRWebGLBinding(l,i)),y},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",U),l.addEventListener("inputsourceschange",I),w.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Ut=null,Qt=null;w.depth&&(Qt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=w.stencil?kr:Ca,Ut=w.stencil?dl:Ki);const $t={colorFormat:i.RGBA8,depthFormat:Qt,scaleFactor:c};y=this.getBinding(),g=y.createProjectionLayer($t),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),N=new Zi(g.textureWidth,g.textureHeight,{format:Li,type:ui,depthTexture:new pl(g.textureWidth,g.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Mt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Zi(M.framebufferWidth,M.framebufferHeight,{format:Li,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),wt.setContext(l),wt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function I($){for(let _t=0;_t<$.removed.length;_t++){const Mt=$.removed[_t],Ut=B.indexOf(Mt);Ut>=0&&(B[Ut]=null,F[Ut].disconnect(Mt))}for(let _t=0;_t<$.added.length;_t++){const Mt=$.added[_t];let Ut=B.indexOf(Mt);if(Ut===-1){for(let $t=0;$t<F.length;$t++)if($t>=B.length){B.push(Mt),Ut=$t;break}else if(B[$t]===null){B[$t]=Mt,Ut=$t;break}if(Ut===-1)break}const Qt=F[Ut];Qt&&Qt.connect(Mt)}}const ot=new Q,dt=new Q;function st($,_t,Mt){ot.setFromMatrixPosition(_t.matrixWorld),dt.setFromMatrixPosition(Mt.matrixWorld);const Ut=ot.distanceTo(dt),Qt=_t.projectionMatrix.elements,$t=Mt.projectionMatrix.elements,Ye=Qt[14]/(Qt[10]-1),ge=Qt[14]/(Qt[10]+1),ue=(Qt[9]+1)/Qt[5],Oe=(Qt[9]-1)/Qt[5],ce=(Qt[8]-1)/Qt[0],nn=($t[8]+1)/$t[0],V=Ye*ce,Qe=Ye*nn,Re=Ut/(-ce+nn),ze=Re*-ce;if(_t.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ze),$.translateZ(Re),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Qt[10]===-1)$.projectionMatrix.copy(_t.projectionMatrix),$.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const jt=Ye+Re,O=ge+Re,E=V-ze,Y=Qe+(Ut-ze),mt=ue*ge/O*jt,yt=Oe*ge/O*jt;$.projectionMatrix.makePerspective(E,Y,mt,yt,jt,O),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function P($,_t){_t===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(_t.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let _t=$.near,Mt=$.far;S.texture!==null&&(S.depthNear>0&&(_t=S.depthNear),S.depthFar>0&&(Mt=S.depthFar)),j.near=ct.near=D.near=_t,j.far=ct.far=D.far=Mt,(J!==j.near||et!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),J=j.near,et=j.far),j.layers.mask=$.layers.mask|6,D.layers.mask=j.layers.mask&-5,ct.layers.mask=j.layers.mask&-3;const Ut=$.parent,Qt=j.cameras;P(j,Ut);for(let $t=0;$t<Qt.length;$t++)P(Qt[$t],Ut);Qt.length===2?st(j,D,ct):j.projectionMatrix.copy(D.projectionMatrix),q($,j,Ut)};function q($,_t,Mt){Mt===null?$.matrix.copy(_t.matrixWorld):($.matrix.copy(Mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(_t.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(_t.projectionMatrix),$.projectionMatrixInverse.copy(_t.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=up*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function($){m=$,g!==null&&(g.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function($){return x[$]};let vt=null;function At($,_t){if(v=_t.getViewerPose(h||d),T=_t,v!==null){const Mt=v.views;M!==null&&(t.setRenderTargetFramebuffer(N,M.framebuffer),t.setRenderTarget(N));let Ut=!1;Mt.length!==j.cameras.length&&(j.cameras.length=0,Ut=!0);for(let ge=0;ge<Mt.length;ge++){const ue=Mt[ge];let Oe=null;if(M!==null)Oe=M.getViewport(ue);else{const nn=y.getViewSubImage(g,ue);Oe=nn.viewport,ge===0&&(t.setRenderTargetTextures(N,nn.colorTexture,nn.depthStencilTexture),t.setRenderTarget(N))}let ce=H[ge];ce===void 0&&(ce=new yi,ce.layers.enable(ge),ce.viewport=new sn,H[ge]=ce),ce.matrix.fromArray(ue.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(ue.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ge===0&&(j.matrix.copy(ce.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ut===!0&&j.cameras.push(ce)}const Qt=l.enabledFeatures;if(Qt&&Qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){y=r.getBinding();const ge=y.getDepthInformation(Mt[0]);ge&&ge.isValid&&ge.texture&&S.init(ge,l.renderState)}if(Qt&&Qt.includes("camera-access")&&C){t.state.unbindTexture(),y=r.getBinding();for(let ge=0;ge<Mt.length;ge++){const ue=Mt[ge].camera;if(ue){let Oe=x[ue];Oe||(Oe=new ix,x[ue]=Oe);const ce=y.getCameraImage(ue);Oe.sourceTexture=ce}}}}for(let Mt=0;Mt<F.length;Mt++){const Ut=B[Mt],Qt=F[Mt];Ut!==null&&Qt!==void 0&&Qt.update(Ut,_t,h||d)}vt&&vt($,_t),_t.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_t}),T=null}const wt=new ox;wt.setAnimationLoop(At),this.setAnimationLoop=function($){vt=$},this.dispose=function(){}}}const Ir=new Pi,aR=new en;function rR(s,t){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,ax(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,w,L,N){x.isMeshBasicMaterial?c(S,x):x.isMeshLambertMaterial?(c(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(S,x),y(S,x)):x.isMeshPhongMaterial?(c(S,x),v(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(S,x),g(S,x),x.isMeshPhysicalMaterial&&M(S,x,N)):x.isMeshMatcapMaterial?(c(S,x),T(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),C(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(d(S,x),x.isLineDashedMaterial&&p(S,x)):x.isPointsMaterial?m(S,x,w,L):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Jn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Jn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const w=t.get(x),L=w.envMap,N=w.envMapRotation;L&&(S.envMap.value=L,Ir.copy(N),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),S.envMapRotation.value.setFromMatrix4(aR.makeRotationFromEuler(Ir)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function p(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,w,L){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*w,S.scale.value=L*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function y(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function g(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,w){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Jn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,x){x.matcap&&(S.matcap.value=x.matcap)}function C(S,x){const w=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function sR(s,t,i,r){let l={},c={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,L){const N=L.program;r.uniformBlockBinding(w,N)}function h(w,L){let N=l[w.id];N===void 0&&(T(w),N=v(w),l[w.id]=N,w.addEventListener("dispose",S));const F=L.program;r.updateUBOMapping(w,F);const B=t.render.frame;c[w.id]!==B&&(g(w),c[w.id]=B)}function v(w){const L=y();w.__bindingPointIndex=L;const N=s.createBuffer(),F=w.__size,B=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,F,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,N),N}function y(){for(let w=0;w<p;w++)if(d.indexOf(w)===-1)return d.push(w),w;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const L=l[w.id],N=w.uniforms,F=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let B=0,z=N.length;B<z;B++){const b=Array.isArray(N[B])?N[B]:[N[B]];for(let D=0,ct=b.length;D<ct;D++){const H=b[D];if(M(H,B,D,F)===!0){const j=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let et=0;for(let Z=0;Z<J.length;Z++){const U=J[Z],I=C(U);typeof U=="number"||typeof U=="boolean"?(H.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,j+et,H.__data)):U.isMatrix3?(H.__data[0]=U.elements[0],H.__data[1]=U.elements[1],H.__data[2]=U.elements[2],H.__data[3]=0,H.__data[4]=U.elements[3],H.__data[5]=U.elements[4],H.__data[6]=U.elements[5],H.__data[7]=0,H.__data[8]=U.elements[6],H.__data[9]=U.elements[7],H.__data[10]=U.elements[8],H.__data[11]=0):(U.toArray(H.__data,et),et+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(w,L,N,F){const B=w.value,z=L+"_"+N;if(F[z]===void 0)return typeof B=="number"||typeof B=="boolean"?F[z]=B:F[z]=B.clone(),!0;{const b=F[z];if(typeof B=="number"||typeof B=="boolean"){if(b!==B)return F[z]=B,!0}else if(b.equals(B)===!1)return b.copy(B),!0}return!1}function T(w){const L=w.uniforms;let N=0;const F=16;for(let z=0,b=L.length;z<b;z++){const D=Array.isArray(L[z])?L[z]:[L[z]];for(let ct=0,H=D.length;ct<H;ct++){const j=D[ct],J=Array.isArray(j.value)?j.value:[j.value];for(let et=0,Z=J.length;et<Z;et++){const U=J[et],I=C(U),ot=N%F,dt=ot%I.boundary,st=ot+dt;N+=dt,st!==0&&F-st<I.storage&&(N+=F-st),j.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=N,N+=I.storage}}}const B=N%F;return B>0&&(N+=F-B),w.__size=N,w.__cache={},this}function C(w){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=48,L.storage=48):w.isMatrix4?(L.boundary=64,L.storage=64):w.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",w),L}function S(w){const L=w.target;L.removeEventListener("dispose",S);const N=d.indexOf(L.__bindingPointIndex);d.splice(N,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function x(){for(const w in l)s.deleteBuffer(l[w]);d=[],l={},c={}}return{bind:m,update:h,dispose:x}}const oR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function lR(){return ki===null&&(ki=new ZM(oR,16,16,eo,Ra),ki.name="DFG_LUT",ki.minFilter=zn,ki.magFilter=zn,ki.wrapS=Ea,ki.wrapT=Ea,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class cR{constructor(t={}){const{canvas:i=EM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:M=ui}=t;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const C=M,S=new Set([Mp,yp,Sp]),x=new Set([ui,Ki,fl,dl,vp,xp]),w=new Uint32Array(4),L=new Int32Array(4);let N=null,F=null;const B=[],z=[];let b=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let ct=!1;this._outputColorSpace=Si;let H=0,j=0,J=null,et=-1,Z=null;const U=new sn,I=new sn;let ot=null;const dt=new Me(0);let st=0,P=i.width,q=i.height,vt=1,At=null,wt=null;const $=new sn(0,0,P,q),_t=new sn(0,0,P,q);let Mt=!1;const Ut=new Ap;let Qt=!1,$t=!1;const Ye=new en,ge=new Q,ue=new sn,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function nn(){return J===null?vt:1}let V=r;function Qe(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mp}`),i.addEventListener("webglcontextlost",Ht,!1),i.addEventListener("webglcontextrestored",ae,!1),i.addEventListener("webglcontextcreationerror",Fe,!1),V===null){const X="webgl2";if(V=Qe(X,R),V===null)throw Qe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw we("WebGLRenderer: "+R.message),R}let Re,ze,jt,O,E,Y,mt,yt,ht,Wt,Dt,Jt,ne,Tt,bt,zt,Pt,It,de,W,Ct,Rt,Bt;function Et(){Re=new cT(V),Re.init(),Ct=new $A(V,Re),ze=new eT(V,Re,t,Ct),jt=new QA(V,Re),ze.reversedDepthBuffer&&g&&jt.buffers.depth.setReversed(!0),O=new dT(V),E=new IA,Y=new JA(V,Re,jt,E,ze,Ct,O),mt=new lT(D),yt=new _b(V),Rt=new $1(V,yt),ht=new uT(V,yt,O,Rt),Wt=new pT(V,ht,yt,Rt,O),It=new hT(V,ze,Y),bt=new nT(E),Dt=new zA(D,mt,Re,ze,Rt,bt),Jt=new rR(D,E),ne=new FA,Tt=new WA(Re),Pt=new J1(D,mt,jt,Wt,T,m),zt=new KA(D,Wt,ze),Bt=new sR(V,O,ze,jt),de=new tT(V,Re,O),W=new fT(V,Re,O),O.programs=Dt.programs,D.capabilities=ze,D.extensions=Re,D.properties=E,D.renderLists=ne,D.shadowMap=zt,D.state=jt,D.info=O}Et(),C!==ui&&(b=new gT(C,i.width,i.height,l,c));const ft=new iR(D,V);this.xr=ft,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(R){R!==void 0&&(vt=R,this.setSize(P,q,!1))},this.getSize=function(R){return R.set(P,q)},this.setSize=function(R,X,lt=!0){if(ft.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,q=X,i.width=Math.floor(R*vt),i.height=Math.floor(X*vt),lt===!0&&(i.style.width=R+"px",i.style.height=X+"px"),b!==null&&b.setSize(i.width,i.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(P*vt,q*vt).floor()},this.setDrawingBufferSize=function(R,X,lt){P=R,q=X,vt=lt,i.width=Math.floor(R*lt),i.height=Math.floor(X*lt),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(C===ui){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,X,lt,at){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,X,lt,at),jt.viewport(U.copy($).multiplyScalar(vt).round())},this.getScissor=function(R){return R.copy(_t)},this.setScissor=function(R,X,lt,at){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,X,lt,at),jt.scissor(I.copy(_t).multiplyScalar(vt).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){jt.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){wt=R},this.getClearColor=function(R){return R.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,lt=!0){let at=0;if(R){let tt=!1;if(J!==null){const Nt=J.texture.format;tt=S.has(Nt)}if(tt){const Nt=J.texture.type,Ft=x.has(Nt),Lt=Pt.getClearColor(),qt=Pt.getClearAlpha(),Kt=Lt.r,ie=Lt.g,oe=Lt.b;Ft?(w[0]=Kt,w[1]=ie,w[2]=oe,w[3]=qt,V.clearBufferuiv(V.COLOR,0,w)):(L[0]=Kt,L[1]=ie,L[2]=oe,L[3]=qt,V.clearBufferiv(V.COLOR,0,L))}else at|=V.COLOR_BUFFER_BIT}X&&(at|=V.DEPTH_BUFFER_BIT),lt&&(at|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&V.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ht,!1),i.removeEventListener("webglcontextrestored",ae,!1),i.removeEventListener("webglcontextcreationerror",Fe,!1),Pt.dispose(),ne.dispose(),Tt.dispose(),E.dispose(),mt.dispose(),Wt.dispose(),Rt.dispose(),Bt.dispose(),Dt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Qr),ft.removeEventListener("sessionend",Jr),Ii.stop()};function Ht(R){R.preventDefault(),hu("WebGLRenderer: Context Lost."),ct=!0}function ae(){hu("WebGLRenderer: Context Restored."),ct=!1;const R=O.autoReset,X=zt.enabled,lt=zt.autoUpdate,at=zt.needsUpdate,tt=zt.type;Et(),O.autoReset=R,zt.enabled=X,zt.autoUpdate=lt,zt.needsUpdate=at,zt.type=tt}function Fe(R){we("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ce(R){const X=R.target;X.removeEventListener("dispose",Ce),Bn(X)}function Bn(R){bi(R),E.remove(R)}function bi(R){const X=E.get(R).programs;X!==void 0&&(X.forEach(function(lt){Dt.releaseProgram(lt)}),R.isShaderMaterial&&Dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,lt,at,tt,Nt){X===null&&(X=Oe);const Ft=tt.isMesh&&tt.matrixWorld.determinant()<0,Lt=xl(R,X,lt,at,tt);jt.setMaterial(at,Ft);let qt=lt.index,Kt=1;if(at.wireframe===!0){if(qt=ht.getWireframeAttribute(lt),qt===void 0)return;Kt=2}const ie=lt.drawRange,oe=lt.attributes.position;let Gt=ie.start*Kt,he=(ie.start+ie.count)*Kt;Nt!==null&&(Gt=Math.max(Gt,Nt.start*Kt),he=Math.min(he,(Nt.start+Nt.count)*Kt)),qt!==null?(Gt=Math.max(Gt,0),he=Math.min(he,qt.count)):oe!=null&&(Gt=Math.max(Gt,0),he=Math.min(he,oe.count));const Je=he-Gt;if(Je<0||Je===1/0)return;Rt.setup(tt,at,Lt,lt,qt);let $e,Ue=de;if(qt!==null&&($e=yt.get(qt),Ue=W,Ue.setIndex($e)),tt.isMesh)at.wireframe===!0?(jt.setLineWidth(at.wireframeLinewidth*nn()),Ue.setMode(V.LINES)):Ue.setMode(V.TRIANGLES);else if(tt.isLine){let vn=at.linewidth;vn===void 0&&(vn=1),jt.setLineWidth(vn*nn()),tt.isLineSegments?Ue.setMode(V.LINES):tt.isLineLoop?Ue.setMode(V.LINE_LOOP):Ue.setMode(V.LINE_STRIP)}else tt.isPoints?Ue.setMode(V.POINTS):tt.isSprite&&Ue.setMode(V.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)pu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ue.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))Ue.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const vn=tt._multiDrawStarts,kt=tt._multiDrawCounts,Fn=tt._multiDrawCount,se=qt?yt.get(qt).bytesPerElement:1,Hn=E.get(at).currentProgram.getUniforms();for(let $n=0;$n<Fn;$n++)Hn.setValue(V,"_gl_DrawID",$n),Ue.render(vn[$n]/se,kt[$n])}else if(tt.isInstancedMesh)Ue.renderInstances(Gt,Je,tt.count);else if(lt.isInstancedBufferGeometry){const vn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,kt=Math.min(lt.instanceCount,vn);Ue.renderInstances(Gt,Je,kt)}else Ue.render(Gt,Je)};function so(R,X,lt){R.transparent===!0&&R.side===ba&&R.forceSinglePass===!1?(R.side=Jn,R.needsUpdate=!0,wa(R,X,lt),R.side=dr,R.needsUpdate=!0,wa(R,X,lt),R.side=ba):wa(R,X,lt)}this.compile=function(R,X,lt=null){lt===null&&(lt=R),F=Tt.get(lt),F.init(X),z.push(F),lt.traverseVisible(function(tt){tt.isLight&&tt.layers.test(X.layers)&&(F.pushLight(tt),tt.castShadow&&F.pushShadow(tt))}),R!==lt&&R.traverseVisible(function(tt){tt.isLight&&tt.layers.test(X.layers)&&(F.pushLight(tt),tt.castShadow&&F.pushShadow(tt))}),F.setupLights();const at=new Set;return R.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Nt=tt.material;if(Nt)if(Array.isArray(Nt))for(let Ft=0;Ft<Nt.length;Ft++){const Lt=Nt[Ft];so(Lt,lt,tt),at.add(Lt)}else so(Nt,lt,tt),at.add(Nt)}),F=z.pop(),at},this.compileAsync=function(R,X,lt=null){const at=this.compile(R,X,lt);return new Promise(tt=>{function Nt(){if(at.forEach(function(Ft){E.get(Ft).currentProgram.isReady()&&at.delete(Ft)}),at.size===0){tt(R);return}setTimeout(Nt,10)}Re.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Kr=null;function gl(R){Kr&&Kr(R)}function Qr(){Ii.stop()}function Jr(){Ii.start()}const Ii=new ox;Ii.setAnimationLoop(gl),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(R){Kr=R,ft.setAnimationLoop(R),R===null?Ii.stop():Ii.start()},ft.addEventListener("sessionstart",Qr),ft.addEventListener("sessionend",Jr),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ct===!0)return;const lt=ft.enabled===!0&&ft.isPresenting===!0,at=b!==null&&(J===null||lt)&&b.begin(D,J);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(X),X=ft.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,X,J),F=Tt.get(R,z.length),F.init(X),z.push(F),Ye.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ut.setFromProjectionMatrix(Ye,Yi,X.reversedDepth),$t=this.localClippingEnabled,Qt=bt.init(this.clippingPlanes,$t),N=ne.get(R,B.length),N.init(),B.push(N),ft.enabled===!0&&ft.isPresenting===!0){const Ft=D.xr.getDepthSensingMesh();Ft!==null&&$r(Ft,X,-1/0,D.sortObjects)}$r(R,X,0,D.sortObjects),N.finish(),D.sortObjects===!0&&N.sort(At,wt),ce=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,ce&&Pt.addToRenderList(N,R),this.info.render.frame++,Qt===!0&&bt.beginShadows();const tt=F.state.shadowsArray;if(zt.render(tt,R,X),Qt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&b.hasRenderPass())===!1){const Ft=N.opaque,Lt=N.transmissive;if(F.setupLights(),X.isArrayCamera){const qt=X.cameras;if(Lt.length>0)for(let Kt=0,ie=qt.length;Kt<ie;Kt++){const oe=qt[Kt];cn(Ft,Lt,R,oe)}ce&&Pt.render(R);for(let Kt=0,ie=qt.length;Kt<ie;Kt++){const oe=qt[Kt];Ei(N,R,oe,oe.viewport)}}else Lt.length>0&&cn(Ft,Lt,R,X),ce&&Pt.render(R),Ei(N,R,X)}J!==null&&j===0&&(Y.updateMultisampleRenderTarget(J),Y.updateRenderTargetMipmap(J)),at&&b.end(D),R.isScene===!0&&R.onAfterRender(D,R,X),Rt.resetDefaultState(),et=-1,Z=null,z.pop(),z.length>0?(F=z[z.length-1],Qt===!0&&bt.setGlobalState(D.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function $r(R,X,lt,at){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)F.pushLight(R),R.castShadow&&F.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ut.intersectsSprite(R)){at&&ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ye);const Ft=Wt.update(R),Lt=R.material;Lt.visible&&N.push(R,Ft,Lt,lt,ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ut.intersectsObject(R))){const Ft=Wt.update(R),Lt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ue.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),ue.copy(Ft.boundingSphere.center)),ue.applyMatrix4(R.matrixWorld).applyMatrix4(Ye)),Array.isArray(Lt)){const qt=Ft.groups;for(let Kt=0,ie=qt.length;Kt<ie;Kt++){const oe=qt[Kt],Gt=Lt[oe.materialIndex];Gt&&Gt.visible&&N.push(R,Ft,Gt,lt,ue.z,oe)}}else Lt.visible&&N.push(R,Ft,Lt,lt,ue.z,null)}}const Nt=R.children;for(let Ft=0,Lt=Nt.length;Ft<Lt;Ft++)$r(Nt[Ft],X,lt,at)}function Ei(R,X,lt,at){const{opaque:tt,transmissive:Nt,transparent:Ft}=R;F.setupLightsView(lt),Qt===!0&&bt.setGlobalState(D.clippingPlanes,lt),at&&jt.viewport(U.copy(at)),tt.length>0&&_n(tt,X,lt),Nt.length>0&&_n(Nt,X,lt),Ft.length>0&&_n(Ft,X,lt),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function cn(R,X,lt,at){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[at.id]===void 0){const Gt=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[at.id]=new Zi(1,1,{generateMipmaps:!0,type:Gt?Ra:ui,minFilter:Vr,samples:Math.max(4,ze.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Nt=F.state.transmissionRenderTarget[at.id],Ft=at.viewport||U;Nt.setSize(Ft.z*D.transmissionResolutionScale,Ft.w*D.transmissionResolutionScale);const Lt=D.getRenderTarget(),qt=D.getActiveCubeFace(),Kt=D.getActiveMipmapLevel();D.setRenderTarget(Nt),D.getClearColor(dt),st=D.getClearAlpha(),st<1&&D.setClearColor(16777215,.5),D.clear(),ce&&Pt.render(lt);const ie=D.toneMapping;D.toneMapping=ji;const oe=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),F.setupLightsView(at),Qt===!0&&bt.setGlobalState(D.clippingPlanes,at),_n(R,lt,at),Y.updateMultisampleRenderTarget(Nt),Y.updateRenderTargetMipmap(Nt),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let he=0,Je=X.length;he<Je;he++){const $e=X[he],{object:Ue,geometry:vn,material:kt,group:Fn}=$e;if(kt.side===ba&&Ue.layers.test(at.layers)){const se=kt.side;kt.side=Jn,kt.needsUpdate=!0,Ji(Ue,lt,at,vn,kt,Fn),kt.side=se,kt.needsUpdate=!0,Gt=!0}}Gt===!0&&(Y.updateMultisampleRenderTarget(Nt),Y.updateRenderTargetMipmap(Nt))}D.setRenderTarget(Lt,qt,Kt),D.setClearColor(dt,st),oe!==void 0&&(at.viewport=oe),D.toneMapping=ie}function _n(R,X,lt){const at=X.isScene===!0?X.overrideMaterial:null;for(let tt=0,Nt=R.length;tt<Nt;tt++){const Ft=R[tt],{object:Lt,geometry:qt,group:Kt}=Ft;let ie=Ft.material;ie.allowOverride===!0&&at!==null&&(ie=at),Lt.layers.test(lt.layers)&&Ji(Lt,X,lt,qt,ie,Kt)}}function Ji(R,X,lt,at,tt,Nt){R.onBeforeRender(D,X,lt,at,tt,Nt),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),tt.onBeforeRender(D,X,lt,at,R,Nt),tt.transparent===!0&&tt.side===ba&&tt.forceSinglePass===!1?(tt.side=Jn,tt.needsUpdate=!0,D.renderBufferDirect(lt,X,at,tt,R,Nt),tt.side=dr,tt.needsUpdate=!0,D.renderBufferDirect(lt,X,at,tt,R,Nt),tt.side=ba):D.renderBufferDirect(lt,X,at,tt,R,Nt),R.onAfterRender(D,X,lt,at,tt,Nt)}function wa(R,X,lt){X.isScene!==!0&&(X=Oe);const at=E.get(R),tt=F.state.lights,Nt=F.state.shadowsArray,Ft=tt.state.version,Lt=Dt.getParameters(R,tt.state,Nt,X,lt),qt=Dt.getProgramCacheKey(Lt);let Kt=at.programs;at.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,at.fog=X.fog;const ie=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;at.envMap=mt.get(R.envMap||at.environment,ie),at.envMapRotation=at.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,Kt===void 0&&(R.addEventListener("dispose",Ce),Kt=new Map,at.programs=Kt);let oe=Kt.get(qt);if(oe!==void 0){if(at.currentProgram===oe&&at.lightsStateVersion===Ft)return vl(R,Lt),oe}else Lt.uniforms=Dt.getUniforms(R),R.onBeforeCompile(Lt,D),oe=Dt.acquireProgram(Lt,qt),Kt.set(qt,oe),at.uniforms=Lt.uniforms;const Gt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Gt.clippingPlanes=bt.uniform),vl(R,Lt),at.needsLights=oo(R),at.lightsStateVersion=Ft,at.needsLights&&(Gt.ambientLightColor.value=tt.state.ambient,Gt.lightProbe.value=tt.state.probe,Gt.directionalLights.value=tt.state.directional,Gt.directionalLightShadows.value=tt.state.directionalShadow,Gt.spotLights.value=tt.state.spot,Gt.spotLightShadows.value=tt.state.spotShadow,Gt.rectAreaLights.value=tt.state.rectArea,Gt.ltc_1.value=tt.state.rectAreaLTC1,Gt.ltc_2.value=tt.state.rectAreaLTC2,Gt.pointLights.value=tt.state.point,Gt.pointLightShadows.value=tt.state.pointShadow,Gt.hemisphereLights.value=tt.state.hemi,Gt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Gt.spotLightMatrix.value=tt.state.spotLightMatrix,Gt.spotLightMap.value=tt.state.spotLightMap,Gt.pointShadowMatrix.value=tt.state.pointShadowMatrix),at.currentProgram=oe,at.uniformsList=null,oe}function _l(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=uu.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function vl(R,X){const lt=E.get(R);lt.outputColorSpace=X.outputColorSpace,lt.batching=X.batching,lt.batchingColor=X.batchingColor,lt.instancing=X.instancing,lt.instancingColor=X.instancingColor,lt.instancingMorph=X.instancingMorph,lt.skinning=X.skinning,lt.morphTargets=X.morphTargets,lt.morphNormals=X.morphNormals,lt.morphColors=X.morphColors,lt.morphTargetsCount=X.morphTargetsCount,lt.numClippingPlanes=X.numClippingPlanes,lt.numIntersection=X.numClipIntersection,lt.vertexAlphas=X.vertexAlphas,lt.vertexTangents=X.vertexTangents,lt.toneMapping=X.toneMapping}function xl(R,X,lt,at,tt){X.isScene!==!0&&(X=Oe),Y.resetTextureUnits();const Nt=X.fog,Ft=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?X.environment:null,Lt=J===null?D.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:no,qt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,Kt=mt.get(at.envMap||Ft,qt),ie=at.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,oe=!!lt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Gt=!!lt.morphAttributes.position,he=!!lt.morphAttributes.normal,Je=!!lt.morphAttributes.color;let $e=ji;at.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&($e=D.toneMapping);const Ue=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,vn=Ue!==void 0?Ue.length:0,kt=E.get(at),Fn=F.state.lights;if(Qt===!0&&($t===!0||R!==Z)){const fn=R===Z&&at.id===et;bt.setState(at,R,fn)}let se=!1;at.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Fn.state.version||kt.outputColorSpace!==Lt||tt.isBatchedMesh&&kt.batching===!1||!tt.isBatchedMesh&&kt.batching===!0||tt.isBatchedMesh&&kt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&kt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&kt.instancing===!1||!tt.isInstancedMesh&&kt.instancing===!0||tt.isSkinnedMesh&&kt.skinning===!1||!tt.isSkinnedMesh&&kt.skinning===!0||tt.isInstancedMesh&&kt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&kt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&kt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&kt.instancingMorph===!1&&tt.morphTexture!==null||kt.envMap!==Kt||at.fog===!0&&kt.fog!==Nt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==bt.numPlanes||kt.numIntersection!==bt.numIntersection)||kt.vertexAlphas!==ie||kt.vertexTangents!==oe||kt.morphTargets!==Gt||kt.morphNormals!==he||kt.morphColors!==Je||kt.toneMapping!==$e||kt.morphTargetsCount!==vn)&&(se=!0):(se=!0,kt.__version=at.version);let Hn=kt.currentProgram;se===!0&&(Hn=wa(at,X,tt));let $n=!1,Ti=!1,ti=!1;const Ie=Hn.getUniforms(),un=kt.uniforms;if(jt.useProgram(Hn.program)&&($n=!0,Ti=!0,ti=!0),at.id!==et&&(et=at.id,Ti=!0),$n||Z!==R){jt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ie.setValue(V,"projectionMatrix",R.projectionMatrix),Ie.setValue(V,"viewMatrix",R.matrixWorldInverse);const Ai=Ie.map.cameraPosition;Ai!==void 0&&Ai.setValue(V,ge.setFromMatrixPosition(R.matrixWorld)),ze.logarithmicDepthBuffer&&Ie.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Ie.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),Z!==R&&(Z=R,Ti=!0,ti=!0)}if(kt.needsLights&&(Fn.state.directionalShadowMap.length>0&&Ie.setValue(V,"directionalShadowMap",Fn.state.directionalShadowMap,Y),Fn.state.spotShadowMap.length>0&&Ie.setValue(V,"spotShadowMap",Fn.state.spotShadowMap,Y),Fn.state.pointShadowMap.length>0&&Ie.setValue(V,"pointShadowMap",Fn.state.pointShadowMap,Y)),tt.isSkinnedMesh){Ie.setOptional(V,tt,"bindMatrix"),Ie.setOptional(V,tt,"bindMatrixInverse");const fn=tt.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Ie.setValue(V,"boneTexture",fn.boneTexture,Y))}tt.isBatchedMesh&&(Ie.setOptional(V,tt,"batchingTexture"),Ie.setValue(V,"batchingTexture",tt._matricesTexture,Y),Ie.setOptional(V,tt,"batchingIdTexture"),Ie.setValue(V,"batchingIdTexture",tt._indirectTexture,Y),Ie.setOptional(V,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Ie.setValue(V,"batchingColorTexture",tt._colorsTexture,Y));const Gn=lt.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&It.update(tt,lt,Hn),(Ti||kt.receiveShadow!==tt.receiveShadow)&&(kt.receiveShadow=tt.receiveShadow,Ie.setValue(V,"receiveShadow",tt.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&X.environment!==null&&(un.envMapIntensity.value=X.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=lR()),Ti&&(Ie.setValue(V,"toneMappingExposure",D.toneMappingExposure),kt.needsLights&&pr(un,ti),Nt&&at.fog===!0&&Jt.refreshFogUniforms(un,Nt),Jt.refreshMaterialUniforms(un,at,vt,q,F.state.transmissionRenderTarget[R.id]),uu.upload(V,_l(kt),un,Y)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(uu.upload(V,_l(kt),un,Y),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Ie.setValue(V,"center",tt.center),Ie.setValue(V,"modelViewMatrix",tt.modelViewMatrix),Ie.setValue(V,"normalMatrix",tt.normalMatrix),Ie.setValue(V,"modelMatrix",tt.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const fn=at.uniformsGroups;for(let Ai=0,$i=fn.length;Ai<$i;Ai++){const ts=fn[Ai];Bt.update(ts,Hn),Bt.bind(ts,Hn)}}return Hn}function pr(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function oo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(R,X,lt){const at=E.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=X,E.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:lt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const lt=E.get(R);lt.__webglFramebuffer=X,lt.__useDefaultFramebuffer=X===void 0};const Da=V.createFramebuffer();this.setRenderTarget=function(R,X=0,lt=0){J=R,H=X,j=lt;let at=null,tt=!1,Nt=!1;if(R){const Lt=E.get(R);if(Lt.__useDefaultFramebuffer!==void 0){jt.bindFramebuffer(V.FRAMEBUFFER,Lt.__webglFramebuffer),U.copy(R.viewport),I.copy(R.scissor),ot=R.scissorTest,jt.viewport(U),jt.scissor(I),jt.setScissorTest(ot),et=-1;return}else if(Lt.__webglFramebuffer===void 0)Y.setupRenderTarget(R);else if(Lt.__hasExternalTextures)Y.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ie=R.depthTexture;if(Lt.__boundDepthTexture!==ie){if(ie!==null&&E.has(ie)&&(R.width!==ie.image.width||R.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(R)}}const qt=R.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Nt=!0);const Kt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Kt[X])?at=Kt[X][lt]:at=Kt[X],tt=!0):R.samples>0&&Y.useMultisampledRTT(R)===!1?at=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Kt)?at=Kt[lt]:at=Kt,U.copy(R.viewport),I.copy(R.scissor),ot=R.scissorTest}else U.copy($).multiplyScalar(vt).floor(),I.copy(_t).multiplyScalar(vt).floor(),ot=Mt;if(lt!==0&&(at=Da),jt.bindFramebuffer(V.FRAMEBUFFER,at)&&jt.drawBuffers(R,at),jt.viewport(U),jt.scissor(I),jt.setScissorTest(ot),tt){const Lt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Lt.__webglTexture,lt)}else if(Nt){const Lt=X;for(let qt=0;qt<R.textures.length;qt++){const Kt=E.get(R.textures[qt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+qt,Kt.__webglTexture,lt,Lt)}}else if(R!==null&&lt!==0){const Lt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Lt.__webglTexture,lt)}et=-1},this.readRenderTargetPixels=function(R,X,lt,at,tt,Nt,Ft,Lt=0){if(!(R&&R.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(qt=qt[Ft]),qt){jt.bindFramebuffer(V.FRAMEBUFFER,qt);try{const Kt=R.textures[Lt],ie=Kt.format,oe=Kt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),!ze.textureFormatReadable(ie)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(oe)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-at&&lt>=0&&lt<=R.height-tt&&V.readPixels(X,lt,at,tt,Ct.convert(ie),Ct.convert(oe),Nt)}finally{const Kt=J!==null?E.get(J).__webglFramebuffer:null;jt.bindFramebuffer(V.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(R,X,lt,at,tt,Nt,Ft,Lt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(qt=qt[Ft]),qt)if(X>=0&&X<=R.width-at&&lt>=0&&lt<=R.height-tt){jt.bindFramebuffer(V.FRAMEBUFFER,qt);const Kt=R.textures[Lt],ie=Kt.format,oe=Kt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),!ze.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Gt),V.bufferData(V.PIXEL_PACK_BUFFER,Nt.byteLength,V.STREAM_READ),V.readPixels(X,lt,at,tt,Ct.convert(ie),Ct.convert(oe),0);const he=J!==null?E.get(J).__webglFramebuffer:null;jt.bindFramebuffer(V.FRAMEBUFFER,he);const Je=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await TM(V,Je,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Gt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Nt),V.deleteBuffer(Gt),V.deleteSync(Je),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,lt=0){const at=Math.pow(2,-lt),tt=Math.floor(R.image.width*at),Nt=Math.floor(R.image.height*at),Ft=X!==null?X.x:0,Lt=X!==null?X.y:0;Y.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,lt,0,0,Ft,Lt,tt,Nt),jt.unbindTexture()};const Ua=V.createFramebuffer(),mr=V.createFramebuffer();this.copyTextureToTexture=function(R,X,lt=null,at=null,tt=0,Nt=0){let Ft,Lt,qt,Kt,ie,oe,Gt,he,Je;const $e=R.isCompressedTexture?R.mipmaps[Nt]:R.image;if(lt!==null)Ft=lt.max.x-lt.min.x,Lt=lt.max.y-lt.min.y,qt=lt.isBox3?lt.max.z-lt.min.z:1,Kt=lt.min.x,ie=lt.min.y,oe=lt.isBox3?lt.min.z:0;else{const un=Math.pow(2,-tt);Ft=Math.floor($e.width*un),Lt=Math.floor($e.height*un),R.isDataArrayTexture?qt=$e.depth:R.isData3DTexture?qt=Math.floor($e.depth*un):qt=1,Kt=0,ie=0,oe=0}at!==null?(Gt=at.x,he=at.y,Je=at.z):(Gt=0,he=0,Je=0);const Ue=Ct.convert(X.format),vn=Ct.convert(X.type);let kt;X.isData3DTexture?(Y.setTexture3D(X,0),kt=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Y.setTexture2DArray(X,0),kt=V.TEXTURE_2D_ARRAY):(Y.setTexture2D(X,0),kt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const Fn=V.getParameter(V.UNPACK_ROW_LENGTH),se=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Hn=V.getParameter(V.UNPACK_SKIP_PIXELS),$n=V.getParameter(V.UNPACK_SKIP_ROWS),Ti=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,$e.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,$e.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Kt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ie),V.pixelStorei(V.UNPACK_SKIP_IMAGES,oe);const ti=R.isDataArrayTexture||R.isData3DTexture,Ie=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const un=E.get(R),Gn=E.get(X),fn=E.get(un.__renderTarget),Ai=E.get(Gn.__renderTarget);jt.bindFramebuffer(V.READ_FRAMEBUFFER,fn.__webglFramebuffer),jt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let $i=0;$i<qt;$i++)ti&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,tt,oe+$i),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(X).__webglTexture,Nt,Je+$i)),V.blitFramebuffer(Kt,ie,Ft,Lt,Gt,he,Ft,Lt,V.DEPTH_BUFFER_BIT,V.NEAREST);jt.bindFramebuffer(V.READ_FRAMEBUFFER,null),jt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(tt!==0||R.isRenderTargetTexture||E.has(R)){const un=E.get(R),Gn=E.get(X);jt.bindFramebuffer(V.READ_FRAMEBUFFER,Ua),jt.bindFramebuffer(V.DRAW_FRAMEBUFFER,mr);for(let fn=0;fn<qt;fn++)ti?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,un.__webglTexture,tt,oe+fn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,un.__webglTexture,tt),Ie?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Gn.__webglTexture,Nt,Je+fn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Gn.__webglTexture,Nt),tt!==0?V.blitFramebuffer(Kt,ie,Ft,Lt,Gt,he,Ft,Lt,V.COLOR_BUFFER_BIT,V.NEAREST):Ie?V.copyTexSubImage3D(kt,Nt,Gt,he,Je+fn,Kt,ie,Ft,Lt):V.copyTexSubImage2D(kt,Nt,Gt,he,Kt,ie,Ft,Lt);jt.bindFramebuffer(V.READ_FRAMEBUFFER,null),jt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ie?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(kt,Nt,Gt,he,Je,Ft,Lt,qt,Ue,vn,$e.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(kt,Nt,Gt,he,Je,Ft,Lt,qt,Ue,$e.data):V.texSubImage3D(kt,Nt,Gt,he,Je,Ft,Lt,qt,Ue,vn,$e):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Nt,Gt,he,Ft,Lt,Ue,vn,$e.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Nt,Gt,he,$e.width,$e.height,Ue,$e.data):V.texSubImage2D(V.TEXTURE_2D,Nt,Gt,he,Ft,Lt,Ue,vn,$e);V.pixelStorei(V.UNPACK_ROW_LENGTH,Fn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,se),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Hn),V.pixelStorei(V.UNPACK_SKIP_ROWS,$n),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ti),Nt===0&&X.generateMipmaps&&V.generateMipmap(kt),jt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&Y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Y.setTextureCube(R,0):R.isData3DTexture?Y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Y.setTexture2DArray(R,0):Y.setTexture2D(R,0),jt.unbindTexture()},this.resetState=function(){H=0,j=0,J=null,jt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}function hx(s){const i=(s-6)/14,r=i*Math.PI-Math.PI/2,l=-2.5+Math.cos(r)*8,c=Math.sin(Math.PI*i)*(8*.8),d=Math.sin(r)*(8*.5),p=180+r*180/Math.PI,m=Math.sin(Math.PI*i)*90;return{position:new Q(l,c,d),azimuth:p,altitude:m,progress:i}}function px(s,t,i){const r=new Q().subVectors(s,t).normalize(),l=new Q().subVectors(i,t).normalize(),c=new Q().addVectors(r,l).normalize(),d=new Q(0,1,0);return new Yr().setFromUnitVectors(d,c)}function uR(s){const t=new Pi().setFromQuaternion(s,"YXZ");return{pitch:t.x*(180/Math.PI),yaw:t.y*(180/Math.PI)}}const fR=({time:s})=>{const t=Be.useRef(null),i=Be.useRef(null),r=new Q(8,0,0),l=new Q(-8,0,0);return Be.useEffect(()=>{if(!t.current)return;const c=new GM;c.background=new Me(394772);const d=new yi(45,t.current.clientWidth/t.current.clientHeight,.1,1e3);d.position.set(0,15,25),d.lookAt(0,0,0);const p=new cR({antialias:!0});p.setSize(t.current.clientWidth,t.current.clientHeight),p.shadowMap.enabled=!0,t.current.appendChild(p.domElement);const m=new mb(50,50,1908023,1118503);c.add(m);const h=new Xr,v=new qr(2.5,.1,2.5),y=new Jc({color:7527679,shininess:200,specular:16777215,transparent:!0,opacity:.9}),g=new Pn(v,y);h.add(g),h.position.copy(l),c.add(h);const M=new Js(.15,.15,2),T=new Jc({color:2302783}),C=new Pn(M,T);C.position.y=-1,h.add(C);const S=new Xr,x=new Pn(new qr(2,2,2),new Jc({color:1908023,emissive:7527679,emissiveIntensity:.05}));x.position.y=1;const w=new Pn(new Cp(1.6,1.2,4),new Jc({color:2302783}));w.position.y=2.6,w.rotation.y=Math.PI/4,S.add(x,w),S.position.copy(r),c.add(S);const L=new Xr,N=new Pn(new wp(.8,32,32),new gu({color:16774897})),F=document.createElement("canvas");F.width=64,F.height=64;const B=F.getContext("2d"),z=B.createRadialGradient(32,32,0,32,32,32);z.addColorStop(0,"rgba(255, 255, 255, 1)"),z.addColorStop(.2,"rgba(255, 240, 200, 0.8)"),z.addColorStop(1,"rgba(255, 150, 0, 0)"),B.fillStyle=z,B.fillRect(0,0,64,64);const b=new tb(F),D=new YM(new Jv({map:b,color:16751872,transparent:!0,opacity:.7,blending:xh}));D.scale.set(4,4,1),N.add(D),L.add(N),c.add(L);const ct=st=>{const P=new Rp({color:st,transparent:!0,opacity:.4}),q=new Wn().setFromPoints([new Q,new Q]);return new ex(q,P)},H=ct(16777215),j=ct(7527679);c.add(H,j);const J=new gu({color:7527679,transparent:!0,opacity:.2}),et=new Pn(new Js(.05,.05,1),J),Z=new Pn(new Js(.05,.05,1),J);c.add(et,Z);const U=new db(4210752,1.5);c.add(U);const I=new fb(16777215,2);c.add(I),i.current={scene:c,camera:d,renderer:p,sunGroup:L,mirrorMesh:g,incomingBeam:H,reflectedBeam:j,incomingCore:et,reflectedCore:Z,directionalLight:I};const ot=()=>{if(!t.current||!i.current)return;const{camera:st,renderer:P}=i.current;st.aspect=t.current.clientWidth/t.current.clientHeight,st.updateProjectionMatrix(),P.setSize(t.current.clientWidth,t.current.clientHeight)};window.addEventListener("resize",ot);const dt=()=>{requestAnimationFrame(dt),i.current&&(i.current.renderer.render(i.current.scene,i.current.camera),i.current.renderer.domElement)};return dt(),()=>{window.removeEventListener("resize",ot),p.dispose(),t.current&&t.current.removeChild(p.domElement)}},[]),Be.useEffect(()=>{if(!i.current)return;const{sunGroup:c,mirrorMesh:d,incomingBeam:p,reflectedBeam:m,incomingCore:h,reflectedCore:v,directionalLight:y}=i.current,{position:g}=hx(s);c.position.copy(g),y.position.copy(g);const M=px(g,l,r);d.quaternion.copy(M),p.geometry.setFromPoints([g,l]),m.geometry.setFromPoints([l,r]);const T=(C,S,x)=>{const w=S.distanceTo(x);C.scale.set(1,w,1),C.position.copy(S).lerp(x,.5),C.lookAt(x),C.rotateX(Math.PI/2)};T(h,g,l),T(v,l,r)},[s]),xt.jsx("div",{ref:t,className:"w-full h-full"})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dR=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hR=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),yv=s=>{const t=hR(s);return t.charAt(0).toUpperCase()+t.slice(1)},mx=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),pR=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=Be.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...p},m)=>Be.createElement("svg",{ref:m,...mR,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:mx("lucide",l),...!c&&!pR(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,v])=>Be.createElement(h,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=(s,t)=>{const i=Be.forwardRef(({className:r,...l},c)=>Be.createElement(gR,{ref:c,iconNode:t,className:mx(`lucide-${dR(yv(s))}`,`lucide-${s}`,r),...l}));return i.displayName=yv(s),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],vR=zi("calendar",_R);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xR=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],SR=zi("clock",xR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],MR=zi("download",yR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",key:"b19h5q"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",key:"h7h5ge"}]],ER=zi("fast-forward",bR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],AR=zi("locate-fixed",TR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],CR=zi("map-pin",RR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],DR=zi("pause",wR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UR=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],NR=zi("play",UR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LR=[["path",{d:"M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z",key:"2a1g8i"}],["path",{d:"M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z",key:"rg3s36"}]],OR=zi("rewind",LR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PR=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],zR=zi("settings-2",PR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IR=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],BR=zi("sun",IR);function gx(s){var t,i,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var l=s.length;for(t=0;t<l;t++)s[t]&&(i=gx(s[t]))&&(r&&(r+=" "),r+=i)}else for(i in s)s[i]&&(r&&(r+=" "),r+=i);return r}function FR(){for(var s,t,i=0,r="",l=arguments.length;i<l;i++)(s=arguments[i])&&(t=gx(s))&&(r&&(r+=" "),r+=t);return r}const HR=(s,t)=>{const i=new Array(s.length+t.length);for(let r=0;r<s.length;r++)i[r]=s[r];for(let r=0;r<t.length;r++)i[s.length+r]=t[r];return i},GR=(s,t)=>({classGroupId:s,validator:t}),_x=(s=new Map,t=null,i)=>({nextPart:s,validators:t,classGroupId:i}),xu="-",Mv=[],VR="arbitrary..",kR=s=>{const t=WR(s),{conflictingClassGroups:i,conflictingClassGroupModifiers:r}=s;return{getClassGroupId:d=>{if(d.startsWith("[")&&d.endsWith("]"))return XR(d);const p=d.split(xu),m=p[0]===""&&p.length>1?1:0;return vx(p,m,t)},getConflictingClassGroupIds:(d,p)=>{if(p){const m=r[d],h=i[d];return m?h?HR(h,m):m:h||Mv}return i[d]||Mv}}},vx=(s,t,i)=>{if(s.length-t===0)return i.classGroupId;const l=s[t],c=i.nextPart.get(l);if(c){const h=vx(s,t+1,c);if(h)return h}const d=i.validators;if(d===null)return;const p=t===0?s.join(xu):s.slice(t).join(xu),m=d.length;for(let h=0;h<m;h++){const v=d[h];if(v.validator(p))return v.classGroupId}},XR=s=>s.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=s.slice(1,-1),i=t.indexOf(":"),r=t.slice(0,i);return r?VR+r:void 0})(),WR=s=>{const{theme:t,classGroups:i}=s;return qR(i,t)},qR=(s,t)=>{const i=_x();for(const r in s){const l=s[r];Up(l,i,r,t)}return i},Up=(s,t,i,r)=>{const l=s.length;for(let c=0;c<l;c++){const d=s[c];YR(d,t,i,r)}},YR=(s,t,i,r)=>{if(typeof s=="string"){jR(s,t,i);return}if(typeof s=="function"){ZR(s,t,i,r);return}KR(s,t,i,r)},jR=(s,t,i)=>{const r=s===""?t:xx(t,s);r.classGroupId=i},ZR=(s,t,i,r)=>{if(QR(s)){Up(s(r),t,i,r);return}t.validators===null&&(t.validators=[]),t.validators.push(GR(i,s))},KR=(s,t,i,r)=>{const l=Object.entries(s),c=l.length;for(let d=0;d<c;d++){const[p,m]=l[d];Up(m,xx(t,p),i,r)}},xx=(s,t)=>{let i=s;const r=t.split(xu),l=r.length;for(let c=0;c<l;c++){const d=r[c];let p=i.nextPart.get(d);p||(p=_x(),i.nextPart.set(d,p)),i=p}return i},QR=s=>"isThemeGetter"in s&&s.isThemeGetter===!0,JR=s=>{if(s<1)return{get:()=>{},set:()=>{}};let t=0,i=Object.create(null),r=Object.create(null);const l=(c,d)=>{i[c]=d,t++,t>s&&(t=0,r=i,i=Object.create(null))};return{get(c){let d=i[c];if(d!==void 0)return d;if((d=r[c])!==void 0)return l(c,d),d},set(c,d){c in i?i[c]=d:l(c,d)}}},hp="!",bv=":",$R=[],Ev=(s,t,i,r,l)=>({modifiers:s,hasImportantModifier:t,baseClassName:i,maybePostfixModifierPosition:r,isExternal:l}),t2=s=>{const{prefix:t,experimentalParseClassName:i}=s;let r=l=>{const c=[];let d=0,p=0,m=0,h;const v=l.length;for(let C=0;C<v;C++){const S=l[C];if(d===0&&p===0){if(S===bv){c.push(l.slice(m,C)),m=C+1;continue}if(S==="/"){h=C;continue}}S==="["?d++:S==="]"?d--:S==="("?p++:S===")"&&p--}const y=c.length===0?l:l.slice(m);let g=y,M=!1;y.endsWith(hp)?(g=y.slice(0,-1),M=!0):y.startsWith(hp)&&(g=y.slice(1),M=!0);const T=h&&h>m?h-m:void 0;return Ev(c,M,g,T)};if(t){const l=t+bv,c=r;r=d=>d.startsWith(l)?c(d.slice(l.length)):Ev($R,!1,d,void 0,!0)}if(i){const l=r;r=c=>i({className:c,parseClassName:l})}return r},e2=s=>{const t=new Map;return s.orderSensitiveModifiers.forEach((i,r)=>{t.set(i,1e6+r)}),i=>{const r=[];let l=[];for(let c=0;c<i.length;c++){const d=i[c],p=d[0]==="[",m=t.has(d);p||m?(l.length>0&&(l.sort(),r.push(...l),l=[]),r.push(d)):l.push(d)}return l.length>0&&(l.sort(),r.push(...l)),r}},n2=s=>({cache:JR(s.cacheSize),parseClassName:t2(s),sortModifiers:e2(s),...kR(s)}),i2=/\s+/,a2=(s,t)=>{const{parseClassName:i,getClassGroupId:r,getConflictingClassGroupIds:l,sortModifiers:c}=t,d=[],p=s.trim().split(i2);let m="";for(let h=p.length-1;h>=0;h-=1){const v=p[h],{isExternal:y,modifiers:g,hasImportantModifier:M,baseClassName:T,maybePostfixModifierPosition:C}=i(v);if(y){m=v+(m.length>0?" "+m:m);continue}let S=!!C,x=r(S?T.substring(0,C):T);if(!x){if(!S){m=v+(m.length>0?" "+m:m);continue}if(x=r(T),!x){m=v+(m.length>0?" "+m:m);continue}S=!1}const w=g.length===0?"":g.length===1?g[0]:c(g).join(":"),L=M?w+hp:w,N=L+x;if(d.indexOf(N)>-1)continue;d.push(N);const F=l(x,S);for(let B=0;B<F.length;++B){const z=F[B];d.push(L+z)}m=v+(m.length>0?" "+m:m)}return m},r2=(...s)=>{let t=0,i,r,l="";for(;t<s.length;)(i=s[t++])&&(r=Sx(i))&&(l&&(l+=" "),l+=r);return l},Sx=s=>{if(typeof s=="string")return s;let t,i="";for(let r=0;r<s.length;r++)s[r]&&(t=Sx(s[r]))&&(i&&(i+=" "),i+=t);return i},s2=(s,...t)=>{let i,r,l,c;const d=m=>{const h=t.reduce((v,y)=>y(v),s());return i=n2(h),r=i.cache.get,l=i.cache.set,c=p,p(m)},p=m=>{const h=r(m);if(h)return h;const v=a2(m,i);return l(m,v),v};return c=d,(...m)=>c(r2(...m))},o2=[],Sn=s=>{const t=i=>i[s]||o2;return t.isThemeGetter=!0,t},yx=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Mx=/^\((?:(\w[\w-]*):)?(.+)\)$/i,l2=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,c2=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,u2=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,f2=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,d2=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,h2=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,or=s=>l2.test(s),ve=s=>!!s&&!Number.isNaN(Number(s)),lr=s=>!!s&&Number.isInteger(Number(s)),_h=s=>s.endsWith("%")&&ve(s.slice(0,-1)),Ma=s=>c2.test(s),bx=()=>!0,p2=s=>u2.test(s)&&!f2.test(s),Np=()=>!1,m2=s=>d2.test(s),g2=s=>h2.test(s),_2=s=>!Xt(s)&&!Yt(s),v2=s=>hr(s,Ax,Np),Xt=s=>yx.test(s),Br=s=>hr(s,Rx,p2),Tv=s=>hr(s,A2,ve),x2=s=>hr(s,wx,bx),S2=s=>hr(s,Cx,Np),Av=s=>hr(s,Ex,Np),y2=s=>hr(s,Tx,g2),iu=s=>hr(s,Dx,m2),Yt=s=>Mx.test(s),ll=s=>Zr(s,Rx),M2=s=>Zr(s,Cx),Rv=s=>Zr(s,Ex),b2=s=>Zr(s,Ax),E2=s=>Zr(s,Tx),au=s=>Zr(s,Dx,!0),T2=s=>Zr(s,wx,!0),hr=(s,t,i)=>{const r=yx.exec(s);return r?r[1]?t(r[1]):i(r[2]):!1},Zr=(s,t,i=!1)=>{const r=Mx.exec(s);return r?r[1]?t(r[1]):i:!1},Ex=s=>s==="position"||s==="percentage",Tx=s=>s==="image"||s==="url",Ax=s=>s==="length"||s==="size"||s==="bg-size",Rx=s=>s==="length",A2=s=>s==="number",Cx=s=>s==="family-name",wx=s=>s==="number"||s==="weight",Dx=s=>s==="shadow",R2=()=>{const s=Sn("color"),t=Sn("font"),i=Sn("text"),r=Sn("font-weight"),l=Sn("tracking"),c=Sn("leading"),d=Sn("breakpoint"),p=Sn("container"),m=Sn("spacing"),h=Sn("radius"),v=Sn("shadow"),y=Sn("inset-shadow"),g=Sn("text-shadow"),M=Sn("drop-shadow"),T=Sn("blur"),C=Sn("perspective"),S=Sn("aspect"),x=Sn("ease"),w=Sn("animate"),L=()=>["auto","avoid","all","avoid-page","page","left","right","column"],N=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],F=()=>[...N(),Yt,Xt],B=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto","contain","none"],b=()=>[Yt,Xt,m],D=()=>[or,"full","auto",...b()],ct=()=>[lr,"none","subgrid",Yt,Xt],H=()=>["auto",{span:["full",lr,Yt,Xt]},lr,Yt,Xt],j=()=>[lr,"auto",Yt,Xt],J=()=>["auto","min","max","fr",Yt,Xt],et=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Z=()=>["start","end","center","stretch","center-safe","end-safe"],U=()=>["auto",...b()],I=()=>[or,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...b()],ot=()=>[or,"screen","full","dvw","lvw","svw","min","max","fit",...b()],dt=()=>[or,"screen","full","lh","dvh","lvh","svh","min","max","fit",...b()],st=()=>[s,Yt,Xt],P=()=>[...N(),Rv,Av,{position:[Yt,Xt]}],q=()=>["no-repeat",{repeat:["","x","y","space","round"]}],vt=()=>["auto","cover","contain",b2,v2,{size:[Yt,Xt]}],At=()=>[_h,ll,Br],wt=()=>["","none","full",h,Yt,Xt],$=()=>["",ve,ll,Br],_t=()=>["solid","dashed","dotted","double"],Mt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Ut=()=>[ve,_h,Rv,Av],Qt=()=>["","none",T,Yt,Xt],$t=()=>["none",ve,Yt,Xt],Ye=()=>["none",ve,Yt,Xt],ge=()=>[ve,Yt,Xt],ue=()=>[or,"full",...b()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ma],breakpoint:[Ma],color:[bx],container:[Ma],"drop-shadow":[Ma],ease:["in","out","in-out"],font:[_2],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ma],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ma],shadow:[Ma],spacing:["px",ve],text:[Ma],"text-shadow":[Ma],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",or,Xt,Yt,S]}],container:["container"],columns:[{columns:[ve,Xt,Yt,p]}],"break-after":[{"break-after":L()}],"break-before":[{"break-before":L()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:F()}],overflow:[{overflow:B()}],"overflow-x":[{"overflow-x":B()}],"overflow-y":[{"overflow-y":B()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:D()}],"inset-x":[{"inset-x":D()}],"inset-y":[{"inset-y":D()}],start:[{"inset-s":D(),start:D()}],end:[{"inset-e":D(),end:D()}],"inset-bs":[{"inset-bs":D()}],"inset-be":[{"inset-be":D()}],top:[{top:D()}],right:[{right:D()}],bottom:[{bottom:D()}],left:[{left:D()}],visibility:["visible","invisible","collapse"],z:[{z:[lr,"auto",Yt,Xt]}],basis:[{basis:[or,"full","auto",p,...b()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ve,or,"auto","initial","none",Xt]}],grow:[{grow:["",ve,Yt,Xt]}],shrink:[{shrink:["",ve,Yt,Xt]}],order:[{order:[lr,"first","last","none",Yt,Xt]}],"grid-cols":[{"grid-cols":ct()}],"col-start-end":[{col:H()}],"col-start":[{"col-start":j()}],"col-end":[{"col-end":j()}],"grid-rows":[{"grid-rows":ct()}],"row-start-end":[{row:H()}],"row-start":[{"row-start":j()}],"row-end":[{"row-end":j()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":J()}],"auto-rows":[{"auto-rows":J()}],gap:[{gap:b()}],"gap-x":[{"gap-x":b()}],"gap-y":[{"gap-y":b()}],"justify-content":[{justify:[...et(),"normal"]}],"justify-items":[{"justify-items":[...Z(),"normal"]}],"justify-self":[{"justify-self":["auto",...Z()]}],"align-content":[{content:["normal",...et()]}],"align-items":[{items:[...Z(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Z(),{baseline:["","last"]}]}],"place-content":[{"place-content":et()}],"place-items":[{"place-items":[...Z(),"baseline"]}],"place-self":[{"place-self":["auto",...Z()]}],p:[{p:b()}],px:[{px:b()}],py:[{py:b()}],ps:[{ps:b()}],pe:[{pe:b()}],pbs:[{pbs:b()}],pbe:[{pbe:b()}],pt:[{pt:b()}],pr:[{pr:b()}],pb:[{pb:b()}],pl:[{pl:b()}],m:[{m:U()}],mx:[{mx:U()}],my:[{my:U()}],ms:[{ms:U()}],me:[{me:U()}],mbs:[{mbs:U()}],mbe:[{mbe:U()}],mt:[{mt:U()}],mr:[{mr:U()}],mb:[{mb:U()}],ml:[{ml:U()}],"space-x":[{"space-x":b()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":b()}],"space-y-reverse":["space-y-reverse"],size:[{size:I()}],"inline-size":[{inline:["auto",...ot()]}],"min-inline-size":[{"min-inline":["auto",...ot()]}],"max-inline-size":[{"max-inline":["none",...ot()]}],"block-size":[{block:["auto",...dt()]}],"min-block-size":[{"min-block":["auto",...dt()]}],"max-block-size":[{"max-block":["none",...dt()]}],w:[{w:[p,"screen",...I()]}],"min-w":[{"min-w":[p,"screen","none",...I()]}],"max-w":[{"max-w":[p,"screen","none","prose",{screen:[d]},...I()]}],h:[{h:["screen","lh",...I()]}],"min-h":[{"min-h":["screen","lh","none",...I()]}],"max-h":[{"max-h":["screen","lh",...I()]}],"font-size":[{text:["base",i,ll,Br]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,T2,x2]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",_h,Xt]}],"font-family":[{font:[M2,S2,t]}],"font-features":[{"font-features":[Xt]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,Yt,Xt]}],"line-clamp":[{"line-clamp":[ve,"none",Yt,Tv]}],leading:[{leading:[c,...b()]}],"list-image":[{"list-image":["none",Yt,Xt]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Yt,Xt]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:st()}],"text-color":[{text:st()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[..._t(),"wavy"]}],"text-decoration-thickness":[{decoration:[ve,"from-font","auto",Yt,Br]}],"text-decoration-color":[{decoration:st()}],"underline-offset":[{"underline-offset":[ve,"auto",Yt,Xt]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:b()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Yt,Xt]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Yt,Xt]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:P()}],"bg-repeat":[{bg:q()}],"bg-size":[{bg:vt()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},lr,Yt,Xt],radial:["",Yt,Xt],conic:[lr,Yt,Xt]},E2,y2]}],"bg-color":[{bg:st()}],"gradient-from-pos":[{from:At()}],"gradient-via-pos":[{via:At()}],"gradient-to-pos":[{to:At()}],"gradient-from":[{from:st()}],"gradient-via":[{via:st()}],"gradient-to":[{to:st()}],rounded:[{rounded:wt()}],"rounded-s":[{"rounded-s":wt()}],"rounded-e":[{"rounded-e":wt()}],"rounded-t":[{"rounded-t":wt()}],"rounded-r":[{"rounded-r":wt()}],"rounded-b":[{"rounded-b":wt()}],"rounded-l":[{"rounded-l":wt()}],"rounded-ss":[{"rounded-ss":wt()}],"rounded-se":[{"rounded-se":wt()}],"rounded-ee":[{"rounded-ee":wt()}],"rounded-es":[{"rounded-es":wt()}],"rounded-tl":[{"rounded-tl":wt()}],"rounded-tr":[{"rounded-tr":wt()}],"rounded-br":[{"rounded-br":wt()}],"rounded-bl":[{"rounded-bl":wt()}],"border-w":[{border:$()}],"border-w-x":[{"border-x":$()}],"border-w-y":[{"border-y":$()}],"border-w-s":[{"border-s":$()}],"border-w-e":[{"border-e":$()}],"border-w-bs":[{"border-bs":$()}],"border-w-be":[{"border-be":$()}],"border-w-t":[{"border-t":$()}],"border-w-r":[{"border-r":$()}],"border-w-b":[{"border-b":$()}],"border-w-l":[{"border-l":$()}],"divide-x":[{"divide-x":$()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":$()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[..._t(),"hidden","none"]}],"divide-style":[{divide:[..._t(),"hidden","none"]}],"border-color":[{border:st()}],"border-color-x":[{"border-x":st()}],"border-color-y":[{"border-y":st()}],"border-color-s":[{"border-s":st()}],"border-color-e":[{"border-e":st()}],"border-color-bs":[{"border-bs":st()}],"border-color-be":[{"border-be":st()}],"border-color-t":[{"border-t":st()}],"border-color-r":[{"border-r":st()}],"border-color-b":[{"border-b":st()}],"border-color-l":[{"border-l":st()}],"divide-color":[{divide:st()}],"outline-style":[{outline:[..._t(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ve,Yt,Xt]}],"outline-w":[{outline:["",ve,ll,Br]}],"outline-color":[{outline:st()}],shadow:[{shadow:["","none",v,au,iu]}],"shadow-color":[{shadow:st()}],"inset-shadow":[{"inset-shadow":["none",y,au,iu]}],"inset-shadow-color":[{"inset-shadow":st()}],"ring-w":[{ring:$()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:st()}],"ring-offset-w":[{"ring-offset":[ve,Br]}],"ring-offset-color":[{"ring-offset":st()}],"inset-ring-w":[{"inset-ring":$()}],"inset-ring-color":[{"inset-ring":st()}],"text-shadow":[{"text-shadow":["none",g,au,iu]}],"text-shadow-color":[{"text-shadow":st()}],opacity:[{opacity:[ve,Yt,Xt]}],"mix-blend":[{"mix-blend":[...Mt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Mt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ve]}],"mask-image-linear-from-pos":[{"mask-linear-from":Ut()}],"mask-image-linear-to-pos":[{"mask-linear-to":Ut()}],"mask-image-linear-from-color":[{"mask-linear-from":st()}],"mask-image-linear-to-color":[{"mask-linear-to":st()}],"mask-image-t-from-pos":[{"mask-t-from":Ut()}],"mask-image-t-to-pos":[{"mask-t-to":Ut()}],"mask-image-t-from-color":[{"mask-t-from":st()}],"mask-image-t-to-color":[{"mask-t-to":st()}],"mask-image-r-from-pos":[{"mask-r-from":Ut()}],"mask-image-r-to-pos":[{"mask-r-to":Ut()}],"mask-image-r-from-color":[{"mask-r-from":st()}],"mask-image-r-to-color":[{"mask-r-to":st()}],"mask-image-b-from-pos":[{"mask-b-from":Ut()}],"mask-image-b-to-pos":[{"mask-b-to":Ut()}],"mask-image-b-from-color":[{"mask-b-from":st()}],"mask-image-b-to-color":[{"mask-b-to":st()}],"mask-image-l-from-pos":[{"mask-l-from":Ut()}],"mask-image-l-to-pos":[{"mask-l-to":Ut()}],"mask-image-l-from-color":[{"mask-l-from":st()}],"mask-image-l-to-color":[{"mask-l-to":st()}],"mask-image-x-from-pos":[{"mask-x-from":Ut()}],"mask-image-x-to-pos":[{"mask-x-to":Ut()}],"mask-image-x-from-color":[{"mask-x-from":st()}],"mask-image-x-to-color":[{"mask-x-to":st()}],"mask-image-y-from-pos":[{"mask-y-from":Ut()}],"mask-image-y-to-pos":[{"mask-y-to":Ut()}],"mask-image-y-from-color":[{"mask-y-from":st()}],"mask-image-y-to-color":[{"mask-y-to":st()}],"mask-image-radial":[{"mask-radial":[Yt,Xt]}],"mask-image-radial-from-pos":[{"mask-radial-from":Ut()}],"mask-image-radial-to-pos":[{"mask-radial-to":Ut()}],"mask-image-radial-from-color":[{"mask-radial-from":st()}],"mask-image-radial-to-color":[{"mask-radial-to":st()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":N()}],"mask-image-conic-pos":[{"mask-conic":[ve]}],"mask-image-conic-from-pos":[{"mask-conic-from":Ut()}],"mask-image-conic-to-pos":[{"mask-conic-to":Ut()}],"mask-image-conic-from-color":[{"mask-conic-from":st()}],"mask-image-conic-to-color":[{"mask-conic-to":st()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:P()}],"mask-repeat":[{mask:q()}],"mask-size":[{mask:vt()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Yt,Xt]}],filter:[{filter:["","none",Yt,Xt]}],blur:[{blur:Qt()}],brightness:[{brightness:[ve,Yt,Xt]}],contrast:[{contrast:[ve,Yt,Xt]}],"drop-shadow":[{"drop-shadow":["","none",M,au,iu]}],"drop-shadow-color":[{"drop-shadow":st()}],grayscale:[{grayscale:["",ve,Yt,Xt]}],"hue-rotate":[{"hue-rotate":[ve,Yt,Xt]}],invert:[{invert:["",ve,Yt,Xt]}],saturate:[{saturate:[ve,Yt,Xt]}],sepia:[{sepia:["",ve,Yt,Xt]}],"backdrop-filter":[{"backdrop-filter":["","none",Yt,Xt]}],"backdrop-blur":[{"backdrop-blur":Qt()}],"backdrop-brightness":[{"backdrop-brightness":[ve,Yt,Xt]}],"backdrop-contrast":[{"backdrop-contrast":[ve,Yt,Xt]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ve,Yt,Xt]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ve,Yt,Xt]}],"backdrop-invert":[{"backdrop-invert":["",ve,Yt,Xt]}],"backdrop-opacity":[{"backdrop-opacity":[ve,Yt,Xt]}],"backdrop-saturate":[{"backdrop-saturate":[ve,Yt,Xt]}],"backdrop-sepia":[{"backdrop-sepia":["",ve,Yt,Xt]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":b()}],"border-spacing-x":[{"border-spacing-x":b()}],"border-spacing-y":[{"border-spacing-y":b()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Yt,Xt]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ve,"initial",Yt,Xt]}],ease:[{ease:["linear","initial",x,Yt,Xt]}],delay:[{delay:[ve,Yt,Xt]}],animate:[{animate:["none",w,Yt,Xt]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[C,Yt,Xt]}],"perspective-origin":[{"perspective-origin":F()}],rotate:[{rotate:$t()}],"rotate-x":[{"rotate-x":$t()}],"rotate-y":[{"rotate-y":$t()}],"rotate-z":[{"rotate-z":$t()}],scale:[{scale:Ye()}],"scale-x":[{"scale-x":Ye()}],"scale-y":[{"scale-y":Ye()}],"scale-z":[{"scale-z":Ye()}],"scale-3d":["scale-3d"],skew:[{skew:ge()}],"skew-x":[{"skew-x":ge()}],"skew-y":[{"skew-y":ge()}],transform:[{transform:[Yt,Xt,"","none","gpu","cpu"]}],"transform-origin":[{origin:F()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ue()}],"translate-x":[{"translate-x":ue()}],"translate-y":[{"translate-y":ue()}],"translate-z":[{"translate-z":ue()}],"translate-none":["translate-none"],accent:[{accent:st()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:st()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Yt,Xt]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":b()}],"scroll-mx":[{"scroll-mx":b()}],"scroll-my":[{"scroll-my":b()}],"scroll-ms":[{"scroll-ms":b()}],"scroll-me":[{"scroll-me":b()}],"scroll-mbs":[{"scroll-mbs":b()}],"scroll-mbe":[{"scroll-mbe":b()}],"scroll-mt":[{"scroll-mt":b()}],"scroll-mr":[{"scroll-mr":b()}],"scroll-mb":[{"scroll-mb":b()}],"scroll-ml":[{"scroll-ml":b()}],"scroll-p":[{"scroll-p":b()}],"scroll-px":[{"scroll-px":b()}],"scroll-py":[{"scroll-py":b()}],"scroll-ps":[{"scroll-ps":b()}],"scroll-pe":[{"scroll-pe":b()}],"scroll-pbs":[{"scroll-pbs":b()}],"scroll-pbe":[{"scroll-pbe":b()}],"scroll-pt":[{"scroll-pt":b()}],"scroll-pr":[{"scroll-pr":b()}],"scroll-pb":[{"scroll-pb":b()}],"scroll-pl":[{"scroll-pl":b()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Yt,Xt]}],fill:[{fill:["none",...st()]}],"stroke-w":[{stroke:[ve,ll,Br,Tv]}],stroke:[{stroke:["none",...st()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},C2=s2(R2);function vh(...s){return C2(FR(s))}const Cv=({label:s,value:t,percentage:i,type:r,className:l})=>{const d=2*Math.PI*36,p=d-i*d;return xt.jsxs("div",{className:vh("flex flex-col items-center gap-2 bg-white/5 p-4 rounded-2xl border border-white/5",l),children:[xt.jsx("span",{className:"text-[10px] text-on-surface-dim uppercase tracking-widest",children:s}),xt.jsxs("div",{className:"relative w-20 h-20",children:[xt.jsx("svg",{className:vh("w-full h-full",r==="azimuth"?"-rotate-90":""),viewBox:"0 0 80 80",children:r==="azimuth"?xt.jsxs(xt.Fragment,{children:[xt.jsx("circle",{className:"fill-none stroke-white/10 stroke-[4]",cx:"40",cy:"40",r:36}),xt.jsx("circle",{className:"fill-none stroke-primary stroke-[4] stroke-linecap-round transition-[stroke-dashoffset] duration-300",cx:"40",cy:"40",r:36,strokeDasharray:d,strokeDashoffset:p}),xt.jsx("line",{className:"stroke-primary stroke-[2] origin-[40px_40px] transition-transform duration-300",x1:"40",y1:"40",x2:"40",y2:"10",style:{transform:`rotate(${i*360}deg)`}}),xt.jsx("circle",{cx:"40",cy:"40",r:"2",className:"fill-primary"})]}):xt.jsxs(xt.Fragment,{children:[xt.jsx("line",{className:"stroke-white/10 stroke-[2]",x1:"10",x2:"70",y1:"70",y2:"70"}),xt.jsx("line",{className:"stroke-white/10 stroke-[1] stroke-dasharray-[2_2]",x1:"10",x2:"10",y1:"70",y2:"10"}),xt.jsx("path",{className:"fill-none stroke-white/10 stroke-[4]",d:"M 70,70 A 60,60 0 0 0 10,10"}),xt.jsx("path",{className:"fill-none stroke-primary stroke-[4] stroke-linecap-round transition-[stroke-dashoffset] duration-300",d:"M 70,70 A 60,60 0 0 0 10,10",strokeDasharray:"94.2",strokeDashoffset:94.2-i*94.2}),xt.jsx("line",{className:"stroke-primary stroke-[2] origin-[10px_70px] transition-transform duration-300",x1:"10",y1:"70",x2:"70",y2:"70",style:{transform:`rotate(${-i*90}deg)`}}),xt.jsx("circle",{cx:"10",cy:"70",r:"2",className:"fill-primary"})]})}),xt.jsx("div",{className:vh("absolute inset-0 flex items-center justify-center",r==="azimuth"?"pt-10":"items-end justify-end pb-2 pr-4"),children:xt.jsx("span",{className:"font-mono text-[10px] text-on-surface-dim",children:r==="azimuth"?"360°":"90°"})})]}),xt.jsx("span",{className:"font-mono text-primary font-bold",children:t})]})},w2=({time:s,azimuth:t,altitude:i,pitch:r,yaw:l,hOffset:c,vOffset:d,setHOffset:p,setVOffset:m,selectedDate:h,setSelectedDate:v})=>{const y=M=>{const T=Math.floor(M),C=Math.floor(M%1*60),S=Math.floor(M%1*60%1*60);return`${T.toString().padStart(2,"0")}:${C.toString().padStart(2,"0")}:${S.toString().padStart(2,"0")}`},g=new Date().toISOString().split("T")[0];return xt.jsxs("section",{className:"glass-panel p-8 flex flex-col gap-8 h-full overflow-y-auto border-none",children:[xt.jsxs("div",{className:"flex justify-between items-center",children:[xt.jsx("h3",{className:"font-display text-2xl font-bold text-on-surface tracking-tight",children:"Live Telemetry"}),xt.jsx("span",{className:"text-[10px] text-primary font-mono bg-primary/10 px-2 py-0.5 rounded border border-primary/20",children:"STABLE"})]}),xt.jsxs("div",{className:"space-y-6",children:[xt.jsxs("div",{className:"bg-white/5 p-6 rounded-[24px] border border-white/10",children:[xt.jsxs("div",{className:"flex items-center justify-between mb-3",children:[xt.jsxs("div",{className:"flex items-center gap-2",children:[xt.jsx(SR,{className:"text-primary w-4 h-4"}),xt.jsx("span",{className:"text-[10px] text-on-surface-dim uppercase tracking-widest",children:"Temporal Reference"})]}),xt.jsxs("div",{className:"relative",children:[xt.jsx("input",{type:"date",id:"panel-date-picker",className:"absolute opacity-0 w-6 h-6 cursor-pointer z-10",value:h,onChange:M=>v(M.target.value)}),xt.jsx("label",{htmlFor:"panel-date-picker",className:"flex items-center text-[10px] text-on-surface-dim cursor-pointer hover:text-primary transition-colors pointer-events-none",children:xt.jsx(vR,{className:"w-3 h-3"})})]})]}),xt.jsxs("div",{className:"font-mono text-lg text-on-surface tracking-wider",children:[g," ",y(s)]})]}),xt.jsxs("div",{className:"bg-white/5 p-6 rounded-[24px] border border-white/10",children:[xt.jsxs("div",{className:"flex items-center justify-between mb-3",children:[xt.jsxs("div",{className:"flex items-center gap-2",children:[xt.jsx(CR,{className:"text-primary w-4 h-4"}),xt.jsx("span",{className:"text-[10px] text-on-surface-dim uppercase tracking-widest",children:"Node Geolocation"})]}),xt.jsx("button",{className:"text-on-surface-dim hover:text-primary transition-colors",title:"Request Location",children:xt.jsx(AR,{className:"w-4 h-4"})})]}),xt.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[xt.jsxs("div",{className:"flex flex-col",children:[xt.jsx("span",{className:"text-[10px] text-on-surface-dim",children:"LATITUDE"}),xt.jsx("span",{className:"font-mono text-on-surface",children:"34.0522° N"})]}),xt.jsxs("div",{className:"flex flex-col",children:[xt.jsx("span",{className:"text-[10px] text-on-surface-dim",children:"LONGITUDE"}),xt.jsx("span",{className:"font-mono text-on-surface",children:"118.2437° W"})]})]})]}),xt.jsxs("div",{className:"bg-white/5 p-6 rounded-[24px] border border-white/10 space-y-6",children:[xt.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[xt.jsx(BR,{className:"text-primary w-4 h-4"}),xt.jsx("span",{className:"text-[10px] text-on-surface-dim uppercase tracking-widest",children:"Solar Dynamics"})]}),xt.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[xt.jsx(Cv,{label:"Azimuth",value:`${t.toFixed(1)}°`,percentage:t/360,type:"azimuth"}),xt.jsx(Cv,{label:"Altitude",value:`${i.toFixed(1)}°`,percentage:i/90,type:"altitude"})]}),xt.jsxs("div",{className:"flex justify-between items-center pt-4 border-t border-white/10",children:[xt.jsx("span",{className:"text-sm text-on-surface-dim",children:"Declination"}),xt.jsx("span",{className:"font-mono text-on-surface font-medium",children:"23.4°"})]})]}),xt.jsxs("div",{className:"bg-white/5 p-6 rounded-[24px] border border-white/10",children:[xt.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[xt.jsx(zR,{className:"text-primary w-4 h-4"}),xt.jsx("span",{className:"text-[10px] text-on-surface-dim uppercase tracking-widest",children:"Actuator Calculation"})]}),xt.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[xt.jsxs("div",{className:"bg-white/5 p-4 rounded-[16px]",children:[xt.jsx("p",{className:"text-[10px] text-on-surface-dim uppercase mb-1",children:"PITCH"}),xt.jsxs("p",{className:"font-mono text-xl text-primary",children:[r.toFixed(1),"°"]})]}),xt.jsxs("div",{className:"bg-white/5 p-4 rounded-[16px]",children:[xt.jsx("p",{className:"text-[10px] text-on-surface-dim uppercase mb-1",children:"YAW"}),xt.jsxs("p",{className:"font-mono text-xl text-primary",children:[l.toFixed(1),"°"]})]})]}),xt.jsxs("div",{className:"border-t border-white/10 pt-6",children:[xt.jsx("span",{className:"text-[10px] text-on-surface-dim uppercase tracking-widest block mb-4",children:"Calibration Offsets"}),xt.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[xt.jsxs("div",{className:"flex flex-col gap-2",children:[xt.jsx("label",{className:"text-[9px] text-on-surface-dim uppercase",htmlFor:"h-offset",children:"Horizontal (H)"}),xt.jsxs("div",{className:"relative",children:[xt.jsx("input",{className:"w-full bg-black/20 border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-on-surface focus:outline-none focus:border-primary/50",id:"h-offset",type:"number",step:"0.1",value:c,onChange:M=>p(parseFloat(M.target.value)||0)}),xt.jsx("span",{className:"absolute right-3 top-2 text-[10px] text-on-surface-dim",children:"°"})]})]}),xt.jsxs("div",{className:"flex flex-col gap-2",children:[xt.jsx("label",{className:"text-[9px] text-on-surface-dim uppercase",htmlFor:"v-offset",children:"Vertical (V)"}),xt.jsxs("div",{className:"relative",children:[xt.jsx("input",{className:"w-full bg-black/20 border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-on-surface focus:outline-none focus:border-primary/50",id:"v-offset",type:"number",step:"0.1",value:d,onChange:M=>m(parseFloat(M.target.value)||0)}),xt.jsx("span",{className:"absolute right-3 top-2 text-[10px] text-on-surface-dim",children:"°"})]})]})]})]})]})]}),xt.jsx("div",{className:"mt-auto pt-6",children:xt.jsxs("button",{className:"w-full bg-white text-black py-4 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/90 transition-colors",children:[xt.jsx(MR,{className:"w-4 h-4"}),"EXPORT DATA LOG"]})})]})},D2=({time:s,setTime:t,isPlaying:i,setIsPlaying:r,sunriseTime:l=6,sunsetTime:c=20,playbackSpeed:d,setPlaybackSpeed:p,isReversed:m,setIsReversed:h})=>{const v=S=>S===1?2:S===2?4:1,y=()=>{m?p(v):(h(!0),p(1),r(!0))},g=()=>{m?(h(!1),p(1)):p(v)},M=S=>{const x=Math.floor(S),w=Math.floor(S%1*60);return`${x.toString().padStart(2,"0")}:${w.toString().padStart(2,"0")}`},T=S=>M(S),C=S=>M(S);return xt.jsx("div",{className:"absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-20",children:xt.jsxs("div",{className:"glass-panel p-8 shadow-2xl border-none bg-white/5",children:[xt.jsxs("div",{className:"flex justify-between items-center mb-6",children:[xt.jsxs("span",{className:"text-[10px] font-mono text-on-surface-dim",children:[T(l)," (DAWN)"]}),xt.jsx("div",{className:"text-center",children:xt.jsx("span",{className:"text-xs font-display font-bold text-primary uppercase tracking-widest",children:"Solar Time Simulation"})}),xt.jsxs("span",{className:"text-[10px] font-mono text-on-surface-dim",children:[C(c)," (DUSK)"]})]}),xt.jsx("input",{className:"w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-white",id:"time-slider",type:"range",min:l,max:c,step:"0.01",value:s,onChange:S=>t(parseFloat(S.target.value))}),xt.jsxs("div",{className:"flex justify-between items-center mt-6",children:[xt.jsx("button",{className:`text-on-surface-dim hover:text-primary transition-colors ${m?"text-primary":""}`,onClick:y,title:m?"Decrease reverse speed":"Reverse playback",children:xt.jsx(OR,{className:"w-5 h-5"})}),xt.jsxs("div",{className:"flex items-center justify-center w-24 relative",children:[xt.jsx("button",{className:"text-primary bg-primary/10 p-4 rounded-full hover:bg-primary/20 transition-all",onClick:()=>r(!i),children:i?xt.jsx(DR,{className:"w-6 h-6"}):xt.jsx(NR,{className:"w-6 h-6"})}),d>1&&xt.jsxs("span",{className:"absolute right-0 text-xs font-mono text-primary",children:[d,"x"]})]}),xt.jsx("button",{className:"text-on-surface-dim hover:text-primary transition-colors",onClick:g,title:"Increase speed",children:xt.jsx(ER,{className:"w-5 h-5"})})]})]})})},wv="/api";function U2(){const[s,t]=Be.useState(12),[i,r]=Be.useState(!1),[l,c]=Be.useState(1),[d,p]=Be.useState(!1),[m,h]=Be.useState(0),[v,y]=Be.useState(0),[g,M]=Be.useState(()=>new Date().toISOString().split("T")[0]),[T,C]=Be.useState(6),[S,x]=Be.useState(20),[w,L]=Be.useState(null),[N]=Be.useState(31.23),[F]=Be.useState(121.47);Be.useEffect(()=>{(async()=>{try{const Z=await(await fetch(`${wv}/sunrise_sunset?lat=${N}&lon=${F}&date=${g}`)).json();if(Z.sunrise){const[U,I]=Z.sunrise.split(":").map(Number),ot=(U*60+I-30)/60;C(Math.max(0,ot))}if(Z.sunset){const[U,I]=Z.sunset.split(":").map(Number),ot=(U*60+I+30)/60;x(Math.min(24,ot))}}catch(et){console.error("Failed to fetch sunrise/sunset:",et)}})()},[g,N,F]),Be.useEffect(()=>{(async()=>{try{const et=Math.round(s*60),U=await(await fetch(`${wv}/calculate?lat=${N}&lon=${F}&t_azi=25.0&t_alt=10.0&m_offset=${et}&date=${g}`)).json();L(U)}catch(et){console.error("Failed to fetch sun data:",et)}})()},[s,g,N,F]);const B=Be.useMemo(()=>w?{azimuth:w.sun_azi,altitude:w.sun_alt,motorH:w.motor_h,motorV:w.motor_v}:{azimuth:0,altitude:0,motorH:0,motorV:0},[w]),z=Be.useMemo(()=>new Q(8,0,0),[]),b=Be.useMemo(()=>new Q(-8,0,0),[]),D=Be.useMemo(()=>hx(s),[s]),ct=Be.useMemo(()=>px(D.position,b,z),[D.position,b,z]),{pitch:H,yaw:j}=Be.useMemo(()=>uR(ct),[ct]);return Be.useEffect(()=>{let J;return i&&(J=setInterval(()=>{t(et=>{const Z=.02*l*(d?-1:1);let U=et+Z;return U>S&&(U=T),U<T&&(U=S),U})},30)),()=>clearInterval(J)},[i,T,S,l,d]),xt.jsxs("main",{className:"h-screen flex p-10 gap-10 overflow-hidden",children:[xt.jsxs("section",{className:"flex-1 relative overflow-hidden glass-panel",children:[xt.jsx("div",{className:"absolute top-8 left-8 z-20 pointer-events-none",children:xt.jsxs("div",{className:"glass-panel p-6 border-none bg-white/5",children:[xt.jsx("p",{className:"text-[10px] text-primary uppercase font-bold tracking-widest mb-1",children:"Active Viewport"}),xt.jsx("h3",{className:"font-display text-2xl text-on-surface font-light",children:"Reflection Logic Alpha"})]})}),xt.jsx(fR,{time:s}),xt.jsx(D2,{time:s,setTime:t,isPlaying:i,setIsPlaying:r,sunriseTime:T,sunsetTime:S,playbackSpeed:l,setPlaybackSpeed:c,isReversed:d,setIsReversed:p})]}),xt.jsx("div",{className:"w-[400px]",children:xt.jsx(w2,{time:s,azimuth:B.azimuth||D.azimuth,altitude:B.altitude||D.altitude,pitch:(B.motorV||H)+v,yaw:(B.motorH||j)+m,hOffset:m,vOffset:v,setHOffset:h,setVOffset:y,selectedDate:g,setSelectedDate:M})})]})}Xy.createRoot(document.getElementById("root")).render(xt.jsx(U2,{}));
