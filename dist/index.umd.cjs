(function(y,T){typeof exports=="object"&&typeof module!="undefined"?T(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],T):(y=typeof globalThis!="undefined"?globalThis:y||self,T(y.AlifIconKitReact={},y.React))})(this,function(y,T){"use strict";var B={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q;function Pe(){if(Q)return x;Q=1;var k=T,E=Symbol.for("react.element"),D=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,W=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L={key:!0,ref:!0,__self:!0,__source:!0};function F(R,l,O){var v,h={},m=null,Y=null;O!==void 0&&(m=""+O),l.key!==void 0&&(m=""+l.key),l.ref!==void 0&&(Y=l.ref);for(v in l)C.call(l,v)&&!L.hasOwnProperty(v)&&(h[v]=l[v]);if(R&&R.defaultProps)for(v in l=R.defaultProps,l)h[v]===void 0&&(h[v]=l[v]);return{$$typeof:E,type:R,key:m,ref:Y,props:h,_owner:W.current}}return x.Fragment=D,x.jsx=F,x.jsxs=F,x}var j={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function xe(){return ee||(ee=1,process.env.NODE_ENV!=="production"&&function(){var k=T,E=Symbol.for("react.element"),D=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),R=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),ne=Symbol.iterator,je="@@iterator";function ke(e){if(e===null||typeof e!="object")return null;var r=ne&&e[ne]||e[je];return typeof r=="function"?r:null}var S=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];De("error",e,t)}}function De(e,r,t){{var n=S.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var u=t.map(function(i){return String(i)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Fe=!1,Ae=!1,Ie=!1,We=!1,Le=!1,ae;ae=Symbol.for("react.module.reference");function Ye(e){return!!(typeof e=="string"||typeof e=="function"||e===C||e===L||Le||e===W||e===O||e===v||We||e===Y||Fe||Ae||Ie||typeof e=="object"&&e!==null&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===F||e.$$typeof===R||e.$$typeof===l||e.$$typeof===ae||e.getModuleId!==void 0))}function $e(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function ie(e){return e.displayName||"Context"}function g(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case D:return"Portal";case L:return"Profiler";case W:return"StrictMode";case O:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case R:var r=e;return ie(r)+".Consumer";case F:var t=e;return ie(t._context)+".Provider";case l:return $e(e,e.render,"ForwardRef");case h:var n=e.displayName||null;return n!==null?n:g(e.type)||"Memo";case m:{var o=e,u=o._payload,i=o._init;try{return g(i(u))}catch(a){return null}}}return null}var _=Object.assign,A=0,oe,ue,se,fe,le,ce,de;function ve(){}ve.__reactDisabledLog=!0;function Me(){{if(A===0){oe=console.log,ue=console.info,se=console.warn,fe=console.error,le=console.group,ce=console.groupCollapsed,de=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ve,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}A++}}function Ne(){{if(A--,A===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:_({},e,{value:oe}),info:_({},e,{value:ue}),warn:_({},e,{value:se}),error:_({},e,{value:fe}),group:_({},e,{value:le}),groupCollapsed:_({},e,{value:ce}),groupEnd:_({},e,{value:de})})}A<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var q=S.ReactCurrentDispatcher,J;function $(e,r,t){{if(J===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);J=n&&n[1]||""}return`
`+J+e}}var G=!1,M;{var Ve=typeof WeakMap=="function"?WeakMap:Map;M=new Ve}function pe(e,r){if(!e||G)return"";{var t=M.get(e);if(t!==void 0)return t}var n;G=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=q.current,q.current=null,Me();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(b){n=b}Reflect.construct(e,[],i)}else{try{i.call()}catch(b){n=b}e.call(i.prototype)}}else{try{throw Error()}catch(b){n=b}e()}}catch(b){if(b&&n&&typeof b.stack=="string"){for(var a=b.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,f=d.length-1;s>=1&&f>=0&&a[s]!==d[f];)f--;for(;s>=1&&f>=0;s--,f--)if(a[s]!==d[f]){if(s!==1||f!==1)do if(s--,f--,f<0||a[s]!==d[f]){var p=`
`+a[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&M.set(e,p),p}while(s>=1&&f>=0);break}}}finally{G=!1,q.current=u,Ne(),Error.prepareStackTrace=o}var P=e?e.displayName||e.name:"",we=P?$(P):"";return typeof e=="function"&&M.set(e,we),we}function Ue(e,r,t){return pe(e,!1)}function Be(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function N(e,r,t){if(e==null)return"";if(typeof e=="function")return pe(e,Be(e));if(typeof e=="string")return $(e);switch(e){case O:return $("Suspense");case v:return $("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return Ue(e.render);case h:return N(e.type,r,t);case m:{var n=e,o=n._payload,u=n._init;try{return N(u(o),r,t)}catch(i){}}}return""}var V=Object.prototype.hasOwnProperty,he={},ge=S.ReactDebugCurrentFrame;function U(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);ge.setExtraStackFrame(t)}else ge.setExtraStackFrame(null)}function qe(e,r,t,n,o){{var u=Function.call.bind(V);for(var i in e)if(u(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var d=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(U(o),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),U(null)),a instanceof Error&&!(a.message in he)&&(he[a.message]=!0,U(o),c("Failed %s type: %s",t,a.message),U(null))}}}var Je=Array.isArray;function z(e){return Je(e)}function Ge(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function ze(e){try{return be(e),!1}catch(r){return!0}}function be(e){return""+e}function ye(e){if(ze(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ge(e)),be(e)}var I=S.ReactCurrentOwner,Ke={key:!0,ref:!0,__self:!0,__source:!0},Ee,Re,K;K={};function He(e){if(V.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Xe(e){if(V.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Ze(e,r){if(typeof e.ref=="string"&&I.current&&r&&I.current.stateNode!==r){var t=g(I.current.type);K[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',g(I.current.type),e.ref),K[t]=!0)}}function Qe(e,r){{var t=function(){Ee||(Ee=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function er(e,r){{var t=function(){Re||(Re=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var rr=function(e,r,t,n,o,u,i){var a={$$typeof:E,type:e,key:r,ref:t,props:i,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function tr(e,r,t,n,o){{var u,i={},a=null,d=null;t!==void 0&&(ye(t),a=""+t),Xe(r)&&(ye(r.key),a=""+r.key),He(r)&&(d=r.ref,Ze(r,o));for(u in r)V.call(r,u)&&!Ke.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)i[u]===void 0&&(i[u]=s[u])}if(a||d){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&Qe(i,f),d&&er(i,f)}return rr(e,a,d,o,n,I.current,i)}}var H=S.ReactCurrentOwner,me=S.ReactDebugCurrentFrame;function w(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);me.setExtraStackFrame(t)}else me.setExtraStackFrame(null)}var X;X=!1;function Z(e){return typeof e=="object"&&e!==null&&e.$$typeof===E}function _e(){{if(H.current){var e=g(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function nr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Te={};function ar(e){{var r=_e();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ce(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ar(r);if(Te[t])return;Te[t]=!0;var n="";e&&e._owner&&e._owner!==H.current&&(n=" It was passed a child from "+g(e._owner.type)+"."),w(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),w(null)}}function Oe(e,r){{if(typeof e!="object")return;if(z(e))for(var t=0;t<e.length;t++){var n=e[t];Z(n)&&Ce(n,r)}else if(Z(e))e._store&&(e._store.validated=!0);else if(e){var o=ke(e);if(typeof o=="function"&&o!==e.entries)for(var u=o.call(e),i;!(i=u.next()).done;)Z(i.value)&&Ce(i.value,r)}}}function ir(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===h))t=r.propTypes;else return;if(t){var n=g(r);qe(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!X){X=!0;var o=g(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function or(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){w(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),w(null);break}}e.ref!==null&&(w(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),w(null))}}function Se(e,r,t,n,o,u){{var i=Ye(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=nr(o);d?a+=d:a+=_e();var s;e===null?s="null":z(e)?s="array":e!==void 0&&e.$$typeof===E?(s="<"+(g(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var f=tr(e,r,t,o,u);if(f==null)return f;if(i){var p=r.children;if(p!==void 0)if(n)if(z(p)){for(var P=0;P<p.length;P++)Oe(p[P],e);Object.freeze&&Object.freeze(p)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Oe(p,e)}return e===C?or(f):ir(f),f}}function ur(e,r,t){return Se(e,r,t,!0)}function sr(e,r,t){return Se(e,r,t,!1)}var fr=sr,lr=ur;j.Fragment=C,j.jsx=fr,j.jsxs=lr}()),j}process.env.NODE_ENV==="production"?B.exports=Pe():B.exports=xe();var re=B.exports;const te=({width:k="25",height:E="25",color:D="currentColor"})=>re.jsx("svg",{width:k,height:E,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:re.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.06152 11.4194C4.06152 7.82958 6.97167 4.91943 10.5615 4.91943C14.1514 4.91943 17.0615 7.82958 17.0615 11.4194C17.0615 15.0093 14.1514 17.9194 10.5615 17.9194C6.97167 17.9194 4.06152 15.0093 4.06152 11.4194ZM10.5615 2.91943C5.8671 2.91943 2.06152 6.72501 2.06152 11.4194C2.06152 16.1139 5.8671 19.9194 10.5615 19.9194C12.5485 19.9194 14.3763 19.2376 15.8236 18.0952L20.3548 22.6265L21.0619 23.3336L22.4761 21.9194L21.769 21.2122L17.2378 16.681C18.3799 15.2337 19.0615 13.4062 19.0615 11.4194C19.0615 6.72501 15.2559 2.91943 10.5615 2.91943Z",fill:D})});te.displayName="Search",y.Search=te,Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});