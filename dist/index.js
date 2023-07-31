import Te from "react";
var K = { exports: {} }, D = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function ur() {
  if (_e)
    return D;
  _e = 1;
  var h = Te, v = Symbol.for("react.element"), g = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, A = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(b, f, x) {
    var p, m = {}, _ = null, I = null;
    x !== void 0 && (_ = "" + x), f.key !== void 0 && (_ = "" + f.key), f.ref !== void 0 && (I = f.ref);
    for (p in f)
      T.call(f, p) && !M.hasOwnProperty(p) && (m[p] = f[p]);
    if (b && b.defaultProps)
      for (p in f = b.defaultProps, f)
        m[p] === void 0 && (m[p] = f[p]);
    return { $$typeof: v, type: b, key: _, ref: I, props: m, _owner: A.current };
  }
  return D.Fragment = g, D.jsx = P, D.jsxs = P, D;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function lr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var h = Te, v = Symbol.for("react.element"), g = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), b = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), X = Symbol.iterator, xe = "@@iterator";
    function Oe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = X && e[X] || e[xe];
      return typeof r == "function" ? r : null;
    }
    var O = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Se("error", e, t);
      }
    }
    function Se(e, r, t) {
      {
        var n = O.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var je = !1, Pe = !1, Le = !1, ke = !1, De = !1, Q;
    Q = Symbol.for("react.module.reference");
    function Fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === T || e === M || De || e === A || e === x || e === p || ke || e === I || je || Pe || Le || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === m || e.$$typeof === P || e.$$typeof === b || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function Ae(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case T:
          return "Fragment";
        case g:
          return "Portal";
        case M:
          return "Profiler";
        case A:
          return "StrictMode";
        case x:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return ee(r) + ".Consumer";
          case P:
            var t = e;
            return ee(t._context) + ".Provider";
          case f:
            return Ae(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : y(e.type) || "Memo";
          case _: {
            var i = e, u = i._payload, o = i._init;
            try {
              return y(o(u));
            } catch (a) {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, L = 0, re, te, ne, ae, oe, ie, ue;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Me() {
      {
        if (L === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, oe = console.group, ie = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        L++;
      }
    }
    function Ie() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: re
            }),
            info: w({}, e, {
              value: te
            }),
            warn: w({}, e, {
              value: ne
            }),
            error: w({}, e, {
              value: ae
            }),
            group: w({}, e, {
              value: oe
            }),
            groupCollapsed: w({}, e, {
              value: ie
            }),
            groupEnd: w({}, e, {
              value: ue
            })
          });
        }
        L < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = O.ReactCurrentDispatcher, B;
    function W(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var Z = !1, $;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new We();
    }
    function se(e, r) {
      if (!e || Z)
        return "";
      {
        var t = $.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Me();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (E) {
              n = E;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (E) {
              n = E;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            n = E;
          }
          e();
        }
      } catch (E) {
        if (E && n && typeof E.stack == "string") {
          for (var a = E.stack.split(`
`), d = n.stack.split(`
`), l = a.length - 1, s = d.length - 1; l >= 1 && s >= 0 && a[l] !== d[s]; )
            s--;
          for (; l >= 1 && s >= 0; l--, s--)
            if (a[l] !== d[s]) {
              if (l !== 1 || s !== 1)
                do
                  if (l--, s--, s < 0 || a[l] !== d[s]) {
                    var C = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && $.set(e, C), C;
                  }
                while (l >= 1 && s >= 0);
              break;
            }
        }
      } finally {
        Z = !1, U.current = u, Ie(), Error.prepareStackTrace = i;
      }
      var j = e ? e.displayName || e.name : "", be = j ? W(j) : "";
      return typeof e == "function" && $.set(e, be), be;
    }
    function $e(e, r, t) {
      return se(e, !1);
    }
    function Ye(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return se(e, Ye(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case x:
          return W("Suspense");
        case p:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return $e(e.render);
          case m:
            return Y(e.type, r, t);
          case _: {
            var n = e, i = n._payload, u = n._init;
            try {
              return Y(u(i), r, t);
            } catch (o) {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, fe = {}, ce = O.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function Ne(e, r, t, n, i) {
      {
        var u = Function.call.bind(N);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (V(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), V(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, V(i), c("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Ve = Array.isArray;
    function q(e) {
      return Ve(e);
    }
    function Ue(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return de(e), !1;
      } catch (r) {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (Be(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ue(e)), de(e);
    }
    var k = O.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, Ce, H;
    H = {};
    function qe(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Je(e, r) {
      if (typeof e.ref == "string" && k.current && r && k.current.stateNode !== r) {
        var t = y(k.current.type);
        H[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(k.current.type), e.ref), H[t] = !0);
      }
    }
    function Ge(e, r) {
      {
        var t = function() {
          pe || (pe = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ze(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ke = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Xe(e, r, t, n, i) {
      {
        var u, o = {}, a = null, d = null;
        t !== void 0 && (ve(t), a = "" + t), He(r) && (ve(r.key), a = "" + r.key), qe(r) && (d = r.ref, Je(r, i));
        for (u in r)
          N.call(r, u) && !Ze.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            o[u] === void 0 && (o[u] = l[u]);
        }
        if (a || d) {
          var s = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ge(o, s), d && ze(o, s);
        }
        return Ke(e, a, d, i, n, k.current, o);
      }
    }
    var J = O.ReactCurrentOwner, he = O.ReactDebugCurrentFrame;
    function S(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var G;
    G = !1;
    function z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === v;
    }
    function ge() {
      {
        if (J.current) {
          var e = y(J.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Qe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var me = {};
    function er(e) {
      {
        var r = ge();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== J.current && (n = " It was passed a child from " + y(e._owner.type) + "."), S(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), S(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            z(n) && ye(n, r);
          }
        else if (z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Oe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              z(o.value) && ye(o.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = y(r);
          Ne(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !G) {
          G = !0;
          var i = y(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            S(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), S(null);
            break;
          }
        }
        e.ref !== null && (S(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), S(null));
      }
    }
    function Re(e, r, t, n, i, u) {
      {
        var o = Fe(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = Qe(i);
          d ? a += d : a += ge();
          var l;
          e === null ? l = "null" : q(e) ? l = "array" : e !== void 0 && e.$$typeof === v ? (l = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var s = Xe(e, r, t, i, u);
        if (s == null)
          return s;
        if (o) {
          var C = r.children;
          if (C !== void 0)
            if (n)
              if (q(C)) {
                for (var j = 0; j < C.length; j++)
                  Ee(C[j], e);
                Object.freeze && Object.freeze(C);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(C, e);
        }
        return e === T ? tr(s) : rr(s), s;
      }
    }
    function nr(e, r, t) {
      return Re(e, r, t, !0);
    }
    function ar(e, r, t) {
      return Re(e, r, t, !1);
    }
    var or = ar, ir = nr;
    F.Fragment = T, F.jsx = or, F.jsxs = ir;
  }()), F;
}
process.env.NODE_ENV === "production" ? K.exports = ur() : K.exports = lr();
var R = K.exports;
const sr = ({
  width: h = "25",
  height: v = "25",
  color: g = "currentColor"
}) => /* @__PURE__ */ R.jsxs(
  "svg",
  {
    width: h,
    height: v,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ R.jsx(
        "path",
        {
          d: "M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z",
          fill: g
        }
      ),
      /* @__PURE__ */ R.jsx(
        "path",
        {
          d: "M9.62467 5.53125L6.41634 8.73958L4.95801 7.28125",
          stroke: "white",
          strokeWidth: "1.33333",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
sr.displayName = "CheckCircle";
const fr = ({ width: h = "25", height: v = "25", color: g = "currentColor" }) => /* @__PURE__ */ R.jsx(
  "svg",
  {
    width: h,
    height: v,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ R.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.82032 4.50537L6.52742 5.21248L20.1474 18.8325L20.8545 19.5396L19.4403 20.9538L18.7332 20.2467L17.8442 19.3577L17.8266 19.3677C16.0623 20.3764 14.0668 20.911 12.0345 20.9196L12.0303 20.9196C6.54866 20.9196 2.84121 17.0479 1.23877 14.9408C0.787352 14.3639 0.541992 13.6523 0.541992 12.9196C0.541992 12.1871 0.787212 11.4757 1.23839 10.8988C2.40849 9.35649 3.82856 8.02264 5.4385 6.95198L5.11321 6.62669L4.4061 5.91958L5.82032 4.50537ZM6.88489 8.39837C5.31901 9.38114 3.94415 10.6399 2.82724 12.1136L2.81612 12.128C2.63855 12.3536 2.54199 12.6325 2.54199 12.9196C2.54199 13.2067 2.63855 13.4856 2.81612 13.7112L2.82651 13.7246C4.32641 15.6987 7.51628 18.9186 12.0281 18.9196C13.5378 18.9129 15.0229 18.5565 16.3679 17.8814L14.5664 16.0799C13.9327 16.4808 13.1935 16.6988 12.4318 16.6996C11.6403 16.7014 10.8662 16.4682 10.2073 16.0299C9.5482 15.5914 9.03394 14.9671 8.7298 14.2361C8.42567 13.505 8.34538 12.7001 8.499 11.9234C8.59541 11.436 8.78122 10.9734 9.04455 10.558L6.88489 8.39837ZM10.491 12.1824C10.4796 12.225 10.4696 12.2681 10.461 12.3115C10.3842 12.6999 10.4243 13.1024 10.5764 13.4679C10.7284 13.8333 10.9855 14.1454 11.3152 14.3647C11.6448 14.584 12.0321 14.7006 12.4279 14.6996L12.4294 14.6996C12.6053 14.6995 12.7788 14.6761 12.9457 14.6314L10.491 12.1824ZM12.4318 16.6996C12.4316 16.6996 12.4314 16.6996 12.4312 16.6996L12.4303 15.6996L12.4328 16.6996C12.4324 16.6996 12.4321 16.6996 12.4318 16.6996ZM10.4803 4.93961H11.4803H12.0303C17.5119 4.93961 21.2194 8.81135 22.8218 10.9184C23.2732 11.4953 23.5186 12.2069 23.5186 12.9396C23.5186 13.6752 23.2713 14.3894 22.8165 14.9675C22.369 15.537 21.8927 16.0833 21.3896 16.6042L20.695 17.3236L19.2563 15.9342L19.951 15.2149C20.4069 14.7428 20.8385 14.2478 21.244 13.7317L21.2444 13.7312C21.422 13.5056 21.5186 13.2267 21.5186 12.9396C21.5186 12.6525 21.422 12.3736 21.2444 12.148L21.234 12.1346C19.7339 10.1602 16.5433 6.93961 12.0303 6.93961H11.4803H10.4803V4.93961Z",
        fill: g
      }
    )
  }
);
fr.displayName = "EyeOff";
const cr = ({ width: h = "25", height: v = "25", color: g = "currentColor" }) => /* @__PURE__ */ R.jsx(
  "svg",
  {
    width: h,
    height: v,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ R.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.82433 12.1233C4.36074 10.1376 7.56441 6.91943 12.0615 6.91943C16.5585 6.91943 19.7622 10.1376 21.2986 12.1233C21.6698 12.6031 21.6698 13.2358 21.2986 13.7156C19.7622 15.7012 16.5585 18.9194 12.0615 18.9194C7.56441 18.9194 4.36074 15.7012 2.82433 13.7156C2.45309 13.2358 2.45309 12.6031 2.82433 12.1233ZM12.0615 4.91943C6.59165 4.91943 2.86942 8.79681 1.24255 10.8994C0.313681 12.0998 0.313681 13.739 1.24255 14.9395C2.86942 17.0421 6.59165 20.9194 12.0615 20.9194C17.5313 20.9194 21.2535 17.0421 22.8804 14.9395C23.8092 13.739 23.8092 12.0998 22.8804 10.8994C21.2535 8.79681 17.5313 4.91943 12.0615 4.91943ZM10.0615 12.9194C10.0615 11.8149 10.9569 10.9194 12.0615 10.9194C13.166 10.9194 14.0615 11.8149 14.0615 12.9194C14.0615 14.024 13.166 14.9194 12.0615 14.9194C10.9569 14.9194 10.0615 14.024 10.0615 12.9194ZM12.0615 8.91943C9.85232 8.91943 8.06146 10.7103 8.06146 12.9194C8.06146 15.1286 9.85232 16.9194 12.0615 16.9194C14.2706 16.9194 16.0615 15.1286 16.0615 12.9194C16.0615 10.7103 14.2706 8.91943 12.0615 8.91943Z",
        fill: g
      }
    )
  }
);
cr.displayName = "EyeOn";
const dr = ({ width: h = "25", height: v = "25", color: g = "currentColor" }) => /* @__PURE__ */ R.jsx(
  "svg",
  {
    width: h,
    height: v,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ R.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.06152 11.4194C4.06152 7.82958 6.97167 4.91943 10.5615 4.91943C14.1514 4.91943 17.0615 7.82958 17.0615 11.4194C17.0615 15.0093 14.1514 17.9194 10.5615 17.9194C6.97167 17.9194 4.06152 15.0093 4.06152 11.4194ZM10.5615 2.91943C5.8671 2.91943 2.06152 6.72501 2.06152 11.4194C2.06152 16.1139 5.8671 19.9194 10.5615 19.9194C12.5485 19.9194 14.3763 19.2376 15.8236 18.0952L20.3548 22.6265L21.0619 23.3336L22.4761 21.9194L21.769 21.2122L17.2378 16.681C18.3799 15.2337 19.0615 13.4062 19.0615 11.4194C19.0615 6.72501 15.2559 2.91943 10.5615 2.91943Z",
        fill: g
      }
    )
  }
);
dr.displayName = "Search";
export {
  sr as CheckCircle,
  fr as EyeOff,
  cr as EyeOn,
  dr as Search
};
