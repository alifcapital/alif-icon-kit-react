import Z1 from "react";
var K = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g1;
function s2() {
  if (g1)
    return B;
  g1 = 1;
  var t = Z1, r = Symbol.for("react.element"), l = Symbol.for("react.fragment"), Z = Object.prototype.hasOwnProperty, b = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(M, h, m) {
    var p, x = {}, g = null, S = null;
    m !== void 0 && (g = "" + m), h.key !== void 0 && (g = "" + h.key), h.ref !== void 0 && (S = h.ref);
    for (p in h)
      Z.call(h, p) && !D.hasOwnProperty(p) && (x[p] = h[p]);
    if (M && M.defaultProps)
      for (p in h = M.defaultProps, h)
        x[p] === void 0 && (x[p] = h[p]);
    return { $$typeof: r, type: M, key: g, ref: S, props: x, _owner: b.current };
  }
  return B.Fragment = l, B.jsx = F, B.jsxs = F, B;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j1;
function o2() {
  return j1 || (j1 = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Z1, r = Symbol.for("react.element"), l = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), M = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), X = Symbol.iterator, m1 = "@@iterator";
    function R1(C) {
      if (C === null || typeof C != "object")
        return null;
      var i = X && C[X] || C[m1];
      return typeof i == "function" ? i : null;
    }
    var R = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function H(C) {
      {
        for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
          n[s - 1] = arguments[s];
        k1("error", C, n);
      }
    }
    function k1(C, i, n) {
      {
        var s = R.ReactDebugCurrentFrame, d = s.getStackAddendum();
        d !== "" && (i += "%s", n = n.concat([d]));
        var L = n.map(function(a) {
          return String(a);
        });
        L.unshift("Warning: " + i), Function.prototype.apply.call(console[C], console, L);
      }
    }
    var y1 = !1, F1 = !1, _1 = !1, E1 = !1, B1 = !1, Q;
    Q = Symbol.for("react.module.reference");
    function N1(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === Z || C === D || B1 || C === b || C === m || C === p || E1 || C === S || y1 || F1 || _1 || typeof C == "object" && C !== null && (C.$$typeof === g || C.$$typeof === x || C.$$typeof === F || C.$$typeof === M || C.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === Q || C.getModuleId !== void 0));
    }
    function b1(C, i, n) {
      var s = C.displayName;
      if (s)
        return s;
      var d = i.displayName || i.name || "";
      return d !== "" ? n + "(" + d + ")" : n;
    }
    function e1(C) {
      return C.displayName || "Context";
    }
    function w(C) {
      if (C == null)
        return null;
      if (typeof C.tag == "number" && H("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
        return C.displayName || C.name || null;
      if (typeof C == "string")
        return C;
      switch (C) {
        case Z:
          return "Fragment";
        case l:
          return "Portal";
        case D:
          return "Profiler";
        case b:
          return "StrictMode";
        case m:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case M:
            var i = C;
            return e1(i) + ".Consumer";
          case F:
            var n = C;
            return e1(n._context) + ".Provider";
          case h:
            return b1(C, C.render, "ForwardRef");
          case x:
            var s = C.displayName || null;
            return s !== null ? s : w(C.type) || "Memo";
          case g: {
            var d = C, L = d._payload, a = d._init;
            try {
              return w(a(L));
            } catch (o) {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, _ = 0, C1, l1, r1, t1, i1, n1, s1;
    function o1() {
    }
    o1.__reactDisabledLog = !0;
    function D1() {
      {
        if (_ === 0) {
          C1 = console.log, l1 = console.info, r1 = console.warn, t1 = console.error, i1 = console.group, n1 = console.groupCollapsed, s1 = console.groupEnd;
          var C = {
            configurable: !0,
            enumerable: !0,
            value: o1,
            writable: !0
          };
          Object.defineProperties(console, {
            info: C,
            log: C,
            warn: C,
            error: C,
            group: C,
            groupCollapsed: C,
            groupEnd: C
          });
        }
        _++;
      }
    }
    function S1() {
      {
        if (_--, _ === 0) {
          var C = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, C, {
              value: C1
            }),
            info: j({}, C, {
              value: l1
            }),
            warn: j({}, C, {
              value: r1
            }),
            error: j({}, C, {
              value: t1
            }),
            group: j({}, C, {
              value: i1
            }),
            groupCollapsed: j({}, C, {
              value: n1
            }),
            groupEnd: j({}, C, {
              value: s1
            })
          });
        }
        _ < 0 && H("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = R.ReactCurrentDispatcher, I;
    function W(C, i, n) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (d) {
            var s = d.stack.trim().match(/\n( *(at )?)/);
            I = s && s[1] || "";
          }
        return `
` + I + C;
      }
    }
    var U = !1, A;
    {
      var W1 = typeof WeakMap == "function" ? WeakMap : Map;
      A = new W1();
    }
    function a1(C, i) {
      if (!C || U)
        return "";
      {
        var n = A.get(C);
        if (n !== void 0)
          return n;
      }
      var s;
      U = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = q.current, q.current = null, D1();
      try {
        if (i) {
          var a = function() {
            throw Error();
          };
          if (Object.defineProperty(a.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(a, []);
            } catch (V) {
              s = V;
            }
            Reflect.construct(C, [], a);
          } else {
            try {
              a.call();
            } catch (V) {
              s = V;
            }
            C.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            s = V;
          }
          C();
        }
      } catch (V) {
        if (V && s && typeof V.stack == "string") {
          for (var o = V.stack.split(`
`), f = s.stack.split(`
`), c = o.length - 1, u = f.length - 1; c >= 1 && u >= 0 && o[c] !== f[u]; )
            u--;
          for (; c >= 1 && u >= 0; c--, u--)
            if (o[c] !== f[u]) {
              if (c !== 1 || u !== 1)
                do
                  if (c--, u--, u < 0 || o[c] !== f[u]) {
                    var v = `
` + o[c].replace(" at new ", " at ");
                    return C.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", C.displayName)), typeof C == "function" && A.set(C, v), v;
                  }
                while (c >= 1 && u >= 0);
              break;
            }
        }
      } finally {
        U = !1, q.current = L, S1(), Error.prepareStackTrace = d;
      }
      var y = C ? C.displayName || C.name : "", M1 = y ? W(y) : "";
      return typeof C == "function" && A.set(C, M1), M1;
    }
    function A1(C, i, n) {
      return a1(C, !1);
    }
    function T1(C) {
      var i = C.prototype;
      return !!(i && i.isReactComponent);
    }
    function T(C, i, n) {
      if (C == null)
        return "";
      if (typeof C == "function")
        return a1(C, T1(C));
      if (typeof C == "string")
        return W(C);
      switch (C) {
        case m:
          return W("Suspense");
        case p:
          return W("SuspenseList");
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case h:
            return A1(C.render);
          case x:
            return T(C.type, i, n);
          case g: {
            var s = C, d = s._payload, L = s._init;
            try {
              return T(L(d), i, n);
            } catch (a) {
            }
          }
        }
      return "";
    }
    var O = Object.prototype.hasOwnProperty, d1 = {}, L1 = R.ReactDebugCurrentFrame;
    function P(C) {
      if (C) {
        var i = C._owner, n = T(C.type, C._source, i ? i.type : null);
        L1.setExtraStackFrame(n);
      } else
        L1.setExtraStackFrame(null);
    }
    function O1(C, i, n, s, d) {
      {
        var L = Function.call.bind(O);
        for (var a in C)
          if (L(C, a)) {
            var o = void 0;
            try {
              if (typeof C[a] != "function") {
                var f = Error((s || "React class") + ": " + n + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw f.name = "Invariant Violation", f;
              }
              o = C[a](i, a, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              o = c;
            }
            o && !(o instanceof Error) && (P(d), H("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, a, typeof o), P(null)), o instanceof Error && !(o.message in d1) && (d1[o.message] = !0, P(d), H("Failed %s type: %s", n, o.message), P(null));
          }
      }
    }
    var P1 = Array.isArray;
    function $(C) {
      return P1(C);
    }
    function q1(C) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, n = i && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return n;
      }
    }
    function I1(C) {
      try {
        return c1(C), !1;
      } catch (i) {
        return !0;
      }
    }
    function c1(C) {
      return "" + C;
    }
    function u1(C) {
      if (I1(C))
        return H("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", q1(C)), c1(C);
    }
    var E = R.ReactCurrentOwner, U1 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, h1, H1, Y;
    Y = {};
    function $1(C) {
      if (O.call(C, "ref")) {
        var i = Object.getOwnPropertyDescriptor(C, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return C.ref !== void 0;
    }
    function Y1(C) {
      if (O.call(C, "key")) {
        var i = Object.getOwnPropertyDescriptor(C, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return C.key !== void 0;
    }
    function G1(C, i) {
      if (typeof C.ref == "string" && E.current && i && E.current.stateNode !== i) {
        var n = w(E.current.type);
        Y[n] || (H('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(E.current.type), C.ref), Y[n] = !0);
      }
    }
    function J1(C, i) {
      {
        var n = function() {
          h1 || (h1 = !0, H("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        n.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function z1(C, i) {
      {
        var n = function() {
          H1 || (H1 = !0, H("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        n.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var K1 = function(C, i, n, s, d, L, a) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: C,
        key: i,
        ref: n,
        props: a,
        // Record the component responsible for creating this element.
        _owner: L
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function X1(C, i, n, s, d) {
      {
        var L, a = {}, o = null, f = null;
        n !== void 0 && (u1(n), o = "" + n), Y1(i) && (u1(i.key), o = "" + i.key), $1(i) && (f = i.ref, G1(i, d));
        for (L in i)
          O.call(i, L) && !U1.hasOwnProperty(L) && (a[L] = i[L]);
        if (C && C.defaultProps) {
          var c = C.defaultProps;
          for (L in c)
            a[L] === void 0 && (a[L] = c[L]);
        }
        if (o || f) {
          var u = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          o && J1(a, u), f && z1(a, u);
        }
        return K1(C, o, f, d, s, E.current, a);
      }
    }
    var G = R.ReactCurrentOwner, f1 = R.ReactDebugCurrentFrame;
    function k(C) {
      if (C) {
        var i = C._owner, n = T(C.type, C._source, i ? i.type : null);
        f1.setExtraStackFrame(n);
      } else
        f1.setExtraStackFrame(null);
    }
    var J;
    J = !1;
    function z(C) {
      return typeof C == "object" && C !== null && C.$$typeof === r;
    }
    function p1() {
      {
        if (G.current) {
          var C = w(G.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
    }
    function Q1(C) {
      {
        if (C !== void 0) {
          var i = C.fileName.replace(/^.*[\\\/]/, ""), n = C.lineNumber;
          return `

Check your code at ` + i + ":" + n + ".";
        }
        return "";
      }
    }
    var v1 = {};
    function e2(C) {
      {
        var i = p1();
        if (!i) {
          var n = typeof C == "string" ? C : C.displayName || C.name;
          n && (i = `

Check the top-level render call using <` + n + ">.");
        }
        return i;
      }
    }
    function x1(C, i) {
      {
        if (!C._store || C._store.validated || C.key != null)
          return;
        C._store.validated = !0;
        var n = e2(i);
        if (v1[n])
          return;
        v1[n] = !0;
        var s = "";
        C && C._owner && C._owner !== G.current && (s = " It was passed a child from " + w(C._owner.type) + "."), k(C), H('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, s), k(null);
      }
    }
    function w1(C, i) {
      {
        if (typeof C != "object")
          return;
        if ($(C))
          for (var n = 0; n < C.length; n++) {
            var s = C[n];
            z(s) && x1(s, i);
          }
        else if (z(C))
          C._store && (C._store.validated = !0);
        else if (C) {
          var d = R1(C);
          if (typeof d == "function" && d !== C.entries)
            for (var L = d.call(C), a; !(a = L.next()).done; )
              z(a.value) && x1(a.value, i);
        }
      }
    }
    function C2(C) {
      {
        var i = C.type;
        if (i == null || typeof i == "string")
          return;
        var n;
        if (typeof i == "function")
          n = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === x))
          n = i.propTypes;
        else
          return;
        if (n) {
          var s = w(i);
          O1(n, C.props, "prop", s, C);
        } else if (i.PropTypes !== void 0 && !J) {
          J = !0;
          var d = w(i);
          H("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && H("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function l2(C) {
      {
        for (var i = Object.keys(C.props), n = 0; n < i.length; n++) {
          var s = i[n];
          if (s !== "children" && s !== "key") {
            k(C), H("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), k(null);
            break;
          }
        }
        C.ref !== null && (k(C), H("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function V1(C, i, n, s, d, L) {
      {
        var a = N1(C);
        if (!a) {
          var o = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var f = Q1(d);
          f ? o += f : o += p1();
          var c;
          C === null ? c = "null" : $(C) ? c = "array" : C !== void 0 && C.$$typeof === r ? (c = "<" + (w(C.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : c = typeof C, H("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, o);
        }
        var u = X1(C, i, n, d, L);
        if (u == null)
          return u;
        if (a) {
          var v = i.children;
          if (v !== void 0)
            if (s)
              if ($(v)) {
                for (var y = 0; y < v.length; y++)
                  w1(v[y], C);
                Object.freeze && Object.freeze(v);
              } else
                H("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              w1(v, C);
        }
        return C === Z ? l2(u) : C2(u), u;
      }
    }
    function r2(C, i, n) {
      return V1(C, i, n, !0);
    }
    function t2(C, i, n) {
      return V1(C, i, n, !1);
    }
    var i2 = t2, n2 = r2;
    N.Fragment = Z, N.jsx = i2, N.jsxs = n2;
  }()), N;
}
process.env.NODE_ENV === "production" ? K.exports = s2() : K.exports = o2();
var e = K.exports;
const a2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M18.327 6.80713L21.499 9.25194C21.499 13.6671 21.499 15.2004 21.499 19.6156C21.499 20.652 20.644 21.4999 19.5991 21.4999H4.3999C3.35496 21.4999 2.5 20.652 2.5 19.6156V9.25194L5.72037 6.87711",
          stroke: l,
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M21.499 9.25195L11.9995 15.847L2.5 9.25195",
          stroke: l,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M6.4541 11.4021V3.25003C6.4541 2.8358 6.7899 2.5 7.20414 2.5H16.7951C17.2094 2.5 17.5452 2.8358 17.5452 3.25003V11.6937",
          stroke: l,
          strokeWidth: "2",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ e.jsx("path", { d: "M14.3711 6.09217V6.0332", stroke: l, strokeWidth: "2", strokeLinecap: "square" }),
      /* @__PURE__ */ e.jsx("circle", { cx: "12.0001", cy: "12.002", r: "2.45515", stroke: l, strokeWidth: "2" })
    ]
  }
);
a2.displayName = "Zp";
const d2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 2.07959C11.7348 2.07959 11.4804 2.18495 11.2929 2.37248C11.1054 2.56002 11 2.81437 11 3.07959V12.0796C11 12.6319 11.4477 13.0796 12 13.0796H21C21.5523 13.0796 22 12.6319 22 12.0796C22 10.7664 21.7413 9.46601 21.2388 8.25276C20.7362 7.0395 19.9997 5.93711 19.0711 5.00852C18.1425 4.07994 17.0401 3.34334 15.8268 2.84079C14.6136 2.33825 13.3132 2.07959 12 2.07959ZM13 11.0796V4.14234C13.707 4.23141 14.4004 4.41472 15.0615 4.68855C16.0321 5.09059 16.914 5.67987 17.6569 6.42274C18.3997 7.1656 18.989 8.04752 19.391 9.01812C19.6649 9.67921 19.8482 10.3726 19.9373 11.0796H13ZM7.90366 5.20791L8.76262 4.69587L7.73853 2.97795L6.87957 3.48999C5.59241 4.2573 4.49414 5.30407 3.66596 6.55295C2.83778 7.80182 2.30087 9.22085 2.09491 10.7051C1.88894 12.1894 2.0192 13.701 2.47604 15.1282C2.93289 16.5554 3.70464 17.8617 4.73425 18.9505C5.76387 20.0393 7.02501 20.8827 8.42447 21.4185C9.82393 21.9543 11.3259 22.1688 12.8194 22.046C14.3129 21.9232 15.7597 21.4663 17.0528 20.7091C18.346 19.952 19.4524 18.9138 20.2904 17.6715L20.8496 16.8425L19.1915 15.7241L18.6323 16.5531C17.9619 17.547 17.0768 18.3775 16.0422 18.9832C15.0077 19.589 13.8503 19.9545 12.6555 20.0527C11.4607 20.1509 10.2591 19.9794 9.13958 19.5507C8.02001 19.1221 7.01109 18.4473 6.1874 17.5763C5.36371 16.7053 4.74631 15.6603 4.38083 14.5185C4.01536 13.3768 3.91115 12.1675 4.07593 10.98C4.2407 9.7926 4.67023 8.65737 5.33277 7.65827C5.99531 6.65918 6.87392 5.82176 7.90366 5.20791Z",
        fill: l
      }
    )
  }
);
d2.displayName = "Analytics";
const L2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.5146 1.2221C12.1979 1.03209 11.8023 1.03209 11.4856 1.2221L1.48559 7.2221C1.10016 7.45335 0.916391 7.91335 1.03637 8.34652C1.15635 8.7797 1.55061 9.07959 2.00009 9.07959H5.00009V18.0796H4.00009H3.00009V20.0796H4.00009H6.00009H12.0001H18.0001H20.0001H21.0001V18.0796H20.0001H19.0001V9.07959H22.0001C22.4496 9.07959 22.8438 8.7797 22.9638 8.34652C23.0838 7.91335 22.9 7.45335 22.5146 7.2221L12.5146 1.2221ZM17.0001 9.07959H13.0001V18.0796H17.0001V9.07959ZM11.0001 9.07959V18.0796H7.00009V9.07959H11.0001ZM12.0001 3.24578L18.3898 7.07959H5.6104L12.0001 3.24578ZM2.00009 21.0796H1.00009V23.0796H2.00009H22.0001H23.0001V21.0796H22.0001H2.00009Z",
        fill: l
      }
    )
  }
);
L2.displayName = "Bank";
const c2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M20.1 18.8462H4.02306C3.21922 18.8462 2.56152 18.1538 2.56152 17.3077V6.53846C2.56152 5.69231 3.21922 5 4.02306 5H20.1C20.9038 5 21.5615 5.69231 21.5615 6.53846V17.3077C21.5615 18.1538 20.9038 18.8462 20.1 18.8462Z",
          stroke: l,
          strokeWidth: "2",
          strokeMiterlimit: "10"
        }
      ),
      /* @__PURE__ */ e.jsx("path", { d: "M13.5986 11.9229H18.7525", stroke: l, strokeWidth: "2", strokeMiterlimit: "10" }),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M11.8911 9.81846C11.3649 9.29231 10.6634 9 9.84493 9C8.20802 9 6.92188 10.2861 6.92188 11.9231C6.92188 13.56 8.20802 14.8461 9.84493 14.8461C10.6634 14.8461 11.3649 14.4953 11.8911 13.9692",
          stroke: l,
          strokeWidth: "2",
          strokeMiterlimit: "10"
        }
      )
    ]
  }
);
c2.displayName = "CardSalom";
const u2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5498 17.2612V6.91593C6.40025 6.08131 8.99902 6.68591 11.8166 7.34141L11.9583 7.37438C14.5784 7.98353 17.4105 8.61936 20.4494 7.66279V18.0081C17.5989 18.8427 15.0001 18.2381 12.1826 17.5826L12.0408 17.5497C9.4208 16.9405 6.58868 16.3047 3.5498 17.2612ZM21.0162 5.29203C18.133 6.67756 15.4755 6.13876 12.4113 5.42634L12.118 5.35798C9.18614 4.67383 5.8849 3.90349 2.20512 5.25464C1.81146 5.39919 1.5498 5.774 1.5498 6.19336V18.7307C1.5498 19.0745 1.7264 19.3941 2.01742 19.5772C2.30844 19.7602 2.67307 19.7809 2.98294 19.632C5.86617 18.2465 8.52368 18.7853 11.5879 19.4977L11.8812 19.566C14.813 20.2502 18.1143 21.0205 21.794 19.6694C22.1877 19.5248 22.4494 19.15 22.4494 18.7307V6.19336C22.4494 5.84957 22.2728 5.52989 21.9817 5.34686C21.6907 5.16383 21.3261 5.14312 21.0162 5.29203ZM10.8993 12.4622C10.8993 11.8545 11.392 11.3618 11.9998 11.3618C12.6075 11.3618 13.1002 11.8545 13.1002 12.4622C13.1002 13.07 12.6075 13.5627 11.9998 13.5627C11.392 13.5627 10.8993 13.07 10.8993 12.4622ZM11.9998 9.36177C10.2874 9.36177 8.89932 10.7499 8.89932 12.4622C8.89932 14.1745 10.2874 15.5627 11.9998 15.5627C13.7121 15.5627 15.1002 14.1745 15.1002 12.4622C15.1002 10.7499 13.7121 9.36177 11.9998 9.36177ZM19.3345 16.9403L18.351 17.1212C17.9211 17.2003 16.9669 17.2566 16.6416 17.2566H15.6416V15.2566H16.6416C16.9022 15.2566 17.7237 15.203 17.9893 15.1542L18.9728 14.9733L19.3345 16.9403ZM6.99173 7.28782L7.99057 7.33603L7.89414 9.33371L6.89531 9.28549C6.62564 9.27248 5.8043 9.32888 5.546 9.36361L4.55492 9.49686L4.28842 7.51469L5.2795 7.38144C5.60192 7.33809 6.55505 7.26674 6.99173 7.28782Z",
        fill: l
      }
    )
  }
);
u2.displayName = "Cash";
const h2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16 5.07959H8C6.05784 5.07959 4.80242 5.08384 3.87741 5.2082C3.00993 5.32483 2.73803 5.51313 2.58579 5.66538C2.43354 5.81762 2.24524 6.08952 2.12861 6.957C2.05332 7.51705 2.02205 8.19822 2.0091 9.07959L21.9909 9.07959C21.9779 8.19822 21.9467 7.51705 21.8714 6.957C21.7548 6.08952 21.5665 5.81762 21.4142 5.66538C21.262 5.51313 20.9901 5.32483 20.1226 5.2082C19.1976 5.08384 17.9422 5.07959 16 5.07959ZM22 11.0796L2 11.0796V13.0796C2 15.0217 2.00425 16.2772 2.12861 17.2022C2.24524 18.0697 2.43354 18.3416 2.58579 18.4938C2.73803 18.6461 3.00993 18.8343 3.87741 18.951C4.80242 19.0753 6.05784 19.0796 8 19.0796H16C17.9422 19.0796 19.1976 19.0753 20.1226 18.951C20.9901 18.8343 21.262 18.6461 21.4142 18.4938C21.5665 18.3416 21.7548 18.0697 21.8714 17.2022C21.9958 16.2772 22 15.0217 22 13.0796V11.0796ZM1.17157 4.25116C0 5.42274 0 7.30835 0 11.0796V13.0796C0 16.8508 0 18.7364 1.17157 19.908C2.34315 21.0796 4.22876 21.0796 8 21.0796H16C19.7712 21.0796 21.6569 21.0796 22.8284 19.908C24 18.7364 24 16.8508 24 13.0796V11.0796C24 7.30835 24 5.42274 22.8284 4.25116C21.6569 3.07959 19.7712 3.07959 16 3.07959H8C4.22876 3.07959 2.34315 3.07959 1.17157 4.25116ZM5.5 14.5796H8.5V16.5796H5.5V14.5796Z",
        fill: l
      }
    )
  }
);
h2.displayName = "CreditCard";
const H2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.63582 5.71563C7.26564 4.08582 9.51428 3.07959 11.9998 3.07959C14.4853 3.07959 16.7339 4.08582 18.3637 5.71563C18.4819 5.83375 18.5967 5.95512 18.7081 6.07959H17H16V8.07959H17H21C21.5523 8.07959 22 7.63187 22 7.07959V3.07959V2.07959L20 2.07959V3.07959V4.52997C19.9271 4.45272 19.8531 4.37652 19.778 4.30142C17.7884 2.31185 15.037 1.07959 11.9998 1.07959C8.96256 1.07959 6.21117 2.31185 4.22161 4.30142C2.91322 5.6098 1.93235 7.24765 1.41406 9.0796H3.51164C3.96337 7.8013 4.6959 6.65556 5.63582 5.71563ZM18.3637 18.4436C19.3037 17.5036 20.0362 16.3579 20.4879 15.0796H22.5855C22.0672 16.9115 21.0863 18.5494 19.778 19.8578C17.7884 21.8473 15.037 23.0796 11.9998 23.0796C8.96256 23.0796 6.21117 21.8473 4.22161 19.8578C4.14665 19.7828 4.07276 19.7068 3.99998 19.6297V21.0796V22.0796H1.99998L1.99998 21.0796L1.99998 17.0796C1.99998 16.5273 2.44769 16.0796 2.99998 16.0796H7H8V18.0796H7H5.29144C5.40286 18.2041 5.5177 18.3254 5.63582 18.4436C7.26564 20.0734 9.51428 21.0796 11.9998 21.0796C14.4853 21.0796 16.7339 20.0734 18.3637 18.4436ZM12.9999 5.57959V6.57959V7.21238C13.915 7.44582 14.7488 7.99695 15.1084 8.94362L15.4634 9.87847L13.5937 10.5886L13.2387 9.65372C13.156 9.43598 12.7719 9.07959 11.9275 9.07959C11.4814 9.07959 11.1102 9.203 10.8777 9.37507C10.673 9.52658 10.5569 9.72181 10.5569 10.0163C10.5569 10.1968 10.5957 10.2905 10.6279 10.3444C10.6634 10.4038 10.7285 10.4768 10.8617 10.5606C11.1695 10.7543 11.6221 10.8828 12.2846 11.0584L12.3444 11.0742C12.9141 11.2249 13.6662 11.4239 14.2658 11.8068C14.5966 12.0181 14.9162 12.3047 15.1494 12.701C15.3853 13.1021 15.4999 13.5599 15.4999 14.0605C15.4999 15.1309 14.9586 15.9294 14.223 16.4206C13.8499 16.6697 13.4301 16.8404 12.9999 16.9455V17.5796V18.5796H10.9999V17.5796V17.0062C10.0547 16.8404 9.21544 16.3886 8.67546 15.6021L8.10945 14.7777L9.75825 13.6457L10.3243 14.4701C10.5428 14.7885 11.0201 15.0796 11.8664 15.0796C12.3682 15.0796 12.8193 14.953 13.1123 14.7573C13.3705 14.585 13.4999 14.3739 13.4999 14.0605C13.4999 13.8732 13.4599 13.7735 13.4256 13.7151C13.3884 13.6519 13.3218 13.577 13.1893 13.4924C12.8833 13.297 12.4318 13.1665 11.7722 12.9916L11.697 12.9717L11.697 12.9717C11.1318 12.8224 10.3891 12.6261 9.79683 12.2536C9.46663 12.0459 9.14557 11.7631 8.91069 11.3697C8.67258 10.9709 8.55691 10.5149 8.55691 10.0163C8.55691 9.03959 9.01365 8.26647 9.688 7.76742C10.079 7.47809 10.5312 7.28717 10.9999 7.18144V6.57959V5.57959H12.9999Z",
        fill: l
      }
    )
  }
);
H2.displayName = "CurrencyDollar";
const f2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.9998 3.07959C9.51428 3.07959 7.26564 4.08582 5.63582 5.71563C4.6959 6.65556 3.96337 7.8013 3.51164 9.0796H1.41406C1.93235 7.24765 2.91322 5.6098 4.22161 4.30142C6.21117 2.31185 8.96256 1.07959 11.9998 1.07959C15.037 1.07959 17.7884 2.31185 19.778 4.30142C19.8531 4.37652 19.9271 4.45272 20 4.52997V3.07959V2.07959L22 2.07959V3.07959V7.07959C22 7.63187 21.5523 8.07959 21 8.07959H17H16V6.07959H17H18.7081C18.5967 5.95512 18.4819 5.83375 18.3637 5.71563C16.7339 4.08582 14.4853 3.07959 11.9998 3.07959ZM20.4879 15.0796C20.0362 16.3579 19.3037 17.5036 18.3637 18.4436C16.7339 20.0734 14.4853 21.0796 11.9998 21.0796C9.51428 21.0796 7.26564 20.0734 5.63582 18.4436C5.5177 18.3254 5.40286 18.2041 5.29144 18.0796H7H8V16.0796H7H2.99998C2.44769 16.0796 1.99998 16.5273 1.99998 17.0796L1.99998 21.0796L1.99998 22.0796H3.99998V21.0796V19.6297C4.07276 19.7068 4.14665 19.7828 4.22161 19.8578C6.21117 21.8473 8.96256 23.0796 11.9998 23.0796C15.037 23.0796 17.7884 21.8473 19.778 19.8578C21.0863 18.5494 22.0672 16.9115 22.5855 15.0796H20.4879ZM15.8803 10.2117C16.38 10.1454 16.7497 10.3939 16.8692 10.8765C17.012 11.4572 17.0382 12.0595 16.9462 12.65C16.8035 13.5843 16.4127 14.4829 15.7845 15.3206C14.6946 16.7753 13.3123 17.8979 11.6768 18.6569C11.3294 18.8182 10.9682 18.9492 10.5972 19.0482L10.4799 19.0796H10.2117L10.1637 19.0569C10.1341 19.0431 10.104 19.0292 10.074 19.0154C10.0035 18.9833 9.93112 18.9503 9.85898 18.9117C9.56792 18.7557 9.41349 18.4889 9.41349 18.1401V16.3679V16.1019V14.9401V14.2865L9.33599 14.3557L9.3175 14.3721L9.25891 14.4241C9.01896 14.6372 8.77251 14.8559 8.52702 15.0717C8.19205 15.366 7.71649 15.3712 7.3962 15.084C7.31106 15.0091 7.24291 14.9176 7.19615 14.8153C7.14939 14.713 7.12507 14.6022 7.12476 14.4901C7.12391 14.2594 7.22216 14.0427 7.40143 13.88C7.59975 13.6998 7.80288 13.5202 8.0005 13.3463L8.00897 13.3387C8.09084 13.2666 8.17267 13.1943 8.25444 13.1219L8.49215 12.9096C8.79254 12.6435 9.10266 12.3685 9.41123 12.0936C9.41236 11.8413 9.41236 11.5864 9.41236 11.3345L9.13005 11.5863L9.12236 11.5931C8.88309 11.806 8.6359 12.026 8.38967 12.2411C8.125 12.4728 7.80133 12.5216 7.47808 12.3794C7.16569 12.2421 6.98304 11.9414 7.00124 11.5947C7.01268 11.3783 7.1129 11.1806 7.29104 11.0235C7.46793 10.8673 7.64701 10.7083 7.82202 10.5528C7.84602 10.5315 7.86995 10.5103 7.89378 10.4891L7.91764 10.4679L8.16834 10.2451L8.40435 10.0355C8.73466 9.74211 9.07598 9.43923 9.41321 9.14146V7.05998V5.99296C9.41307 5.49105 9.69129 5.26894 9.92462 5.17102C10.2978 5.01446 10.6716 5.0601 10.9771 5.29923C11.1662 5.44749 11.2711 5.66795 11.2724 5.92007C11.2749 6.40299 11.2749 6.89351 11.2749 7.36786V7.3684V7.48914L11.7216 7.09262L11.8046 7.0189L12.7606 6.17013C12.9872 5.96917 13.2915 5.89795 13.5747 5.97955C13.7096 6.01859 13.8319 6.09118 13.9297 6.19025C14.0275 6.28933 14.0975 6.41152 14.1328 6.54493C14.2184 6.85626 14.1265 7.15195 13.8724 7.37766C13.6344 7.58955 13.3919 7.80461 13.1574 8.01207L13.1313 8.03516L12.8112 8.31882L12.4537 8.63596C12.4059 8.67841 12.3578 8.72105 12.3095 8.76383C11.9684 9.06637 11.6191 9.37612 11.2739 9.68098C11.2752 9.93334 11.2752 10.182 11.2752 10.439V10.4396L11.3901 10.3377C11.8674 9.91472 12.3609 9.47726 12.8449 9.04548L12.845 9.04539C12.9171 8.98113 13.136 8.78602 13.4605 8.78602H13.4674C13.8032 8.78906 14.1084 8.99264 14.2275 9.29262C14.3551 9.61432 14.2898 9.93173 14.0498 10.1631C13.8763 10.33 13.694 10.4899 13.5175 10.6444L13.4968 10.6625C13.4357 10.7161 13.3754 10.7689 13.3154 10.8223L12.7619 11.3135L12.7465 11.3274L12.7152 11.3551C12.2425 11.7747 11.7549 12.2074 11.2752 12.6346C11.2741 14.0311 11.2741 15.4445 11.2741 16.8157V16.8191C12.5355 16.1535 13.6161 15.2019 14.4259 14.0438C14.7613 13.5653 14.9847 13.0635 15.0893 12.5518C15.1739 12.1476 15.1664 11.7302 15.0676 11.3292C15.0035 11.0704 15.0454 10.8249 15.1887 10.6191C15.3408 10.4013 15.5993 10.249 15.8803 10.2117Z",
        fill: l
      }
    )
  }
);
f2.displayName = "CurrencyLira";
const p2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.9998 3.07959C9.51428 3.07959 7.26564 4.08582 5.63582 5.71563C4.6959 6.65556 3.96337 7.8013 3.51164 9.0796H1.41406C1.93235 7.24765 2.91322 5.6098 4.22161 4.30142C6.21117 2.31185 8.96256 1.07959 11.9998 1.07959C15.037 1.07959 17.7884 2.31185 19.778 4.30142C19.8531 4.37652 19.9271 4.45272 20 4.52997V3.07959V2.07959L22 2.07959V3.07959V7.07959C22 7.63187 21.5523 8.07959 21 8.07959H17H16V6.07959H17H18.7081C18.5967 5.95512 18.4819 5.83375 18.3637 5.71563C16.7339 4.08582 14.4853 3.07959 11.9998 3.07959ZM20.4879 15.0796C20.0362 16.3579 19.3037 17.5036 18.3637 18.4436C16.7339 20.0734 14.4853 21.0796 11.9998 21.0796C9.51428 21.0796 7.26564 20.0734 5.63582 18.4436C5.5177 18.3254 5.40286 18.2041 5.29144 18.0796H7H8V16.0796H7H2.99998C2.44769 16.0796 1.99998 16.5273 1.99998 17.0796L1.99998 21.0796L1.99998 22.0796H3.99998V21.0796V19.6297C4.07276 19.7068 4.14665 19.7828 4.22161 19.8578C6.21117 21.8473 8.96256 23.0796 11.9998 23.0796C15.037 23.0796 17.7884 21.8473 19.778 19.8578C21.0863 18.5494 22.0672 16.9115 22.5855 15.0796H20.4879ZM15.9949 8.16979C16.2516 8.60395 16.3977 9.10205 16.429 9.65009C16.4513 10.0312 16.4268 10.3777 16.3565 10.7099C16.2016 11.4434 15.8225 12.0538 15.2299 12.5257C14.6507 12.9869 13.951 13.2267 13.1501 13.239C12.5679 13.2478 12.261 13.2465 11.8726 13.2449C11.6869 13.2442 11.478 13.2435 11.2078 13.2435V13.9199H14.7849C14.8156 13.9195 14.8463 13.921 14.8768 13.9245C15.0644 13.9484 15.1724 14.0702 15.1733 14.2585C15.1752 14.5938 15.175 14.9036 15.1733 15.2055C15.1722 15.4045 15.0359 15.5383 14.834 15.5383H11.2057V15.8473V17.2191V17.2196C11.2057 17.2788 11.2057 17.3884 11.1225 17.4642C11.0865 17.495 11.0468 17.5212 11.0044 17.5422C10.9894 17.5504 10.9754 17.5581 10.9622 17.5659L10.9389 17.5801H9.57769L9.56159 17.5744C9.55631 17.5725 9.55079 17.5706 9.54538 17.5689C9.52805 17.5635 9.51107 17.557 9.49452 17.5496C9.36677 17.4897 9.30228 17.3801 9.30302 17.2239C9.30416 16.9623 9.30405 16.5695 9.30394 16.1983C9.30391 16.0912 9.30387 15.9859 9.30387 15.8861V15.5385H9.0894H7.74614C7.71674 15.539 7.6874 15.5358 7.6588 15.529C7.5464 15.5 7.41238 15.4164 7.41128 15.1846C7.40956 14.8315 7.4098 14.5406 7.41213 14.269C7.41202 14.2062 7.42644 14.1443 7.45427 14.088C7.54136 13.92 7.72071 13.92 7.77967 13.92H8.93634H9.29982V13.2436H8.90428C8.51868 13.2436 8.11994 13.2435 7.72771 13.2424C7.6472 13.243 7.56958 13.2123 7.51123 13.1568C7.45288 13.1012 7.41836 13.0252 7.41496 12.9446C7.41091 12.8637 7.41091 12.7825 7.41091 12.7039V12.7038V12.6396C7.41029 12.3733 7.40992 12.0984 7.41091 11.8279C7.41177 11.6077 7.54849 11.4712 7.768 11.4712H9.30351V6.96794V6.91223C9.30855 6.71065 9.4433 6.58016 9.6466 6.58016H10.5114L10.5594 6.58015C11.3491 6.58003 11.9853 6.57993 12.9606 6.58102C13.1049 6.58126 13.2475 6.58889 13.4172 6.60119C13.6936 6.62203 13.9664 6.6765 14.2296 6.76341C14.9689 7.00237 15.5963 7.50219 15.9949 8.16979ZM12.0747 8.35059H11.6114H11.2089V11.4714H11.7398C12.1119 11.4718 12.3578 11.4719 12.914 11.47C13.0863 11.4687 13.2576 11.4424 13.4223 11.3919C13.8342 11.2674 14.1385 11.0168 14.3268 10.6478C14.4796 10.3486 14.5243 10.0105 14.4637 9.61467C14.3889 9.1269 14.1213 8.76051 13.6685 8.52683C13.4457 8.41171 13.1877 8.35477 12.8806 8.3528C12.4545 8.35059 12.3115 8.35059 12.0747 8.35059Z",
        fill: l
      }
    )
  }
);
p2.displayName = "CurrencyRuble";
const v2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ e.jsx("mask", { id: "path-1-inside-1_4288_8258", fill: "white", children: /* @__PURE__ */ e.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.41465 5.07959C4.264 5.5058 3.92621 5.84359 3.5 5.99424V12.1649C3.92621 12.3156 4.26401 12.6534 4.41465 13.0796H19.5854C19.736 12.6534 20.0738 12.3156 20.5 12.1649V5.99424C20.0738 5.84359 19.736 5.5058 19.5854 5.07959H4.41465ZM22.4913 13.4167C22.497 13.3573 22.5 13.297 22.5 13.236V4.92314C22.5 4.86218 22.497 4.80191 22.4913 4.74247C22.497 4.68896 22.5 4.63463 22.5 4.57959C22.5 3.75116 21.8284 3.07959 21 3.07959C20.945 3.07959 20.8906 3.08255 20.8371 3.08833C20.7777 3.08255 20.7174 3.07959 20.6565 3.07959H3.34355C3.28259 3.07959 3.22232 3.08255 3.16288 3.08833C3.10938 3.08255 3.05503 3.07959 3 3.07959C2.17157 3.07959 1.5 3.75116 1.5 4.57959C1.5 4.63462 1.50296 4.68897 1.50874 4.74247C1.50296 4.80191 1.5 4.86218 1.5 4.92314V13.236C1.5 13.297 1.50296 13.3573 1.50874 13.4167C1.50296 13.4702 1.5 13.5246 1.5 13.5796C1.5 14.408 2.17157 15.0796 3 15.0796C3.05503 15.0796 3.10938 15.0766 3.16288 15.0708C3.22232 15.0766 3.28259 15.0796 3.34355 15.0796H20.6565C20.7174 15.0796 20.7777 15.0766 20.8371 15.0708C20.8906 15.0766 20.945 15.0796 21 15.0796C21.8284 15.0796 22.5 14.408 22.5 13.5796C22.5 13.5246 22.497 13.4702 22.4913 13.4167ZM6 10.2046C6.62132 10.2046 7.125 9.70091 7.125 9.07959C7.125 8.45827 6.62132 7.95459 6 7.95459C5.37868 7.95459 4.875 8.45827 4.875 9.07959C4.875 9.70091 5.37868 10.2046 6 10.2046ZM19.125 9.07959C19.125 9.70091 18.6213 10.2046 18 10.2046C17.3787 10.2046 16.875 9.70091 16.875 9.07959C16.875 8.45827 17.3787 7.95459 18 7.95459C18.6213 7.95459 19.125 8.45827 19.125 9.07959ZM13 9.07959C13 9.63188 12.5523 10.0796 12 10.0796C11.4477 10.0796 11 9.63188 11 9.07959C11 8.5273 11.4477 8.07959 12 8.07959C12.5523 8.07959 13 8.5273 13 9.07959ZM15 9.07959C15 10.7364 13.6569 12.0796 12 12.0796C10.3431 12.0796 9 10.7364 9 9.07959C9 7.42274 10.3431 6.07959 12 6.07959C13.6569 6.07959 15 7.42274 15 9.07959ZM1.25 16.3296H2.25H21.75H22.75V18.3296H21.75H2.25H1.25V16.3296ZM2.25 19.3296H1.25V21.3296H2.25H21.75H22.75V19.3296H21.75H2.25Z"
        }
      ) }),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.41465 5.07959C4.264 5.5058 3.92621 5.84359 3.5 5.99424V12.1649C3.92621 12.3156 4.26401 12.6534 4.41465 13.0796H19.5854C19.736 12.6534 20.0738 12.3156 20.5 12.1649V5.99424C20.0738 5.84359 19.736 5.5058 19.5854 5.07959H4.41465ZM22.4913 13.4167C22.497 13.3573 22.5 13.297 22.5 13.236V4.92314C22.5 4.86218 22.497 4.80191 22.4913 4.74247C22.497 4.68896 22.5 4.63463 22.5 4.57959C22.5 3.75116 21.8284 3.07959 21 3.07959C20.945 3.07959 20.8906 3.08255 20.8371 3.08833C20.7777 3.08255 20.7174 3.07959 20.6565 3.07959H3.34355C3.28259 3.07959 3.22232 3.08255 3.16288 3.08833C3.10938 3.08255 3.05503 3.07959 3 3.07959C2.17157 3.07959 1.5 3.75116 1.5 4.57959C1.5 4.63462 1.50296 4.68897 1.50874 4.74247C1.50296 4.80191 1.5 4.86218 1.5 4.92314V13.236C1.5 13.297 1.50296 13.3573 1.50874 13.4167C1.50296 13.4702 1.5 13.5246 1.5 13.5796C1.5 14.408 2.17157 15.0796 3 15.0796C3.05503 15.0796 3.10938 15.0766 3.16288 15.0708C3.22232 15.0766 3.28259 15.0796 3.34355 15.0796H20.6565C20.7174 15.0796 20.7777 15.0766 20.8371 15.0708C20.8906 15.0766 20.945 15.0796 21 15.0796C21.8284 15.0796 22.5 14.408 22.5 13.5796C22.5 13.5246 22.497 13.4702 22.4913 13.4167ZM6 10.2046C6.62132 10.2046 7.125 9.70091 7.125 9.07959C7.125 8.45827 6.62132 7.95459 6 7.95459C5.37868 7.95459 4.875 8.45827 4.875 9.07959C4.875 9.70091 5.37868 10.2046 6 10.2046ZM19.125 9.07959C19.125 9.70091 18.6213 10.2046 18 10.2046C17.3787 10.2046 16.875 9.70091 16.875 9.07959C16.875 8.45827 17.3787 7.95459 18 7.95459C18.6213 7.95459 19.125 8.45827 19.125 9.07959ZM13 9.07959C13 9.63188 12.5523 10.0796 12 10.0796C11.4477 10.0796 11 9.63188 11 9.07959C11 8.5273 11.4477 8.07959 12 8.07959C12.5523 8.07959 13 8.5273 13 9.07959ZM15 9.07959C15 10.7364 13.6569 12.0796 12 12.0796C10.3431 12.0796 9 10.7364 9 9.07959C9 7.42274 10.3431 6.07959 12 6.07959C13.6569 6.07959 15 7.42274 15 9.07959ZM1.25 16.3296H2.25H21.75H22.75V18.3296H21.75H2.25H1.25V16.3296ZM2.25 19.3296H1.25V21.3296H2.25H21.75H22.75V19.3296H21.75H2.25Z",
          fill: l
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M3.5 5.99424L2.83351 4.10856L1.5 4.57988V5.99424H3.5ZM4.41465 5.07959V3.07959H3.0003L2.52897 4.4131L4.41465 5.07959ZM3.5 12.1649H1.5V13.5793L2.83351 14.0506L3.5 12.1649ZM4.41465 13.0796L2.52897 13.7461L3.0003 15.0796H4.41465V13.0796ZM19.5854 13.0796V15.0796H20.9997L21.471 13.7461L19.5854 13.0796ZM20.5 12.1649L21.1665 14.0506L22.5 13.5793V12.1649H20.5ZM20.5 5.99424H22.5V4.57989L21.1665 4.10856L20.5 5.99424ZM19.5854 5.07959L21.471 4.4131L20.9997 3.07959H19.5854V5.07959ZM22.4913 13.4167L20.5007 13.2231L20.4808 13.4274L20.5028 13.6314L22.4913 13.4167ZM22.4913 4.74247L20.5028 4.52775L20.4808 4.73179L20.5007 4.93606L22.4913 4.74247ZM20.8371 3.08833L20.6435 5.07894L20.8478 5.09881L21.0518 5.07677L20.8371 3.08833ZM3.16288 3.08833L2.94817 5.07677L3.15222 5.09881L3.3565 5.07894L3.16288 3.08833ZM1.50874 4.74247L3.49935 4.93609L3.51922 4.73181L3.49718 4.52776L1.50874 4.74247ZM1.50874 13.4167L3.49718 13.6314L3.51922 13.4274L3.49935 13.2231L1.50874 13.4167ZM3.16288 15.0708L3.35651 13.0802L3.15223 13.0604L2.94818 13.0824L3.16288 15.0708ZM20.8371 15.0708L21.0518 13.0824L20.8478 13.0604L20.6435 13.0802L20.8371 15.0708ZM1.25 16.3296V14.3296H-0.75V16.3296H1.25ZM22.75 16.3296H24.75V14.3296H22.75V16.3296ZM22.75 18.3296V20.3296H24.75V18.3296H22.75ZM1.25 18.3296H-0.75V20.3296H1.25V18.3296ZM1.25 19.3296V17.3296H-0.75V19.3296H1.25ZM1.25 21.3296H-0.75V23.3296H1.25V21.3296ZM22.75 21.3296V23.3296H24.75V21.3296H22.75ZM22.75 19.3296H24.75V17.3296H22.75V19.3296ZM4.16649 7.87992C5.1624 7.52791 5.94832 6.74199 6.30033 5.74608L2.52897 4.4131C2.57969 4.2696 2.69001 4.15928 2.83351 4.10856L4.16649 7.87992ZM5.5 12.1649V5.99424H1.5V12.1649H5.5ZM6.30033 12.4131C5.94832 11.4172 5.1624 10.6313 4.16649 10.2793L2.83351 14.0506C2.69001 13.9999 2.57969 13.8896 2.52897 13.7461L6.30033 12.4131ZM19.5854 11.0796H4.41465V15.0796H19.5854V11.0796ZM21.471 13.7461C21.4203 13.8896 21.31 13.9999 21.1665 14.0506L19.8335 10.2793C18.8376 10.6313 18.0517 11.4172 17.6997 12.4131L21.471 13.7461ZM18.5 5.99424V12.1649H22.5V5.99424H18.5ZM17.6997 5.74608C18.0517 6.74199 18.8376 7.52791 19.8335 7.87992L21.1665 4.10856C21.31 4.15928 21.4203 4.26961 21.471 4.4131L17.6997 5.74608ZM4.41465 7.07959H19.5854V3.07959H4.41465V7.07959ZM20.5 13.236C20.5 13.2322 20.5002 13.2279 20.5007 13.2231L24.4819 13.6103C24.4939 13.4867 24.5 13.3618 24.5 13.236H20.5ZM20.5 4.92314V13.236H24.5V4.92314H20.5ZM20.5007 4.93606C20.5002 4.9313 20.5 4.92696 20.5 4.92314H24.5C24.5 4.79739 24.4939 4.67251 24.4819 4.54887L20.5007 4.93606ZM20.5 4.57959C20.5 4.56275 20.5009 4.54541 20.5028 4.52775L24.4797 4.95718C24.4932 4.83251 24.5 4.7065 24.5 4.57959H20.5ZM21 5.07959C20.7239 5.07959 20.5 4.85573 20.5 4.57959H24.5C24.5 2.64659 22.933 1.07959 21 1.07959V5.07959ZM21.0518 5.07677C21.0342 5.07868 21.0168 5.07959 21 5.07959V1.07959C20.8731 1.07959 20.7471 1.08643 20.6224 1.09989L21.0518 5.07677ZM20.6565 5.07959C20.6527 5.07959 20.6483 5.0794 20.6435 5.07894L21.0307 1.09772C20.9071 1.08569 20.7822 1.07959 20.6565 1.07959V5.07959ZM3.34355 5.07959H20.6565V1.07959H3.34355V5.07959ZM3.3565 5.07894C3.35169 5.0794 3.34734 5.07959 3.34355 5.07959V1.07959C3.21783 1.07959 3.09295 1.08569 2.96925 1.09772L3.3565 5.07894ZM3 5.07959C2.98318 5.07959 2.96584 5.07868 2.94817 5.07677L3.37759 1.09989C3.25291 1.08643 3.12689 1.07959 3 1.07959V5.07959ZM3.5 4.57959C3.5 4.85573 3.27614 5.07959 3 5.07959V1.07959C1.067 1.07959 -0.5 2.64659 -0.5 4.57959H3.5ZM3.49718 4.52776C3.49909 4.54543 3.5 4.56276 3.5 4.57959H-0.5C-0.5 4.70648 -0.493163 4.8325 -0.479701 4.95718L3.49718 4.52776ZM3.5 4.92314C3.5 4.92693 3.49981 4.93128 3.49935 4.93609L-0.481865 4.54884C-0.493896 4.67254 -0.5 4.79742 -0.5 4.92314H3.5ZM3.5 13.236V4.92314H-0.5V13.236H3.5ZM3.49935 13.2231C3.49981 13.2279 3.5 13.2322 3.5 13.236H-0.5C-0.5 13.3618 -0.493896 13.4866 -0.481865 13.6103L3.49935 13.2231ZM3.5 13.5796C3.5 13.5964 3.49909 13.6137 3.49718 13.6314L-0.479701 13.202C-0.493163 13.3267 -0.5 13.4527 -0.5 13.5796H3.5ZM3 13.0796C3.27614 13.0796 3.5 13.3034 3.5 13.5796H-0.5C-0.5 15.5126 1.067 17.0796 3 17.0796V13.0796ZM2.94818 13.0824C2.96584 13.0805 2.98317 13.0796 3 13.0796V17.0796C3.1269 17.0796 3.25291 17.0728 3.37757 17.0593L2.94818 13.0824ZM3.34355 13.0796C3.34733 13.0796 3.35168 13.0798 3.35651 13.0802L2.96924 17.0615C3.09295 17.0735 3.21784 17.0796 3.34355 17.0796V13.0796ZM20.6565 13.0796H3.34355V17.0796H20.6565V13.0796ZM20.6435 13.0802C20.6483 13.0798 20.6527 13.0796 20.6565 13.0796V17.0796C20.7822 17.0796 20.907 17.0735 21.0308 17.0615L20.6435 13.0802ZM21 13.0796C21.0168 13.0796 21.0342 13.0805 21.0518 13.0824L20.6224 17.0593C20.7471 17.0728 20.8731 17.0796 21 17.0796V13.0796ZM20.5 13.5796C20.5 13.3034 20.7239 13.0796 21 13.0796V17.0796C22.933 17.0796 24.5 15.5126 24.5 13.5796H20.5ZM20.5028 13.6314C20.5009 13.6138 20.5 13.5964 20.5 13.5796H24.5C24.5 13.4527 24.4932 13.3267 24.4797 13.202L20.5028 13.6314ZM5.125 9.07959C5.125 8.59634 5.51675 8.20459 6 8.20459V12.2046C7.72589 12.2046 9.125 10.8055 9.125 9.07959H5.125ZM6 9.95459C5.51675 9.95459 5.125 9.56284 5.125 9.07959H9.125C9.125 7.3537 7.72589 5.95459 6 5.95459V9.95459ZM6.875 9.07959C6.875 9.56284 6.48325 9.95459 6 9.95459V5.95459C4.27411 5.95459 2.875 7.3537 2.875 9.07959H6.875ZM6 8.20459C6.48325 8.20459 6.875 8.59634 6.875 9.07959H2.875C2.875 10.8055 4.27411 12.2046 6 12.2046V8.20459ZM18 12.2046C19.7259 12.2046 21.125 10.8055 21.125 9.07959H17.125C17.125 8.59634 17.5168 8.20459 18 8.20459V12.2046ZM14.875 9.07959C14.875 10.8055 16.2741 12.2046 18 12.2046V8.20459C18.4832 8.20459 18.875 8.59634 18.875 9.07959H14.875ZM18 5.95459C16.2741 5.95459 14.875 7.3537 14.875 9.07959H18.875C18.875 9.56284 18.4832 9.95459 18 9.95459V5.95459ZM21.125 9.07959C21.125 7.3537 19.7259 5.95459 18 5.95459V9.95459C17.5168 9.95459 17.125 9.56284 17.125 9.07959H21.125ZM12 12.0796C13.6569 12.0796 15 10.7364 15 9.07959H11C11 8.5273 11.4477 8.07959 12 8.07959V12.0796ZM9 9.07959C9 10.7364 10.3431 12.0796 12 12.0796V8.07959C12.5523 8.07959 13 8.5273 13 9.07959H9ZM12 6.07959C10.3431 6.07959 9 7.42273 9 9.07959H13C13 9.63188 12.5523 10.0796 12 10.0796V6.07959ZM15 9.07959C15 7.42273 13.6569 6.07959 12 6.07959V10.0796C11.4477 10.0796 11 9.63188 11 9.07959H15ZM12 14.0796C14.7614 14.0796 17 11.841 17 9.07959H13C13 9.63187 12.5523 10.0796 12 10.0796V14.0796ZM7 9.07959C7 11.841 9.23858 14.0796 12 14.0796V10.0796C11.4477 10.0796 11 9.63187 11 9.07959H7ZM12 4.07959C9.23858 4.07959 7 6.31817 7 9.07959H11C11 8.52731 11.4477 8.07959 12 8.07959V4.07959ZM17 9.07959C17 6.31817 14.7614 4.07959 12 4.07959V8.07959C12.5523 8.07959 13 8.52731 13 9.07959H17ZM2.25 14.3296H1.25V18.3296H2.25V14.3296ZM21.75 14.3296H2.25V18.3296H21.75V14.3296ZM22.75 14.3296H21.75V18.3296H22.75V14.3296ZM24.75 18.3296V16.3296H20.75V18.3296H24.75ZM21.75 20.3296H22.75V16.3296H21.75V20.3296ZM2.25 20.3296H21.75V16.3296H2.25V20.3296ZM1.25 20.3296H2.25V16.3296H1.25V20.3296ZM-0.75 16.3296V18.3296H3.25V16.3296H-0.75ZM1.25 21.3296H2.25V17.3296H1.25V21.3296ZM3.25 21.3296V19.3296H-0.75V21.3296H3.25ZM2.25 19.3296H1.25V23.3296H2.25V19.3296ZM21.75 19.3296H2.25V23.3296H21.75V19.3296ZM22.75 19.3296H21.75V23.3296H22.75V19.3296ZM20.75 19.3296V21.3296H24.75V19.3296H20.75ZM21.75 21.3296H22.75V17.3296H21.75V21.3296ZM2.25 21.3296H21.75V17.3296H2.25V21.3296Z",
          fill: l,
          mask: "url(#path-1-inside-1_4288_8258)"
        }
      )
    ]
  }
);
v2.displayName = "Dollar";
const x2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.04883 4.14292C2.04883 2.76202 3.16827 1.64258 4.54917 1.64258H14.0413C15.4222 1.64258 16.5416 2.76202 16.5416 4.14292V7.25356V8.25356H14.5416V7.25356V4.14292C14.5416 3.86659 14.3176 3.64258 14.0413 3.64258H4.54917C4.27284 3.64258 4.04883 3.86659 4.04883 4.14292V19.2512C4.04883 19.5276 4.27284 19.7516 4.54917 19.7516H7.70404H8.70404V21.7516H7.70404H4.54917C3.16827 21.7516 2.04883 20.6321 2.04883 19.2512V4.14292ZM19.368 15.8489L19.8892 14.9059C20.0229 14.6641 19.9353 14.3595 19.6935 14.2257L12.033 9.9847C11.7912 9.85086 11.4869 9.93842 11.3532 10.1803L10.8567 11.0786L19.368 15.8489ZM9.88919 12.8291L18.4005 17.5994L16.9315 20.2573C16.7978 20.4991 16.4935 20.5867 16.2517 20.4528L8.59118 16.2119C8.34942 16.078 8.26181 15.7735 8.39548 15.5316L9.88919 12.8291ZM13.0005 8.23428C11.7923 7.56545 10.2714 8.003 9.60346 9.21159L6.64572 14.563C5.97773 15.7715 6.41559 17.2935 7.62371 17.9623L15.2843 22.2033C16.4924 22.8721 18.0133 22.4345 18.6813 21.226L21.639 15.8746C22.307 14.666 21.8691 13.1441 20.661 12.4752L13.0005 8.23428Z",
        fill: l
      }
    )
  }
);
x2.displayName = "Merch";
const w2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13 2.07959V1.07959H11V2.07959V6.66538L9.70711 5.37248L9 4.66538L7.58579 6.07959L8.29289 6.7867L11.2929 9.7867C11.4804 9.97423 11.7348 10.0796 12 10.0796C12.2652 10.0796 12.5196 9.97423 12.7071 9.7867L15.7071 6.7867L16.4142 6.07959L15 4.66538L14.2929 5.37248L13 6.66538V2.07959ZM6 15.0796C6.55228 15.0796 7 14.6319 7 14.0796C7 13.5273 6.55228 13.0796 6 13.0796C5.44772 13.0796 5 13.5273 5 14.0796C5 14.6319 5.44772 15.0796 6 15.0796ZM19 14.0796C19 14.6319 18.5523 15.0796 18 15.0796C17.4477 15.0796 17 14.6319 17 14.0796C17 13.5273 17.4477 13.0796 18 13.0796C18.5523 13.0796 19 13.5273 19 14.0796ZM9 14.0796C9 12.4227 10.3431 11.0796 12 11.0796C13.6569 11.0796 15 12.4227 15 14.0796C15 15.7364 13.6569 17.0796 12 17.0796C10.3431 17.0796 9 15.7364 9 14.0796ZM4 7.07959C2.34315 7.07959 1 8.42274 1 10.0796V18.0796C1 19.7364 2.34315 21.0796 4 21.0796H20C21.6569 21.0796 23 19.7364 23 18.0796V10.0796C23 8.42274 21.6569 7.07959 20 7.07959H18H17V9.07959H18H20C20.5523 9.07959 21 9.52731 21 10.0796V18.0796C21 18.6319 20.5523 19.0796 20 19.0796H4C3.44772 19.0796 3 18.6319 3 18.0796V10.0796C3 9.52731 3.44772 9.07959 4 9.07959H6H7V7.07959H6H4ZM12 13.0796C11.4477 13.0796 11 13.5273 11 14.0796C11 14.6319 11.4477 15.0796 12 15.0796C12.5523 15.0796 13 14.6319 13 14.0796C13 13.5273 12.5523 13.0796 12 13.0796Z",
        fill: l
      }
    )
  }
);
w2.displayName = "Money";
const V2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.00834 2.00244C6.35173 2.00244 5.00879 3.34539 5.00879 5.002V18.9989C5.00879 20.6555 6.35174 21.9984 8.00834 21.9984H16.0066C17.6632 21.9984 19.0061 20.6555 19.0061 18.9989V5.002C19.0061 3.34539 17.6632 2.00244 16.0066 2.00244H8.00834ZM7.00879 5.002C7.00879 4.44996 7.45631 4.00244 8.00834 4.00244H16.0066C16.5586 4.00244 17.0061 4.44996 17.0061 5.002V18.9989C17.0061 19.5509 16.5586 19.9984 16.0066 19.9984H8.00834C7.45631 19.9984 7.00879 19.5509 7.00879 18.9989V5.002ZM9.53516 7.29297H8.53516V9.29297H9.53516H11.7596H12.7596V7.29297H11.7596H9.53516ZM8.53516 11.293H9.53516H13.7596H14.7596V13.293H13.7596H9.53516H8.53516V11.293ZM11.5352 16.293H10.5352V18.293H11.5352H12.5352H13.5352V16.293H12.5352H11.5352Z",
        fill: l
      }
    )
  }
);
V2.displayName = "Online";
const M2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 2.07959C3.34315 2.07959 2 3.42274 2 5.07959V15.0796C2 18.9456 5.13401 22.0796 9 22.0796H19C20.6569 22.0796 22 20.7364 22 19.0796V9.07959C22 5.2136 18.866 2.07959 15 2.07959H5ZM4 5.07959C4 4.52731 4.44772 4.07959 5 4.07959H15C17.7614 4.07959 20 6.31817 20 9.07959V19.0796C20 19.6319 19.5523 20.0796 19 20.0796H9C6.23858 20.0796 4 17.841 4 15.0796V5.07959ZM17.2071 8.2867L17.9142 7.57959L16.5 6.16538L15.7929 6.87248L6.79289 15.8725L6.08579 16.5796L7.5 17.9938L8.20711 17.2867L17.2071 8.2867ZM6 8.07959C6 6.97502 6.89543 6.07959 8 6.07959C9.10457 6.07959 10 6.97502 10 8.07959C10 9.18416 9.10457 10.0796 8 10.0796C6.89543 10.0796 6 9.18416 6 8.07959ZM16 14.0796C14.8954 14.0796 14 14.975 14 16.0796C14 17.1842 14.8954 18.0796 16 18.0796C17.1046 18.0796 18 17.1842 18 16.0796C18 14.975 17.1046 14.0796 16 14.0796Z",
        fill: l
      }
    )
  }
);
M2.displayName = "Percent";
const g2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.52539 6.59607C1.52539 5.20626 2.65206 4.07959 4.04187 4.07959H20.0821C21.4719 4.07959 22.5986 5.20626 22.5986 6.59607V9.23124C22.5986 9.7074 22.2658 10.1058 21.8201 10.2066V10.2314H20.8201H3.5957H3.52539V17.9334C3.52539 18.2187 3.75663 18.4499 4.04187 18.4499H15.5654H16.5654V20.4499H15.5654H4.04187C2.65206 20.4499 1.52539 19.3233 1.52539 17.9334V6.59607ZM3.52539 8.23145H3.5957H20.5986V6.59607C20.5986 6.31082 20.3674 6.07959 20.0821 6.07959H4.04187C3.75663 6.07959 3.52539 6.31083 3.52539 6.59607V8.23145ZM14.5098 14.1895H15.5098H19.1416L18.09 13.1502L17.3788 12.4473L18.7846 11.0248L19.4959 11.7277L22.2788 14.4781C22.4682 14.6653 22.5752 14.9203 22.5759 15.1867C22.5766 15.453 22.471 15.7086 22.2826 15.8968L19.4997 18.6767L18.7922 19.3834L17.3788 17.9684L18.0863 17.2617L19.1596 16.1895H15.5098H14.5098V14.1895ZM5.70918 12.5761H6.70918H7.77947H8.77947V14.5761H7.77947H6.70918H5.70918V12.5761Z",
        fill: l
      }
    )
  }
);
g2.displayName = "SendCard";
const j2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.46387 4.73669C4.46387 3.34688 5.59054 2.22021 6.98035 2.22021H16.484C17.8738 2.22021 19.0005 3.34688 19.0005 4.7367V8.37186V9.37186H17.0005V8.37186V4.7367C17.0005 4.45145 16.7693 4.22021 16.484 4.22021H6.98035C6.6951 4.22021 6.46387 4.45145 6.46387 4.73669V20.0741C6.46387 20.3593 6.6951 20.5906 6.98035 20.5906H16.0005H17.0005V22.5906H16.0005H6.98035C5.59053 22.5906 4.46387 21.4639 4.46387 20.0741V4.73669ZM13.1367 15.5469H14.1367H18.3225L17.9304 14.965L17.3717 14.1357L19.0303 13.0182L19.5891 13.8475L21.0313 15.9881C21.2589 16.3258 21.2589 16.7678 21.0313 17.1056L19.5891 19.2462L19.0303 20.0755L17.3717 18.958L17.9304 18.1286L18.3224 17.5469H14.1367H13.1367V15.5469ZM9.53516 7.37207H8.53516V9.37207H9.53516H11.7596H12.7596V7.37207H11.7596H9.53516ZM8.53516 11.3721H9.53516H13.7596H14.7596V13.3721H13.7596H9.53516H8.53516V11.3721Z",
        fill: l
      }
    )
  }
);
j2.displayName = "SendDoc";
const Z2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.78078 2.07959C7.86304 2.07959 7.06308 2.70418 6.84049 3.59452L5.55972 8.71762C5.52005 8.87627 5.5 9.03917 5.5 9.2027V10.5796V20.0796H5H4V22.0796H5L19 22.0796H20V20.0796H19H18.5V10.5796V9.2027C18.5 9.03917 18.4799 8.87627 18.4403 8.71762L17.1595 3.59452C16.9369 2.70418 16.137 2.07959 15.2192 2.07959H8.78078ZM16.5 20.0796V11.5796H7.5V20.0796L16.5 20.0796ZM16.5 9.57959V9.2027L15.2192 4.07959L8.78078 4.07959L7.5 9.2027V9.57959H16.5ZM16 15.0796H15H13H12V13.0796H13H15H16V15.0796Z",
        fill: l
      }
    )
  }
);
Z2.displayName = "Terminal";
const m2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.5 1.16553L17.2071 1.87263L20.9142 5.57974H21V5.66553L21.2071 5.87263C21.5976 6.26316 21.5976 6.89632 21.2071 7.28685L21 7.49396V7.57974H20.9142L17.2071 11.2868L16.5 11.994L15.0858 10.5797L15.7929 9.87263L18.0858 7.57974H3.5H2.5V5.57974H3.5H18.0858L15.7929 3.28685L15.0858 2.57974L16.5 1.16553ZM5.91422 18.5797L20.5 18.5797H21.5V16.5797H20.5L5.91421 16.5797L8.20711 14.2868L8.91421 13.5797L7.5 12.1655L6.79289 12.8726L3.08578 16.5797H3V16.6655L2.79289 16.8726C2.40237 17.2631 2.40237 17.8963 2.79289 18.2868L3 18.4939V18.5797H3.08579L6.79289 22.2868L7.5 22.9939L8.91421 21.5797L8.20711 20.8726L5.91422 18.5797Z",
        fill: l
      }
    )
  }
);
m2.displayName = "Transfers";
const R2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 7.07959C0 5.42274 1.34315 4.07959 3 4.07959H21C22.6569 4.07959 24 5.42274 24 7.07959V17.0796C24 18.7364 22.6569 20.0796 21 20.0796H3C1.34314 20.0796 0 18.7364 0 17.0796V7.07959ZM3 6.07959C2.44772 6.07959 2 6.52731 2 7.07959V17.0796C2 17.6319 2.44772 18.0796 3 18.0796H21C21.5523 18.0796 22 17.6319 22 17.0796V7.07959C22 6.5273 21.5523 6.07959 21 6.07959H3ZM8.34636 9.43232C8.70383 9.57953 8.87429 9.98866 8.72708 10.3461L7.08732 14.328C6.977 14.5959 6.71303 14.7682 6.42339 14.7613C6.13374 14.7544 5.87828 14.5698 5.78083 14.2969L4.5671 10.8985H4.07981C3.69321 10.8985 3.37981 10.5851 3.37981 10.1985C3.37981 9.81189 3.69321 9.49849 4.07981 9.49849H5.0604C5.35623 9.49849 5.62012 9.68445 5.71962 9.96305L6.48651 12.1103L7.43255 9.81304C7.57976 9.45557 7.98888 9.28511 8.34636 9.43232ZM10.8897 10.1064C10.8897 9.71985 10.5763 9.40645 10.1897 9.40645C9.80313 9.40645 9.48973 9.71985 9.48973 10.1064V14.0796C9.48973 14.4662 9.80313 14.7796 10.1897 14.7796C10.5763 14.7796 10.8897 14.4662 10.8897 14.0796V10.1064ZM19.1053 9.49824C19.4234 9.4981 19.7015 9.71239 19.7826 10.0199L20.7826 13.8165C20.881 14.1903 20.6578 14.5732 20.2839 14.6717C19.9101 14.7702 19.5272 14.5469 19.4287 14.1731L18.7974 11.7763L17.4569 14.3211C17.2767 14.6631 16.8533 14.7943 16.5113 14.6141C16.1692 14.4339 16.038 14.0106 16.2182 13.6685L18.2182 9.87211C18.3392 9.64235 18.5775 9.49848 18.8372 9.49836L19.1053 9.49824ZM15.6102 9.446C14.7775 8.95966 13.8671 8.90539 13.1525 9.2578C12.4208 9.61863 11.9664 10.3842 12.113 11.2846C12.1991 11.8139 12.5035 12.1556 12.8549 12.367C13.1334 12.5345 13.4634 12.6301 13.6921 12.6964L13.7526 12.714C14.03 12.7953 14.1807 12.8499 14.2783 12.9178C14.332 12.9552 14.3649 12.9878 14.3788 13.1011C14.4042 13.3072 14.3528 13.3576 14.3467 13.3635L14.3463 13.364C14.3217 13.3904 14.2392 13.4502 14.0342 13.4813C13.613 13.5452 13.0315 13.4321 12.6726 13.2732C12.3191 13.1168 11.9057 13.2765 11.7492 13.63C11.5927 13.9836 11.7525 14.397 12.106 14.5535C12.6507 14.7945 13.5032 14.9778 14.2441 14.8655C14.6202 14.8084 15.0507 14.662 15.3711 14.3178C15.7131 13.9504 15.8339 13.4621 15.7683 12.93C15.7024 12.3944 15.4352 12.0172 15.0779 11.7686C14.7674 11.5526 14.4003 11.4449 14.1538 11.3726L14.1466 11.3705C13.8507 11.2838 13.6906 11.2359 13.5765 11.1673C13.5097 11.1271 13.5031 11.1105 13.4948 11.0597C13.4525 10.8 13.5613 10.6172 13.7717 10.5134C13.9991 10.4013 14.4098 10.3662 14.9041 10.6549C15.238 10.8499 15.6667 10.7373 15.8616 10.4035C16.0566 10.0697 15.944 9.64097 15.6102 9.446Z",
        fill: l
      }
    )
  }
);
R2.displayName = "Visa";
const k2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.33359 2.57959H7.29099H7.29099C6.39371 2.57958 5.65871 2.57957 5.06113 2.62936C4.44185 2.68096 3.88176 2.79114 3.35904 3.06275C2.54212 3.48723 1.88156 4.1626 1.46877 4.98878C1.20581 5.5151 1.09886 6.07893 1.04861 6.70612C0.999982 7.3131 0.99999 8.06056 1 8.97743V8.97745V9.01875V9.24534V15.1378V15.1791V15.1791V15.2478V15.7769V15.8182V15.8182C0.999988 16.6232 0.999978 17.2875 1.04419 17.8287C1.09012 18.3908 1.18868 18.9075 1.43598 19.3929C1.81947 20.1455 2.43139 20.7574 3.18404 21.1409C3.66937 21.3882 4.18608 21.4868 4.74817 21.5327C5.28936 21.5769 5.95371 21.5769 6.75866 21.5769H6.75868H6.7587H6.75872H6.8H7.04523L7.29098 21.5769H7.33359H10.3337L10.3423 21.5769H17.201H17.2422H17.2423H17.2423H17.2423C18.0473 21.5769 18.7116 21.5769 19.2528 21.5327C19.8149 21.4868 20.3316 21.3882 20.8169 21.1409C21.5696 20.7574 22.1815 20.1455 22.565 19.3929C22.8123 18.9075 22.9109 18.3908 22.9568 17.8287C23.001 17.2875 23.001 16.6232 23.001 15.8182V15.8181V15.7769V12.9122V12.871V12.8708C23.001 12.0659 23.001 11.4015 22.9568 10.8604C22.9109 10.2983 22.8123 9.78156 22.565 9.29622C22.1815 8.54357 21.5696 7.93165 20.8169 7.54816C20.4533 7.3629 20.0722 7.26111 19.6675 7.20239V6.41248C19.6675 4.3142 17.9944 2.57959 15.8896 2.57959H7.33359ZM17.6675 7.11244V6.41248C17.6675 5.38164 16.8531 4.57959 15.8896 4.57959H7.33359C6.3833 4.57959 5.73191 4.5804 5.22719 4.62245C4.73474 4.66348 4.47156 4.73856 4.2812 4.83747C3.84365 5.06483 3.48428 5.42957 3.25789 5.88269C3.15753 6.08356 3.08281 6.35929 3.04222 6.86584C3.03593 6.94434 3.03058 7.02628 3.02603 7.11218H17.201L17.2423 7.11218H17.2424H17.2425C17.3888 7.11218 17.5304 7.11218 17.6675 7.11244ZM3 9.11218V9.24534V15.1378C3 16.1059 3.00075 16.773 3.04222 17.2907C3.08281 17.7973 3.15753 18.073 3.25789 18.2739C3.48428 18.727 3.84365 19.0917 4.2812 19.3191C4.47156 19.418 4.73474 19.4931 5.22719 19.5341C5.69072 19.5727 6.27795 19.5765 7.1068 19.5769H17.201C18.0575 19.5769 18.6398 19.5761 19.0899 19.5394C19.5283 19.5035 19.7525 19.4386 19.9089 19.3589C20.2853 19.1672 20.5912 18.8612 20.783 18.4849C20.8627 18.3285 20.9276 18.1043 20.9634 17.6659C21.0002 17.2158 21.001 16.6335 21.001 15.7769V12.9122C21.001 12.0556 21.0002 11.4733 20.9634 11.0232C20.9276 10.5848 20.8627 10.3606 20.783 10.2042C20.5912 9.82788 20.2853 9.52192 19.9089 9.33017C19.7525 9.25048 19.5283 9.18555 19.0899 9.14973C18.6398 9.11296 18.0575 9.11218 17.201 9.11218H3ZM8 13.0796H9H11V11.0796V10.0796H13V11.0796V13.0796H15H16V15.0796H15H13V17.0796V18.0796H11V17.0796V15.0796H9H8V13.0796Z",
        fill: l
      }
    )
  }
);
k2.displayName = "WalletPlus";
const y2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.33359 2.57959H7.29099H7.29099C6.39371 2.57958 5.65871 2.57957 5.06113 2.62936C4.44185 2.68096 3.88176 2.79114 3.35904 3.06275C2.54212 3.48723 1.88156 4.1626 1.46877 4.98878C1.20581 5.5151 1.09886 6.07893 1.04861 6.70612C0.999982 7.3131 0.99999 8.06056 1 8.97743V8.97745V9.01875V9.24534V15.1378V15.1791V15.1791V15.2478V15.7769V15.8182V15.8182C0.999988 16.6232 0.999978 17.2875 1.04419 17.8287C1.09012 18.3908 1.18868 18.9075 1.43598 19.3929C1.81947 20.1455 2.43139 20.7574 3.18404 21.1409C3.66937 21.3882 4.18608 21.4868 4.74817 21.5327C5.28936 21.5769 5.95371 21.5769 6.75866 21.5769H6.75868H6.7587H6.75872H6.8H7.04523L7.29098 21.5769H7.33359H10.3337L10.3423 21.5769H17.201H17.2422H17.2423H17.2423H17.2423C18.0473 21.5769 18.7116 21.5769 19.2528 21.5327C19.8149 21.4868 20.3316 21.3882 20.8169 21.1409C21.5696 20.7574 22.1815 20.1455 22.565 19.3929C22.8123 18.9075 22.9109 18.3908 22.9568 17.8287C23.001 17.2876 23.001 16.6233 23.001 15.8183V15.8182V15.7769V12.9122V12.8709V12.8708C23.001 12.0658 23.001 11.4015 22.9568 10.8604C22.9109 10.2983 22.8123 9.78156 22.565 9.29622C22.1815 8.54357 21.5696 7.93165 20.8169 7.54816C20.4533 7.3629 20.0722 7.26111 19.6675 7.20239V6.41248C19.6675 4.3142 17.9944 2.57959 15.8896 2.57959H7.33359ZM17.6675 7.11244V6.41248C17.6675 5.38164 16.8531 4.57959 15.8896 4.57959H7.33359C6.3833 4.57959 5.73191 4.5804 5.22719 4.62245C4.73474 4.66348 4.47156 4.73856 4.2812 4.83747C3.84365 5.06483 3.48428 5.42957 3.25789 5.88269C3.15753 6.08356 3.08281 6.35929 3.04222 6.86584C3.03593 6.94434 3.03058 7.02628 3.02603 7.11218H17.201L17.2423 7.11218H17.2424H17.2425C17.3888 7.11218 17.5304 7.11218 17.6675 7.11244ZM3 9.11218V9.24534V15.1378C3 16.1059 3.00075 16.773 3.04222 17.2907C3.08281 17.7973 3.15753 18.073 3.25789 18.2739C3.48428 18.727 3.84365 19.0917 4.2812 19.3191C4.47156 19.418 4.73474 19.4931 5.22719 19.5341C5.69072 19.5727 6.27795 19.5765 7.1068 19.5769H17.201C18.0575 19.5769 18.6398 19.5761 19.0899 19.5394C19.5283 19.5035 19.7525 19.4386 19.909 19.3589C20.2853 19.1672 20.5912 18.8612 20.783 18.4849C20.8627 18.3285 20.9276 18.1043 20.9634 17.6659C21.0002 17.2158 21.001 16.6335 21.001 15.7769V12.9122C21.001 12.0556 21.0002 11.4733 20.9634 11.0232C20.9276 10.5848 20.8627 10.3606 20.783 10.2042C20.5912 9.82788 20.2853 9.52192 19.909 9.33017C19.7525 9.25048 19.5283 9.18555 19.0899 9.14973C18.6398 9.11296 18.0575 9.11218 17.201 9.11218H3ZM7.18457 13.3613H8.18457H13.4002L12.4745 12.4356L11.7674 11.7285L13.1816 10.3143L13.8887 11.0214L16.5219 13.6546C16.9124 14.0451 16.9124 14.6783 16.5219 15.0688L13.8887 17.7019L13.1816 18.409L11.7674 16.9948L12.4745 16.2877L13.4009 15.3613H8.18457H7.18457V13.3613Z",
        fill: l
      }
    )
  }
);
y2.displayName = "WalletTransfer";
const F2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.29099 2.57959H7.33359H15.8896C17.9944 2.57959 19.6675 4.3142 19.6675 6.41248V7.20239C20.0722 7.26111 20.4533 7.3629 20.8169 7.54816C21.5696 7.93165 22.1815 8.54357 22.565 9.29622C22.8123 9.78156 22.9109 10.2983 22.9568 10.8604C23.001 11.4015 23.001 12.0658 23.001 12.8708V12.8709V12.9122V17.3769V17.4155C23.001 17.9426 23.001 18.3974 22.9704 18.7719C22.9381 19.1673 22.8668 19.5605 22.674 19.9389C22.3864 20.5034 21.9274 20.9623 21.3629 21.2499C20.9846 21.4427 20.5913 21.514 20.196 21.5463C19.8214 21.5769 19.3666 21.5769 18.8395 21.5769H18.801H10.3423L10.3337 21.5769H7.33359H7.29098L7.04523 21.5769H6.8H6.75872H6.7587H6.75868C5.95372 21.5769 5.28936 21.5769 4.74817 21.5327C4.18608 21.4868 3.66937 21.3882 3.18404 21.1409C2.43139 20.7574 1.81947 20.1455 1.43598 19.3929C1.18868 18.9075 1.09012 18.3908 1.04419 17.8287C0.999978 17.2875 0.999988 16.6232 1 15.8182V15.8182V15.7769V15.2478V15.1791V15.1791V15.1378V9.24534V9.01875V8.97745V8.97743C0.99999 8.06056 0.999982 7.3131 1.04861 6.70612C1.09886 6.07893 1.20581 5.5151 1.46877 4.98878C1.88156 4.1626 2.54212 3.48723 3.35904 3.06275C3.88176 2.79114 4.44185 2.68096 5.06113 2.62936C5.65871 2.57957 6.39371 2.57958 7.29099 2.57959H7.29099ZM17.6675 6.41248V7.11244C17.5304 7.11218 17.3887 7.11218 17.2424 7.11218H17.2423L17.201 7.11218H3.02603C3.03058 7.02628 3.03593 6.94434 3.04222 6.86584C3.08281 6.35929 3.15753 6.08356 3.25789 5.88269C3.48428 5.42957 3.84365 5.06483 4.2812 4.83747C4.47156 4.73856 4.73474 4.66348 5.22719 4.62245C5.73191 4.5804 6.3833 4.57959 7.33359 4.57959H15.8896C16.8531 4.57959 17.6675 5.38164 17.6675 6.41248ZM3 9.24534V9.11218H17.201C18.0575 9.11218 18.6398 9.11296 19.0899 9.14973C19.5283 9.18555 19.7525 9.25048 19.909 9.33017C20.2853 9.52192 20.5912 9.82788 20.783 10.2042C20.8627 10.3606 20.9276 10.5848 20.9634 11.0232C21.0002 11.4733 21.001 12.0556 21.001 12.9122V17.3769C21.001 17.9535 21.0002 18.3257 20.977 18.6091C20.9548 18.8807 20.9172 18.9815 20.892 19.0309C20.7961 19.2191 20.6431 19.372 20.455 19.4679C20.4055 19.4931 20.3048 19.5308 20.0331 19.553C19.7498 19.5761 19.3775 19.5769 18.801 19.5769H7.11116C6.28001 19.5766 5.69153 19.5728 5.22719 19.5341C4.73474 19.4931 4.47156 19.418 4.2812 19.3191C3.84365 19.0917 3.48428 18.727 3.25789 18.2738C3.15753 18.073 3.08281 17.7973 3.04222 17.2907C3.00075 16.773 3 16.1059 3 15.1378V9.24534ZM16.4452 13.9113H15.4452V15.9113H16.4452H17.7792H18.7792V13.9113H17.7792H16.4452Z",
        fill: l
      }
    )
  }
);
F2.displayName = "Wallet";
const _2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.0617 4.91846V3.91846H11.0617V4.91846V18.5042L5.76878 13.2114L5.06167 12.5042L3.64746 13.9185L4.35457 14.6256L11.3546 21.6256C11.7451 22.0161 12.3783 22.0161 12.7688 21.6256L19.7688 14.6256L20.4759 13.9185L19.0617 12.5042L18.3546 13.2114L13.0617 18.5042V4.91846Z",
        fill: l
      }
    )
  }
);
_2.displayName = "ArrowDown";
const E2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.35457 11.2114L3.64746 11.9185L5.06167 13.3327L5.76878 12.6256L11.0617 7.33267L11.0617 20.9185V21.9185H13.0617V20.9185L13.0617 7.33267L18.3546 12.6256L19.0617 13.3327L20.4759 11.9185L19.7688 11.2113L12.7688 4.21135C12.3783 3.82083 11.7451 3.82083 11.3546 4.21135L4.35457 11.2114Z",
        fill: l
      }
    )
  }
);
E2.displayName = "ArrowUp";
const B2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.7686 6.62547L12.4757 5.91836L11.0615 4.50415L10.3544 5.21126L3.35442 12.2113C2.96389 12.6018 2.96389 13.2349 3.35442 13.6255L10.3544 20.6255L11.0615 21.3326L12.4757 19.9184L11.7686 19.2113L6.47574 13.9184H20.0615H21.0615V11.9184H20.0615H6.47574L11.7686 6.62547Z",
        fill: l
      }
    )
  }
);
B2.displayName = "LeftArrow";
const N2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.7686 5.21126L13.0615 4.50415L11.6473 5.91836L12.3544 6.62547L17.6473 11.9184L4.06152 11.9184H3.06152V13.9184H4.06152L17.6473 13.9184L12.3544 19.2113L11.6473 19.9184L13.0615 21.3326L13.7686 20.6255L20.7686 13.6255C21.1592 13.2349 21.1592 12.6018 20.7686 12.2113L13.7686 5.21126Z",
        fill: l
      }
    )
  }
);
N2.displayName = "RightArrow";
const b2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M6.06152 9.91846L12.0615 15.9185L18.0615 9.91846",
        fill: l,
        strokeWidth: "2",
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
b2.displayName = "ChevronDown";
const D2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M14.0615 6.91846L8.06152 12.9185L14.0615 18.9185",
        fill: l,
        strokeWidth: "2",
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
D2.displayName = "ChevronLeft";
const S2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M10.0615 6.91846L16.0615 12.9185L10.0615 18.9185",
        fill: l,
        strokeWidth: "2",
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
S2.displayName = "ChevronRight";
const W2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M6.06152 15.9185L12.0615 9.91846L18.0615 15.9185",
        fill: l,
        strokeWidth: "2",
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
W2.displayName = "ChevronDown";
const A2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.2684 20.6189H16.2684V18.6189H15.2684H7.61962L19.3497 7.04453L20.0615 6.34216L18.6568 4.91853L17.945 5.6209L6.26844 17.1424V9.6189V8.6189H4.26844V9.6189V19.6189C4.26844 20.1712 4.71615 20.6189 5.26844 20.6189H15.2684Z",
        fill: l
      }
    )
  }
);
A2.displayName = "LedtDown";
const T2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.06164 4.91846H8.06164V6.91846H9.06164H16.7105L4.98037 18.4928L4.26855 19.1952L5.67329 20.6188L6.3851 19.9165L18.0616 8.39493V15.9185V16.9185H20.0616V15.9185V5.91846C20.0616 5.36617 19.6139 4.91846 19.0616 4.91846H9.06164Z",
        fill: l
      }
    )
  }
);
T2.displayName = "RightTop";
const O2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 26 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.0617 5.91846H18.0617H24.0617C24.614 5.91846 25.0617 6.36617 25.0617 6.91846V12.9185V13.9185H23.0617V12.9185V9.33267L15.9759 16.4185C15.1948 17.1995 13.9285 17.1995 13.1475 16.4185L9.56167 12.8327L2.76878 19.6256L2.06167 20.3327L0.647461 18.9185L1.35457 18.2114L8.14746 11.4185C8.92851 10.6374 10.1948 10.6374 10.9759 11.4185L14.5617 15.0042L21.6475 7.91846H18.0617H17.0617V5.91846Z",
        fill: l
      }
    )
  }
);
O2.displayName = "TrendingUp";
const P2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M14.0615 6.91846L8.06152 12.9185L14.0615 18.9185",
        stroke: l,
        strokeWidth: "2",
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
P2.displayName = "ChevronLeftSmall";
const q2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M10.0615 6.91846L16.0615 12.9185L10.0615 18.9185",
        stroke: l,
        strokeWidth: "2",
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
q2.displayName = "RightNext";
const I2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M6.06152 15.9185L12.0615 9.91846L18.0615 15.9185",
        stroke: l,
        strokeWidth: "2",
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
I2.displayName = "SelectHideTop";
const U2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M6.06152 9.91846L12.0615 15.9185L18.0615 9.91846",
        stroke: l,
        strokeWidth: "2",
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
U2.displayName = "SelectOpenDown";
const $2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.82032 4.50537L6.52742 5.21248L20.1474 18.8325L20.8545 19.5396L19.4403 20.9538L18.7332 20.2467L17.8442 19.3577L17.8266 19.3677C16.0623 20.3764 14.0668 20.911 12.0345 20.9196L12.0303 20.9196C6.54866 20.9196 2.84121 17.0479 1.23877 14.9408C0.787352 14.3639 0.541992 13.6523 0.541992 12.9196C0.541992 12.1871 0.787212 11.4757 1.23839 10.8988C2.40849 9.35649 3.82856 8.02264 5.4385 6.95198L5.11321 6.62669L4.4061 5.91958L5.82032 4.50537ZM6.88489 8.39837C5.31901 9.38114 3.94415 10.6399 2.82724 12.1136L2.81612 12.128C2.63855 12.3536 2.54199 12.6325 2.54199 12.9196C2.54199 13.2067 2.63855 13.4856 2.81612 13.7112L2.82651 13.7246C4.32641 15.6987 7.51628 18.9186 12.0281 18.9196C13.5378 18.9129 15.0229 18.5565 16.3679 17.8814L14.5664 16.0799C13.9327 16.4808 13.1935 16.6988 12.4318 16.6996C11.6403 16.7014 10.8662 16.4682 10.2073 16.0299C9.5482 15.5914 9.03394 14.9671 8.7298 14.2361C8.42567 13.505 8.34538 12.7001 8.499 11.9234C8.59541 11.436 8.78122 10.9734 9.04455 10.558L6.88489 8.39837ZM10.491 12.1824C10.4796 12.225 10.4696 12.2681 10.461 12.3115C10.3842 12.6999 10.4243 13.1024 10.5764 13.4679C10.7284 13.8333 10.9855 14.1454 11.3152 14.3647C11.6448 14.584 12.0321 14.7006 12.4279 14.6996L12.4294 14.6996C12.6053 14.6995 12.7788 14.6761 12.9457 14.6314L10.491 12.1824ZM12.4318 16.6996C12.4316 16.6996 12.4314 16.6996 12.4312 16.6996L12.4303 15.6996L12.4328 16.6996C12.4324 16.6996 12.4321 16.6996 12.4318 16.6996ZM10.4803 4.93961H11.4803H12.0303C17.5119 4.93961 21.2194 8.81135 22.8218 10.9184C23.2732 11.4953 23.5186 12.2069 23.5186 12.9396C23.5186 13.6752 23.2713 14.3894 22.8165 14.9675C22.369 15.537 21.8927 16.0833 21.3896 16.6042L20.695 17.3236L19.2563 15.9342L19.951 15.2149C20.4069 14.7428 20.8385 14.2478 21.244 13.7317L21.2444 13.7312C21.422 13.5056 21.5186 13.2267 21.5186 12.9396C21.5186 12.6525 21.422 12.3736 21.2444 12.148L21.234 12.1346C19.7339 10.1602 16.5433 6.93961 12.0303 6.93961H11.4803H10.4803V4.93961Z",
        fill: l
      }
    )
  }
);
$2.displayName = "EyeOff";
const Y2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.82433 12.1233C4.36074 10.1376 7.56441 6.91943 12.0615 6.91943C16.5585 6.91943 19.7622 10.1376 21.2986 12.1233C21.6698 12.6031 21.6698 13.2358 21.2986 13.7156C19.7622 15.7012 16.5585 18.9194 12.0615 18.9194C7.56441 18.9194 4.36074 15.7012 2.82433 13.7156C2.45309 13.2358 2.45309 12.6031 2.82433 12.1233ZM12.0615 4.91943C6.59165 4.91943 2.86942 8.79681 1.24255 10.8994C0.313681 12.0998 0.313681 13.739 1.24255 14.9395C2.86942 17.0421 6.59165 20.9194 12.0615 20.9194C17.5313 20.9194 21.2535 17.0421 22.8804 14.9395C23.8092 13.739 23.8092 12.0998 22.8804 10.8994C21.2535 8.79681 17.5313 4.91943 12.0615 4.91943ZM10.0615 12.9194C10.0615 11.8149 10.9569 10.9194 12.0615 10.9194C13.166 10.9194 14.0615 11.8149 14.0615 12.9194C14.0615 14.024 13.166 14.9194 12.0615 14.9194C10.9569 14.9194 10.0615 14.024 10.0615 12.9194ZM12.0615 8.91943C9.85232 8.91943 8.06146 10.7103 8.06146 12.9194C8.06146 15.1286 9.85232 16.9194 12.0615 16.9194C14.2706 16.9194 16.0615 15.1286 16.0615 12.9194C16.0615 10.7103 14.2706 8.91943 12.0615 8.91943Z",
        fill: l
      }
    )
  }
);
Y2.displayName = "EyeOn";
const G2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.06152 11.4194C4.06152 7.82958 6.97167 4.91943 10.5615 4.91943C14.1514 4.91943 17.0615 7.82958 17.0615 11.4194C17.0615 15.0093 14.1514 17.9194 10.5615 17.9194C6.97167 17.9194 4.06152 15.0093 4.06152 11.4194ZM10.5615 2.91943C5.8671 2.91943 2.06152 6.72501 2.06152 11.4194C2.06152 16.1139 5.8671 19.9194 10.5615 19.9194C12.5485 19.9194 14.3763 19.2376 15.8236 18.0952L20.3548 22.6265L21.0619 23.3336L22.4761 21.9194L21.769 21.2122L17.2378 16.681C18.3799 15.2337 19.0615 13.4062 19.0615 11.4194C19.0615 6.72501 15.2559 2.91943 10.5615 2.91943Z",
        fill: l
      }
    )
  }
);
G2.displayName = "Search";
const J2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.06152 1.91943C4.85238 1.91943 3.06152 3.71029 3.06152 5.91943V19.9194C3.06152 22.1286 4.85238 23.9194 7.06152 23.9194H13.0615H14.0615H15.0615V23.8485C18.4538 23.3633 21.0615 20.4459 21.0615 16.9194V5.91943C21.0615 3.71029 19.2707 1.91943 17.0615 1.91943H7.06152ZM15.0615 21.8194C17.0207 21.4217 18.5638 19.8786 18.9615 17.9194H16.0615C15.5092 17.9194 15.0615 18.3671 15.0615 18.9194V21.8194ZM19.0615 15.9194V5.91943C19.0615 4.81486 18.1661 3.91943 17.0615 3.91943H7.06152C5.95695 3.91943 5.06152 4.81486 5.06152 5.91943V19.9194C5.06152 21.024 5.95695 21.9194 7.06152 21.9194H13.0615V18.9194C13.0615 17.2626 14.4047 15.9194 16.0615 15.9194H19.0615ZM8.06152 6.91943H7.06152V8.91943H8.06152H16.0615H17.0615V6.91943H16.0615H8.06152ZM7.06152 10.9194H8.06152H14.0615H15.0615V12.9194H14.0615H8.06152H7.06152V10.9194Z",
        fill: l
      }
    )
  }
);
J2.displayName = "Bill";
const z2 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M19.0615 4H5.06152C3.95695 4 3.06152 4.89543 3.06152 6V20C3.06152 21.1046 3.95695 22 5.06152 22H19.0615C20.1661 22 21.0615 21.1046 21.0615 20V6C21.0615 4.89543 20.1661 4 19.0615 4Z",
          stroke: l,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M16.0615 2V6",
          stroke: l,
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M8.06152 2V6",
          stroke: l,
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M3.06152 10H21.0615",
          stroke: l,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
z2.displayName = "Calendar";
const K2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M16.506 10.318H17.506V8.31797H16.506V10.318ZM7.61708 8.31797H6.61708V10.318H7.61708V8.31797ZM9.8393 14.6368H10.8393V12.6368H9.8393V14.6368ZM7.61708 12.6368H6.61708V14.6368H7.61708V12.6368ZM12.2506 19.4244L11.556 18.705V18.705L12.2506 19.4244ZM9.46559 22.113L8.77105 21.3936H8.77105L9.46559 22.113ZM7.05082 20.348L6.05592 20.4488H6.05592L7.05082 20.348ZM5.05712 18.4106L5.15239 17.4152L5.15239 17.4152L5.05712 18.4106ZM8.67133 22.8041L9.10994 23.7028H9.10995L8.67133 22.8041ZM7.11677 22.1755L8.06434 21.8559L8.06434 21.8559L7.11677 22.1755ZM13.6839 18.4659L13.4456 17.4947L13.6839 18.4659ZM13.095 18.7018L12.5961 17.8352L12.5961 17.8352L13.095 18.7018ZM21.5247 16.139L20.6513 15.6519L20.6513 15.6519L21.5247 16.139ZM19.7345 17.8786L20.2004 18.7634L20.2004 18.7634L19.7345 17.8786ZM20.9246 4.72208L20.2764 5.48355L20.2764 5.48355L20.9246 4.72208ZM21.2355 5.02419L21.9783 4.35462L21.9783 4.35462L21.2355 5.02419ZM2.07222 16.4525L1.07732 16.5533L1.07732 16.5533L2.07222 16.4525ZM4.06593 18.3898L3.97066 19.3853H3.97066L4.06593 18.3898ZM16.506 8.31797H7.61708V10.318H16.506V8.31797ZM3.06152 15.9709V10.3977H1.06152V15.9709H3.06152ZM8.72819 4.91943H15.675V2.91943H8.72819V4.91943ZM21.0615 10.1255V11.3507H23.0615V10.1255H21.0615ZM11.556 18.705L8.77105 21.3936L10.1601 22.8325L12.9451 20.1439L11.556 18.705ZM8.06152 21.1409V20.8296H6.06152V21.1409H8.06152ZM8.06152 20.8296C8.06152 20.6034 8.06281 20.4157 8.04573 20.2471L6.05592 20.4488C6.06024 20.4914 6.06152 20.5544 6.06152 20.8296H8.06152ZM4.56152 19.4002C4.84262 19.4002 4.91271 19.4014 4.96185 19.4061L5.15239 17.4152C4.98423 17.3991 4.79636 17.4002 4.56152 17.4002V19.4002ZM8.04573 20.2471C7.89171 18.7276 6.66238 17.5597 5.15239 17.4152L4.96184 19.4061C5.56198 19.4635 6.0021 19.9178 6.05592 20.4488L8.04573 20.2471ZM8.77105 21.3936C8.55284 21.6042 8.41111 21.7408 8.30408 21.836C8.18568 21.9415 8.17975 21.9313 8.23272 21.9054L9.10995 23.7028C9.32145 23.5996 9.50075 23.4484 9.63388 23.3299C9.77839 23.2013 9.95453 23.031 10.1601 22.8325L8.77105 21.3936ZM6.06152 21.1409C6.06152 21.4221 6.06131 21.6647 6.0693 21.8561C6.07661 22.0314 6.09269 22.2682 6.1692 22.495L8.06434 21.8559C8.0856 21.919 8.07407 21.9288 8.06756 21.7728C8.06173 21.633 8.06152 21.4402 8.06152 21.1409H6.06152ZM8.23272 21.9054C8.19682 21.923 8.15745 21.9239 8.12063 21.909C8.08428 21.8943 8.07012 21.8731 8.06434 21.8559L6.1692 22.495C6.58086 23.7158 7.98173 24.2534 9.10994 23.7028L8.23272 21.9054ZM14.807 17.4002C14.2855 17.4002 13.8581 17.3935 13.4456 17.4947L13.9221 19.4371C14.0451 19.4069 14.188 19.4002 14.807 19.4002V17.4002ZM12.9451 20.1439C13.385 19.7193 13.488 19.6294 13.594 19.5684L12.5961 17.8352C12.2269 18.0477 11.9253 18.3485 11.556 18.705L12.9451 20.1439ZM13.4456 17.4947C13.1478 17.5677 12.8617 17.6822 12.5961 17.8352L13.594 19.5684C13.6955 19.51 13.806 19.4656 13.9221 19.4371L13.4456 17.4947ZM21.0615 11.3507C21.0615 12.6439 21.0606 13.5485 20.9983 14.2521C20.9372 14.942 20.8231 15.3439 20.6513 15.6519L22.3981 16.626C22.7632 15.9713 22.9174 15.2543 22.9905 14.4284C23.0624 13.6162 23.0615 12.608 23.0615 11.3507H21.0615ZM14.807 19.4002C16.1024 19.4002 17.1355 19.401 17.9668 19.3315C18.8098 19.2611 19.5365 19.113 20.2004 18.7634L19.2686 16.9937C18.9418 17.1658 18.5171 17.2786 17.8002 17.3385C17.0715 17.3994 16.1362 17.4002 14.807 17.4002V19.4002ZM20.6513 15.6519C20.3367 16.2161 19.8576 16.6836 19.2686 16.9937L20.2004 18.7634C21.1267 18.2757 21.8916 17.5344 22.3981 16.626L20.6513 15.6519ZM15.675 4.91943C17.1356 4.91943 18.1415 4.92113 18.9037 5.01263C19.6441 5.10152 20.0164 5.2622 20.2764 5.48355L21.5728 3.96061C20.8899 3.37931 20.073 3.13867 19.1421 3.02689C18.233 2.91774 17.0855 2.91943 15.675 2.91943V4.91943ZM23.0615 10.1255C23.0615 8.75693 23.0634 7.63579 22.9503 6.74605C22.8338 5.82977 22.5817 5.02402 21.9783 4.35462L20.4928 5.69377C20.7153 5.94063 20.8763 6.29051 20.9663 6.99831C21.0596 7.73264 21.0615 8.70402 21.0615 10.1255H23.0615ZM20.2764 5.48355C20.3534 5.54908 20.4257 5.61932 20.4928 5.69377L21.9783 4.35462C21.852 4.21458 21.7166 4.08297 21.5728 3.96061L20.2764 5.48355ZM3.06152 10.3977C3.06152 8.84167 3.06377 7.77815 3.17413 6.98053C3.28009 6.21469 3.46835 5.84417 3.73473 5.58532L2.34093 4.15098C1.63101 4.84085 1.33112 5.70815 1.193 6.70643C1.05928 7.67292 1.06152 8.89981 1.06152 10.3977H3.06152ZM8.72819 2.91943C7.18433 2.91943 5.92865 2.91743 4.94107 3.04645C3.9276 3.17886 3.04686 3.46501 2.34093 4.15098L3.73473 5.58532C4.00512 5.32258 4.39821 5.13437 5.20016 5.0296C6.02801 4.92144 7.12935 4.91943 8.72819 4.91943V2.91943ZM1.06152 15.9709C1.06152 16.1971 1.06024 16.3848 1.07732 16.5533L3.06713 16.3516C3.06281 16.309 3.06152 16.246 3.06152 15.9709H1.06152ZM4.56152 17.4002C4.28043 17.4002 4.21034 17.3991 4.1612 17.3944L3.97066 19.3853C4.13881 19.4014 4.32669 19.4002 4.56152 19.4002V17.4002ZM1.07732 16.5533C1.23133 18.0728 2.46067 19.2408 3.97066 19.3853L4.1612 17.3944C3.56107 17.3369 3.12094 16.8826 3.06713 16.3516L1.07732 16.5533ZM9.8393 12.6368H7.61708V14.6368H9.8393V12.6368Z",
        fill: l
      }
    )
  }
);
K2.displayName = "Chat";
const X2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.4144 6.00015L20.7073 6.70726L9.70726 17.7073C9.31673 18.0978 8.68357 18.0978 8.29304 17.7073L3.29304 12.7073L2.58594 12.0002L4.00015 10.5859L4.70726 11.293L9.00015 15.5859L19.293 5.29304L20.0002 4.58594L21.4144 6.00015Z",
        fill: l
      }
    )
  }
);
X2.displayName = "Check";
const Q2 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.06152 12.9194C3.06152 7.94887 7.09096 3.91943 12.0615 3.91943C17.0321 3.91943 21.0615 7.94887 21.0615 12.9194C21.0615 17.89 17.0321 21.9194 12.0615 21.9194C7.09096 21.9194 3.06152 17.89 3.06152 12.9194ZM12.0615 1.91943C5.98639 1.91943 1.06152 6.8443 1.06152 12.9194C1.06152 18.9946 5.98639 23.9194 12.0615 23.9194C18.1367 23.9194 23.0615 18.9946 23.0615 12.9194C23.0615 6.8443 18.1367 1.91943 12.0615 1.91943ZM12.5615 6.91943V5.91943H10.5615V6.91943V12.9194C10.5615 13.2982 10.7755 13.6445 11.1143 13.8139L15.1143 15.8139L16.0087 16.2611L16.9032 14.4722L16.0087 14.025L12.5615 12.3014V6.91943Z",
        fill: l
      }
    )
  }
);
Q2.displayName = "Clock";
const e9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M18.2829 6.69434L5.83594 19.1413",
          stroke: l,
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M5.83594 6.69434L18.2829 19.1413",
          stroke: l,
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
e9.displayName = "Close";
const C9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.20152 2.41943H8.13996C6.95234 2.41941 5.9727 2.41938 5.18942 2.51248C4.37034 2.60984 3.63613 2.82092 3.01183 3.33738C2.81803 3.4977 2.63979 3.67594 2.47947 3.86974C1.96301 4.49404 1.75193 5.22825 1.65457 6.04733C1.56147 6.83061 1.5615 7.81025 1.56152 8.99787V9.05943V13.4194C1.56152 15.6286 3.35239 17.4194 5.56152 17.4194H6.56152V15.4194H5.56152C4.45695 15.4194 3.56152 14.524 3.56152 13.4194V9.05943C3.56152 7.79477 3.56318 6.93469 3.64059 6.28339C3.71535 5.65439 3.8485 5.35249 4.0205 5.14459C4.10066 5.04769 4.18978 4.95857 4.28668 4.87841C4.49458 4.70641 4.79648 4.57326 5.42548 4.4985C6.07678 4.42109 6.93686 4.41943 8.20152 4.41943H12.5615C13.6661 4.41943 14.5615 5.31487 14.5615 6.41943V7.41943H16.5615V6.41943C16.5615 4.2103 14.7707 2.41943 12.5615 2.41943H8.20152ZM14.5615 8.41943L14.491 8.41943C13.1368 8.4194 12.0202 8.41937 11.1365 8.53819C10.2086 8.66293 9.38921 8.9349 8.7331 9.59101C8.07699 10.2471 7.80502 11.0665 7.68028 11.9944C7.56146 12.8781 7.56149 13.9947 7.56152 15.3489L7.56152 15.4194V16.4194L7.56152 16.49C7.56149 17.8441 7.56146 18.9607 7.68028 19.8445C7.80502 20.7723 8.07699 21.5918 8.7331 22.2479C9.38921 22.904 10.2086 23.1759 11.1365 23.3007C12.0202 23.4195 13.1368 23.4195 14.4909 23.4194L14.5615 23.4194H15.5615L15.6321 23.4194C16.9862 23.4195 18.1028 23.4195 18.9866 23.3007C19.9144 23.1759 20.7338 22.904 21.39 22.2479C22.0461 21.5918 22.318 20.7723 22.4428 19.8445C22.5616 18.9607 22.5616 17.8441 22.5615 16.49L22.5615 16.4194V15.4194L22.5615 15.3489C22.5616 13.9947 22.5616 12.8781 22.4428 11.9944C22.318 11.0665 22.0461 10.2471 21.39 9.59101C20.7338 8.9349 19.9144 8.66293 18.9866 8.53819C18.1028 8.41937 16.9862 8.4194 15.6321 8.41943L15.5615 8.41943H14.5615ZM10.1473 11.0052C10.3699 10.7826 10.6969 10.6153 11.403 10.5204C12.1378 10.4216 13.119 10.4194 14.5615 10.4194H15.5615C17.004 10.4194 17.9853 10.4216 18.7201 10.5204C19.4261 10.6153 19.7532 10.7826 19.9757 11.0052C20.1983 11.2278 20.3657 11.5548 20.4606 12.2609C20.5594 12.9957 20.5615 13.977 20.5615 15.4194V16.4194C20.5615 17.8619 20.5594 18.8432 20.4606 19.578C20.3657 20.2841 20.1983 20.6111 19.9757 20.8336C19.7532 21.0562 19.4261 21.2236 18.7201 21.3185C17.9853 21.4173 17.004 21.4194 15.5615 21.4194H14.5615C13.119 21.4194 12.1378 21.4173 11.403 21.3185C10.6969 21.2236 10.3699 21.0562 10.1473 20.8336C9.92474 20.6111 9.75737 20.2841 9.66244 19.578C9.56365 18.8432 9.56152 17.8619 9.56152 16.4194V15.4194C9.56152 13.977 9.56365 12.9957 9.66244 12.2609C9.75737 11.5548 9.92474 11.2278 10.1473 11.0052Z",
        fill: l
      }
    )
  }
);
C9.displayName = "Copy";
const l9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.0615 6.91943H8.06152H6.15966L7.28516 18.9248C7.33464 19.4526 7.3671 19.7912 7.41166 20.0481C7.45411 20.2929 7.4957 20.3842 7.52338 20.4307C7.62483 20.6012 7.77471 20.7377 7.95396 20.8228C8.00287 20.846 8.09762 20.8789 8.34531 20.8983C8.6053 20.9187 8.94541 20.9194 9.47556 20.9194H14.6475C15.1776 20.9194 15.5177 20.9187 15.7777 20.8983C16.0254 20.8789 16.1202 20.846 16.1691 20.8228C16.3483 20.7377 16.4982 20.6012 16.5997 20.4307C16.6273 20.3842 16.6689 20.2929 16.7114 20.0481C16.7559 19.7912 16.7884 19.4526 16.8379 18.9248L17.9634 6.91943H16.0615H14.0615H10.0615ZM15.9355 4.91943H18.1509L18.1592 4.83046L19.1083 4.91943H21.0615H22.0615V6.91943H21.0615H19.9722L18.8292 19.1115L18.8258 19.1477C18.7807 19.629 18.7415 20.0464 18.682 20.3899C18.6188 20.7541 18.5212 21.1126 18.3185 21.4533C18.0142 21.9649 17.5645 22.3743 17.0267 22.6296C16.6686 22.7996 16.3026 22.8633 15.934 22.8922C15.5865 22.9195 15.1673 22.9195 14.684 22.9194H14.684H14.684H14.6839H14.6475H9.47556H9.4391H9.43908H9.43906H9.43904C8.9557 22.9195 8.53651 22.9195 8.189 22.8922C7.82047 22.8633 7.45446 22.7996 7.09631 22.6296C6.55855 22.3743 6.1089 21.9649 5.80455 21.4533C5.60185 21.1126 5.50424 20.7541 5.44107 20.3899C5.38151 20.0464 5.34239 19.629 5.29729 19.1477L5.29389 19.1115L4.15089 6.91943H3.06152H2.06152V4.91943H3.06152H5.01475L5.96382 4.83046L5.97216 4.91943H8.18754C8.63158 3.19421 10.1977 1.91943 12.0615 1.91943C13.9254 1.91943 15.4915 3.19421 15.9355 4.91943ZM10.3291 4.91943C10.6749 4.32163 11.3212 3.91943 12.0615 3.91943C12.8018 3.91943 13.4481 4.32163 13.794 4.91943H10.3291ZM8.50109 8.98376L8.56347 9.98181L9.06347 17.9818L9.12585 18.9799L11.122 18.8551L11.0596 17.8571L10.5596 9.85706L10.4972 8.859L8.50109 8.98376ZM15.622 8.98376L15.5596 9.98181L15.0596 17.9818L14.9972 18.9799L13.0011 18.8551L13.0635 17.8571L13.5635 9.85706L13.6258 8.859L15.622 8.98376Z",
        fill: l
      }
    )
  }
);
l9.displayName = "Delete";
const r9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.0615 3.91958H9.66153C8.66493 3.91958 7.97763 3.92035 7.44416 3.96394C6.92237 4.00657 6.63643 4.08512 6.42655 4.19206C5.95614 4.43174 5.57369 4.8142 5.33401 5.2846C5.22707 5.49448 5.14852 5.78042 5.10589 6.30222C5.0623 6.83568 5.06152 7.52298 5.06152 8.51958V17.3196C5.06152 18.3162 5.0623 19.0035 5.10589 19.5369C5.14852 20.0587 5.22707 20.3447 5.33401 20.5546C5.57369 21.025 5.95614 21.4074 6.42655 21.6471C6.63643 21.754 6.92237 21.8326 7.44416 21.8752C7.97763 21.9188 8.66493 21.9196 9.66153 21.9196H14.4615C15.4581 21.9196 16.1454 21.9188 16.6789 21.8752C17.2007 21.8326 17.4866 21.754 17.6965 21.6471C18.1669 21.4074 18.5494 21.025 18.789 20.5546C18.896 20.3447 18.9745 20.0587 19.0172 19.5369C19.0607 19.0035 19.0615 18.3162 19.0615 17.3196V10.9197H17.2615L17.223 10.9197C16.6958 10.9197 16.2411 10.9197 15.8665 10.8891C15.4712 10.8568 15.0779 10.7855 14.6996 10.5927C14.1351 10.3051 13.6761 9.84614 13.3885 9.28165C13.1957 8.90327 13.1244 8.51005 13.0921 8.11471C13.0615 7.74013 13.0615 7.28537 13.0615 6.75822L13.0615 6.71968V4V3.91958ZM18.5687 8.91968L15.0615 5.26633V6.71968C15.0615 7.29623 15.0623 7.6685 15.0855 7.95184C15.1076 8.22351 15.1453 8.32422 15.1705 8.37367C15.2664 8.56183 15.4194 8.71481 15.6075 8.81068C15.657 8.83588 15.7577 8.87355 16.0294 8.89575C16.3127 8.9189 16.685 8.91968 17.2615 8.91968H18.5687ZM14.154 1.99227C13.8552 1.91859 13.5483 1.91905 13.2436 1.91951L13.1719 1.91958H9.66153L9.61938 1.91958C8.67507 1.91957 7.90583 1.91956 7.2813 1.97058C6.63583 2.02332 6.05738 2.13551 5.51857 2.41005C4.67184 2.84148 3.98343 3.52989 3.552 4.37662C3.27746 4.91543 3.16527 5.49388 3.11253 6.13935C3.0615 6.76388 3.06151 7.53312 3.06152 8.47741V8.47743V8.51958V17.3196V17.3617V17.3617C3.06151 18.306 3.0615 19.0753 3.11253 19.6998C3.16527 20.3453 3.27746 20.9237 3.552 21.4625C3.98343 22.3093 4.67184 22.9977 5.51857 23.4291C6.05738 23.7036 6.63583 23.8158 7.2813 23.8686C7.90583 23.9196 8.67506 23.9196 9.61935 23.9196H9.66153H14.4615H14.5037C15.448 23.9196 16.2172 23.9196 16.8418 23.8686C17.4872 23.8158 18.0657 23.7036 18.6045 23.4291C19.4512 22.9977 20.1396 22.3093 20.5711 21.4625C20.8456 20.9237 20.9578 20.3453 21.0105 19.6998C21.0615 19.0753 21.0615 18.306 21.0615 17.3618V17.3196V9.99623L21.0616 9.92853C21.062 9.64024 21.0624 9.34981 20.996 9.06543C20.9379 8.81664 20.8419 8.57822 20.7116 8.35849C20.5625 8.10733 20.3611 7.89811 20.1612 7.69042L20.1142 7.64163L15.6247 2.96497L15.5751 2.91321C15.3644 2.6931 15.1522 2.47141 14.8921 2.30685C14.6646 2.16294 14.4154 2.05671 14.154 1.99227ZM8.06152 8.91943H7.06152V10.9194H8.06152H9.06152H10.0615H11.0615V8.91943H10.0615H9.06152H8.06152ZM7.06152 12.9194H8.06152H16.0615H17.0615V14.9194H16.0615H8.06152H7.06152V12.9194ZM7.06152 16.9194H8.06152H16.0615H17.0615V18.9194H16.0615H8.06152H7.06152V16.9194Z",
        fill: l
      }
    )
  }
);
r9.displayName = "Doc";
const t9 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.0615 3.91958H9.66153C8.66493 3.91958 7.97763 3.92035 7.44416 3.96394C6.92237 4.00657 6.63643 4.08512 6.42655 4.19206C5.95614 4.43174 5.57369 4.8142 5.33401 5.2846C5.22707 5.49448 5.14852 5.78042 5.10589 6.30222C5.0623 6.83568 5.06152 7.52298 5.06152 8.51958V17.3196C5.06152 18.3162 5.0623 19.0035 5.10589 19.5369C5.14852 20.0587 5.22707 20.3447 5.33401 20.5546C5.57369 21.025 5.95614 21.4074 6.42655 21.6471C6.63643 21.754 6.92237 21.8326 7.44416 21.8752C7.97763 21.9188 8.66493 21.9196 9.66153 21.9196H14.4615C15.4581 21.9196 16.1454 21.9188 16.6789 21.8752C17.2007 21.8326 17.4866 21.754 17.6965 21.6471C18.1669 21.4074 18.5494 21.025 18.789 20.5546C18.896 20.3447 18.9745 20.0587 19.0172 19.5369C19.0607 19.0035 19.0615 18.3162 19.0615 17.3196V10.9196H17.2615L17.223 10.9196C16.6958 10.9196 16.2411 10.9196 15.8665 10.889C15.4712 10.8567 15.0779 10.7854 14.6996 10.5926C14.1351 10.305 13.6761 9.84604 13.3885 9.28155C13.1957 8.90317 13.1244 8.50995 13.0921 8.1146C13.0615 7.74003 13.0615 7.28527 13.0615 6.75812L13.0615 6.71958V3.91958ZM18.5686 8.91958L15.0615 5.26633V6.71958C15.0615 7.29613 15.0623 7.6684 15.0855 7.95174C15.1076 8.2234 15.1453 8.32412 15.1705 8.37357C15.2664 8.56173 15.4194 8.71471 15.6075 8.81058C15.657 8.83578 15.7577 8.87345 16.0294 8.89565C16.3127 8.9188 16.685 8.91958 17.2615 8.91958H18.5686ZM14.154 1.99227C13.8552 1.91859 13.5483 1.91905 13.2436 1.91951L13.1719 1.91958H9.66153L9.61938 1.91958C8.67507 1.91957 7.90583 1.91956 7.2813 1.97058C6.63583 2.02332 6.05738 2.13551 5.51857 2.41005C4.67184 2.84148 3.98343 3.52989 3.552 4.37662C3.27746 4.91543 3.16527 5.49388 3.11253 6.13935C3.0615 6.76388 3.06151 7.53312 3.06152 8.47741V8.47743V8.51958V17.3196V17.3617V17.3617C3.06151 18.306 3.0615 19.0753 3.11253 19.6998C3.16527 20.3453 3.27746 20.9237 3.552 21.4625C3.98343 22.3093 4.67184 22.9977 5.51857 23.4291C6.05738 23.7036 6.63583 23.8158 7.2813 23.8686C7.90583 23.9196 8.67506 23.9196 9.61935 23.9196H9.66153H14.4615H14.5037C15.448 23.9196 16.2172 23.9196 16.8418 23.8686C17.4872 23.8158 18.0657 23.7036 18.6045 23.4291C19.4512 22.9977 20.1396 22.3093 20.5711 21.4625C20.8456 20.9237 20.9578 20.3453 21.0105 19.6998C21.0615 19.0753 21.0615 18.306 21.0615 17.3618V17.3196V9.99623L21.0616 9.92853C21.062 9.64024 21.0624 9.34981 20.996 9.06543C20.9379 8.81664 20.8419 8.57822 20.7116 8.35849C20.5625 8.10733 20.3611 7.89811 20.1612 7.69042L20.1142 7.64163L15.6247 2.96497L15.5751 2.91321C15.3644 2.6931 15.1522 2.47141 14.8921 2.30685C14.6646 2.16294 14.4154 2.05671 14.154 1.99227Z",
        fill: l
      }
    )
  }
);
t9.displayName = "DocEmpty";
const i9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.2686 4.12677C19.4789 3.91648 19.7641 3.79834 20.0615 3.79834C20.3589 3.79834 20.6441 3.91648 20.8544 4.12677C21.0647 4.33706 21.1828 4.62227 21.1828 4.91966C21.1828 5.21705 21.0647 5.50226 20.8544 5.71255L11.5503 15.0167L9.43589 15.5453L9.96449 13.4309L19.2686 4.12677ZM20.0615 1.79834C19.2337 1.79834 18.4398 2.12719 17.8544 2.71255L8.35442 12.2126C8.22626 12.3407 8.13534 12.5013 8.09138 12.6771L7.09138 16.6771C7.00619 17.0179 7.10604 17.3784 7.35442 17.6268C7.6028 17.8751 7.96328 17.975 8.30406 17.8898L12.3041 16.8898C12.4799 16.8458 12.6405 16.7549 12.7686 16.6268L22.2686 7.12677C22.854 6.54141 23.1828 5.74749 23.1828 4.91966C23.1828 4.09183 22.854 3.29791 22.2686 2.71255C21.6833 2.12719 20.8893 1.79834 20.0615 1.79834ZM11.0615 3.91992L11.0025 3.91992C9.17769 3.91991 7.72674 3.9199 6.57107 4.0451C5.38426 4.17369 4.39086 4.44387 3.53481 5.06582C3.02544 5.4359 2.5775 5.88384 2.20742 6.39321C1.58547 7.24925 1.31529 8.24266 1.18671 9.42947C1.0615 10.5851 1.06151 12.0361 1.06152 13.8609V13.9199V13.9789C1.06151 15.8038 1.0615 17.2547 1.18671 18.4104C1.31529 19.5972 1.58547 20.5906 2.20742 21.4466C2.5775 21.956 3.02544 22.4039 3.53481 22.774C4.39086 23.396 5.38426 23.6662 6.57107 23.7947C7.72673 23.9199 9.17768 23.9199 11.0025 23.9199H11.0615H11.1206C12.9454 23.9199 14.3963 23.9199 15.552 23.7947C16.7388 23.6662 17.7322 23.396 18.5882 22.774C19.0976 22.4039 19.5455 21.956 19.9156 21.4466C20.5376 20.5906 20.8078 19.5972 20.9363 18.4104C21.0616 17.2547 21.0615 15.8038 21.0615 13.9789V13.9199V13.4199V12.4199H19.0615V13.4199V13.9199C19.0615 15.8171 19.0602 17.1596 18.948 18.1949C18.8378 19.2116 18.6306 19.8128 18.2976 20.2711C18.0509 20.6106 17.7522 20.9093 17.4127 21.156C16.9544 21.489 16.3532 21.6962 15.3366 21.8064C14.3012 21.9185 12.9587 21.9199 11.0615 21.9199C9.16438 21.9199 7.82185 21.9185 6.7865 21.8064C5.76986 21.6962 5.16867 21.489 4.71038 21.156C4.3708 20.9093 4.07217 20.6106 3.82546 20.2711C3.49249 19.8128 3.28522 19.2116 3.17507 18.195C3.0629 17.1596 3.06152 15.8171 3.06152 13.9199C3.06152 12.0228 3.0629 10.6803 3.17507 9.6449C3.28522 8.62825 3.49249 8.02707 3.82546 7.56878C4.07217 7.2292 4.3708 6.93057 4.71038 6.68385C5.16867 6.35089 5.76986 6.14361 6.7865 6.03347C7.82185 5.92129 9.16438 5.91992 11.0615 5.91992H11.5615H12.5615V3.91992H11.5615H11.0615Z",
        fill: l
      }
    )
  }
);
i9.displayName = "Edit";
const n9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.7071 2.29289C12.3166 1.90237 11.6834 1.90237 11.2929 2.29289L6.29289 7.29289C5.90237 7.68342 5.90237 8.31658 6.29289 8.70711C6.68342 9.09763 7.31658 9.09763 7.70711 8.70711L12 4.41421L16.2929 8.70711C16.6834 9.09763 17.3166 9.09763 17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L12.7071 2.29289ZM7.70711 15.2929C7.31658 14.9024 6.68342 14.9024 6.29289 15.2929C5.90237 15.6834 5.90237 16.3166 6.29289 16.7071L11.2929 21.7071C11.6834 22.0976 12.3166 22.0976 12.7071 21.7071L17.7071 16.7071C18.0976 16.3166 18.0976 15.6834 17.7071 15.2929C17.3166 14.9024 16.6834 14.9024 16.2929 15.2929L12 19.5858L7.70711 15.2929Z",
        fill: l
      }
    )
  }
);
n9.displayName = "Expand";
const s9 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 26 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M2.06152 8.91943C2.06152 8.91943 5.91152 13.8425 13.0615 13.8425C20.2115 13.8425 24.0615 8.91943 24.0615 8.91943M4.26152 10.944L2.06152 13.8425M24.0615 13.8425L21.8659 10.9477M9.66692 13.4487L8.66152 16.9194M16.4308 13.4585L17.4615 16.9194",
        stroke: l,
        strokeWidth: "2",
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
s9.displayName = "EyeOffAlt";
const o9 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.50329 2.91943H6.55158H6.59986H6.59987C7.25703 2.91941 7.82376 2.91938 8.28653 2.96621C8.77717 3.01587 9.26003 3.12621 9.70244 3.4198C10.036 3.64116 10.3219 3.92703 10.5432 4.26057C10.8371 4.70344 10.9473 5.1874 10.9968 5.6788C11.0436 6.14274 11.0436 6.71131 11.0436 7.37119L11.0436 7.41944L11.0436 7.46769C11.0436 8.12756 11.0436 8.69613 10.9968 9.16008C10.9473 9.65147 10.8371 10.1354 10.5432 10.5783C10.3219 10.9118 10.036 11.1977 9.70244 11.4191C9.26003 11.7127 8.77717 11.823 8.28653 11.8727C7.82377 11.9195 7.25707 11.9195 6.59993 11.9194H6.59985L6.55158 11.9194L6.5033 11.9194H6.50322C5.84608 11.9195 5.27938 11.9195 4.81662 11.8727C4.32598 11.823 3.84312 11.7127 3.40071 11.4191C3.06717 11.1977 2.7813 10.9118 2.55994 10.5783C2.26604 10.1354 2.15589 9.65147 2.10632 9.16008C2.08381 8.93691 2.07214 8.68954 2.06608 8.41944H2.05958V7.56332L2.05958 7.46768L2.05958 7.41944L2.05958 7.3712L2.05958 7.37119C2.05955 6.71131 2.05953 6.14274 2.10632 5.6788C2.15589 5.1874 2.26604 4.70344 2.55994 4.26057C2.7813 3.92703 3.06717 3.64116 3.40071 3.4198C3.84312 3.12621 4.32598 3.01587 4.81662 2.96621C5.27939 2.91938 5.84612 2.91941 6.50329 2.91943H6.50329ZM4.05958 7.41944C4.05958 8.14117 4.06077 8.60782 4.09623 8.95935C4.13005 9.29471 4.18669 9.41261 4.22637 9.47239C4.30015 9.58357 4.39544 9.67886 4.50662 9.75265C4.56687 9.79263 4.68453 9.84908 5.01798 9.88282C5.36799 9.91824 5.83246 9.91944 6.55158 9.91944C7.27069 9.91944 7.73516 9.91824 8.08517 9.88282C8.41862 9.84908 8.53628 9.79263 8.59653 9.75265C8.70771 9.67886 8.803 9.58357 8.87678 9.47239C8.91646 9.41261 8.9731 9.29471 9.00692 8.95935C9.04238 8.60782 9.04357 8.14117 9.04357 7.41944C9.04357 6.6977 9.04238 6.23105 9.00692 5.87952C8.9731 5.54416 8.91646 5.42626 8.87678 5.36648C8.803 5.2553 8.70771 5.16001 8.59653 5.08623C8.53628 5.04624 8.41862 4.9898 8.08517 4.95605C7.73516 4.92063 7.27069 4.91944 6.55158 4.91944C5.83246 4.91944 5.36799 4.92063 5.01798 4.95605C4.68453 4.9898 4.56687 5.04624 4.50662 5.08623C4.39544 5.16001 4.30015 5.2553 4.22637 5.36648C4.18669 5.42626 4.13005 5.54416 4.09623 5.87952C4.06077 6.23105 4.05958 6.6977 4.05958 7.41944ZM6.55157 13.9194L6.50329 13.9194H6.50321C5.84608 13.9194 5.27937 13.9194 4.81661 13.9662C4.32598 14.0159 3.84311 14.1262 3.40071 14.4198C3.06717 14.6412 2.78129 14.927 2.55994 15.2606C2.26603 15.7034 2.15589 16.1874 2.10632 16.6788C2.05952 17.1427 2.05955 17.7113 2.05957 18.3711V18.3712L2.05957 18.4194L2.05957 18.4677L2.05957 18.5633V19.4194H2.06608C2.07213 19.6895 2.08381 19.9369 2.10632 20.1601C2.15589 20.6515 2.26603 21.1354 2.55994 21.5783C2.78129 21.9118 3.06717 22.1977 3.40071 22.4191C3.84311 22.7127 4.32598 22.823 4.81661 22.8727C5.27938 22.9195 5.84608 22.9195 6.50322 22.9194H6.5033L6.55157 22.9194L6.59985 22.9194H6.59992C7.25706 22.9195 7.82377 22.9195 8.28653 22.8727C8.77716 22.823 9.26003 22.7127 9.70243 22.4191C10.036 22.1977 10.3218 21.9118 10.5432 21.5783C10.8371 21.1354 10.9473 20.6515 10.9968 20.1601C11.0436 19.6961 11.0436 19.1276 11.0436 18.4677L11.0436 18.4194L11.0436 18.3712C11.0436 17.7113 11.0436 17.1427 10.9968 16.6788C10.9473 16.1874 10.8371 15.7034 10.5432 15.2606C10.3218 14.927 10.036 14.6412 9.70243 14.4198C9.26003 14.1262 8.77716 14.0159 8.28653 13.9662C7.82377 13.9194 7.25707 13.9194 6.59993 13.9194H6.59986L6.55157 13.9194ZM4.09622 19.9594C4.06076 19.6078 4.05957 19.1412 4.05957 18.4194C4.05957 17.6977 4.06076 17.2311 4.09622 16.8795C4.13005 16.5442 4.18669 16.4263 4.22636 16.3665C4.30015 16.2553 4.39544 16.16 4.50662 16.0862C4.56686 16.0462 4.68453 15.9898 5.01798 15.9561C5.36799 15.9206 5.83246 15.9194 6.55157 15.9194C7.27069 15.9194 7.73516 15.9206 8.08517 15.9561C8.41861 15.9898 8.53628 16.0462 8.59652 16.0862C8.70771 16.16 8.803 16.2553 8.87678 16.3665C8.91645 16.4263 8.97309 16.5442 9.00692 16.8795C9.04238 17.2311 9.04357 17.6977 9.04357 18.4194C9.04357 19.1412 9.04238 19.6078 9.00692 19.9594C8.97309 20.2947 8.91645 20.4126 8.87678 20.4724C8.803 20.5836 8.70771 20.6789 8.59652 20.7526C8.53628 20.7926 8.41861 20.8491 8.08517 20.8828C7.73516 20.9182 7.27069 20.9194 6.55157 20.9194C5.83246 20.9194 5.36799 20.9182 5.01798 20.8828C4.68453 20.8491 4.56686 20.7926 4.50662 20.7526C4.39544 20.6789 4.30015 20.5836 4.22636 20.4724C4.18669 20.4126 4.13005 20.2947 4.09622 19.9594ZM17.5264 13.9194L17.4781 13.9194H17.4781C16.8209 13.9194 16.2542 13.9194 15.7915 13.9662C15.3008 14.0159 14.818 14.1262 14.3756 14.4198C14.042 14.6412 13.7561 14.927 13.5348 15.2606C13.2409 15.7034 13.1307 16.1874 13.0812 16.6788C13.0344 17.1427 13.0344 17.7113 13.0344 18.3712V18.3712L13.0344 18.4194L13.0344 18.4677L13.0344 18.5633V19.4194H13.0409C13.047 19.6895 13.0587 19.9369 13.0812 20.1601C13.1307 20.6515 13.2409 21.1354 13.5348 21.5783C13.7561 21.9118 14.042 22.1977 14.3756 22.4191C14.818 22.7127 15.3008 22.823 15.7915 22.8727C16.2542 22.9195 16.8209 22.9195 17.4781 22.9194H17.4781L17.5264 22.9194L17.5747 22.9194H17.5748C18.2319 22.9195 18.7986 22.9195 19.2614 22.8727C19.752 22.823 20.2349 22.7127 20.6773 22.4191C21.0108 22.1977 21.2967 21.9118 21.5181 21.5783C21.812 21.1354 21.9221 20.6515 21.9717 20.1601C22.0185 19.6961 22.0184 19.1276 22.0184 18.4678V18.4677V18.4194V18.3712V18.3711C22.0184 17.7113 22.0185 17.1427 21.9717 16.6788C21.9221 16.1874 21.812 15.7034 21.5181 15.2606C21.2967 14.927 21.0108 14.6412 20.6773 14.4198C20.2349 14.1262 19.752 14.0159 19.2614 13.9662C18.7986 13.9194 18.2319 13.9194 17.5748 13.9194H17.5747L17.5264 13.9194ZM15.0711 19.9594C15.0356 19.6078 15.0344 19.1412 15.0344 18.4194C15.0344 17.6977 15.0356 17.2311 15.0711 16.8795C15.1049 16.5442 15.1615 16.4263 15.2012 16.3665C15.275 16.2553 15.3703 16.16 15.4815 16.0862C15.5417 16.0462 15.6594 15.9898 15.9928 15.9561C16.3428 15.9206 16.8073 15.9194 17.5264 15.9194C18.2455 15.9194 18.71 15.9206 19.06 15.9561C19.3935 15.9898 19.5111 16.0462 19.5714 16.0862C19.6826 16.16 19.7778 16.2553 19.8516 16.3665C19.8913 16.4263 19.9479 16.5442 19.9818 16.8795C20.0172 17.2311 20.0184 17.6977 20.0184 18.4194C20.0184 19.1412 20.0172 19.6078 19.9818 19.9594C19.9479 20.2947 19.8913 20.4126 19.8516 20.4724C19.7778 20.5836 19.6826 20.6789 19.5714 20.7526C19.5111 20.7926 19.3935 20.8491 19.06 20.8828C18.71 20.9182 18.2455 20.9194 17.5264 20.9194C16.8073 20.9194 16.3428 20.9182 15.9928 20.8828C15.6594 20.8491 15.5417 20.7926 15.4815 20.7526C15.3703 20.6789 15.275 20.5836 15.2012 20.4724C15.1615 20.4126 15.1049 20.2947 15.0711 19.9594ZM17.5151 2.91944L17.4668 2.91944C16.8096 2.91941 16.2429 2.91939 15.7807 2.96621C15.2906 3.01586 14.809 3.1262 14.3699 3.41977C14.0389 3.64111 13.7562 3.92697 13.5387 4.26049C13.2498 4.70333 13.1451 5.18726 13.1011 5.67862C13.0596 6.14253 13.066 6.71106 13.0735 7.37088V7.37091L13.0741 7.41915L13.0746 7.46739L13.0757 7.56303L13.0854 8.41909H13.0919C13.101 8.68917 13.1155 8.93652 13.1406 9.15968C13.1957 9.65104 13.3113 10.135 13.6102 10.5778C13.8354 10.9113 14.1245 11.1972 14.4605 11.4185C14.9063 11.7121 15.3904 11.8224 15.8816 11.8721C16.3449 11.9189 16.9116 11.9189 17.5688 11.9189L17.6171 11.9189L17.6654 11.9189C18.3225 11.9189 18.8893 11.9189 19.3515 11.8721C19.8416 11.8224 20.3232 11.7121 20.7623 11.4185C21.0933 11.1972 21.3759 10.9113 21.5935 10.5778C21.8824 10.135 21.9871 9.65104 22.0311 9.15968C22.0726 8.69576 22.0661 8.12723 22.0586 7.4674L22.0581 7.41915L22.0575 7.3709V7.37086C22.0501 6.71105 22.0437 6.14253 21.9916 5.67862C21.9365 5.18726 21.8208 4.70333 21.5219 4.26049C21.2968 3.92697 21.0077 3.64111 20.6716 3.41977C20.2259 3.1262 19.7418 3.01586 19.2506 2.96621C18.7873 2.91939 18.2205 2.91941 17.5634 2.91944L17.5151 2.91944ZM15.1282 8.95897C15.0887 8.60746 15.0823 8.14084 15.0741 7.41915C15.0659 6.69746 15.0618 6.23084 15.0933 5.87933C15.1233 5.544 15.1786 5.4261 15.2176 5.36633C15.2901 5.25515 15.3843 5.15987 15.4947 5.08609C15.5545 5.04611 15.6715 4.98967 16.0046 4.95592C16.3542 4.92051 16.8186 4.91931 17.5378 4.91931C18.2569 4.91931 18.7214 4.92051 19.0718 4.95592C19.4056 4.98967 19.5239 5.04611 19.5846 5.08609C19.6966 5.15987 19.793 5.25515 19.868 5.36633C19.9084 5.4261 19.9664 5.544 20.004 5.87933C20.0434 6.23084 20.0499 6.69746 20.0581 7.41915C20.0663 8.14084 20.0704 8.60746 20.0389 8.95897C20.0089 9.2943 19.9535 9.4122 19.9146 9.47197C19.842 9.58315 19.7478 9.67843 19.6375 9.75221C19.5777 9.79219 19.4607 9.84863 19.1276 9.88237C18.778 9.91779 18.3135 9.91899 17.5944 9.91899C16.8753 9.91899 16.4108 9.91779 16.0604 9.88237C15.7266 9.84863 15.6083 9.79219 15.5476 9.75221C15.4355 9.67843 15.3392 9.58315 15.2641 9.47197C15.2238 9.4122 15.1658 9.2943 15.1282 8.95897Z",
        fill: l
      }
    )
  }
);
o9.displayName = "GridView";
const a9 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.0615 3.91943C7.09096 3.91943 3.06152 7.94887 3.06152 12.9194C3.06152 17.89 7.09096 21.9194 12.0615 21.9194C17.0321 21.9194 21.0615 17.89 21.0615 12.9194C21.0615 7.94887 17.0321 3.91943 12.0615 3.91943ZM1.06152 12.9194C1.06152 6.8443 5.98639 1.91943 12.0615 1.91943C18.1367 1.91943 23.0615 6.8443 23.0615 12.9194C23.0615 18.9946 18.1367 23.9194 12.0615 23.9194C5.98639 23.9194 1.06152 18.9946 1.06152 12.9194ZM12.3195 8.44823C11.854 8.36838 11.3752 8.45586 10.968 8.69517C10.5608 8.93449 10.2514 9.3102 10.0947 9.75575L9.76286 10.6991L7.87619 10.0354L8.20803 9.09207C8.5215 8.20096 9.14024 7.44954 9.95464 6.97091C10.769 6.49228 11.7266 6.31732 12.6576 6.47702C13.5886 6.63671 14.4331 7.12077 15.0415 7.84344C15.6497 8.56596 15.9826 9.48039 15.9814 10.4248C15.9809 12.0866 14.647 13.1387 13.8007 13.6562C13.2618 13.9857 12.9814 14.4573 12.9814 14.8654V14.9238V15.9238H10.9814V14.9238V14.8654C10.9814 13.5518 11.8273 12.5186 12.7573 11.95C13.5328 11.4757 13.9814 10.9419 13.9814 10.4239L13.9814 10.4224C13.9821 9.9501 13.8156 9.49277 13.5114 9.13144C13.2072 8.7701 12.785 8.52808 12.3195 8.44823ZM15.9814 10.4248V10.4239H14.9814L15.9814 10.4254L15.9814 10.4248ZM12.0615 17.4238H11.0615V19.4238H12.0615H12.0715H13.0715V17.4238H12.0715H12.0615Z",
        fill: l
      }
    )
  }
);
a9.displayName = "HelpCircle";
const d9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.12876 11.0149C3.44579 11.6887 3.06152 12.6066 3.06152 13.5643V20.9464C3.06152 21.4697 3.27224 21.9715 3.64731 22.3415C4.02238 22.7116 4.53109 22.9194 5.06152 22.9194H8.36152C8.91381 22.9194 9.36152 22.4717 9.36152 21.9194V16.6416C9.36152 15.651 10.1674 14.8479 11.1615 14.8479H12.9615C13.9556 14.8479 14.7615 15.651 14.7615 16.6416V21.9194C14.7615 22.4717 15.2092 22.9194 15.7615 22.9194H19.0615C19.592 22.9194 20.1007 22.7116 20.4757 22.3415C20.8508 21.9715 21.0615 21.4697 21.0615 20.9464V13.5643C21.0615 12.6066 20.6773 11.6887 19.9943 11.0149L13.3279 4.43843C12.6265 3.74643 11.4966 3.74644 10.7951 4.43843L4.12876 11.0149Z",
        stroke: l,
        strokeWidth: "2",
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
d9.displayName = "Home";
const L9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.0615 3.91943C7.09096 3.91943 3.06152 7.94887 3.06152 12.9194C3.06152 17.89 7.09096 21.9194 12.0615 21.9194C17.0321 21.9194 21.0615 17.89 21.0615 12.9194C21.0615 7.94887 17.0321 3.91943 12.0615 3.91943ZM1.06152 12.9194C1.06152 6.8443 5.98639 1.91943 12.0615 1.91943C18.1367 1.91943 23.0615 6.8443 23.0615 12.9194C23.0615 18.9946 18.1367 23.9194 12.0615 23.9194C5.98639 23.9194 1.06152 18.9946 1.06152 12.9194ZM13.0615 11.9194V12.9194V17.9194V18.9194H11.0615V17.9194V12.9194V11.9194H13.0615ZM12.0615 10.1694C12.7519 10.1694 13.3115 9.60979 13.3115 8.91943C13.3115 8.22908 12.7519 7.66943 12.0615 7.66943C11.3712 7.66943 10.8115 8.22908 10.8115 8.91943C10.8115 9.60979 11.3712 10.1694 12.0615 10.1694Z",
        fill: l
      }
    )
  }
);
L9.displayName = "Info";
const c9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M13.5443 11.3752C12.7252 10.5565 11.6144 10.0965 10.4563 10.0965C9.29815 10.0965 8.18741 10.5565 7.3683 11.3752L4.2793 14.4632C3.46018 15.2824 3 16.3933 3 17.5517C3 18.7102 3.46018 19.8211 4.2793 20.6402C5.09842 21.4594 6.20939 21.9195 7.3678 21.9195C8.52621 21.9195 9.63718 21.4594 10.4563 20.6402L12.0003 19.0962M10.4563 14.4632C11.2754 15.282 12.3861 15.742 13.5443 15.742C14.7024 15.742 15.8132 15.282 16.6323 14.4632L19.7213 11.3752C20.5404 10.5561 21.0006 9.44516 21.0006 8.28674C21.0006 7.12833 20.5404 6.01736 19.7213 5.19824C18.9022 4.37912 17.7912 3.91895 16.6328 3.91895C15.4744 3.91895 14.3634 4.37912 13.5443 5.19824L12.0003 6.74224",
        stroke: l,
        strokeWidth: "2",
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
c9.displayName = "Link";
const u9 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M9.01512 12.9194H21.0151M3.10742 12.9194H4.10742M9.01512 6.91943H21.0151M3.10742 6.91943H4.10742M9.01512 18.9194H21.0151M3.10742 18.9194H4.10742",
        stroke: l,
        strokeWidth: "2",
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
u9.displayName = "ListView";
const h9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.5 6.5C6.5 3.46243 8.96243 1 12 1C15.0376 1 17.5 3.46243 17.5 6.5V9.00003C17.959 9.00031 18.3593 9.00314 18.695 9.03057C19.0904 9.06287 19.4836 9.13419 19.862 9.32698C20.4265 9.6146 20.8854 10.0735 21.173 10.638C21.3658 11.0164 21.4371 11.4096 21.4694 11.805C21.5 12.1795 21.5 12.6343 21.5 13.1614V13.2V18.8V18.8386C21.5 19.3657 21.5 19.8205 21.4694 20.195C21.4371 20.5904 21.3658 20.9836 21.173 21.362C20.8854 21.9265 20.4265 22.3854 19.862 22.673C19.4836 22.8658 19.0904 22.9371 18.695 22.9694C18.3205 23 17.8657 23 17.3385 23H17.3H6.7H6.66148C6.13432 23 5.67955 23 5.30497 22.9694C4.90963 22.9371 4.51641 22.8658 4.13803 22.673C3.57354 22.3854 3.1146 21.9265 2.82698 21.362C2.63419 20.9836 2.56287 20.5904 2.53057 20.195C2.49997 19.8205 2.49998 19.3657 2.5 18.8385V18.8V13.2V13.1615C2.49998 12.6343 2.49997 12.1795 2.53057 11.805C2.56287 11.4096 2.63419 11.0164 2.82698 10.638C3.1146 10.0735 3.57354 9.6146 4.13803 9.32698C4.51641 9.13419 4.90963 9.06287 5.30497 9.03057C5.64075 9.00314 6.04097 9.00031 6.5 9.00003V6.5ZM15.5 6.5V9H8.5V6.5C8.5 4.567 10.067 3 12 3C13.933 3 15.5 4.567 15.5 6.5ZM5.46784 11.0239C5.19617 11.0461 5.09546 11.0838 5.04601 11.109C4.85785 11.2049 4.70487 11.3578 4.609 11.546C4.5838 11.5955 4.54612 11.6962 4.52393 11.9678C4.50078 12.2512 4.5 12.6234 4.5 13.2V18.8C4.5 19.3766 4.50078 19.7488 4.52393 20.0322C4.54612 20.3038 4.5838 20.4045 4.609 20.454C4.70487 20.6422 4.85785 20.7951 5.04601 20.891C5.09546 20.9162 5.19617 20.9539 5.46784 20.9761C5.75117 20.9992 6.12345 21 6.7 21H17.3C17.8766 21 18.2488 20.9992 18.5322 20.9761C18.8038 20.9539 18.9045 20.9162 18.954 20.891C19.1422 20.7951 19.2951 20.6422 19.391 20.454C19.4162 20.4045 19.4539 20.3038 19.4761 20.0322C19.4992 19.7488 19.5 19.3766 19.5 18.8V13.2C19.5 12.6234 19.4992 12.2512 19.4761 11.9678C19.4539 11.6962 19.4162 11.5955 19.391 11.546C19.2951 11.3578 19.1422 11.2049 18.954 11.109C18.9045 11.0838 18.8038 11.0461 18.5322 11.0239C18.2488 11.0008 17.8766 11 17.3 11H6.7C6.12345 11 5.75117 11.0008 5.46784 11.0239ZM13 15V14H11V15V17V18H13V17V15Z",
        fill: l
      }
    )
  }
);
h9.displayName = "Lock";
const H9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.86153 3.91943H6.82023H6.82021C6.01524 3.91942 5.35089 3.91941 4.8097 3.96363C4.2476 4.00955 3.7309 4.10812 3.24556 4.35541C2.49291 4.7389 1.88099 5.35082 1.4975 6.10347C1.25021 6.58881 1.15164 7.10551 1.10572 7.66761C1.0615 8.2088 1.06151 8.87316 1.06152 9.67812V9.67814V9.71944V16.1194V16.1607V16.1608C1.06151 16.9657 1.0615 17.6301 1.10572 18.1713C1.15164 18.7334 1.25021 19.2501 1.4975 19.7354C1.88099 20.488 2.49291 21.1 3.24556 21.4835C3.7309 21.7308 4.2476 21.8293 4.8097 21.8752C5.35089 21.9195 6.01524 21.9194 6.8202 21.9194H6.86153H17.2615H17.3028C18.1078 21.9194 18.7722 21.9195 19.3134 21.8752C19.8755 21.8293 20.3922 21.7308 20.8775 21.4835C21.6301 21.1 22.2421 20.488 22.6256 19.7354C22.8728 19.2501 22.9714 18.7334 23.0173 18.1713C23.0615 17.6301 23.0615 16.9657 23.0615 16.1608V16.1194V9.71944V9.67811C23.0615 8.87315 23.0615 8.2088 23.0173 7.66761C22.9714 7.10551 22.8728 6.58881 22.6256 6.10347C22.2421 5.35082 21.6301 4.7389 20.8775 4.35541C20.3922 4.10812 19.8755 4.00955 19.3134 3.96363C18.7722 3.91941 18.1078 3.91942 17.3028 3.91943H17.3028H17.2615H6.86153ZM4.15354 6.13742C4.30994 6.05773 4.53415 5.99281 4.97256 5.95699C5.42265 5.92021 6.00495 5.91944 6.86153 5.91944H17.2615C18.1181 5.91944 18.7004 5.92021 19.1505 5.95699C19.5889 5.99281 19.8131 6.05773 19.9695 6.13742C20.0663 6.18672 20.1584 6.24357 20.2451 6.30722L14.6286 11.2996C14.0454 11.8181 13.6499 12.1687 13.3214 12.418C13.0028 12.6599 12.808 12.7581 12.6462 12.8065C12.2647 12.9206 11.8583 12.9206 11.4769 12.8065C11.3151 12.7581 11.1203 12.6599 10.8017 12.418C10.4732 12.1687 10.0777 11.8181 9.49442 11.2996L3.87798 6.30722C3.96469 6.24357 4.05679 6.18672 4.15354 6.13742ZM3.07494 8.26932C3.06191 8.64991 3.06152 9.11679 3.06152 9.71944V16.1194C3.06152 16.976 3.0623 17.5583 3.09908 18.0084C3.1349 18.4468 3.19982 18.671 3.27951 18.8274C3.47126 19.2037 3.77722 19.5097 4.15354 19.7014C4.30994 19.7811 4.53415 19.8461 4.97256 19.8819C5.42265 19.9187 6.00495 19.9194 6.86153 19.9194H17.2615C18.1181 19.9194 18.7004 19.9187 19.1505 19.8819C19.5889 19.8461 19.8131 19.7811 19.9695 19.7014C20.3458 19.5097 20.6518 19.2037 20.8435 18.8274C20.9232 18.671 20.9882 18.4468 21.024 18.0084C21.0607 17.5583 21.0615 16.976 21.0615 16.1194V9.71944C21.0615 9.11679 21.0611 8.64991 21.0481 8.26932L15.9574 12.7944L15.9285 12.82L15.9285 12.8201C15.3813 13.3065 14.9282 13.7093 14.5307 14.011C14.1163 14.3256 13.7027 14.578 13.2193 14.7226C12.464 14.9485 11.6591 14.9485 10.9037 14.7226C10.4204 14.578 10.0068 14.3256 9.59239 14.011C9.19486 13.7093 8.74171 13.3065 8.1945 12.82L8.1657 12.7944L3.07494 8.26932Z",
        fill: l
      }
    )
  }
);
H9.displayName = "Mail";
const f9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.0639 0.919434C6.94599 0.919434 2.81201 5.10644 2.81201 10.2529C2.81201 14.0192 5.17225 18.5356 9.54111 23.7419C10.718 25.1444 12.8046 25.3214 14.1984 24.1333C14.3385 24.0139 14.4683 23.8829 14.5867 23.7419C18.9555 18.5356 21.3158 14.0192 21.3158 10.2529C21.3158 5.10644 17.1818 0.919434 12.0639 0.919434ZM13.0307 22.7634C12.3993 23.3016 11.4558 23.2234 10.92 22.5848C6.59745 17.4338 4.61201 13.3433 4.61201 10.2529C4.61201 6.08402 7.95656 2.71943 12.0639 2.71943C16.1712 2.71943 19.5158 6.08402 19.5158 10.2529C19.5158 13.3433 17.5303 17.4338 13.2078 22.5849C13.1537 22.6493 13.0945 22.7091 13.0307 22.7634ZM14.3116 9.91953C14.3116 11.1622 13.3043 12.1695 12.0616 12.1695C10.819 12.1695 9.81162 11.1622 9.81162 9.91953C9.81162 8.67689 10.819 7.66953 12.0616 7.66953C13.3043 7.66953 14.3116 8.67689 14.3116 9.91953ZM16.3116 9.91953C16.3116 12.2667 14.4088 14.1695 12.0616 14.1695C9.71441 14.1695 7.81162 12.2667 7.81162 9.91953C7.81162 7.57232 9.71441 5.66953 12.0616 5.66953C14.4088 5.66953 16.3116 7.57232 16.3116 9.91953Z",
        fill: l
      }
    )
  }
);
f9.displayName = "MapPin";
const p9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M3.06152 12.9194H21.0615",
          stroke: l,
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M3.06152 6.91943H21.0615",
          stroke: l,
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M3.06152 18.9194H21.0615",
          stroke: l,
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
p9.displayName = "Menu";
const v9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.06152 8.91943H2.06152V10.9194H3.06152H21.0615H22.0615V8.91943H21.0615H3.06152ZM3.06152 14.9194H2.06152V16.9194H3.06152H21.0615H22.0615V14.9194H21.0615H3.06152Z",
        fill: l
      }
    )
  }
);
v9.displayName = "Move";
const x9 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.3945 5.58617L5.23381 12.2938L7.70367 12.9113C9.85338 13.4487 11.5319 15.1272 12.0693 17.2769L12.6868 19.7468L19.3945 5.58617ZM20.0566 3.05951C21.2454 2.49638 22.4843 3.7352 21.9211 4.92406L13.7765 22.1181C13.2138 23.3062 11.4719 23.1337 11.1531 21.8584L10.129 17.762C9.77074 16.3289 8.65174 15.2099 7.2186 14.8516L3.12225 13.8275C1.84693 13.5087 1.67446 11.7668 2.86248 11.2041L20.0566 3.05951Z",
        fill: l
      }
    )
  }
);
x9.displayName = "Navigation";
const w9 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.5292 3.91943C14.7545 3.91943 14.0131 4.225 13.4675 4.7666L4.48474 13.6844C3.57262 14.5899 3.06152 15.8165 3.06152 17.0939C3.06152 18.3714 3.57262 19.598 4.48474 20.5035C5.39711 21.4093 6.63609 21.9194 7.92948 21.9194C9.22288 21.9194 10.4619 21.4093 11.3742 20.5035L20.357 11.5858L21.0667 10.8812L22.4757 12.3006L21.7661 13.0051L12.7833 21.9229C11.4948 23.2021 9.74865 23.9194 7.92948 23.9194C6.11032 23.9194 4.36422 23.2021 3.07568 21.9229C1.78689 20.6434 1.06152 18.9065 1.06152 17.0939C1.06152 15.2814 1.78689 13.5445 3.07568 12.265L12.0584 3.34726C12.9802 2.43221 14.2288 1.91943 15.5292 1.91943C16.8296 1.91943 18.0782 2.43221 18.9999 3.34726C19.9218 4.26256 20.4411 5.50552 20.4411 6.8031C20.4411 8.10068 19.9218 9.34364 18.9999 10.2589L18.9995 10.2593L10.0073 19.1767C10.0072 19.1768 10.0071 19.1769 10.0069 19.1771C9.45208 19.7277 8.70117 20.0358 7.91971 20.0358C7.13807 20.0358 6.38699 19.7276 5.83208 19.1767C5.27693 18.6256 4.96372 17.8765 4.96372 17.0939C4.96372 16.3114 5.27693 15.5623 5.83208 15.0112L5.8325 15.0108L14.1311 6.78198L14.8411 6.07786L16.2494 7.49803L15.5393 8.20215L7.24115 16.4305C7.24111 16.4306 7.24107 16.4306 7.24102 16.4307C7.06262 16.6078 6.96372 16.8466 6.96372 17.0939C6.96372 17.3414 7.06266 17.5802 7.24115 17.7574C7.41989 17.9348 7.66383 18.0358 7.91971 18.0358C8.17559 18.0358 8.41953 17.9348 8.59827 17.7574L8.59865 17.757L17.5908 8.83959C17.5909 8.8395 17.591 8.8394 17.5911 8.83931C17.5911 8.83927 17.5912 8.83924 17.5912 8.83921C18.1363 8.29789 18.4411 7.56536 18.4411 6.8031C18.4411 6.04066 18.1361 5.30796 17.5908 4.7666C17.0453 4.225 16.3038 3.91943 15.5292 3.91943Z",
        fill: l
      }
    )
  }
);
w9.displayName = "Paperclip";
const V9 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.3014 21.572C1.25181 20.2041 1.09073 18.3134 1.06601 14.9194C1.06152 14.3041 1.06152 13.6394 1.06152 12.9194C1.06152 8.22828 1.06152 5.88271 2.3014 4.26686C2.62061 3.85087 2.99296 3.47852 3.40895 3.15931C5.0248 1.91943 7.37037 1.91943 12.0615 1.91943C16.7527 1.91943 19.0982 1.91943 20.7141 3.15931C21.1301 3.47852 21.5024 3.85087 21.8216 4.26686C23.0615 5.88271 23.0615 8.22828 23.0615 12.9194C23.0615 17.6106 23.0615 19.9562 21.8216 21.572C21.5024 21.988 21.1301 22.3604 20.7141 22.6796C19.0982 23.9194 16.7527 23.9194 12.0615 23.9194C7.37037 23.9194 5.0248 23.9194 3.40895 22.6796C2.99296 22.3604 2.62061 21.988 2.3014 21.572ZM3.20392 18.1749C3.0645 16.9382 3.06152 15.3115 3.06152 12.9194C3.06152 10.5273 3.0645 8.90067 3.20392 7.66396C3.3388 6.46756 3.57985 5.88612 3.88811 5.48439C4.10091 5.20706 4.34915 4.95882 4.62648 4.74602C5.02821 4.43776 5.60964 4.19671 6.80605 4.06183C8.04276 3.92241 9.66943 3.91943 12.0615 3.91943C14.4536 3.91943 16.0803 3.92241 17.317 4.06183C18.5134 4.19671 19.0948 4.43776 19.4966 4.74602C19.7739 4.95882 20.0221 5.20706 20.2349 5.48439C20.5432 5.88612 20.7843 6.46756 20.9191 7.66396C21.0585 8.90067 21.0615 10.5273 21.0615 12.9194C21.0615 15.3115 21.0585 16.9382 20.9191 18.1749C20.7843 19.3713 20.5432 19.9527 20.2349 20.3545C20.0221 20.6318 19.7739 20.88 19.4966 21.0928C19.0948 21.4011 18.5134 21.6422 17.317 21.777C16.0803 21.9165 14.4536 21.9194 12.0615 21.9194C9.66943 21.9194 8.04276 21.9165 6.80605 21.777C5.60964 21.6422 5.02821 21.4011 4.62648 21.0928C4.34915 20.88 4.10091 20.6318 3.88811 20.3545C3.57985 19.9527 3.3388 19.3713 3.20392 18.1749ZM13.0615 7.41943V8.41943V11.9194H16.5615H17.5615V13.9194H16.5615H13.0615V17.4194V18.4194H11.0615V17.4194V13.9194H7.56152H6.56152V11.9194H7.56152H11.0615V8.41943V7.41943H13.0615Z",
        fill: l
      }
    )
  }
);
V9.displayName = "PlusRect";
const M9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M12.0625 4.91943L12.0625 20.9219",
          stroke: l,
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M4.06152 12.9207L20.064 12.9207",
          stroke: l,
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
M9.displayName = "Plus";
const g9 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 26 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.958 4.21924L11.958 4.21924L11.958 6.21924L12.958 6.21924L14.0295 6.21925C15.1661 6.21925 15.9584 6.22003 16.5752 6.27043C17.1804 6.31988 17.5281 6.41205 17.7914 6.54624C18.3559 6.83386 18.8148 7.2928 19.1025 7.85729C19.2366 8.12064 19.3288 8.46833 19.3783 9.07349C19.4287 9.69033 19.4294 10.4826 19.4294 11.6192V17.9248L17.5219 15.8093L16.8522 15.0667L15.3669 16.406L16.0366 17.1487L19.6777 21.1867C19.8673 21.397 20.1372 21.5171 20.4204 21.5171C20.7035 21.5171 20.9734 21.397 21.163 21.1867L24.8042 17.1487L25.4739 16.406L23.9885 15.0667L23.3189 15.8093L21.4294 17.9047V11.6192V11.5764C21.4294 10.4926 21.4295 9.6185 21.3716 8.91063C21.3121 8.18178 21.1863 7.5416 20.8845 6.94931C20.4051 6.0085 19.6402 5.2436 18.6994 4.76423C18.1071 4.46244 17.4669 4.33663 16.7381 4.27707C16.0302 4.21924 15.1561 4.21924 14.0724 4.21925L14.0723 4.21925L14.0295 4.21925L12.958 4.21924ZM12.094 19.355C10.9574 19.355 10.1651 19.3542 9.54824 19.3038C8.94307 19.2544 8.59539 19.1622 8.33203 19.028C7.76754 18.7404 7.3086 18.2814 7.02098 17.7169C6.88679 17.4536 6.79461 17.1059 6.74517 16.5007C6.69477 15.8839 6.69399 15.0916 6.69399 13.955L6.69399 8.11134L8.60139 10.2266L9.27106 10.9693L10.7564 9.62997L10.0867 8.88731L6.44556 4.84926C6.25594 4.63897 5.98605 4.51893 5.7029 4.51893C5.41974 4.51893 5.14986 4.63897 4.96024 4.84926L1.31908 8.88731L0.649414 9.62997L2.13474 10.9693L2.8044 10.2266L4.69399 8.13108L4.69399 13.955V13.9978C4.69398 15.0816 4.69398 15.9557 4.75181 16.6636C4.81136 17.3924 4.93717 18.0326 5.23896 18.6249C5.71833 19.5657 6.48324 20.3306 7.42405 20.81C8.01635 21.1118 8.65653 21.2376 9.38539 21.2972C10.0933 21.355 10.9674 21.355 12.0512 21.355L12.094 21.355L14.2031 21.355L15.2031 21.355L15.2031 19.355L14.2031 19.355L12.094 19.355Z",
        fill: l
      }
    )
  }
);
g9.displayName = "RefreshCw";
const j9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.7438 1.71298L12.0136 1.02979L10.6472 2.49025L11.3774 3.17345L13.229 4.90575C11.2095 4.66062 9.15695 5.0568 7.37736 6.04455C5.45684 7.11053 3.9717 8.80062 3.18342 10.8282C2.39495 12.8562 2.35496 15.0906 3.07065 17.1447C3.78617 19.1983 5.21038 20.9385 7.09213 22.0696C8.97341 23.2004 11.1966 23.6535 13.3797 23.3537C15.563 23.0539 17.5751 22.0191 19.0678 20.4219C20.5609 18.8243 21.4402 16.764 21.5487 14.5951C21.5957 13.6574 21.6059 12.901 21.4461 12.1025C21.2864 11.3039 20.9697 10.5237 20.4559 9.49631L20.0087 8.60188L18.2199 9.49631L18.6671 10.3907C19.1534 11.3633 19.3773 11.9564 19.485 12.4948C19.5927 13.0333 19.5971 13.5777 19.5512 14.4951C19.4666 16.1865 18.7808 17.7999 17.6066 19.0563C16.4319 20.3132 14.8416 21.1342 13.1077 21.3723C11.3736 21.6104 9.61033 21.2497 8.12249 20.3554C6.63511 19.4614 5.51853 18.0917 4.95929 16.4867C4.4002 14.882 4.43129 13.1379 5.0475 11.5529C5.66389 9.96746 6.82907 8.6363 8.34797 7.79324C9.84669 6.96138 11.5945 6.65795 13.2967 6.93502L11.3774 8.73073L10.6472 9.41393L12.0136 10.8744L12.7438 10.1912L16.4942 6.68232C16.6963 6.49324 16.811 6.22885 16.811 5.95209C16.811 5.67533 16.6963 5.41094 16.4942 5.22186L12.7438 1.71298Z",
        fill: l
      }
    )
  }
);
j9.displayName = "Refresh";
const Z9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.2954 2.50537L19.0177 3.19698L22.1506 6.19698C22.3476 6.38561 22.459 6.64652 22.459 6.91925C22.459 7.19199 22.3476 7.45289 22.1506 7.64152L19.0177 10.6415L18.2954 11.3331L16.9122 9.8886L17.6344 9.19698L18.9688 7.91925H7.78315C5.41029 7.91925 3.56152 9.75055 3.56152 11.9193V12.0159V13.0159H1.56152V12.0159V11.9193C1.56152 8.56511 4.38836 5.91925 7.78315 5.91925H18.9688L17.6344 4.64152L16.9122 3.94991L18.2954 2.50537ZM22.5608 12.8225V13.8225V13.9193C22.5608 17.2734 19.734 19.9193 16.3392 19.9193H5.151L6.48556 21.1972L7.20783 21.8888L5.8246 23.3333L5.10233 22.6417L1.96936 19.6417C1.77237 19.4531 1.66097 19.1922 1.66097 18.9194C1.66097 18.6467 1.77237 18.3858 1.96936 18.1972L5.10233 15.1972L5.8246 14.5056L7.20783 15.9501L6.48556 16.6417L5.15138 17.9193H16.3392C18.712 17.9193 20.5608 16.088 20.5608 13.9193V13.8225V12.8225H22.5608Z",
        fill: l
      }
    )
  }
);
Z9.displayName = "Repeat";
const m9 = ({
  width: t = "25",
  height: r = "25",
  color: l = "currentColor"
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M12.0615 15.9194C13.7184 15.9194 15.0615 14.5763 15.0615 12.9194C15.0615 11.2626 13.7184 9.91943 12.0615 9.91943C10.4047 9.91943 9.06152 11.2626 9.06152 12.9194C9.06152 14.5763 10.4047 15.9194 12.0615 15.9194Z",
          stroke: l,
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M19.4615 15.9194C19.3284 16.221 19.2887 16.5556 19.3475 16.88C19.4063 17.2044 19.561 17.5038 19.7915 17.7394L19.8515 17.7994C20.0375 17.9852 20.185 18.2058 20.2856 18.4486C20.3863 18.6913 20.4381 18.9516 20.4381 19.2144C20.4381 19.4773 20.3863 19.7375 20.2856 19.9803C20.185 20.2231 20.0375 20.4437 19.8515 20.6294C19.6658 20.8154 19.4452 20.9629 19.2024 21.0636C18.9596 21.1642 18.6994 21.216 18.4365 21.216C18.1737 21.216 17.9134 21.1642 17.6706 21.0636C17.4278 20.9629 17.2073 20.8154 17.0215 20.6294L16.9615 20.5694C16.7258 20.3389 16.4265 20.1842 16.1021 20.1254C15.7777 20.0666 15.4431 20.1063 15.1415 20.2394C14.8458 20.3662 14.5935 20.5767 14.4158 20.845C14.2382 21.1133 14.1428 21.4276 14.1415 21.7494V21.9194C14.1415 22.4499 13.9308 22.9586 13.5557 23.3336C13.1807 23.7087 12.672 23.9194 12.1415 23.9194C11.6111 23.9194 11.1024 23.7087 10.7273 23.3336C10.3522 22.9586 10.1415 22.4499 10.1415 21.9194V21.8294C10.1338 21.4984 10.0266 21.1774 9.83403 20.9081C9.64143 20.6388 9.37226 20.4337 9.06152 20.3194C8.75991 20.1863 8.42533 20.1466 8.10093 20.2054C7.77654 20.2642 7.4772 20.4189 7.24152 20.6494L7.18152 20.7094C6.99578 20.8954 6.7752 21.0429 6.5324 21.1436C6.28961 21.2442 6.02935 21.296 5.76652 21.296C5.50369 21.296 5.24344 21.2442 5.00064 21.1436C4.75785 21.0429 4.53727 20.8954 4.35152 20.7094C4.16557 20.5237 4.01805 20.3031 3.9174 20.0603C3.81676 19.8175 3.76495 19.5573 3.76495 19.2944C3.76495 19.0316 3.81676 18.7713 3.9174 18.5286C4.01805 18.2858 4.16557 18.0652 4.35152 17.8794L4.41152 17.8194C4.64206 17.5838 4.79671 17.2844 4.85553 16.96C4.91435 16.6356 4.87464 16.301 4.74152 15.9994C4.61476 15.7037 4.40428 15.4514 4.13599 15.2737C3.8677 15.0961 3.55331 15.0007 3.23152 14.9994H3.06152C2.53109 14.9994 2.02238 14.7887 1.64731 14.4136C1.27224 14.0386 1.06152 13.5299 1.06152 12.9994C1.06152 12.469 1.27224 11.9603 1.64731 11.5852C2.02238 11.2101 2.53109 10.9994 3.06152 10.9994H3.15152C3.48252 10.9917 3.80353 10.8846 4.07282 10.6919C4.34212 10.4993 4.54724 10.2302 4.66152 9.91943C4.79464 9.61782 4.83435 9.28324 4.77553 8.95885C4.71671 8.63445 4.56206 8.33511 4.33152 8.09943L4.27152 8.03943C4.08557 7.85369 3.93805 7.63311 3.8374 7.39031C3.73676 7.14752 3.68495 6.88726 3.68495 6.62443C3.68495 6.3616 3.73676 6.10135 3.8374 5.85855C3.93805 5.61576 4.08557 5.39518 4.27152 5.20943C4.45727 5.02348 4.67785 4.87596 4.92064 4.77531C5.16344 4.67467 5.42369 4.62286 5.68652 4.62286C5.94935 4.62286 6.20961 4.67467 6.4524 4.77531C6.6952 4.87596 6.91578 5.02348 7.10152 5.20943L7.16152 5.26943C7.3972 5.49997 7.69654 5.65462 8.02093 5.71344C8.34533 5.77226 8.67991 5.73255 8.98152 5.59943H9.06152C9.35729 5.47267 9.60954 5.26219 9.78722 4.9939C9.96489 4.72561 10.0602 4.41122 10.0615 4.08943V3.91943C10.0615 3.389 10.2722 2.88029 10.6473 2.50522C11.0224 2.13015 11.5311 1.91943 12.0615 1.91943C12.592 1.91943 13.1007 2.13015 13.4757 2.50522C13.8508 2.88029 14.0615 3.389 14.0615 3.91943V4.00943C14.0628 4.33122 14.1582 4.64561 14.3358 4.9139C14.5135 5.18219 14.7658 5.39267 15.0615 5.51943C15.3631 5.65255 15.6977 5.69226 16.0221 5.63344C16.3465 5.57462 16.6458 5.41997 16.8815 5.18943L16.9415 5.12943C17.1273 4.94348 17.3478 4.79596 17.5906 4.69531C17.8334 4.59467 18.0937 4.54286 18.3565 4.54286C18.6194 4.54286 18.8796 4.59467 19.1224 4.69531C19.3652 4.79596 19.5858 4.94348 19.7715 5.12943C19.9575 5.31518 20.105 5.53576 20.2056 5.77855C20.3063 6.02135 20.3581 6.2816 20.3581 6.54443C20.3581 6.80726 20.3063 7.06752 20.2056 7.31031C20.105 7.55311 19.9575 7.77369 19.7715 7.95943L19.7115 8.01943C19.481 8.25511 19.3263 8.55445 19.2675 8.87884C19.2087 9.20324 19.2484 9.53782 19.3815 9.83943V9.91943C19.5083 10.2152 19.7188 10.4675 19.9871 10.6451C20.2553 10.8228 20.5697 10.9182 20.8915 10.9194H21.0615C21.592 10.9194 22.1007 11.1301 22.4757 11.5052C22.8508 11.8803 23.0615 12.389 23.0615 12.9194C23.0615 13.4499 22.8508 13.9586 22.4757 14.3336C22.1007 14.7087 21.592 14.9194 21.0615 14.9194H20.9715C20.6497 14.9207 20.3353 15.0161 20.0671 15.1937C19.7988 15.3714 19.5883 15.6237 19.4615 15.9194V15.9194Z",
          stroke: l,
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
m9.displayName = "Settings";
const R9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.44411 5.88732C7.98374 4.65582 9.93663 3.91943 12.0615 3.91943C17.0321 3.91943 21.0615 7.94887 21.0615 12.9194C21.0615 15.0443 20.3251 16.9972 19.0936 18.5368L6.44411 5.88732ZM4.13224 5.29535L3.57797 5.84961L3.60848 5.88011C2.01824 7.78764 1.06152 10.2418 1.06152 12.9194C1.06152 18.9946 5.98639 23.9194 12.0615 23.9194C14.7391 23.9194 17.1933 22.9627 19.1008 21.3725L19.1322 21.4038L19.7383 20.7977C19.8063 20.7314 19.8735 20.6642 19.9398 20.5962L20.5464 19.9896L20.515 19.9582C22.105 18.0508 23.0615 15.5968 23.0615 12.9194C23.0615 6.8443 18.1367 1.91943 12.0615 1.91943C9.38415 1.91943 6.93019 2.87597 5.02273 4.46594L4.99219 4.4354L4.43744 4.99015C4.33373 5.08989 4.23198 5.19164 4.13224 5.29535ZM17.6795 19.9511C16.1398 21.1829 14.1867 21.9194 12.0615 21.9194C7.09096 21.9194 3.06152 17.89 3.06152 12.9194C3.06152 10.7943 3.79808 8.84119 5.02984 7.30148L17.6795 19.9511Z",
        fill: l
      }
    )
  }
);
R9.displayName = "Slash";
const k9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.0479 4.34804C11.8262 4.67039 11.5701 5.18527 11.1644 6.01027L10.0241 8.32891C10.0193 8.33863 10.0145 8.34837 10.0098 8.35812C9.90864 8.56382 9.80547 8.77371 9.69926 8.94742C9.57737 9.14676 9.41745 9.35798 9.1752 9.53449C8.93295 9.71101 8.6829 9.79853 8.4558 9.85349C8.25789 9.90138 8.02647 9.93529 7.79966 9.96852C7.78893 9.97009 7.77821 9.97166 7.76751 9.97323L5.20208 10.3496C4.29786 10.4823 3.7334 10.5677 3.36129 10.6792C3.35345 10.6816 3.34584 10.6839 3.33845 10.6862C3.34308 10.6924 3.34787 10.6988 3.35283 10.7053C3.5883 11.0142 3.99468 11.4152 4.64818 12.0541L6.51084 13.8751L6.53405 13.8978C6.69757 14.0576 6.86444 14.2206 6.99611 14.3753C7.14721 14.5529 7.29777 14.7701 7.39006 15.0545C7.48235 15.339 7.488 15.6032 7.46991 15.8357C7.45415 16.0382 7.41481 16.2682 7.37625 16.4936L7.37078 16.5255L6.9329 19.0882C6.77833 19.9927 6.68428 20.5587 6.67498 20.9489C6.67478 20.9572 6.67463 20.9652 6.67452 20.9731C6.68191 20.9705 6.68951 20.9679 6.69731 20.9651C7.06528 20.8348 7.57389 20.5693 8.38542 20.141L10.6613 18.9396L10.6902 18.9244C10.8937 18.8169 11.1012 18.7073 11.2899 18.629C11.5065 18.539 11.7609 18.462 12.0617 18.462C12.3625 18.462 12.617 18.539 12.8335 18.629C13.0222 18.7073 13.2298 18.8169 13.4332 18.9244L13.4621 18.9396L15.738 20.141C16.5496 20.5693 17.0582 20.8348 17.4261 20.9651C17.4339 20.9679 17.4415 20.9705 17.4489 20.9731C17.4488 20.9652 17.4487 20.9572 17.4485 20.9489C17.4392 20.5587 17.3451 19.9927 17.1906 19.0882L16.7527 16.5255L16.7472 16.4935C16.7086 16.2682 16.6693 16.0382 16.6535 15.8357C16.6354 15.6032 16.6411 15.339 16.7334 15.0545C16.8257 14.7701 16.9762 14.5529 17.1273 14.3753C17.259 14.2206 17.4259 14.0575 17.5894 13.8977L17.6126 13.8751L19.4753 12.0541C20.1288 11.4152 20.5352 11.0142 20.7706 10.7053C20.7756 10.6988 20.7804 10.6924 20.785 10.6862C20.7776 10.6839 20.77 10.6816 20.7622 10.6792C20.39 10.5677 19.8256 10.4823 18.9214 10.3496L16.3559 9.97323L16.3238 9.96852C16.097 9.93529 15.8656 9.90138 15.6676 9.85349C15.4405 9.79853 15.1905 9.71101 14.9482 9.53449C14.706 9.35798 14.5461 9.14676 14.4242 8.94742C14.318 8.77371 14.2148 8.56382 14.1137 8.35812C14.1089 8.34837 14.1041 8.33863 14.0993 8.32891L12.9591 6.01028C12.5534 5.18527 12.2972 4.67039 12.0756 4.34804C12.0708 4.34119 12.0662 4.33455 12.0617 4.32812C12.0572 4.33455 12.0526 4.34119 12.0479 4.34804ZM12.2172 4.14295C12.2171 4.14323 12.2146 4.14544 12.2095 4.14872C12.2146 4.1443 12.2172 4.14266 12.2172 4.14295ZM11.914 4.14872C11.9089 4.14544 11.9063 4.14323 11.9063 4.14295C11.9063 4.14266 11.9088 4.1443 11.914 4.14872ZM21.0069 10.7766C21.0066 10.7766 21.0037 10.7749 20.9991 10.7711C21.0048 10.7746 21.0071 10.7765 21.0069 10.7766ZM20.9083 10.4917C20.9098 10.4859 20.9111 10.4828 20.9114 10.4827C20.9116 10.4826 20.9109 10.4855 20.9083 10.4917ZM17.4316 21.2135C17.4314 21.2133 17.4322 21.21 17.4344 21.2044C17.4328 21.2109 17.4318 21.2137 17.4316 21.2135ZM17.6733 21.0313C17.6793 21.0309 17.6826 21.0312 17.6828 21.0314C17.683 21.0316 17.68 21.0318 17.6733 21.0313ZM6.44062 21.0314C6.4408 21.0312 6.44417 21.0309 6.45019 21.0313C6.44345 21.0318 6.44044 21.0316 6.44062 21.0314ZM6.68902 21.2044C6.69121 21.21 6.692 21.2133 6.69185 21.2135C6.6917 21.2137 6.6906 21.2109 6.68902 21.2044ZM3.21208 10.4827C3.21234 10.4828 3.21364 10.4859 3.21516 10.4917C3.21258 10.4855 3.21182 10.4826 3.21208 10.4827ZM3.12433 10.7711C3.1197 10.7749 3.11684 10.7766 3.11657 10.7766C3.1163 10.7765 3.11861 10.7746 3.12433 10.7711ZM10.3999 3.21477C10.7191 2.75062 11.2334 2.18555 12.0617 2.18555C12.8901 2.18555 13.4043 2.75062 13.7235 3.21477C14.0385 3.67284 14.3585 4.32362 14.7204 5.0597C14.7315 5.08228 14.7426 5.10494 14.7538 5.12768L15.8941 7.44631C16.0157 7.69357 16.0782 7.8186 16.1305 7.90411C16.1314 7.90558 16.1323 7.90701 16.1331 7.90839C16.1347 7.90878 16.1363 7.90918 16.138 7.90959C16.2354 7.93316 16.3736 7.95442 16.6463 7.99441L19.2117 8.37079L19.2865 8.38176C20.0928 8.49997 20.8063 8.60458 21.3363 8.76344C21.8744 8.92471 22.5661 9.24004 22.821 10.0245C23.076 10.8091 22.7018 11.4707 22.3613 11.9175C22.0259 12.3576 21.5102 12.8617 20.9275 13.4313L20.8734 13.4842L19.0107 15.3052C18.8142 15.4973 18.7152 15.5955 18.6504 15.6716C18.6493 15.6729 18.6482 15.6742 18.6471 15.6755C18.6472 15.6771 18.6474 15.6788 18.6475 15.6805C18.6553 15.7801 18.6778 15.9177 18.7241 16.1887L19.162 18.7513L19.1747 18.8259C19.3127 19.6328 19.4347 20.3463 19.4479 20.9013C19.4613 21.4639 19.3758 22.222 18.706 22.7074C18.0362 23.1929 17.2892 23.0383 16.7587 22.8504C16.2354 22.6652 15.5952 22.3272 14.8714 21.945L14.8044 21.9097L12.5285 20.7084C12.2839 20.5792 12.1593 20.5146 12.0664 20.476C12.0648 20.4753 12.0632 20.4747 12.0617 20.4741C12.0602 20.4747 12.0587 20.4753 12.0571 20.476C11.9641 20.5146 11.8395 20.5792 11.5949 20.7084L9.31903 21.9097L9.25209 21.945C8.52824 22.3272 7.88807 22.6652 7.36478 22.8504C6.83423 23.0383 6.08726 23.1929 5.41744 22.7074C4.74762 22.222 4.66214 21.4639 4.67555 20.9013C4.68877 20.3463 4.81077 19.6328 4.94871 18.826L4.96147 18.7513L5.39936 16.1887C5.44566 15.9177 5.46819 15.7801 5.47594 15.6805C5.47608 15.6788 5.4762 15.6771 5.47632 15.6755C5.47527 15.6742 5.47419 15.6729 5.47307 15.6716C5.40828 15.5955 5.30926 15.4973 5.11271 15.3052L3.25005 13.4842C3.23195 13.4665 3.21392 13.4489 3.19595 13.4313C2.61324 12.8617 2.09751 12.3576 1.76211 11.9175C1.42162 11.4708 1.04745 10.8091 1.3024 10.0245C1.55734 9.24004 2.24902 8.92471 2.78711 8.76344C3.31716 8.60458 4.0307 8.49997 4.83692 8.38176C4.86178 8.37812 4.88673 8.37446 4.91177 8.37079L7.47719 7.99441C7.74982 7.95442 7.88801 7.93316 7.98542 7.90959C7.9871 7.90918 7.98873 7.90878 7.99031 7.90839C7.99117 7.90701 7.99204 7.90558 7.99294 7.90411C8.04523 7.8186 8.1078 7.69357 8.2294 7.44631L9.36965 5.12767C9.38083 5.10493 9.39198 5.08226 9.40308 5.05967C9.76498 4.3236 10.0849 3.67283 10.3999 3.21477Z",
        fill: l
      }
    )
  }
);
k9.displayName = "Star";
const y9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.5615 9.91943C16.6661 9.91943 17.5615 9.024 17.5615 7.91943C17.5615 6.81486 16.6661 5.91943 15.5615 5.91943C14.457 5.91943 13.5615 6.81486 13.5615 7.91943C13.5615 9.024 14.457 9.91943 15.5615 9.91943ZM15.5615 3.91943C17.4254 3.91943 18.9915 5.19421 19.4355 6.91943H22.0615H23.0615V8.91943H22.0615H19.4355C18.9915 10.6447 17.4254 11.9194 15.5615 11.9194C13.6977 11.9194 12.1316 10.6447 11.6875 8.91943H11.5615H2.06152H1.06152V6.91943H2.06152H11.5615H11.6875C12.1316 5.19421 13.6977 3.91943 15.5615 3.91943ZM12.9355 18.9194C12.4915 20.6447 10.9254 21.9194 9.06152 21.9194C7.19768 21.9194 5.63158 20.6447 5.18754 18.9194H2.56152H1.56152V16.9194H2.56152H5.18754C5.63158 15.1942 7.19768 13.9194 9.06152 13.9194C10.9254 13.9194 12.4915 15.1942 12.9355 16.9194H22.0615H23.0615V18.9194H22.0615H12.9355ZM7.06152 17.9194C7.06152 19.024 7.95695 19.9194 9.06152 19.9194C10.1661 19.9194 11.0615 19.024 11.0615 17.9194C11.0615 16.8149 10.1661 15.9194 9.06152 15.9194C7.95695 15.9194 7.06152 16.8149 7.06152 17.9194Z",
        fill: l
      }
    )
  }
);
y9.displayName = "Tune";
const F9 = ({ width: t = "25", height: r = "25", color: l = "currentColor" }) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: r,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.51367 6.6755C6.51367 3.57684 8.94213 1 12.0163 1C13.6414 1 15.0911 1.72504 16.0924 2.86286C16.7107 3.56715 17.159 4.43071 17.3747 5.38163L15.6112 6.12055L15.257 5.27508C15.0971 4.86785 14.8697 4.49915 14.5905 4.18282C13.945 3.44903 13.025 3 12.0163 3C10.117 3 8.51367 4.60974 8.51367 6.6755V8.96972H17.3L17.3385 8.96972C17.8657 8.9697 18.3205 8.96968 18.695 9.00029C19.0904 9.03259 19.4836 9.1039 19.862 9.2967C20.4265 9.58432 20.8854 10.0433 21.173 10.6077C21.3658 10.9861 21.4371 11.3793 21.4694 11.7747C21.5 12.1493 21.5 12.604 21.5 13.1311V13.1697V18.7957V18.8342C21.5 19.3614 21.5 19.8161 21.4694 20.1907C21.4371 20.586 21.3658 20.9793 21.173 21.3576C20.8854 21.9221 20.4265 22.3811 19.862 22.6687C19.4836 22.8615 19.0904 22.9328 18.695 22.9651C18.3205 22.9957 17.8658 22.9957 17.3387 22.9957H17.3386H17.3385H17.3H6.7H6.66148H6.66136H6.66133C6.13424 22.9957 5.67952 22.9957 5.30497 22.9651C4.90963 22.9328 4.51641 22.8615 4.13803 22.6687C3.57354 22.3811 3.1146 21.9221 2.82698 21.3576C2.63419 20.9793 2.56287 20.586 2.53057 20.1907C2.49997 19.8161 2.49998 19.3614 2.5 18.8342V18.7957V13.1697V13.1312C2.49998 12.604 2.49997 12.1493 2.53057 11.7747C2.56287 11.3793 2.63419 10.9861 2.82698 10.6077C3.1146 10.0433 3.57354 9.58432 4.13803 9.2967C4.51641 9.1039 4.90963 9.03259 5.30497 9.00029C5.64408 8.97258 6.04891 8.96997 6.51367 8.96974V6.6755ZM5.46784 10.9936C5.19617 11.0158 5.09545 11.0535 5.04601 11.0787C4.85785 11.1746 4.70487 11.3276 4.60899 11.5157C4.5838 11.5652 4.54612 11.6659 4.52393 11.9376C4.50078 12.2209 4.5 12.5932 4.5 13.1697V18.7957C4.5 19.3722 4.50078 19.7445 4.52393 20.0278C4.54612 20.2995 4.5838 20.4002 4.60899 20.4497C4.70487 20.6378 4.85785 20.7908 5.04601 20.8867C5.09545 20.9119 5.19617 20.9495 5.46784 20.9717C5.75117 20.9949 6.12345 20.9957 6.7 20.9957H17.3C17.8766 20.9957 18.2488 20.9949 18.5322 20.9717C18.8038 20.9495 18.9045 20.9119 18.954 20.8867C19.1422 20.7908 19.2951 20.6378 19.391 20.4497C19.4162 20.4002 19.4539 20.2995 19.4761 20.0278C19.4992 19.7445 19.5 19.3722 19.5 18.7957V13.1697C19.5 12.5932 19.4992 12.2209 19.4761 11.9376C19.4539 11.6659 19.4162 11.5652 19.391 11.5157C19.2951 11.3276 19.1422 11.1746 18.954 11.0787C18.9045 11.0535 18.8038 11.0158 18.5322 10.9936C18.2488 10.9705 17.8766 10.9697 17.3 10.9697H6.7C6.12345 10.9697 5.75117 10.9705 5.46784 10.9936ZM13 13.9805V14.9805V16.9849V17.9849H11V16.9849V14.9805V13.9805H13Z",
        fill: l
      }
    )
  }
);
F9.displayName = "Unlock";
const _9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M42 20C42 31.9135 28.9656 42.3787 25.0803 45.2335C24.4296 45.7115 23.5703 45.7115 22.9197 45.2335C19.0344 42.3787 6 31.9135 6 20C6 15.2261 7.89642 10.6477 11.2721 7.27208C14.6477 3.89642 19.2261 2 24 2C28.7739 2 33.3523 3.89642 36.7279 7.27208C40.1036 10.6477 42 15.2261 42 20Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.7892 13.9004C19.5135 13.9004 19.2461 13.9954 19.0322 14.1694L15.789 16.8066C15.5095 17.0338 15.3469 17.3746 15.3461 17.7347L15.3398 20.3032C15.3391 20.6049 15.4521 20.8958 15.6562 21.118L23.4279 29.5763C23.6612 29.8302 23.9925 29.9715 24.3373 29.9641C24.682 29.9567 25.0069 29.8014 25.2291 29.5377L32.3579 21.0795C32.5396 20.8638 32.6396 20.591 32.6403 20.309L32.6465 17.7405C32.6473 17.4349 32.5313 17.1405 32.3224 16.9174L29.8526 14.2801C29.6257 14.0379 29.3086 13.9004 28.9767 13.9004H19.7892ZM17.7447 18.3096L20.2156 16.3004H28.4564L30.2454 18.2106L30.2441 18.7344H17.7437L17.7447 18.3096ZM18.9305 21.1344L24.2727 26.9485L29.1729 21.1344H18.9305Z",
      fill: "white"
    }
  )
] });
_9.displayName = "BonusLarge";
const E9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M21 10C21 15.9567 14.4828 21.1893 12.5401 22.6167C12.2148 22.8558 11.7852 22.8558 11.4599 22.6167C9.51722 21.1893 3 15.9567 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.89462 6.94995C9.75673 6.94995 9.62306 6.99744 9.51608 7.08444L7.89449 8.40306C7.75477 8.51668 7.67347 8.68704 7.67303 8.86713L7.66992 10.1514C7.66956 10.3022 7.72604 10.4477 7.82811 10.5588L11.714 14.7879C11.8306 14.9149 11.9963 14.9855 12.1686 14.9818C12.341 14.9781 12.5035 14.9005 12.6146 14.7686L16.1789 10.5395C16.2698 10.4317 16.3198 10.2953 16.3202 10.1543L16.3233 8.87003C16.3236 8.7172 16.2657 8.56999 16.1612 8.45844L14.9263 7.13981C14.8128 7.01869 14.6543 6.94995 14.4883 6.94995H9.89462ZM8.87234 9.15457L10.1078 8.14995H14.2282L15.1227 9.10505L15.1221 9.3667H8.87183L8.87234 9.15457ZM9.46503 10.5667L12.1363 13.474L14.5867 10.5667H9.46503Z",
      fill: "white"
    }
  )
] });
E9.displayName = "BonusMedium";
const B9 = () => /* @__PURE__ */ e.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.89462 1.94995C3.75673 1.94995 3.62306 1.99744 3.51608 2.08444L1.89449 3.40306C1.75477 3.51668 1.67347 3.68704 1.67303 3.86713L1.66992 5.15136C1.66956 5.30222 1.72604 5.44768 1.82811 5.55877L5.71397 9.78791C5.83062 9.91487 5.99625 9.98551 6.16863 9.98182C6.341 9.97813 6.50346 9.90046 6.61457 9.76863L10.1789 5.53948C10.2698 5.43166 10.3198 5.29528 10.3202 5.15427L10.3233 3.87003C10.3236 3.7172 10.2657 3.56999 10.1612 3.45844L8.92628 2.13981C8.81284 2.01869 8.6543 1.94995 8.48834 1.94995H3.89462ZM2.87234 4.15457L4.10778 3.14995H8.22822L9.12269 4.10505L9.12206 4.3667H2.87183L2.87234 4.15457ZM3.46503 5.5667L6.13634 8.474L8.58665 5.5667H3.46503Z",
    fill: "#222222"
  }
) });
B9.displayName = "BonusSmall";
const N9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M42 20C42 31.9135 28.9656 42.3787 25.0803 45.2335C24.4296 45.7115 23.5703 45.7115 22.9197 45.2335C19.0344 42.3787 6 31.9135 6 20C6 15.2261 7.89642 10.6477 11.2721 7.27208C14.6477 3.89642 19.2261 2 24 2C28.7739 2 33.3523 3.89642 36.7279 7.27208C40.1036 10.6477 42 15.2261 42 20Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.071 18.4379H16.3034V16.2003H31.697V18.4379H30.8913V20.8379H32.4281C33.2964 20.8379 34.0003 20.1045 34.0003 19.1998V15.4385C34.0003 14.5337 33.2964 13.8003 32.4281 13.8003H15.5722C14.7039 13.8003 14 14.5337 14 15.4385V19.1998C14 20.1045 14.7039 20.8379 15.5722 20.8379H17.071V18.4379ZM27.0539 17.1094L27.0504 18.3094C27.048 19.1535 26.7256 19.9643 26.1522 20.563C25.5786 21.162 24.8007 21.4996 23.9894 21.4996C23.178 21.4996 22.4021 21.162 21.832 20.563C21.262 19.9643 20.9443 19.1535 20.9467 18.3094L20.9502 17.1094L23.2536 17.1094L23.2501 18.3094C23.2495 18.521 23.3292 18.7227 23.4698 18.8704C23.6102 19.0179 23.7997 19.0996 23.9963 19.0996C24.1929 19.0996 24.3828 19.0179 24.5241 18.8704C24.6655 18.7227 24.7464 18.521 24.747 18.3094L24.7505 17.1094H27.0539ZM20.0973 17.1192V27.7195H27.9065V17.1192H30.2099V28.4814C30.2099 29.3861 29.506 30.1195 28.6377 30.1195H19.3662C18.4979 30.1195 17.7939 29.3861 17.7939 28.4814V17.1192H20.0973Z",
      fill: "white"
    }
  )
] });
N9.displayName = "CashoutLarge";
const b9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M21 10C21 15.9567 14.4828 21.1893 12.5401 22.6167C12.2148 22.8558 11.7852 22.8558 11.4599 22.6167C9.51722 21.1893 3 15.9567 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.5355 9.21873H8.15169V8.0999H15.8485V9.21873H15.4457V10.4187H16.2141C16.6482 10.4187 17.0002 10.052 17.0002 9.59964V7.71899C17.0002 7.26662 16.6482 6.8999 16.2141 6.8999H7.78611C7.35195 6.8999 7 7.26662 7 7.71899V9.59964C7 10.052 7.35195 10.4187 7.78611 10.4187H8.5355V9.21873ZM13.5267 8.55471L13.525 9.15471C13.5238 9.57675 13.3625 9.98213 13.0758 10.2815C12.789 10.581 12.4001 10.7498 11.9944 10.7498C11.5888 10.7498 11.2008 10.581 10.9157 10.2815C10.6308 9.98213 10.4719 9.57675 10.4731 9.15471L10.4749 8.55471L11.6266 8.55471L11.6248 9.15471C11.6245 9.2605 11.6644 9.36134 11.7347 9.4352C11.8049 9.50895 11.8996 9.54981 11.9979 9.54981C12.0962 9.54981 12.1912 9.50895 12.2618 9.4352C12.3325 9.36134 12.373 9.2605 12.3733 9.15471L12.375 8.55471H13.5267ZM10.0487 8.5596V13.8598H13.9533V8.5596H15.105V14.2407C15.105 14.6931 14.753 15.0598 14.3188 15.0598H9.68311C9.24895 15.0598 8.897 14.693 8.897 14.2407V8.5596H10.0487Z",
      fill: "white"
    }
  )
] });
b9.displayName = "CashoutMedium";
const D9 = () => /* @__PURE__ */ e.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.5355 4.21873H2.15169V3.0999H9.84848V4.21873H9.44566V5.41873H10.2141C10.6482 5.41873 11.0002 5.05201 11.0002 4.59964V2.71899C11.0002 2.26662 10.6482 1.8999 10.2141 1.8999H1.78611C1.35195 1.8999 1 2.26662 1 2.71899V4.59964C1 5.05201 1.35195 5.41873 1.78611 5.41873H2.5355V4.21873ZM7.52671 3.55471L7.52497 4.15471C7.52375 4.57675 7.36254 4.98213 7.07585 5.28151C6.78905 5.58099 6.40011 5.74981 5.99444 5.74981C5.58877 5.74981 5.20081 5.58099 4.91574 5.28151C4.63077 4.98213 4.4719 4.57675 4.47312 4.15471L4.47486 3.55471L5.62655 3.55471L5.62482 4.15471C5.62451 4.2605 5.66437 4.36134 5.73468 4.4352C5.80488 4.50895 5.89963 4.54981 5.99791 4.54981C6.09619 4.54981 6.19117 4.50895 6.2618 4.4352C6.33253 4.36134 6.37297 4.2605 6.37328 4.15471L6.37501 3.55471H7.52671ZM4.04869 3.5596V8.85977H7.95327V3.5596H9.10496V9.24068C9.10496 9.69305 8.75301 10.0598 8.31885 10.0598H3.68311C3.24895 10.0598 2.897 9.69305 2.897 9.24068V3.5596H4.04869Z",
    fill: "#222222"
  }
) });
D9.displayName = "CashoutSmall";
const S9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M15.9375 9.79639L11.125 14.6089L8.9375 12.4214",
      stroke: "white",
      strokeWidth: "2",
      strokeLinecap: "square",
      strokeLinejoin: "round"
    }
  )
] });
S9.displayName = "Check";
const W9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12Z",
      fill: "#222222"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15.2953 10.1196L16.0024 9.4125L14.5882 7.99829L13.8811 8.7054L12.0007 10.5858L10.1203 8.7054L9.41324 7.99829L7.99902 9.4125L8.70613 10.1196L10.5865 12L8.70613 13.8803L7.99902 14.5874L9.41324 16.0017L10.1203 15.2946L12.0007 13.4142L13.8811 15.2946L14.5882 16.0017L16.0024 14.5874L15.2953 13.8803L13.4149 12L15.2953 10.1196Z",
      fill: "white"
    }
  )
] });
W9.displayName = "Close";
const A9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M21 10C21 15.9567 14.4828 21.1893 12.5401 22.6167C12.2148 22.8558 11.7852 22.8558 11.4599 22.6167C9.51722 21.1893 3 15.9567 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",
      fill: "#FF4444"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15.1742 7.77368C15.1503 7.75135 15.1258 7.72861 15.1013 7.70536C14.8004 7.42068 14.5603 7.19908 14.2756 7.49996L11.9679 9.92826L9.66033 7.50004C9.37565 7.19916 9.13538 7.42064 8.8345 7.70532C8.80994 7.72856 8.78553 7.75129 8.76156 7.77361C8.49188 8.02476 8.27822 8.22374 8.53966 8.50006L10.9325 11.0178L8.57357 13.4999C8.28889 13.8008 8.53425 14.0434 8.83514 14.3281C9.13602 14.6128 9.40953 14.8008 9.69421 14.4999L11.968 12.1074L14.2418 14.4999C14.5264 14.8008 14.7998 14.6128 15.1006 14.3281C15.4015 14.0434 15.6468 13.8007 15.3621 13.4999L13.0034 11.0179L15.3961 8.5001C15.6576 8.22378 15.4439 8.02482 15.1742 7.77368Z",
      fill: "white"
    }
  )
] });
A9.displayName = "DontWorkMedium";
const T9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M42 20C42 31.9135 28.9656 42.3787 25.0803 45.2335C24.4296 45.7115 23.5703 45.7115 22.9197 45.2335C19.0344 42.3787 6 31.9135 6 20C6 15.2261 7.89642 10.6477 11.2721 7.27208C14.6477 3.89642 19.2261 2 24 2C28.7739 2 33.3523 3.89642 36.7279 7.27208C40.1036 10.6477 42 15.2261 42 20Z",
      fill: "#FF4444"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M30.3488 15.5476C30.3009 15.5029 30.252 15.4575 30.2029 15.411C29.6011 14.8416 29.121 14.3984 28.5516 15.0002L23.9357 19.8572L19.3207 15.0009C18.7513 14.3991 18.2708 14.8421 17.669 15.4115C17.6199 15.4579 17.5711 15.5034 17.5231 15.5481C16.9838 16.0504 16.5564 16.4483 17.0793 17.001L21.8648 22.0363L17.1475 27.0001C16.5781 27.6018 17.0688 28.0871 17.6706 28.6565C18.2724 29.2258 18.8194 29.6018 19.3888 29.0001L23.9358 24.2155L28.4835 29.0007C29.0529 29.6025 29.5995 29.2263 30.2013 28.657C30.803 28.0876 31.2935 27.6023 30.7241 27.0006L26.0066 22.0364L30.7926 17.0004C31.3154 16.4478 30.8881 16.0499 30.3488 15.5476Z",
      fill: "white"
    }
  )
] });
T9.displayName = "DontWorkLarge";
const O9 = () => /* @__PURE__ */ e.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.17424 2.77368C9.15026 2.75135 9.12584 2.72861 9.10127 2.70536C8.80039 2.42068 8.56032 2.19908 8.27564 2.49996L5.96791 4.92826L3.66033 2.50004C3.37565 2.19916 3.13538 2.42064 2.8345 2.70532C2.80994 2.72856 2.78553 2.75129 2.76156 2.77361C2.49188 3.02476 2.27822 3.22374 2.53966 3.50006L4.93245 6.01781L2.57357 8.49992C2.28889 8.8008 2.53425 9.04344 2.83514 9.32812C3.13602 9.6128 3.40953 9.8008 3.69421 9.49991L5.96795 7.10738L8.24176 9.49994C8.52644 9.80082 8.79975 9.61276 9.10063 9.32808C9.40152 9.0434 9.64675 8.80075 9.36207 8.49987L7.00338 6.01786L9.39612 3.5001C9.65756 3.22378 9.4439 3.02482 9.17424 2.77368Z",
    fill: "#222222"
  }
) });
O9.displayName = "DontWorkSmall";
const P9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M42 20C42 31.9135 28.9656 42.3787 25.0803 45.2335C24.4296 45.7115 23.5703 45.7115 22.9197 45.2335C19.0344 42.3787 6 31.9135 6 20C6 15.2261 7.89642 10.6477 11.2721 7.27208C14.6477 3.89642 19.2261 2 24 2C28.7739 2 33.3523 3.89642 36.7279 7.27208C40.1036 10.6477 42 15.2261 42 20Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M25.75 16.2955V30H22.2727V16.2955H25.75ZM17.5 17.0909V14H30.5V17.0909H17.5Z",
      fill: "white"
    }
  )
] });
P9.displayName = "TerminalLarge";
const q9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M21 10C21 15.9567 14.4828 21.1893 12.5401 22.6167C12.2148 22.8558 11.7852 22.8558 11.4599 22.6167C9.51722 21.1893 3 15.9567 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M12.875 8.14773V15H11.1364V8.14773H12.875ZM8.75 8.54545V7H15.25V8.54545H8.75Z",
      fill: "white"
    }
  )
] });
q9.displayName = "TerminalMedium";
const I9 = () => /* @__PURE__ */ e.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx(
  "path",
  {
    d: "M6.875 3.14773V10H5.13636V3.14773H6.875ZM2.75 3.54545V2H9.25V3.54545H2.75Z",
    fill: "#222222"
  }
) });
I9.displayName = "TerminalSmall";
const U9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M30.0391 25.4078C29.3902 25.5131 28.7727 25.852 27.4701 26.8184C25.0783 28.5926 21.7251 31.0297 18.7919 33.1615C15.3977 35.6284 12.566 37.6866 12.4376 37.8354C11.5312 38.8859 11.3537 40.3951 11.9887 41.6512C12.0552 41.7827 12.2348 42.0469 12.6534 42.6629C13.0386 43.2297 13.6263 44.0944 14.5144 45.4274C18.0289 50.7022 18.3699 51.1507 19.1824 51.5652C19.647 51.8022 20.5542 51.9838 20.976 51.9242C21.456 51.8564 23.765 50.7005 24.536 50.3145L24.6541 50.2554C26.7304 49.2181 26.9082 50.7553 27.0064 51.6042C27.03 51.8081 27.049 51.9723 27.0886 52.0516C27.2204 52.3154 27.229 53.079 27.2291 64.5447C27.2291 72.4116 27.258 86.9142 27.3102 87.1889C27.5636 88.5257 28.6307 89.6266 29.9427 89.9053C30.5087 90.0255 64.8151 90.0346 65.447 89.9147C66.704 89.6763 67.6644 88.7914 68.1038 87.4667C68.1897 87.2076 68.2184 74.7219 68.2521 64.6289L68.2939 52.1179C68.2939 50.4128 68.3722 49.4729 70.8553 49.4729C70.9464 49.4729 71.3499 49.621 71.752 49.8021C71.9862 49.9076 72.2826 50.0505 72.618 50.2123C74.214 50.982 76.6935 52.1777 77.5667 51.7916C78.0747 51.5669 78.4715 51.0807 80.4295 47.7879C82.28 45.0066 83.8973 42.531 84.0234 42.2864C84.6464 41.0785 84.4575 39.5822 83.5479 38.5196C83.1449 38.0486 66.9886 26.0172 66.3656 25.7188C66.0998 25.5916 65.6482 25.4495 65.362 25.4031C64.7095 25.2972 30.693 25.3018 30.0391 25.4078ZM58.3297 29.6998C58.7495 28.031 58.5515 27.2088 57.6371 26.8268C57.2594 26.669 55.3159 26.7209 46.7926 26.7253L46.6033 26.7254C36.9233 26.7304 35.9223 26.7309 35.5619 27.2117C35.5203 27.2671 35.4873 27.3289 35.4504 27.3979L35.4442 27.4095C35.2186 27.8308 35.2527 28.922 35.5204 29.8447C36.6923 33.8853 39.5933 36.8787 43.5378 38.1174C44.4431 38.4016 44.8293 38.4386 46.891 38.4386C49.0908 38.4386 49.2886 38.4164 50.4312 38.042C52.5332 37.353 54.6675 35.8855 56.0183 34.2004C56.8254 33.1937 58.039 30.855 58.3297 29.6998Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M27.4701 26.8184C28.7727 25.852 29.3902 25.5131 30.0391 25.4078C30.693 25.3018 64.7095 25.2972 65.362 25.4031C65.6482 25.4495 66.0998 25.5916 66.3656 25.7188C66.9886 26.0172 83.1449 38.0486 83.5479 38.5196C84.4575 39.5822 84.6464 41.0785 84.0235 42.2864C83.8973 42.531 82.28 45.0066 80.4295 47.7879C78.4715 51.0807 78.0747 51.5669 77.5667 51.7916C76.6935 52.1777 74.214 50.982 72.618 50.2123L72.6178 50.2122C72.2825 50.0505 71.9862 49.9076 71.752 49.8021C71.3499 49.621 70.9464 49.4729 70.8553 49.4729C68.3722 49.4729 68.2939 50.4128 68.2939 52.1179L68.2868 54.246C53.8703 60.0292 33.698 57.4336 27.2318 54.8687C27.2262 54.8664 27.2206 54.8643 27.215 54.8621C27.1986 52.5132 27.1635 52.2016 27.0886 52.0516C27.049 51.9723 27.03 51.8081 27.0064 51.6042C26.9082 50.7553 26.7304 49.2181 24.6541 50.2554L24.536 50.3145C23.765 50.7005 21.456 51.8564 20.976 51.9242C20.5542 51.9838 19.647 51.8022 19.1824 51.5652C18.3699 51.1507 18.0289 50.7022 14.5144 45.4274C13.6263 44.0944 13.0386 43.2297 12.6534 42.6629C12.2348 42.0469 12.0552 41.7827 11.9887 41.6513C11.3537 40.3951 11.5312 38.8859 12.4376 37.8354C12.566 37.6866 15.3977 35.6284 18.7919 33.1615C21.7251 31.0297 25.0783 28.5926 27.4701 26.8184ZM57.6372 26.8268C58.5515 27.2088 58.7495 28.031 58.3297 29.6998C58.039 30.855 56.8254 33.1937 56.0183 34.2004C54.6675 35.8855 52.5332 37.353 50.4312 38.042C49.2886 38.4164 49.0908 38.4386 46.891 38.4386C44.8293 38.4386 44.4431 38.4016 43.5378 38.1174C39.5933 36.8787 36.6923 33.8853 35.5204 29.8447C35.2527 28.922 35.2186 27.8308 35.4442 27.4095L35.4504 27.3979L35.4504 27.3979C35.4873 27.3289 35.5203 27.2671 35.5619 27.2117C35.9223 26.7309 36.9233 26.7304 46.6033 26.7254L46.7926 26.7253C48.7613 26.7243 50.379 26.7207 51.7074 26.7178C56.1302 26.7081 57.3467 26.7055 57.6372 26.8268Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M54.6049 14.3888C54.6049 10.8604 51.6968 8 48.1096 8C44.5223 8 41.6143 10.8604 41.6143 14.3888C41.6143 17.9173 44.5223 20.7777 48.1096 20.7777V27.0107",
      stroke: "#48587D",
      strokeWidth: "4"
    }
  ),
  /* @__PURE__ */ e.jsx("path", { d: "M58.5566 28.312H35.2979", stroke: "#48587D", strokeWidth: "3.14286" })
] });
U9.displayName = "Clothing";
const $9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M78.1639 29.4719H85V57.1859C70.6875 57.1859 59.6631 57.1859 45.3506 57.1859V65.7817",
      stroke: "#ECF0F3",
      strokeWidth: "4"
    }
  ),
  /* @__PURE__ */ e.jsx("rect", { x: "11", y: "14", width: "68.6075", height: "26.158", rx: "4.9998", fill: "#00AF66" }),
  /* @__PURE__ */ e.jsx("rect", { x: "40.3037", y: "65.563", width: "10", height: "20", rx: "2", fill: "#48587D" })
] });
$9.displayName = "ConstructionMaterials";
const Y9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.05592 30.3821H88.9441C89.5248 30.3821 90 30.8572 90 31.438V38.6946C90 40.4369 88.5746 41.8623 86.8323 41.8623H9.16765C7.42538 41.8623 6 40.4369 6 38.6946V31.438C6 30.8572 6.47516 30.3821 7.05592 30.3821Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21.95 84.1928H74.0526C77.2179 84.1928 79.8604 81.9102 80.3207 78.7785L85.4381 41.8621H10.5645L15.6819 78.7785C16.1421 81.9102 18.7848 84.1928 21.95 84.1928ZM45.3615 70.9468V54.0579C45.3615 52.6061 46.5494 51.4181 48.0013 51.4181C49.4532 51.4181 50.6411 52.6061 50.6411 54.0579V70.9468C50.6411 72.3986 49.4532 73.5866 48.0013 73.5866C46.5494 73.5866 45.3615 72.3986 45.3615 70.9468ZM29.0178 70.9469V54.0578C29.0178 52.606 30.2056 51.4181 31.6575 51.4181C33.1094 51.4181 34.2974 52.606 34.2974 54.0578V70.9469C34.2974 72.3988 33.1096 73.5866 31.6577 73.5866C30.2059 73.5866 29.0178 72.3988 29.0178 70.9469ZM61.7051 70.9468V54.0579C61.7051 52.6061 62.8931 51.4181 64.3449 51.4181C65.7968 51.4181 66.9847 52.6061 66.9847 54.0579V70.9468C66.9847 72.3986 65.7968 73.5866 64.3449 73.5866C62.8931 73.5866 61.7051 72.3986 61.7051 70.9468Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M48.1385 37.9548L28.7264 18.219C28.384 17.871 28.3887 17.3062 28.7367 16.964L33.7213 12.0611C34.0694 11.7188 34.6342 11.7234 34.9765 12.0715L54.3886 31.8072C56.0792 33.5261 56.0561 36.3154 54.3373 38.006L54.3372 38.0061C52.6185 39.6967 49.8291 39.6736 48.1385 37.9548Z",
      fill: "#48587D"
    }
  )
] });
Y9.displayName = "Food";
const G9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx("rect", { x: "59.5586", y: "75.1758", width: "6.35318", height: "14.8241", rx: "2", fill: "#48587D" }),
  /* @__PURE__ */ e.jsx(
    "rect",
    {
      width: "6.35318",
      height: "14.8241",
      rx: "2",
      transform: "matrix(1 0 0 -1 30 89.9998)",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M22.5342 39.6152H73.4667V79.2676C73.4667 82.7733 70.6248 85.6152 67.1191 85.6152H28.8818C25.3761 85.6152 22.5342 82.7733 22.5342 79.2676V39.6152Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M22.5342 39.6152H73.4667V12.3474C73.4667 8.8417 70.6248 5.99978 67.1191 5.99978H28.8818C25.3761 5.99978 22.5342 8.84171 22.5342 12.3474V39.6152Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx("rect", { x: "30", y: "19.7981", width: "4.0746", height: "10.1865", rx: "0.985807", fill: "#48587D" }),
  /* @__PURE__ */ e.jsx("rect", { x: "30", y: "48.3206", width: "4.0746", height: "18.7988", rx: "0.985807", fill: "#ECF0F3" })
] });
G9.displayName = "Fridge";
const J9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M48.1581 20.0327L67.664 28.1121C67.7692 28.1557 67.8441 28.2306 67.8877 28.3358L75.9673 47.8417C76.0109 47.9469 76.0109 48.0527 75.9673 48.1579L67.8877 67.6638C67.8441 67.769 67.7692 67.8438 67.664 67.8875L48.1581 75.9671C48.0529 76.0107 47.9471 76.0107 47.8419 75.9671L28.336 67.8875C28.2308 67.8438 28.156 67.769 28.1123 67.6638L20.0327 48.1579C19.9891 48.0527 19.9891 47.9469 20.0327 47.8417L28.1123 28.3358C28.156 28.2306 28.2308 28.1557 28.336 28.1121L47.8419 20.0327C47.9471 19.9891 48.0529 19.9891 48.1581 20.0327Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M27.9722 20.2034L42.5064 14.1832C42.69 14.1072 42.8035 13.9373 42.8035 13.7387C42.8035 13.54 42.69 13.3702 42.5064 13.2942L32.2293 9.03706C31.9844 8.93555 31.7023 9.0527 31.6008 9.29757L27.3437 19.5749C27.2677 19.7585 27.3073 19.9586 27.4478 20.0993C27.5885 20.2398 27.7887 20.2795 27.9722 20.2034Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M53.4924 14.1832L68.0269 20.2034C68.2104 20.2795 68.4108 20.2398 68.5512 20.0993C68.6917 19.9586 68.7314 19.7585 68.6554 19.5749L64.3983 9.29757C64.297 9.0527 64.0146 8.93555 63.7698 9.03706L53.4924 13.2942C53.3089 13.3702 53.1953 13.54 53.1953 13.7387C53.1953 13.9373 53.3089 14.1072 53.4924 14.1832Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M75.7948 27.972L81.8153 42.5067C81.8914 42.6902 82.0612 42.8037 82.2599 42.8037C82.4586 42.8037 82.6284 42.6902 82.7044 42.5067L86.9615 32.2293C87.063 31.9845 86.9459 31.7023 86.701 31.6008L76.4234 27.3434C76.2398 27.2674 76.0397 27.3071 75.899 27.4476C75.7585 27.5883 75.7188 27.7884 75.7948 27.972Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M81.8153 53.4924L75.7948 68.0274C75.7188 68.2109 75.7585 68.4112 75.899 68.5517C76.0397 68.6922 76.2398 68.7319 76.4234 68.6559L86.701 64.3985C86.9459 64.2973 87.063 64.0149 86.9615 63.77L82.7044 53.4924C82.6284 53.3089 82.4586 53.1953 82.2599 53.1953C82.0612 53.1953 81.8914 53.3089 81.8153 53.4924Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M68.0271 75.7958L53.4924 81.8163C53.3089 81.8924 53.1953 82.0621 53.1953 82.2608C53.1953 82.4595 53.3089 82.6294 53.4924 82.7054L63.7698 86.9625C64.0146 87.064 64.2968 86.9468 64.3983 86.702L68.6556 76.4244C68.7317 76.2408 68.692 76.0407 68.5515 75.9C68.4108 75.7595 68.2106 75.7198 68.0271 75.7958Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M42.5059 81.8163L27.9712 75.7958C27.7877 75.7198 27.5876 75.7595 27.4468 75.9C27.3064 76.0407 27.2667 76.2408 27.3427 76.4244L31.6 86.702C31.7013 86.9468 31.9837 87.064 32.2286 86.9625L42.5059 82.7054C42.6895 82.6294 42.803 82.4595 42.803 82.2608C42.803 82.0621 42.6895 81.8924 42.5059 81.8163Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.2032 68.0274L14.1827 53.4924C14.1067 53.3089 13.9369 53.1953 13.7382 53.1953C13.5395 53.1953 13.3697 53.3089 13.2937 53.4924L9.03657 63.77C8.93506 64.0149 9.05221 64.297 9.29708 64.3985L19.5747 68.6559C19.7582 68.7319 19.9584 68.6922 20.0991 68.5517C20.2396 68.411 20.2792 68.2109 20.2032 68.0274Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.1827 42.5067L20.2032 27.972C20.2792 27.7884 20.2396 27.5883 20.0991 27.4476C19.9584 27.3071 19.7582 27.2674 19.5747 27.3434L9.29708 31.6008C9.05221 31.702 8.93506 31.9845 9.03657 32.2293L13.2937 42.5067C13.3697 42.6902 13.5395 42.8037 13.7382 42.8037C13.9369 42.8037 14.1067 42.6902 14.1827 42.5067Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.1613 25.9242L22.3869 22.517C22.4482 22.4918 22.492 22.448 22.5172 22.3866L25.9245 14.1611C25.9687 14.054 25.9324 13.9335 25.836 13.869C25.7395 13.8046 25.6142 13.8168 25.5322 13.8989L13.8991 25.532C13.8171 25.614 13.8048 25.7393 13.8693 25.8357C13.9337 25.9322 14.0543 25.9687 14.1613 25.9242Z",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M39.6828 8.46281L47.9076 11.8696C47.969 11.8951 48.0306 11.8951 48.0919 11.8696L56.3167 8.46281C56.4238 8.41855 56.4832 8.30743 56.4608 8.19365C56.4382 8.07988 56.3408 8 56.2248 8H39.7747C39.6587 8 39.5613 8.08012 39.5389 8.19365C39.5163 8.30743 39.5757 8.41855 39.6828 8.46281Z",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M70.0763 14.1614L73.4833 22.387C73.5085 22.4483 73.5523 22.4921 73.6136 22.5174L81.8394 25.9244C81.9465 25.9689 82.0672 25.9323 82.1317 25.8358C82.1959 25.7394 82.1837 25.6141 82.1016 25.5321L70.4686 13.8995C70.3868 13.8175 70.2615 13.805 70.165 13.8694C70.0685 13.9337 70.032 14.0541 70.0763 14.1614Z",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M87.5375 39.6821L84.1305 47.9076C84.105 47.9689 84.105 48.0305 84.1305 48.0919L87.5375 56.3172C87.5817 56.4242 87.6929 56.4839 87.8066 56.4613C87.9204 56.4387 88.0003 56.3412 88.0003 56.2253V39.774C88.0003 39.658 87.9202 39.5606 87.8066 39.5382C87.6929 39.5156 87.5817 39.575 87.5375 39.6821Z",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M81.8386 70.0753L73.613 73.4823C73.5517 73.5076 73.5079 73.5514 73.4827 73.6127L70.0754 81.8387C70.0309 81.9458 70.0677 82.0665 70.1639 82.1307C70.2604 82.1952 70.3857 82.1829 70.4677 82.1009L82.1005 70.4676C82.1826 70.3858 82.1951 70.2605 82.1306 70.164C82.0664 70.0676 81.9459 70.031 81.8386 70.0753Z",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M56.3179 87.537L48.0926 84.13C48.0313 84.1045 47.9697 84.1045 47.9083 84.13L39.683 87.537C39.576 87.5812 39.5163 87.6924 39.5389 87.8062C39.5615 87.9199 39.659 87.9998 39.7749 87.9998H56.226C56.342 87.9998 56.4394 87.9197 56.4618 87.8062C56.4844 87.6924 56.425 87.5812 56.3179 87.537Z",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M25.925 81.8385L22.5177 73.6127C22.4924 73.5514 22.4487 73.5076 22.3873 73.4823L14.1613 70.0748C14.0542 70.0306 13.9337 70.0669 13.8693 70.1633C13.8048 70.2598 13.8171 70.3851 13.8991 70.4672L25.5326 82.1007C25.6147 82.1827 25.74 82.195 25.8364 82.1305C25.9329 82.0663 25.9695 81.9456 25.925 81.8385Z",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.46304 56.3177L11.8701 48.0921C11.8956 48.0307 11.8956 47.9692 11.8701 47.9078L8.4628 39.6818C8.41854 39.5748 8.30741 39.5154 8.19363 39.538C8.0801 39.5606 8 39.6577 8 39.7737L8.00023 56.2258C8.00023 56.3417 8.08033 56.4391 8.19387 56.4618C8.30764 56.4841 8.41878 56.4247 8.46304 56.3177Z",
      fill: "#48587D"
    }
  )
] });
J9.displayName = "Jewelry";
const z9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "rect",
    {
      x: "24.9561",
      y: "9.5",
      width: "46.0886",
      height: "77.9993",
      rx: "5.11564",
      fill: "#00AF66",
      stroke: "#00AF66",
      strokeWidth: "4"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M22.9561 71.7788H73.0447V82.3832C73.0447 86.3131 69.8589 89.4989 65.929 89.4989H30.0717C26.1418 89.4989 22.9561 86.3131 22.9561 82.3832V71.7788Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx("circle", { cx: "48.4229", cy: "80.3857", r: "4", fill: "#ECF0F3" }),
  /* @__PURE__ */ e.jsx("rect", { x: "26", y: "10.6721", width: "44", height: "61.1067", rx: "4.74376", fill: "#ECF0F3" }),
  /* @__PURE__ */ e.jsx("rect", { x: "43.4473", y: "15.3491", width: "9.10702", height: "2.37188", rx: "1.18594", fill: "#48587D" })
] });
z9.displayName = "PhonesAndAccessories";
const K9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "rect",
    {
      x: "65",
      y: "72.7783",
      width: "6",
      height: "14",
      rx: "2",
      transform: "rotate(-20 65 72.7783)",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "rect",
    {
      width: "6",
      height: "14",
      rx: "2",
      transform: "matrix(-0.939693 -0.34202 -0.34202 0.939693 34.7422 72.7783)",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M23.2502 28.4505C22.0175 19.5651 30.7747 11.644 40.0567 11.644H56.7396C66.0216 11.644 74.6188 19.0804 73.5461 28.4505C72.4733 37.8206 69.1444 58.8622 69.1444 58.8622H27.6519C27.6519 58.8622 24.4829 37.3359 23.2502 28.4505Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M72.2073 76.2687H49.0003H23.7926C18.7991 76.2687 14.5099 72.721 13.5732 67.8161L8.03809 38.8294C7.80261 37.5962 8.74788 36.4534 10.0034 36.4534H17.4419C20.3768 36.4534 22.9809 38.3357 23.9013 41.1226L28.8363 56.0645C29.2694 57.376 30.4948 58.2618 31.876 58.2618H49.0003H64.1239C65.505 58.2618 66.7305 57.376 67.1636 56.0645L72.0985 41.1226C73.019 38.3357 75.623 36.4534 78.558 36.4534H85.9965C87.252 36.4534 88.1973 37.5962 87.9618 38.8294L82.4266 67.8161C81.49 72.721 77.2008 76.2687 72.2073 76.2687Z",
      fill: "#ECF0F3"
    }
  )
] });
K9.displayName = "Furniture";
const X9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx("circle", { cx: "52", cy: "48", r: "40", fill: "#48587D" }),
  /* @__PURE__ */ e.jsx("circle", { cx: "48", cy: "48", r: "40", fill: "#ECF0F3" }),
  /* @__PURE__ */ e.jsx("circle", { cx: "48", cy: "48", r: "36", stroke: "#00AF66", strokeWidth: "8" }),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M53 31.4761V65.3646H46.2039V39.4187L39 44.2805V37.06L46.7476 31.4761H53Z",
      fill: "#00AF66"
    }
  )
] });
X9.displayName = "OneSomoni";
const Q9 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx("rect", { x: "9", y: "14.6382", width: "78", height: "28", rx: "3.25", fill: "#ECF0F3" }),
  /* @__PURE__ */ e.jsx("rect", { x: "16", y: "21.6382", width: "64", height: "14", rx: "3.25", fill: "#48587D" }),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M28.4072 81.3623C26.6123 81.3623 25.1572 79.9072 25.1572 78.1123L25.1572 21.637H70.8429V78.1123C70.8429 79.9072 69.3879 81.3623 67.5929 81.3623H28.4072Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "circle",
    {
      cx: "3.25",
      cy: "3.25",
      r: "3.25",
      transform: "matrix(0 1 1 0 44.4062 62.0483)",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "circle",
    {
      cx: "47.6562",
      cy: "44.1733",
      r: "13",
      transform: "rotate(-90 47.6562 44.1733)",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M44.7272 21.6384H50.5853C50.791 22.0649 50.9062 22.5431 50.9062 23.0483C50.9062 24.8433 49.4512 26.2983 47.6562 26.2983C45.8613 26.2983 44.4062 24.8433 44.4062 23.0483C44.4062 22.5431 44.5215 22.0649 44.7272 21.6384Z",
      fill: "#ECF0F3"
    }
  )
] });
Q9.displayName = "DepositReplenishment";
const e5 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#clip0_4359_16588)", children: [
    /* @__PURE__ */ e.jsx("g", { filter: "url(#filter0_b_4359_16588)", children: /* @__PURE__ */ e.jsx(
      "circle",
      {
        cx: "48.0015",
        cy: "47.9998",
        r: "32",
        transform: "rotate(22 48.0015 47.9998)",
        stroke: "#ECF0F3",
        strokeWidth: "16"
      }
    ) }),
    /* @__PURE__ */ e.jsxs("g", { filter: "url(#filter1_b_4359_16588)", children: [
      /* @__PURE__ */ e.jsx("mask", { id: "path-2-inside-1_4359_16588", fill: "white", children: /* @__PURE__ */ e.jsx("path", { d: "M85.0889 62.9841C82.6446 69.0339 78.7575 74.3939 73.7665 78.5967C68.7754 82.7995 62.8321 85.7176 56.4545 87.0965C50.077 88.4754 43.459 88.2732 37.1775 86.5075C30.8961 84.7419 25.1419 81.4664 20.4167 76.9667C15.6916 72.467 12.139 66.8797 10.0686 60.692C7.9982 54.5043 7.47296 47.9041 8.53864 41.4668C9.60432 35.0295 12.2286 28.9507 16.1826 23.7603C20.1366 18.5699 25.3003 14.4256 31.2234 11.6887L37.9347 26.2132C34.3808 27.8553 31.2826 30.3419 28.9102 33.4561C26.5378 36.5703 24.9632 40.2177 24.3238 44.08C23.6844 47.9424 23.9995 51.9025 25.2418 55.6152C26.484 59.3278 28.6156 62.6802 31.4507 65.38C34.2857 68.0798 37.7382 70.0451 41.5071 71.1044C45.276 72.1638 49.2468 72.2851 53.0733 71.4578C56.8998 70.6305 60.4659 68.8797 63.4605 66.358C66.4551 63.8363 68.7874 60.6203 70.2539 56.9904L85.0889 62.9841Z" }) }),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M85.0889 62.9841C82.6446 69.0339 78.7575 74.3939 73.7665 78.5967C68.7754 82.7995 62.8321 85.7176 56.4545 87.0965C50.077 88.4754 43.459 88.2732 37.1775 86.5075C30.8961 84.7419 25.1419 81.4664 20.4167 76.9667C15.6916 72.467 12.139 66.8797 10.0686 60.692C7.9982 54.5043 7.47296 47.9041 8.53864 41.4668C9.60432 35.0295 12.2286 28.9507 16.1826 23.7603C20.1366 18.5699 25.3003 14.4256 31.2234 11.6887L37.9347 26.2132C34.3808 27.8553 31.2826 30.3419 28.9102 33.4561C26.5378 36.5703 24.9632 40.2177 24.3238 44.08C23.6844 47.9424 23.9995 51.9025 25.2418 55.6152C26.484 59.3278 28.6156 62.6802 31.4507 65.38C34.2857 68.0798 37.7382 70.0451 41.5071 71.1044C45.276 72.1638 49.2468 72.2851 53.0733 71.4578C56.8998 70.6305 60.4659 68.8797 63.4605 66.358C66.4551 63.8363 68.7874 60.6203 70.2539 56.9904L85.0889 62.9841Z",
          stroke: "#48587D",
          strokeWidth: "32",
          mask: "url(#path-2-inside-1_4359_16588)"
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("g", { filter: "url(#filter2_b_4359_16588)", children: [
      /* @__PURE__ */ e.jsx("mask", { id: "path-3-inside-2_4359_16588", fill: "white", children: /* @__PURE__ */ e.jsx("path", { d: "M85.0889 62.9841C82.9626 68.2469 79.7405 72.997 75.6368 76.9185C71.5332 80.8401 66.6419 83.8433 61.288 85.7287C55.9341 87.6141 50.2403 88.3385 44.5848 87.8537C38.9294 87.3688 33.442 85.6859 28.4871 82.9167C23.5323 80.1476 19.2236 76.3556 15.8473 71.7928C12.4709 67.2299 10.1044 62.0008 8.90489 56.4528C7.70538 50.9049 7.70037 45.1651 8.8902 39.6151C10.08 34.0651 12.4374 28.8318 15.8058 24.2631L28.6841 33.7578C26.6631 36.499 25.2486 39.639 24.5347 42.969C23.8208 46.299 23.8238 49.7429 24.5435 53.0716C25.2633 56.4004 26.6832 59.5379 28.709 62.2756C30.7347 65.0133 33.32 67.2885 36.2929 68.95C39.2658 70.6115 42.5583 71.6212 45.9515 71.9121C49.3448 72.203 52.7611 71.7684 55.9734 70.6372C59.1857 69.5059 62.1205 67.704 64.5827 65.3511C67.0449 62.9981 68.9781 60.1481 70.2539 56.9904L85.0889 62.9841Z" }) }),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M85.0889 62.9841C82.9626 68.2469 79.7405 72.997 75.6368 76.9185C71.5332 80.8401 66.6419 83.8433 61.288 85.7287C55.9341 87.6141 50.2403 88.3385 44.5848 87.8537C38.9294 87.3688 33.442 85.6859 28.4871 82.9167C23.5323 80.1476 19.2236 76.3556 15.8473 71.7928C12.4709 67.2299 10.1044 62.0008 8.90489 56.4528C7.70538 50.9049 7.70037 45.1651 8.8902 39.6151C10.08 34.0651 12.4374 28.8318 15.8058 24.2631L28.6841 33.7578C26.6631 36.499 25.2486 39.639 24.5347 42.969C23.8208 46.299 23.8238 49.7429 24.5435 53.0716C25.2633 56.4004 26.6832 59.5379 28.709 62.2756C30.7347 65.0133 33.32 67.2885 36.2929 68.95C39.2658 70.6115 42.5583 71.6212 45.9515 71.9121C49.3448 72.203 52.7611 71.7684 55.9734 70.6372C59.1857 69.5059 62.1205 67.704 64.5827 65.3511C67.0449 62.9981 68.9781 60.1481 70.2539 56.9904L85.0889 62.9841Z",
          stroke: "#00AF66",
          strokeWidth: "32",
          mask: "url(#path-3-inside-2_4359_16588)"
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("defs", { children: [
    /* @__PURE__ */ e.jsxs(
      "filter",
      {
        id: "filter0_b_4359_16588",
        x: "0.209961",
        y: "0.208008",
        width: "95.583",
        height: "95.5835",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [
          /* @__PURE__ */ e.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ e.jsx("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "3.89062" }),
          /* @__PURE__ */ e.jsx("feComposite", { in2: "SourceAlpha", operator: "in", result: "effect1_backgroundBlur_4359_16588" }),
          /* @__PURE__ */ e.jsx(
            "feBlend",
            {
              mode: "normal",
              in: "SourceGraphic",
              in2: "effect1_backgroundBlur_4359_16588",
              result: "shape"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "filter",
      {
        id: "filter1_b_4359_16588",
        x: "0.220704",
        y: "3.90772",
        width: "92.6494",
        height: "91.8735",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [
          /* @__PURE__ */ e.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ e.jsx("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "3.89062" }),
          /* @__PURE__ */ e.jsx("feComposite", { in2: "SourceAlpha", operator: "in", result: "effect1_backgroundBlur_4359_16588" }),
          /* @__PURE__ */ e.jsx(
            "feBlend",
            {
              mode: "normal",
              in: "SourceGraphic",
              in2: "effect1_backgroundBlur_4359_16588",
              result: "shape"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "filter",
      {
        id: "filter2_b_4359_16588",
        x: "0.220704",
        y: "16.4819",
        width: "92.6494",
        height: "79.2993",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [
          /* @__PURE__ */ e.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ e.jsx("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "3.89062" }),
          /* @__PURE__ */ e.jsx("feComposite", { in2: "SourceAlpha", operator: "in", result: "effect1_backgroundBlur_4359_16588" }),
          /* @__PURE__ */ e.jsx(
            "feBlend",
            {
              mode: "normal",
              in: "SourceGraphic",
              in2: "effect1_backgroundBlur_4359_16588",
              result: "shape"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e.jsx("clipPath", { id: "clip0_4359_16588", children: /* @__PURE__ */ e.jsx("rect", { width: "96", height: "96", fill: "white" }) })
  ] })
] });
e5.displayName = "IncomeSharing";
const C5 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M20.2939 18.5032C20.2939 12.7024 24.9964 8 30.7971 8H59.4945C60.8905 8 62.229 8.55578 63.2143 9.54456L80.3701 26.7595C81.3511 27.7439 81.9019 29.0769 81.9019 30.4666V77.4968C81.9019 83.2976 77.1994 88 71.3987 88H30.7971C24.9964 88 20.2939 83.2976 20.2939 77.4968V18.5032Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx("g", { filter: "url(#filter0_b_4359_16587)", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M9.0957 16.3925C9.0957 15.6235 9.71917 15 10.4883 15H30.3321C31.1011 15 31.7246 15.6235 31.7246 16.3925V30.1698C31.7246 34.0626 29.4085 37.5822 25.8333 39.1223L20.4102 41.4584L14.9871 39.1223C11.4118 37.5822 9.0957 34.0626 9.0957 30.1698V16.3925Z",
      fill: "#00AF66"
    }
  ) }),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M24.7741 23.8682L18.7741 29.8682L16.0469 27.1409",
      stroke: "white",
      strokeWidth: "4",
      strokeLinecap: "square",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M33.2571 44.7407H34.1143",
      stroke: "#48587D",
      strokeWidth: "4",
      strokeLinecap: "square",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ e.jsx("path", { d: "M44.1143 44.7407H68.1143", stroke: "#00AF66", strokeWidth: "4", strokeLinecap: "square" }),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M33.2571 56.7407H34.1143",
      stroke: "#48587D",
      strokeWidth: "4",
      strokeLinecap: "square",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ e.jsx("path", { d: "M44.1143 56.7407H68.1143", stroke: "#00AF66", strokeWidth: "4", strokeLinecap: "square" }),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M33.2571 68.7407H34.1143",
      stroke: "#48587D",
      strokeWidth: "4",
      strokeLinecap: "square",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ e.jsx("path", { d: "M44.1143 68.7407H68.1143", stroke: "#00AF66", strokeWidth: "4", strokeLinecap: "square" }),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M62.8057 9.13623L80.1304 26.5042H73.3088C67.5081 26.5042 62.8057 21.8017 62.8057 16.001V9.13623Z",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs(
    "filter",
    {
      id: "filter0_b_4359_16587",
      x: "1.06609",
      y: "6.97039",
      width: "38.6881",
      height: "42.5177",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB",
      children: [
        /* @__PURE__ */ e.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
        /* @__PURE__ */ e.jsx("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "4.01481" }),
        /* @__PURE__ */ e.jsx("feComposite", { in2: "SourceAlpha", operator: "in", result: "effect1_backgroundBlur_4359_16587" }),
        /* @__PURE__ */ e.jsx(
          "feBlend",
          {
            mode: "normal",
            in: "SourceGraphic",
            in2: "effect1_backgroundBlur_4359_16587",
            result: "shape"
          }
        )
      ]
    }
  ) })
] });
C5.displayName = "Insurance";
const l5 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx("rect", { x: "6", y: "20.6792", width: "84", height: "66.0984", rx: "5.36839", fill: "#ECF0F3" }),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M6 26.0476C6 23.0827 8.40351 20.6792 11.3684 20.6792H84.6316C87.5965 20.6792 90 23.0827 90 26.0476V51.2655C90 53.6981 88.3643 55.8267 86.0137 56.4529L49.3821 66.2126C48.4765 66.4539 47.5235 66.4539 46.6179 66.2126L9.98632 56.4529C7.63572 55.8267 6 53.6981 6 51.2655V26.0476Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M64.7523 20.6803V17.3274C64.7523 14.3625 62.3488 11.959 59.3839 11.959H36.6125C33.6477 11.959 31.2441 14.3625 31.2441 17.3274V20.6803",
      stroke: "#48587D",
      strokeWidth: "6"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M49.006 49.0688V52.6328H46.41V49.0688H49.006ZM46.41 36.5508V33.3608H49.006V36.5508H46.41ZM45.134 46.0768C45.2807 46.6048 45.5814 47.0375 46.036 47.3748C46.5054 47.6975 47.1214 47.8588 47.884 47.8588C48.3534 47.8588 48.764 47.7855 49.116 47.6388C49.4827 47.4921 49.7614 47.2795 49.952 47.0008C50.1427 46.7221 50.238 46.4068 50.238 46.0548C50.238 45.6001 50.084 45.2408 49.776 44.9768C49.4827 44.7128 49.05 44.5368 48.478 44.4488L46.124 44.0968C44.804 43.8915 43.7994 43.4441 43.11 42.7548C42.4207 42.0508 42.076 41.1195 42.076 39.9608C42.076 39.0515 42.3107 38.2448 42.78 37.5408C43.264 36.8368 43.9167 36.2868 44.738 35.8908C45.574 35.4948 46.5127 35.2968 47.554 35.2968C49.138 35.2968 50.436 35.6855 51.448 36.4628C52.4747 37.2255 53.0834 38.2888 53.274 39.6528H50.084C49.9227 39.1101 49.6294 38.7068 49.204 38.4428C48.7787 38.1641 48.2287 38.0248 47.554 38.0248C47.1434 38.0248 46.762 38.0981 46.41 38.2448C46.0727 38.3768 45.8087 38.5748 45.618 38.8388C45.4274 39.0881 45.332 39.3888 45.332 39.7408C45.332 40.1368 45.464 40.4595 45.728 40.7088C46.0067 40.9435 46.4247 41.1048 46.982 41.1928L49.314 41.5448C50.6047 41.7501 51.624 42.2048 52.372 42.9088C53.12 43.5981 53.494 44.5661 53.494 45.8128C53.494 46.7808 53.2594 47.6241 52.79 48.3428C52.3354 49.0468 51.6827 49.5968 50.832 49.9928C49.996 50.3741 49.006 50.5648 47.862 50.5648C46.7767 50.5648 45.8014 50.3888 44.936 50.0368C44.0854 49.6701 43.396 49.1495 42.868 48.4748C42.3547 47.8001 42.032 47.0008 41.9 46.0768H45.134Z",
      fill: "#ECF0F3"
    }
  )
] });
l5.displayName = "Investments";
const r5 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M79.2292 85.2585H68.4851C68.075 85.2585 67.6783 85.1128 67.3658 84.8474L62.63 80.8255C61.4034 79.7838 62.1195 77.3576 63.5934 76.7116C66.3967 75.4831 69.1108 73.3327 71.0007 71.0056C71.8957 69.9035 73.807 69.8943 74.4835 71.1426L80.7495 82.7055C81.3739 83.8576 80.5397 85.2585 79.2292 85.2585Z",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M16.51 85.2585H27.2542C27.6642 85.2585 28.0609 85.1128 28.3735 84.8474L33.1092 80.8255C34.3358 79.7838 33.6198 77.3576 32.1458 76.7116C29.3425 75.4831 26.6284 73.3327 24.7386 71.0056C23.8436 69.9035 21.9322 69.8943 21.2558 71.1426L14.9897 82.7055C14.3654 83.8576 15.1996 85.2585 16.51 85.2585Z",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M81.156 33.0249C81.5466 33.4154 82.1837 33.4181 82.5372 32.9937C83.2455 32.1433 83.8226 31.1894 84.2476 30.1633C84.8004 28.8287 85.085 27.3984 85.085 25.9538C85.085 24.5093 84.8004 23.0789 84.2476 21.7443C83.6948 20.4097 82.8846 19.1971 81.8631 18.1756C80.8417 17.1542 79.6291 16.3439 78.2945 15.7911C76.9599 15.2383 75.5295 14.9538 74.085 14.9538C72.6404 14.9538 71.21 15.2383 69.8754 15.7911C68.8494 16.2161 67.8955 16.7933 67.045 17.5016C66.6207 17.8551 66.6234 18.4922 67.0139 18.8827L74.085 25.9538L81.156 33.0249Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M28.7202 18.8825C29.1107 18.492 29.1134 17.8549 28.689 17.5014C27.8386 16.7931 26.8847 16.2159 25.8586 15.7909C24.5241 15.2381 23.0937 14.9536 21.6491 14.9536C20.2046 14.9536 18.7742 15.2381 17.4396 15.7909C16.105 16.3437 14.8924 17.154 13.8709 18.1754C12.8495 19.1969 12.0392 20.4095 11.4864 21.7441C10.9336 23.0787 10.6491 24.5091 10.6491 25.9536C10.6491 27.3982 10.9336 28.8286 11.4864 30.1631C11.9114 31.1892 12.4886 32.1431 13.1969 32.9935C13.5504 33.4179 14.1875 33.4152 14.5781 33.0247L21.6491 25.9536L28.7202 18.8825Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx("circle", { cx: "47.8671", cy: "52.4843", r: "32.7744", fill: "#ECF0F3" }),
  /* @__PURE__ */ e.jsx("circle", { cx: "47.8671", cy: "52.4843", r: "28.7744", fill: "#ECF0F3", stroke: "#00AF66", strokeWidth: "8" }),
  /* @__PURE__ */ e.jsx("path", { d: "M44.9443 35.0952H50.1498V54.7748H44.9443L44.9443 35.0952Z", fill: "#00AF66" }),
  /* @__PURE__ */ e.jsx("circle", { cx: "47.5468", cy: "54.2475", r: "4.33785", fill: "#48587D" }),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M46.4404 56.292L48.8943 53.8381L62.5927 67.4158L60.1388 69.8696L46.4404 56.292Z",
      fill: "#48587D"
    }
  )
] });
r5.displayName = "Npl";
const t5 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M73.2461 62.7437H85.831V74.8745C85.831 76.5027 84.4988 77.8349 82.8705 77.8349H76.2066C74.5783 77.8349 73.2461 76.5027 73.2461 74.8745V62.7437Z",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M10.1689 61.334H22.7538V74.8747C22.7538 76.503 21.4216 77.8352 19.7934 77.8352H13.1294C11.5012 77.8352 10.1689 76.503 10.1689 74.8747V61.334Z",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M48.0003 44.4976H78.9665L74.0009 33.349C72.0551 28.9804 68.4367 26.8661 63.6572 26.7396L48.0003 26.3252L32.3435 26.7397C27.5639 26.8662 23.9455 28.9804 21.9998 33.349L17.0342 44.4976H48.0003Z",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M11.3681 51.2338H84.6319C86.4844 51.2338 88 49.7182 88 47.8657V47.8656C88 46.0131 86.4844 44.4976 84.6319 44.4976H11.3681C9.51558 44.4976 8 46.0131 8 47.8656V47.8657C8 49.7182 9.51558 51.2338 11.3681 51.2338Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M47.9996 44.4975H73.8733L70.3502 36.1154C68.9473 32.7774 67.7938 31.3394 64.1766 31.2295L47.9996 30.738L31.8227 31.2295C28.2055 31.3394 27.052 32.7774 25.649 36.1154L22.126 44.4975H47.9996Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M81.6134 68.1237C84.4875 67.8475 85.8169 66.672 85.8311 63.4462C85.8632 56.1734 84.3831 51.4754 81.6818 44.4976H48.0003H14.3187C11.6174 51.4754 10.1373 56.1734 10.1695 63.4462C10.1837 66.672 11.5132 67.8462 14.3872 68.1237C36.6904 70.2769 59.0985 70.2871 81.6134 68.1237Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M47.9997 68.1234L11.3184 67.0039L14.3605 69.4485C16.8984 71.4878 16.8139 73.5673 20.7775 74.4276C30.0038 76.4304 39.0258 76.9626 47.9997 76.7891C56.9735 76.9626 65.9955 76.4304 75.2219 74.4276C79.1855 73.5673 79.101 71.4878 81.6389 69.4485L84.681 67.0039L47.9997 68.1234Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M36.961 62.5332C44.0407 63.1487 51.3958 63.1582 59.0393 62.5332C59.5726 62.4895 60.0121 63.4265 60.0121 63.9616C60.0121 64.4966 59.5725 65.4343 59.0393 65.4787C51.6798 66.0919 44.3205 66.1061 36.961 65.4787C36.4279 65.4333 35.9883 64.4967 35.9883 63.9617C35.9883 63.4266 36.428 62.4868 36.961 62.5332Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M24.0602 56.9556C26.5981 56.9556 28.6556 59.013 28.6556 61.5509C28.6556 64.0889 26.5981 66.1463 24.0602 66.1463C21.5222 66.1463 19.4648 64.0889 19.4648 61.5509C19.4648 59.013 21.5222 56.9556 24.0602 56.9556Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M71.9401 56.9556C74.478 56.9556 76.5354 59.013 76.5354 61.5509C76.5354 64.0889 74.478 66.1463 71.9401 66.1463C69.4021 66.1463 67.3447 64.0889 67.3447 61.5509C67.3447 59.013 69.4021 56.9556 71.9401 56.9556Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx("circle", { cx: "68.1367", cy: "27.9102", r: "8", fill: "#00AF66" }),
  /* @__PURE__ */ e.jsx("rect", { x: "67.2734", y: "23.5952", width: "1.72622", height: "8.63111", rx: "0.863111", fill: "#ECF0F3" }),
  /* @__PURE__ */ e.jsx("rect", { x: "63.8213", y: "27.0476", width: "8.63111", height: "1.72622", rx: "0.863111", fill: "#ECF0F3" })
] });
t5.displayName = "BuyCar";
const i5 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M14.6562 15.5C14.6562 11.0817 18.238 7.5 22.6562 7.5H56.365C57.4798 7.5 58.5488 7.94386 59.3357 8.73352L78.1213 27.5839C78.9047 28.37 79.3446 29.4346 79.3446 30.5444V80.5C79.3446 84.9183 75.7628 88.5 71.3446 88.5H22.6562C18.238 88.5 14.6562 84.9183 14.6562 80.5V15.5Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M29.2571 38.7407H30.1143",
      stroke: "#48587D",
      strokeWidth: "4",
      strokeLinecap: "square",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ e.jsx("path", { d: "M40.1143 38.7407H64.1143", stroke: "#00AF66", strokeWidth: "4", strokeLinecap: "square" }),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M29.2571 50.7407H30.1143",
      stroke: "#48587D",
      strokeWidth: "4",
      strokeLinecap: "square",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ e.jsx("path", { d: "M40.1143 50.7407H64.1143", stroke: "#00AF66", strokeWidth: "4", strokeLinecap: "square" }),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M29.2571 62.7407H30.1143",
      stroke: "#48587D",
      strokeWidth: "4",
      strokeLinecap: "square",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ e.jsx("path", { d: "M40.1143 62.7407H64.1143", stroke: "#00AF66", strokeWidth: "4", strokeLinecap: "square" }),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M59.2949 8.69336L77.4859 26.9297H67.683C63.0504 26.9297 59.2949 23.1742 59.2949 18.5416V8.69336Z",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M58.7018 77.1218C58.8234 76.5123 59.1228 75.9524 59.5623 75.5129L78.5912 56.484C80.5097 54.5655 83.6202 54.5655 85.5387 56.484C87.4572 58.4025 87.4572 61.513 85.5387 63.4315L66.5098 82.4604C66.0703 82.8999 65.5104 83.1994 64.9009 83.3209L58.698 84.5581C57.9647 84.7043 57.3184 84.058 57.4646 83.3247L58.7018 77.1218Z",
      fill: "#00AF66"
    }
  )
] });
i5.displayName = "DocumentExecution";
const n5 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M8.21875 16.8273C8.21875 14.1613 10.38 12 13.0461 12H83.3914C86.0575 12 88.2187 14.1613 88.2187 16.8273V68C88.2187 72.4183 84.637 76 80.2187 76H16.2188C11.8005 76 8.21875 72.4183 8.21875 68V16.8273Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M8.21875 18C8.21875 14.6863 10.905 12 14.2188 12H82.2188C85.5325 12 88.2187 14.6863 88.2187 18V24.8752H8.21875V18Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx("rect", { x: "57.3213", y: "16.4375", width: "4", height: "4", rx: "1", fill: "#ECF0F3" }),
  /* @__PURE__ */ e.jsx("rect", { x: "66.1484", y: "16.4375", width: "4", height: "4", rx: "1", fill: "#ECF0F3" }),
  /* @__PURE__ */ e.jsx("rect", { x: "74.9756", y: "16.4375", width: "4", height: "4", rx: "1", fill: "#ECF0F3" }),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M54.722 74.8397C54.7042 75.506 55.2609 76.0465 55.9274 76.0465L59.5766 76.0465C63.2598 76.0465 66.8776 77.2387 66.8776 81.2204C66.8776 84.3148 66.8615 85.1475 66.8668 86.3536C66.8698 87.0142 67.4087 87.5455 68.0693 87.5455H78.0804C78.748 87.5455 79.2887 87.0034 79.289 86.3358C79.2894 85.2224 79.2926 84.1416 79.29 82.992C79.2853 81.0385 80.6219 79.0064 81.3763 77.2065C82.2637 75.0888 82.2345 72.3097 82.2107 70.0445L82.2104 70.0221C82.1936 68.329 82.2104 66.2636 82.2104 65.3386C82.2104 64.4135 81.0498 63.3711 80.1908 63.2871C79.2172 63.167 73.4472 62.6849 70.6839 62.4589C70.3627 62.4315 70.34 62.1924 70.3434 61.9411C70.3775 60.157 70.3384 58.3723 70.3217 56.588C70.306 55.1707 70.3237 53.2672 70.3238 52.3319C70.3239 51.0384 69.3615 49.9024 67.7185 49.874C66.0754 49.8457 64.6871 51.0226 64.6871 52.3319C64.6493 58.3872 64.6871 69.8489 64.6871 70.2111C64.6871 70.5733 64.5017 70.9327 63.9598 70.9327C63.4179 70.9327 60.7258 70.9602 58.682 70.9164C56.9756 70.8734 55.2908 71.704 54.8803 73.4818C54.7726 73.923 54.7343 74.3804 54.722 74.8397Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M21.1826 37.9062H29.1826",
      stroke: "#00AF66",
      strokeWidth: "5",
      strokeLinecap: "square",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M21.1826 47.9062H53.1826",
      stroke: "#48587D",
      strokeWidth: "5",
      strokeLinecap: "square",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M21.1826 57.9062H45.1826",
      stroke: "#48587D",
      strokeWidth: "5",
      strokeLinecap: "square",
      strokeLinejoin: "round"
    }
  )
] });
n5.displayName = "Form";
const s5 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M91.5 61.513C91.5 62.6899 90.489 63.6113 89.3156 63.5211C61.1474 61.3561 32.2965 67.0696 13.1226 63.9915C12.1764 63.8396 11.5 63.0129 11.5 62.0545V24.7143C11.5 23.5411 12.504 22.621 13.675 22.6937C35.2052 24.0314 68.5579 18.8001 89.8731 22.2474C90.8222 22.4009 91.5 23.2283 91.5 24.1897V61.513Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M84.5 71.5384C84.5 72.7152 83.489 73.6367 82.3156 73.5465C54.1474 71.3815 25.2965 77.0949 6.12257 74.0169C5.17637 73.865 4.5 73.0382 4.5 72.0799V34.7397C4.5 33.5665 5.50399 32.6463 6.67496 32.7191C28.2052 34.0567 61.5579 28.8254 82.8731 32.2727C83.8222 32.4262 84.5 33.2536 84.5 34.215V71.5384Z",
      fill: "#ECF0F3"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "circle",
    {
      cx: "3.25",
      cy: "3.25",
      r: "3.25",
      transform: "matrix(-1 0 0 1 24.791 49.9165)",
      fill: "#48587D"
    }
  ),
  /* @__PURE__ */ e.jsx("circle", { cx: "43.791", cy: "53.1665", r: "13", fill: "#00AF66" }),
  /* @__PURE__ */ e.jsx(
    "circle",
    {
      cx: "3.25",
      cy: "3.25",
      r: "3.25",
      transform: "matrix(-1 0 0 1 69.291 49.9165)",
      fill: "#48587D"
    }
  )
] });
s5.displayName = "Money";
const o5 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx("circle", { cx: "48", cy: "48", r: "40", fill: "#ECF0F3" }),
  /* @__PURE__ */ e.jsx("circle", { cx: "48", cy: "48", r: "36", stroke: "#00AF66", strokeWidth: "8" }),
  /* @__PURE__ */ e.jsx("rect", { x: "45", y: "24.6082", width: "6", height: "24", fill: "#00AF66" }),
  /* @__PURE__ */ e.jsx("circle", { cx: "48", cy: "48", r: "5", fill: "#48587D" }),
  /* @__PURE__ */ e.jsx(
    "rect",
    {
      x: "46.7246",
      y: "50.3569",
      width: "4",
      height: "24",
      transform: "rotate(-45 46.7246 50.3569)",
      fill: "#48587D"
    }
  )
] });
o5.displayName = "Time";
const a5 = () => /* @__PURE__ */ e.jsxs("svg", { width: "96", height: "96", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ e.jsx("rect", { x: "17.3555", y: "9.69482", width: "61.2883", height: "76.6104", rx: "7.66104", fill: "#ECF0F3" }),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M32.2571 40.7407H33.1143",
      stroke: "#00AF66",
      strokeWidth: "4",
      strokeLinecap: "square",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ e.jsx("path", { d: "M43.1143 40.7407H67.1143", stroke: "#00AF66", strokeWidth: "4", strokeLinecap: "square" }),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M32.2571 52.7407H33.1143",
      stroke: "#00AF66",
      strokeWidth: "4",
      strokeLinecap: "square",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ e.jsx("path", { d: "M43.1143 52.7407H67.1143", stroke: "#00AF66", strokeWidth: "4", strokeLinecap: "square" }),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M32.2571 64.7407H33.1143",
      stroke: "#48587D",
      strokeWidth: "4",
      strokeLinecap: "square",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ e.jsx("path", { d: "M43.1143 64.7407H67.1143", stroke: "#48587D", strokeWidth: "4", strokeLinecap: "square" }),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M17.3555 13.5253C17.3555 11.4098 19.0705 9.69482 21.186 9.69482H74.8133C76.9288 9.69482 78.6438 11.4098 78.6438 13.5253V21.6948H17.3555V13.5253Z",
      fill: "#00AF66"
    }
  ),
  /* @__PURE__ */ e.jsx("rect", { x: "36", y: "5.8645", width: "24", height: "7.66104", rx: "2", fill: "#48587D" })
] });
a5.displayName = "Valuation";
export {
  d2 as Analytics,
  _2 as ArrowDown,
  E2 as ArrowUp,
  s5 as AutoCreditMoney,
  L2 as Bank,
  J2 as Bill,
  _9 as BonusLarge,
  E9 as BonusMedium,
  B9 as BonusSmall,
  t5 as BuyCar,
  z2 as Calendar,
  c2 as CardSalom,
  u2 as Cash,
  N9 as CashoutLarge,
  b9 as CashoutMedium,
  D9 as CashoutSmall,
  K2 as Chat,
  X2 as Check,
  S9 as CheckCircle,
  b2 as ChevronDown,
  D2 as ChevronLeft,
  S2 as ChevronRight,
  W2 as ChevronUp,
  Q2 as Clock,
  e9 as Close,
  W9 as CloseCircle,
  U9 as Clothing,
  $9 as ConstructionMaterials,
  C9 as Copy,
  h2 as CreditCard,
  H2 as CurrencyDollar,
  f2 as CurrencyLira,
  p2 as CurrencyRuble,
  l9 as Delete,
  Q9 as DepositReplenishment,
  r9 as Doc,
  t9 as DocEmpty,
  i5 as DocumentExecution,
  v2 as Dollar,
  A9 as DontWorkLarge,
  T9 as DontWorkMedium,
  O9 as DontWorkSmall,
  i9 as Edit,
  n9 as Expand,
  $2 as EyeOff,
  s9 as EyeOffAlt,
  Y2 as EyeOn,
  Y9 as Food,
  n5 as Form,
  G9 as Fridge,
  K9 as Furniture,
  o9 as GridView,
  a9 as HelpCircle,
  d9 as Home,
  e5 as IncomeSharing,
  L9 as Info,
  C5 as Insurance,
  l5 as Investments,
  J9 as Jewelry,
  A2 as LedtDown,
  B2 as LeftArrow,
  P2 as LeftPrev,
  c9 as Link,
  u9 as ListView,
  h9 as Lock,
  H9 as Mail,
  f9 as MapPin,
  p9 as Menu,
  x2 as Merch,
  w2 as Money,
  v9 as Move,
  x9 as Navigation,
  r5 as Npl,
  X9 as OneSomoni,
  V2 as Online,
  w9 as PaperClip,
  M2 as Percent,
  z9 as PhonesAndAccessories,
  M9 as Plus,
  V9 as PlusRect,
  j9 as Refresh,
  g9 as RefreshCw,
  Z9 as Repeat,
  N2 as RightArrow,
  q2 as RightNext,
  T2 as RightTop,
  G2 as Search,
  I2 as SelectHideTop,
  U2 as SelectOpenDown,
  g2 as SendCard,
  j2 as SendDoc,
  m9 as Settings,
  R9 as Slash,
  k9 as Star,
  Z2 as Terminal,
  P9 as TerminalLarge,
  q9 as TerminalMedium,
  I9 as TerminalSmall,
  o5 as Time,
  m2 as Transfers,
  O2 as TrendingUp,
  y9 as Tune,
  F9 as Unlock,
  a5 as Valuation,
  R2 as Visa,
  F2 as Wallet,
  k2 as WalletPlus,
  y2 as WalletTransfer,
  a2 as Zp
};
