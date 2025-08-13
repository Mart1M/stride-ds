import m, { createContext as Mr, useContext as B, useEffect as fr, useState as nr, useMemo as Wr, useLayoutEffect as Gr, useRef as Dr } from "react";
import { clsx as Lr } from "clsx";
import { twMerge as Jr } from "tailwind-merge";
import { cva as v } from "class-variance-authority";
import { Button as $r, Checkbox as Xr, TextField as Er, Label as Cr, Input as pr, Text as Tr, Radio as Hr, RadioGroup as qr, ComboBox as Ur, Popover as Zr, ListBox as Qr, ListBoxItem as Kr, Switch as re } from "react-aria-components";
import { Minus as ee, Check as Vr, ChevronLeft as yr, ChevronRight as wr, MoreHorizontal as ae, Search as te, Loader2 as kr, X as _r, ChevronDown as oe } from "lucide-react";
var er = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jr;
function ne() {
  if (jr) return L;
  jr = 1;
  var o = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function a(n, s, c) {
    var i = null;
    if (c !== void 0 && (i = "" + c), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      c = {};
      for (var d in s)
        d !== "key" && (c[d] = s[d]);
    } else c = s;
    return s = c.ref, {
      $$typeof: o,
      type: n,
      key: i,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return L.Fragment = e, L.jsx = a, L.jsxs = a, L;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function se() {
  return Nr || (Nr = 1, process.env.NODE_ENV !== "production" && (function() {
    function o(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === cr ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case z:
          return "Fragment";
        case sr:
          return "Profiler";
        case I:
          return "StrictMode";
        case q:
          return "Suspense";
        case U:
          return "SuspenseList";
        case ir:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case S:
            return "Portal";
          case X:
            return (t.displayName || "Context") + ".Provider";
          case C:
            return (t._context.displayName || "Context") + ".Consumer";
          case H:
            var l = t.render;
            return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case Z:
            return l = t.displayName || null, l !== null ? l : o(t.type) || "Memo";
          case Q:
            l = t._payload, t = t._init;
            try {
              return o(t(l));
            } catch {
            }
        }
      return null;
    }
    function e(t) {
      return "" + t;
    }
    function a(t) {
      try {
        e(t);
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var p = l.error, j = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return p.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), e(t);
      }
    }
    function n(t) {
      if (t === z) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === Q)
        return "<...>";
      try {
        var l = o(t);
        return l ? "<" + l + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var t = A.A;
      return t === null ? null : t.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function i(t) {
      if (P.call(t, "key")) {
        var l = Object.getOwnPropertyDescriptor(t, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function d(t, l) {
      function p() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
        ));
      }
      p.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: p,
        configurable: !0
      });
    }
    function f() {
      var t = o(this.type);
      return K[t] || (K[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function h(t, l, p, j, R, N, F, G) {
      return p = N.ref, t = {
        $$typeof: x,
        type: t,
        key: l,
        props: N,
        _owner: R
      }, (p !== void 0 ? p : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function y(t, l, p, j, R, N, F, G) {
      var k = l.children;
      if (k !== void 0)
        if (j)
          if (Y(k)) {
            for (j = 0; j < k.length; j++)
              w(k[j]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(k);
      if (P.call(l, "key")) {
        k = o(t);
        var V = Object.keys(l).filter(function(dr) {
          return dr !== "key";
        });
        j = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", T[k + j] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          k,
          V,
          k
        ), T[k + j] = !0);
      }
      if (k = null, p !== void 0 && (a(p), k = "" + p), i(l) && (a(l.key), k = "" + l.key), "key" in l) {
        p = {};
        for (var D in l)
          D !== "key" && (p[D] = l[D]);
      } else p = l;
      return k && d(
        p,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), h(
        t,
        k,
        N,
        R,
        s(),
        p,
        F,
        G
      );
    }
    function w(t) {
      typeof t == "object" && t !== null && t.$$typeof === x && t._store && (t._store.validated = 1);
    }
    var b = m, x = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), sr = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), X = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), Q = Symbol.for("react.lazy"), ir = Symbol.for("react.activity"), cr = Symbol.for("react.client.reference"), A = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, Y = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      "react-stack-bottom-frame": function(t) {
        return t();
      }
    };
    var $, K = {}, W = b["react-stack-bottom-frame"].bind(
      b,
      c
    )(), rr = M(n(c)), T = {};
    J.Fragment = z, J.jsx = function(t, l, p, j, R) {
      var N = 1e4 > A.recentlyCreatedOwnerStacks++;
      return y(
        t,
        l,
        p,
        !1,
        j,
        R,
        N ? Error("react-stack-top-frame") : W,
        N ? M(n(t)) : rr
      );
    }, J.jsxs = function(t, l, p, j, R) {
      var N = 1e4 > A.recentlyCreatedOwnerStacks++;
      return y(
        t,
        l,
        p,
        !0,
        j,
        R,
        N ? Error("react-stack-top-frame") : W,
        N ? M(n(t)) : rr
      );
    };
  })()), J;
}
var Rr;
function ie() {
  return Rr || (Rr = 1, process.env.NODE_ENV === "production" ? er.exports = ne() : er.exports = se()), er.exports;
}
var r = ie();
function u(...o) {
  return Jr(Lr(o));
}
const ce = v(
  [
    "inline-flex items-center justify-center font-sans font-medium transition-all",
    "border rounded-full whitespace-nowrap text-center",
    // Using semantic tokens
    "[transition-duration:var(--transition-normal)]",
    "[font-weight:var(--font-weight-medium)]"
  ],
  {
    variants: {
      variant: {
        default: [
          "[background-color:var(--bg-secondary)]",
          "[color:var(--text-primary)]",
          "[border-color:var(--border-primary)]"
        ],
        primary: [
          "[background-color:var(--bg-brand-muted)]",
          "[color:var(--text-brand)]",
          "[border-color:var(--border-brand-muted)]"
        ],
        secondary: [
          "[background-color:var(--bg-tertiary)]",
          "[color:var(--text-secondary)]",
          "[border-color:var(--border-secondary)]"
        ],
        success: [
          "[background-color:var(--status-success-bg)]",
          "[color:var(--status-success-text)]",
          "[border-color:var(--status-success)]"
        ],
        warning: [
          "[background-color:var(--status-warning-bg)]",
          "[color:var(--status-warning-text)]",
          "[border-color:var(--status-warning)]"
        ],
        danger: [
          "[background-color:var(--status-danger-bg)]",
          "[color:var(--status-danger-text)]",
          "[border-color:var(--status-danger)]"
        ],
        outline: [
          "bg-transparent",
          "[color:var(--text-primary)]",
          "[border-color:var(--border-primary)]"
        ]
      },
      size: {
        sm: [
          "[height:var(--badge-height-sm)]",
          "[font-size:var(--font-size-xs)]",
          "px-2"
        ],
        md: [
          "[height:var(--badge-height-md)]",
          "[font-size:var(--font-size-sm)]",
          "px-3"
        ],
        lg: [
          "[height:var(--badge-height-lg)]",
          "[font-size:var(--font-size-md)]",
          "px-4"
        ]
      },
      dot: {
        true: "pl-1.5",
        false: ""
      },
      numeric: {
        true: "min-w-[1.25rem] aspect-square justify-center items-center flex-shrink-0",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      dot: !1,
      numeric: !1
    }
  }
), de = m.forwardRef(
  ({ className: o, variant: e, size: a, dot: n, dotColor: s, numeric: c, children: i, ...d }, f) => /* @__PURE__ */ r.jsxs(
    "span",
    {
      ref: f,
      className: u(
        ce({ variant: e, size: a, dot: n, numeric: c }),
        o
      ),
      ...d,
      children: [
        n && /* @__PURE__ */ r.jsx(
          "span",
          {
            className: u(
              "inline-block w-1.5 h-1.5 rounded-full mr-1.5",
              s ? `bg-[${s}]` : "[background-color:var(--status-success)]"
            )
          }
        ),
        i
      ]
    }
  )
);
de.displayName = "Badge";
const le = v(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium font-sans cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "focus-visible:[--tw-ring-color:var(--border-focus)]",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:active:transform-none",
    "transition-all",
    // Using semantic tokens
    "[transition-duration:var(--transition-normal)]",
    "[border-radius:var(--radius-button)]"
  ],
  {
    variants: {
      variant: {
        primary: [
          "[background-color:var(--interactive-primary)]",
          "[color:var(--interactive-primary-text)]",
          "[box-shadow:var(--shadow-skeuomorphic)]",
          "[border:none]",
          "hover:[background-color:var(--interactive-primary-hover)]",
          "active:[background-color:var(--interactive-primary-active)]",
          "active:[transform:translateY(1px)]",
          "active:[box-shadow:var(--shadow-skeuomorphic)]",
          "disabled:[background-color:var(--interactive-primary-disabled)]",
          "disabled:[color:var(--text-disabled)]"
        ],
        secondary: [
          "[background-color:var(--interactive-secondary)]",
          "[color:var(--text-primary)]",
          "[border:1px_solid_var(--border-primary)]",
          "hover:[background-color:var(--interactive-secondary-hover)]",
          "active:[background-color:var(--interactive-secondary-active)]",
          "active:[transform:translateY(1px)]",
          "active:[box-shadow:var(--shadow-skeuomorphic)]",
          "disabled:[background-color:var(--interactive-secondary-disabled)]"
        ],
        ghost: [
          "[background-color:var(--interactive-ghost)]",
          "[color:var(--text-secondary)]",
          "hover:[background-color:var(--interactive-ghost-hover)]",
          "hover:[color:var(--text-primary)]",
          "active:[background-color:var(--interactive-ghost-active)]",
          "active:[transform:translateY(1px)]",
          "active:[box-shadow:var(--shadow-skeuomorphic)]",
          "disabled:[background-color:var(--interactive-ghost-disabled)]"
        ],
        destructive: [
          "[background-color:var(--status-danger)]",
          "[color:var(--brand-neutral-0)]",
          "[box-shadow:var(--shadow-skeuomorphic)]",
          "[border:none]",
          "hover:[background-color:var(--status-danger-hover)]",
          "active:[background-color:var(--status-danger-hover)]",
          "active:[transform:translateY(1px)]",
          "active:[box-shadow:var(--shadow-skeuomorphic)]",
          "disabled:[background-color:var(--interactive-primary-disabled)]",
          "disabled:[color:var(--text-disabled)]"
        ]
      },
      size: {
        sm: [
          "[height:var(--button-height-sm)]",
          "[padding:var(--button-padding-sm)]",
          "[font-size:var(--font-size-xs)]"
        ],
        md: [
          "[height:var(--button-height-md)]",
          "[padding:var(--button-padding-md)]",
          "[font-size:var(--font-size-sm)]"
        ],
        lg: [
          "[height:var(--button-height-lg)]",
          "[padding:var(--button-padding-lg)]",
          "[font-size:var(--font-size-md)]"
        ]
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
), ue = m.forwardRef(
  ({ className: o, variant: e, size: a, leftIcon: n, rightIcon: s, children: c, ...i }, d) => /* @__PURE__ */ r.jsxs(
    $r,
    {
      className: u(le({ variant: e, size: a, className: o })),
      ref: d,
      ...i,
      children: [
        n && /* @__PURE__ */ r.jsx("span", { className: "flex-shrink-0", children: n }),
        c && /* @__PURE__ */ r.jsx("span", { className: "flex-1", children: c }),
        s && /* @__PURE__ */ r.jsx("span", { className: "flex-shrink-0", children: s })
      ]
    }
  )
);
ue.displayName = "Button";
const gr = Mr({
  size: "md",
  hasFooter: !1,
  setHasFooter: () => {
  }
}), me = v(
  [
    "border font-sans transition-all flex flex-col",
    // Using semantic tokens
    "[border-radius:var(--card-radius)]",
    "[background-color:var(--bg-primary)]",
    "[border-color:var(--border-primary)]",
    "[transition-duration:var(--transition-normal)]"
  ],
  {
    variants: {
      variant: {
        default: "",
        outlined: "[border-width:1px]",
        elevated: "[box-shadow:var(--shadow-md)] border-0",
        interactive: [
          "cursor-pointer",
          "hover:[box-shadow:var(--shadow-lg)]",
          "hover:[border-color:var(--border-secondary)]",
          "active:[transform:translateY(1px)]"
        ]
      },
      size: {
        sm: "[padding:var(--card-padding-sm)]",
        md: "[padding:var(--card-padding-md)]",
        lg: "[padding:var(--card-padding-lg)]"
      },
      hasFooter: {
        true: "",
        false: ""
      }
    },
    compoundVariants: [
      // Reduce bottom padding when footer is present
      {
        size: "sm",
        hasFooter: !0,
        class: "[padding-bottom:var(--spacing-md)]"
      },
      {
        size: "md",
        hasFooter: !0,
        class: "[padding-bottom:var(--spacing-md)]"
      },
      {
        size: "lg",
        hasFooter: !0,
        class: "[padding-bottom:var(--spacing-md)]"
      }
    ],
    defaultVariants: {
      variant: "outlined",
      size: "md",
      hasFooter: !1
    }
  }
), ve = v(
  ["flex flex-col space-y-1.5", "[margin-bottom:var(--spacing-lg)]"],
  {
    variants: {
      fullWidth: {
        true: [
          "[margin-top:calc(-1_*_var(--card-padding-md))]",
          "[margin-left:calc(-1_*_var(--card-padding-md))]",
          "[margin-right:calc(-1_*_var(--card-padding-md))]",
          "[margin-bottom:var(--spacing-lg)]"
        ],
        false: ""
      },
      size: {
        sm: "",
        md: "",
        lg: ""
      }
    },
    compoundVariants: [
      {
        fullWidth: !0,
        size: "sm",
        class: [
          "[margin-top:calc(-1_*_var(--card-padding-sm))]",
          "[margin-left:calc(-1_*_var(--card-padding-sm))]",
          "[margin-right:calc(-1_*_var(--card-padding-sm))]"
        ]
      },
      {
        fullWidth: !0,
        size: "lg",
        class: [
          "[margin-top:calc(-1_*_var(--card-padding-lg))]",
          "[margin-left:calc(-1_*_var(--card-padding-lg))]",
          "[margin-right:calc(-1_*_var(--card-padding-lg))]"
        ]
      }
    ],
    defaultVariants: {
      fullWidth: !1,
      size: "md"
    }
  }
), fe = v([
  "font-semibold leading-none tracking-tight",
  "[color:var(--text-primary)]",
  "[font-size:var(--font-size-lg)]",
  "[font-weight:var(--font-weight-semibold)]"
]), pe = v([
  "[color:var(--text-secondary)]",
  "[font-size:var(--font-size-sm)]"
]), ge = v([
  "[color:var(--text-primary)]",
  "[font-size:var(--font-size-md)]",
  "flex-grow"
]), be = v(
  [
    "flex items-center justify-between",
    "[margin-top:var(--spacing-lg)]",
    "[border-top:1px_solid_var(--border-primary)]"
  ],
  {
    variants: {
      size: {
        sm: [
          "[margin-left:calc(-1_*_var(--card-padding-sm))]",
          "[margin-right:calc(-1_*_var(--card-padding-sm))]",
          "[padding-left:var(--card-padding-sm)]",
          "[padding-right:var(--card-padding-sm)]",
          "[padding-top:var(--spacing-md)]"
        ],
        md: [
          "[margin-left:calc(-1_*_var(--card-padding-md))]",
          "[margin-right:calc(-1_*_var(--card-padding-md))]",
          "[padding-left:var(--card-padding-sm)]",
          "[padding-right:var(--card-padding-sm)]",
          "[padding-top:var(--spacing-md)]"
        ],
        lg: [
          "[margin-left:calc(-1_*_var(--card-padding-lg))]",
          "[margin-right:calc(-1_*_var(--card-padding-lg))]",
          "[padding-left:var(--card-padding-lg)]",
          "[padding-right:var(--card-padding-lg)]",
          "[padding-top:var(--spacing-xl)]",
          "[padding-bottom:var(--spacing-md)]"
        ]
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), he = m.forwardRef(
  ({ className: o, variant: e, size: a = "md", ...n }, s) => {
    const c = a || "md", [i, d] = m.useState(!1);
    return /* @__PURE__ */ r.jsx(gr.Provider, { value: { size: c, hasFooter: i, setHasFooter: d }, children: /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: s,
        className: u(
          me({ variant: e, size: c, hasFooter: i }),
          o
        ),
        ...n
      }
    ) });
  }
);
he.displayName = "Card";
const xe = m.forwardRef(
  ({ className: o, fullWidth: e, size: a, ...n }, s) => {
    const c = B(gr), i = a ?? c.size;
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: s,
        className: u(
          ve({ fullWidth: e, size: i }),
          o
        ),
        ...n
      }
    );
  }
);
xe.displayName = "CardHeader";
const ye = m.forwardRef(
  ({ className: o, as: e = "h3", ...a }, n) => /* @__PURE__ */ r.jsx(
    e,
    {
      ref: n,
      className: u(fe(), o),
      ...a
    }
  )
);
ye.displayName = "CardTitle";
const we = m.forwardRef(({ className: o, ...e }, a) => /* @__PURE__ */ r.jsx(
  "p",
  {
    ref: a,
    className: u(pe(), o),
    ...e
  }
));
we.displayName = "CardDescription";
const ke = m.forwardRef(
  ({ className: o, ...e }, a) => /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: a,
      className: u(ge(), o),
      ...e
    }
  )
);
ke.displayName = "CardContent";
const je = m.forwardRef(
  ({ className: o, size: e, ...a }, n) => {
    const s = B(gr), c = e ?? s.size;
    return m.useEffect(() => (s.setHasFooter(!0), () => s.setHasFooter(!1)), [s]), /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: n,
        className: u(be({ size: c }), o),
        ...a
      }
    );
  }
);
je.displayName = "CardFooter";
const Ne = v(
  [
    "group flex items-center gap-3 text-md font-sans cursor-pointer",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "[transition-duration:var(--transition-fast)]",
    "transition-opacity"
  ],
  {
    variants: {
      size: {
        sm: "gap-2 text-sm",
        md: "gap-3 text-md",
        lg: "gap-4 text-lg"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Re = v(
  [
    "flex items-center justify-center shrink-0",
    "border-2 transition-all cursor-pointer",
    "[transition-duration:var(--transition-normal)]",
    "[border-radius:var(--radius-sm)]",
    "[border-color:var(--border-primary)]",
    "[background-color:var(--bg-primary)]",
    // Focus styles
    "group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-offset-1",
    "group-focus-visible:[ring-color:var(--border-focus)]",
    // Hover styles
    "group-hover:[border-color:var(--border-secondary)]",
    // Checked styles using data attributes
    "group-data-[selected]:[background-color:var(--interactive-primary)]",
    "group-data-[selected]:group-hover:[background-color:var(--interactive-primary-hover)]",
    "group-data-[selected]:group-hover:[border-color:var(--interactive-primary-hover)]",
    // Disabled styles
    "group-data-[disabled]:[border-color:var(--border-brand)]",
    "group-data-[disabled]:group-data-[selected]:[background-color:var(--bg-brand)]"
  ],
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-7 w-7"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Se = m.forwardRef(
  ({ className: o, size: e, children: a, description: n, ...s }, c) => /* @__PURE__ */ r.jsx(
    Xr,
    {
      className: u(Ne({ size: e }), o),
      ref: c,
      ...s,
      children: ({
        isSelected: i,
        isIndeterminate: d,
        isDisabled: f,
        isHovered: h,
        isFocusVisible: y
      }) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: u(
              Re({ size: e }),
              // Base styles
              !i && !d && "[border-color:var(--border-primary)] [background-color:var(--bg-primary)]",
              // Hover styles
              h && !i && !d && !f && "[border-color:var(--border-secondary)]",
              // Selected/Indeterminate styles
              (i || d) && "[background-color:var(--interactive-primary)] [border-color:var(--interactive-primary)]",
              // Selected + hover
              (i || d) && h && !f && "[background-color:var(--interactive-primary-hover)] [border-color:var(--interactive-primary-hover)]",
              // Focus styles
              y && !f && "focus-ring",
              // Disabled styles - simple opacity
              f && "opacity-50 cursor-not-allowed"
            ),
            children: d ? /* @__PURE__ */ r.jsx(
              ee,
              {
                strokeWidth: 4,
                className: u(
                  "text-white",
                  i || d ? "opacity-100" : "opacity-0",
                  e === "sm" && "h-2.5 w-2.5",
                  e === "md" && "h-4 w-4",
                  e === "lg" && "h-5 w-5"
                )
              }
            ) : /* @__PURE__ */ r.jsx(
              Vr,
              {
                strokeWidth: 4,
                className: u(
                  "text-white",
                  i ? "opacity-100" : "opacity-0",
                  e === "sm" && "h-2.5 w-2.5",
                  e === "md" && "h-4 w-4",
                  e === "lg" && "h-5 w-5"
                )
              }
            )
          }
        ),
        (a || n) && /* @__PURE__ */ r.jsxs("div", { className: u("flex flex-col", f && "opacity-50"), children: [
          a && /* @__PURE__ */ r.jsx("span", { className: "[color:var(--text-primary)] leading-none", children: a }),
          n && /* @__PURE__ */ r.jsx("span", { className: "text-sm [color:var(--text-tertiary)] mt-1 leading-tight", children: n })
        ] })
      ] })
    }
  )
);
Se.displayName = "Checkbox";
const ze = v(
  [
    "w-full px-3 font-sans border rounded-full transition-all",
    "focus-ring disabled:cursor-not-allowed disabled:opacity-50",
    // Using semantic tokens
    "[transition-duration:var(--transition-normal)]",
    "[border-radius:var(--radius-full)]",
    "[background-color:var(--bg-primary)]",
    "[color:var(--text-primary)]",
    "[border-color:var(--border-primary)]",
    "placeholder:[color:var(--text-tertiary)]"
  ],
  {
    variants: {
      size: {
        sm: [
          "[height:var(--input-height-sm)]",
          "[font-size:var(--font-size-xs)]",
          "px-3"
        ],
        md: [
          "[height:var(--input-height-md)]",
          "[font-size:var(--font-size-sm)]",
          "px-3"
        ],
        lg: [
          "[height:var(--input-height-lg)]",
          "[font-size:var(--font-size-md)]",
          "px-4"
        ]
      },
      variant: {
        default: "",
        error: [
          "[border-color:var(--status-danger)]",
          "focus-ring-danger",
          "focus:[border-color:var(--status-danger)]"
        ],
        success: [
          "[border-color:var(--status-success)]",
          "focus-ring-success",
          "focus:[border-color:var(--status-success)]"
        ]
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
), $e = v([
  "block font-medium mb-1 ml-2",
  "[color:var(--text-primary)]",
  "[font-size:var(--font-size-sm)]",
  "[font-weight:var(--font-weight-medium)]"
]), Ee = v(
  ["mt-1 text-sm ml-2", "[font-size:var(--font-size-xs)]"],
  {
    variants: {
      variant: {
        default: "[color:var(--text-secondary)]",
        error: "[color:var(--status-danger-text)]",
        success: "[color:var(--status-success-text)]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Ce = m.forwardRef(
  ({
    className: o,
    inputClassName: e,
    size: a,
    variant: n,
    label: s,
    placeholder: c,
    helperText: i,
    errorMessage: d,
    leftIcon: f,
    rightIcon: h,
    isRequired: y,
    isDisabled: w,
    ...b
  }, x) => {
    const S = d ? "error" : n, z = d || i, I = d ? "error" : "default";
    return /* @__PURE__ */ r.jsxs(
      Er,
      {
        className: u("w-full", o),
        isRequired: y,
        isDisabled: w,
        ...b,
        children: [
          s && /* @__PURE__ */ r.jsxs(Cr, { className: u($e()), children: [
            s,
            y && /* @__PURE__ */ r.jsx("span", { className: "[color:var(--status-danger)] ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
            f && /* @__PURE__ */ r.jsx("div", { className: "absolute left-3 top-1/2 transform -translate-y-1/2 [color:var(--text-tertiary)] pointer-events-none", children: f }),
            /* @__PURE__ */ r.jsx(
              pr,
              {
                ref: x,
                className: u(
                  ze({ size: a, variant: S }),
                  f && "pl-10",
                  h && "pr-10",
                  e
                ),
                placeholder: c
              }
            ),
            h && /* @__PURE__ */ r.jsx("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2 [color:var(--text-tertiary)] pointer-events-none", children: h })
          ] }),
          z && /* @__PURE__ */ r.jsx(
            Tr,
            {
              slot: d ? "errorMessage" : "description",
              className: u(Ee({ variant: I })),
              children: z
            }
          )
        ]
      }
    );
  }
);
Ce.displayName = "Input";
const Sr = v([
  "flex items-center justify-center gap-1"
], {
  variants: {
    size: {
      sm: "[gap:var(--spacing-xs)]",
      md: "[gap:var(--spacing-sm)]",
      lg: "[gap:var(--spacing-md)]"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Ar = v([
  "inline-flex items-center justify-center",
  "font-medium transition-colors",
  "disabled:opacity-50 disabled:pointer-events-none",
  "[transition-duration:var(--transition-fast)]",
  "[color:var(--text-secondary)]",
  "hover:[color:var(--text-primary)]",
  "hover:[background-color:var(--interactive-ghost-hover)]",
  "focus-visible:outline-none",
  "focus-visible:[outline:2px_solid_var(--border-focus)]",
  "focus-visible:[outline-offset:2px]"
], {
  variants: {
    variant: {
      default: [
        "[border:1px_solid_var(--border-primary)]",
        "[background-color:var(--bg-primary)]",
        "hover:[border-color:var(--border-secondary)]"
      ],
      ghost: [
        "border-transparent",
        "[background-color:transparent]"
      ],
      outline: [
        "[border:1px_solid_var(--border-primary)]",
        "[background-color:transparent]",
        "hover:[background-color:var(--interactive-ghost-hover)]",
        "hover:[border-color:var(--border-secondary)]"
      ]
    },
    size: {
      sm: [
        "[height:var(--button-height-sm)]",
        "[min-width:var(--button-height-sm)]",
        "[padding:0_var(--spacing-sm)]",
        "[font-size:var(--font-size-sm)]",
        "[border-radius:var(--radius-sm)]"
      ],
      md: [
        "[height:var(--button-height-md)]",
        "[min-width:var(--button-height-md)]",
        "[padding:0_var(--spacing-md)]",
        "[font-size:var(--font-size-md)]",
        "[border-radius:var(--radius-md)]"
      ],
      lg: [
        "[height:var(--button-height-lg)]",
        "[min-width:var(--button-height-lg)]",
        "[padding:0_var(--spacing-lg)]",
        "[font-size:var(--font-size-lg)]",
        "[border-radius:var(--radius-lg)]"
      ]
    },
    isActive: {
      true: [
        "[background-color:var(--interactive-primary)]",
        "[color:var(--interactive-primary-text)]",
        "[border-color:var(--interactive-primary)]"
      ],
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    isActive: !1
  }
}), _ = m.forwardRef(
  ({ className: o, variant: e, size: a, isActive: n, ...s }, c) => /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: c,
      className: u(Ar({ variant: e, size: a, isActive: n }), o),
      ...s
    }
  )
);
_.displayName = "PaginationItem";
const Te = ({ className: o, size: e = "md" }) => /* @__PURE__ */ r.jsxs("span", { className: u(Ar({ variant: "ghost", size: e }), "pointer-events-none", o), children: [
  /* @__PURE__ */ r.jsx(ae, { size: e === "sm" ? 14 : e === "lg" ? 18 : 16 }),
  /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "More pages" })
] }), Ve = ({
  currentPage: o = 1,
  totalPages: e = 1,
  siblingCount: a = 1
}) => {
  const n = (w, b) => {
    const x = b - w + 1;
    return Array.from({ length: x }, (S, z) => z + w);
  };
  if (a + 5 >= e)
    return n(1, e);
  const c = Math.max(o - a, 1), i = Math.min(o + a, e), d = c > 2, f = i < e - 2, h = 1, y = e;
  if (!d && f) {
    const w = 3 + 2 * a;
    return [...n(1, w), "dots", e];
  }
  if (d && !f) {
    const w = 3 + 2 * a, b = n(e - w + 1, e);
    return [h, "dots", ...b];
  }
  if (d && f) {
    const w = n(c, i);
    return [h, "dots", ...w, "dots", y];
  }
  return [];
}, _e = m.forwardRef(
  ({
    className: o,
    size: e = "md",
    currentPage: a = 1,
    totalPages: n = 1,
    onPageChange: s,
    showPrevNext: c = !0,
    showFirstLast: i = !1,
    siblingCount: d = 1,
    variant: f = "numbered",
    ...h
  }, y) => {
    const w = Ve({ currentPage: a, totalPages: n, siblingCount: d }), b = (x) => {
      x >= 1 && x <= n && x !== a && s?.(x);
    };
    return f === "simple" ? /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: y,
        className: u(Sr({ size: e }), o),
        ...h,
        children: [
          /* @__PURE__ */ r.jsxs(
            _,
            {
              variant: "outline",
              size: e,
              onClick: () => b(a - 1),
              disabled: a === 1,
              children: [
                /* @__PURE__ */ r.jsx(yr, { size: e === "sm" ? 14 : e === "lg" ? 18 : 16 }),
                /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Go to previous page" })
              ]
            }
          ),
          /* @__PURE__ */ r.jsxs("span", { className: u(
            "px-4 py-2 text-sm font-medium",
            "[color:var(--text-primary)]",
            e === "sm" && "[font-size:var(--font-size-xs)]",
            e === "lg" && "[font-size:var(--font-size-md)]"
          ), children: [
            "Page ",
            a,
            " of ",
            n
          ] }),
          /* @__PURE__ */ r.jsxs(
            _,
            {
              variant: "outline",
              size: e,
              onClick: () => b(a + 1),
              disabled: a === n,
              children: [
                /* @__PURE__ */ r.jsx(wr, { size: e === "sm" ? 14 : e === "lg" ? 18 : 16 }),
                /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Go to next page" })
              ]
            }
          )
        ]
      }
    ) : /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: y,
        className: u(Sr({ size: e }), o),
        ...h,
        children: [
          i && a > 1 && /* @__PURE__ */ r.jsx(
            _,
            {
              variant: "outline",
              size: e,
              onClick: () => b(1),
              children: "First"
            }
          ),
          c && /* @__PURE__ */ r.jsxs(
            _,
            {
              variant: "outline",
              size: e,
              onClick: () => b(a - 1),
              disabled: a === 1,
              children: [
                /* @__PURE__ */ r.jsx(yr, { size: e === "sm" ? 14 : e === "lg" ? 18 : 16 }),
                /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Go to previous page" })
              ]
            }
          ),
          w.map((x, S) => x === "dots" ? /* @__PURE__ */ r.jsx(Te, { size: e }, `ellipsis-${S}`) : /* @__PURE__ */ r.jsx(
            _,
            {
              size: e,
              isActive: x === a,
              onClick: () => b(x),
              children: x
            },
            x
          )),
          c && /* @__PURE__ */ r.jsxs(
            _,
            {
              variant: "outline",
              size: e,
              onClick: () => b(a + 1),
              disabled: a === n,
              children: [
                /* @__PURE__ */ r.jsx(wr, { size: e === "sm" ? 14 : e === "lg" ? 18 : 16 }),
                /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Go to next page" })
              ]
            }
          ),
          i && a < n && /* @__PURE__ */ r.jsx(
            _,
            {
              variant: "outline",
              size: e,
              onClick: () => b(n),
              children: "Last"
            }
          )
        ]
      }
    );
  }
);
_e.displayName = "Pagination";
const Ae = v(["flex gap-3"], {
  variants: {
    orientation: {
      horizontal: "flex-row flex-wrap",
      vertical: "flex-col"
    },
    size: {
      sm: "gap-2 text-xs",
      md: "gap-3 text-sm",
      lg: "gap-4 text-base"
    }
  },
  defaultVariants: {
    orientation: "vertical",
    size: "md"
  }
}), Fe = v(
  [
    "group flex items-center gap-3 text-sm font-sans cursor-pointer",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "[transition-duration:var(--transition-fast)]",
    "transition-opacity"
  ],
  {
    variants: {
      size: {
        sm: "gap-2 text-sm",
        md: "gap-3 text-base",
        lg: "gap-4 text-lg"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Oe = v(
  [
    "relative flex shrink-0 cursor-pointer rounded-full transition-colors",
    "[transition-duration:var(--transition-normal)]",
    "[background-color:var(--bg-primary)]",
    "[border:2px_solid_var(--border-primary)]",
    // Focus styles
    "group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-offset-1",
    "group-focus-visible:[ring-color:var(--border-focus)]",
    // Hover styles
    "group-hover:[border-color:var(--border-secondary)]",
    // Selected styles
    "group-data-[selected]:[background-color:var(--interactive-primary)]",
    "group-data-[selected]:[border-color:var(--interactive-primary)]",
    "group-data-[selected]:group-hover:[background-color:var(--interactive-primary-hover)]",
    "group-data-[selected]:group-hover:[border-color:var(--interactive-primary-hover)]",
    // Disabled styles
    "group-data-[disabled]:[border-color:var(--border-disabled)]",
    "group-data-[disabled]:[background-color:var(--bg-disabled)]",
    "group-data-[disabled]:group-data-[selected]:[background-color:var(--interactive-primary-disabled)]",
    "group-data-[disabled]:group-data-[selected]:[border-color:var(--interactive-primary-disabled)]"
  ],
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Be = v(
  [
    "absolute rounded-full bg-white pointer-events-none",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "opacity-0 group-data-[selected]:opacity-100",
    "transition-opacity duration-150 ease-out"
  ],
  {
    variants: {
      size: {
        sm: "h-1.5 w-1.5",
        md: "h-2 w-2",
        lg: "h-2.5 w-2.5"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Ie = m.forwardRef(
  ({
    className: o,
    orientation: e,
    size: a,
    children: n,
    label: s,
    description: c,
    errorMessage: i,
    ...d
  }, f) => /* @__PURE__ */ r.jsx(
    qr,
    {
      className: u("flex flex-col gap-3", o),
      ref: f,
      ...d,
      children: ({ isInvalid: h }) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        s && /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium [color:var(--text-primary)]", children: s }),
        c && /* @__PURE__ */ r.jsx("span", { className: "text-sm [color:var(--text-secondary)]", children: c }),
        /* @__PURE__ */ r.jsx("div", { className: Ae({ orientation: e, size: a }), children: n }),
        i && /* @__PURE__ */ r.jsx("span", { className: "text-sm [color:var(--status-error)]", children: i })
      ] })
    }
  )
), Pe = m.forwardRef(
  ({ className: o, size: e, children: a, description: n, ...s }, c) => /* @__PURE__ */ r.jsx(
    Hr,
    {
      className: u(Fe({ size: e }), o),
      ref: c,
      ...s,
      children: ({ isSelected: i, isDisabled: d, isHovered: f, isFocusVisible: h }) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: u(
              Oe({ size: e }),
              // Base styles
              !i && "[background-color:var(--bg-primary)] [border-color:var(--border-primary)]",
              // Hover styles
              f && !i && !d && "[border-color:var(--border-secondary)]",
              // Selected styles
              i && "[background-color:var(--interactive-primary)] [border-color:var(--interactive-primary)]",
              // Selected + hover
              i && f && !d && "[background-color:var(--interactive-primary-hover)] [border-color:var(--interactive-primary-hover)]",
              // Focus styles
              h && !d && "focus-ring",
              // Disabled styles
              d && "opacity-50 cursor-not-allowed"
            ),
            children: /* @__PURE__ */ r.jsx("span", { className: Be({ size: e }) })
          }
        ),
        (a || n) && /* @__PURE__ */ r.jsxs("div", { className: u("flex flex-col", d && "opacity-50"), children: [
          a && /* @__PURE__ */ r.jsx("span", { className: "[color:var(--text-primary)] leading-none", children: a }),
          n && /* @__PURE__ */ r.jsx("span", { className: "text-sm [color:var(--text-tertiary)] mt-1 leading-tight", children: n })
        ] })
      ] })
    }
  )
);
Ie.displayName = "RadioGroup";
Pe.displayName = "Radio";
const Ye = v(
  [
    "w-full font-sans border rounded-full transition-all",
    "focus-ring disabled:cursor-not-allowed disabled:opacity-50",
    // Remove default search input styling
    "[&::-webkit-search-decoration]:appearance-none",
    "[&::-webkit-search-cancel-button]:appearance-none",
    "[&::-webkit-search-results-button]:appearance-none",
    "[&::-webkit-search-results-decoration]:appearance-none",
    // Using semantic tokens
    "[transition-duration:var(--transition-normal)]",
    "[border-radius:var(--radius-full)]",
    "[background-color:var(--bg-primary)]",
    "[color:var(--text-primary)]",
    "[border-color:var(--border-primary)]",
    "placeholder:[color:var(--text-tertiary)]"
  ],
  {
    variants: {
      size: {
        sm: [
          "[height:var(--input-height-sm)]",
          "[font-size:var(--font-size-xs)]",
          "pl-9 pr-3"
        ],
        md: [
          "[height:var(--input-height-md)]",
          "[font-size:var(--font-size-sm)]",
          "pl-10 pr-3"
        ],
        lg: [
          "[height:var(--input-height-lg)]",
          "[font-size:var(--font-size-md)]",
          "pl-12 pr-4"
        ]
      },
      variant: {
        default: "",
        focused: ["[border-color:var(--border-focus)]", "shadow-sm"]
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
), Me = v([
  "block font-medium mb-1 ml-2",
  "[color:var(--text-primary)]",
  "[font-size:var(--font-size-sm)]",
  "[font-weight:var(--font-weight-medium)]"
]), We = v([
  "mt-1 text-sm ml-2",
  "[font-size:var(--font-size-xs)]",
  "[color:var(--text-secondary)]"
]), Ge = v([
  "absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-50 max-h-80 overflow-auto",
  "top-full left-0",
  "[background-color:var(--bg-primary)]",
  "[border-color:var(--border-primary)]",
  "[box-shadow:var(--shadow-lg)]"
]), De = v([
  "px-4 py-3 cursor-pointer transition-colors border-b last:border-b-0",
  "[border-color:var(--border-secondary)]",
  "hover:[background-color:var(--bg-secondary)]",
  "focus:[background-color:var(--bg-secondary)]",
  "focus:outline-none"
]), Le = m.forwardRef(
  ({
    className: o,
    inputClassName: e,
    size: a,
    variant: n,
    label: s,
    placeholder: c = "Search...",
    helperText: i,
    isDisabled: d,
    onClear: f,
    showClearButton: h = !0,
    value: y,
    onValueChange: w,
    // Live search props
    enableLiveSearch: b = !1,
    searchResults: x = [],
    onSearch: S,
    onResultSelect: z,
    isLoading: I = !1,
    noResultsText: sr = "No results found",
    minSearchLength: C = 2,
    searchDelay: X = 300,
    showPopover: H,
    renderResult: q,
    // Highlighting props
    enableHighlighting: U = !0,
    highlightClassName: Z = "[background-color:var(--brand-warning-500)] [color:var(--text-primary)] px-1 py-0.5 rounded font-medium",
    ...Q
  }, ir) => {
    const [cr, A] = m.useState(y || ""), [P, Y] = m.useState(!1), [M, $] = m.useState([]), [K, W] = m.useState(!1), [rr, T] = m.useState(""), t = m.useRef(null), l = y !== void 0 ? y : cr, p = h && l.length > 0 && !d, j = P ? "focused" : n, R = x.length > 0 ? x : M, N = I || K, F = x.length > 0 ? l : rr, G = H !== void 0 ? H : b && P && l.length >= C && (R.length > 0 || N || l.length > 0), k = m.useCallback(
      async (g) => {
        if (!b || !S || g.length < C) {
          $([]), T("");
          return;
        }
        W(!0);
        try {
          const E = await S(g);
          $(Array.isArray(E) ? E : []), T(g);
        } catch (E) {
          console.error("Search error:", E), $([]), T("");
        } finally {
          W(!1);
        }
      },
      [b, S, C]
    );
    m.useEffect(() => (t.current && clearTimeout(t.current), l.length >= C && b ? t.current = setTimeout(() => {
      k(l);
    }, X) : $([]), () => {
      t.current && clearTimeout(t.current);
    }), [
      l,
      C,
      b,
      X,
      k
    ]);
    const V = (g) => {
      y === void 0 && A(g), w?.(g);
    }, D = () => {
      y === void 0 && A(""), w?.(""), f?.(), $([]), T("");
    }, dr = (g) => {
      V(g.target.value);
    }, Ir = (g) => {
      z?.(g), y === void 0 && A(g.title), w?.(g.title), Y(!1), $([]), T("");
    }, lr = m.useCallback(
      (g, E) => {
        if (!U || !E.trim()) return g;
        const xr = new RegExp(
          `(${E.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
          "gi"
        );
        return g.split(xr).map(
          (ur, Yr) => xr.test(ur) ? /* @__PURE__ */ r.jsx("mark", { className: u(Z), children: ur }, Yr) : ur
        );
      },
      [U, Z]
    ), Pr = (g) => /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ r.jsx("div", { className: "font-medium [color:var(--text-primary)] text-sm", children: lr(g.title, F) }),
      g.description && /* @__PURE__ */ r.jsx("div", { className: "text-xs [color:var(--text-secondary)] mt-1", children: lr(g.description, F) }),
      g.category && /* @__PURE__ */ r.jsx("div", { className: "text-xs [color:var(--text-tertiary)] mt-1 font-medium uppercase tracking-wide", children: lr(g.category, F) })
    ] });
    return /* @__PURE__ */ r.jsxs(
      Er,
      {
        className: u("w-full", o),
        isDisabled: d,
        ...Q,
        children: [
          s && /* @__PURE__ */ r.jsx(Cr, { className: u(Me()), children: s }),
          /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: u(
                  "absolute top-1/2 transform left-3 -translate-y-1/2 [color:var(--text-tertiary)] pointer-events-none",
                  a === "sm" && "left-3",
                  a === "md" && "left-3",
                  a === "lg" && "left-4"
                ),
                children: /* @__PURE__ */ r.jsx(te, { size: a === "sm" ? 14 : a === "lg" ? 18 : 16 })
              }
            ),
            N && /* @__PURE__ */ r.jsx(
              "div",
              {
                className: u(
                  "absolute top-1/2 transform -translate-y-1/2 [color:var(--text-tertiary)]",
                  a === "lg" ? "right-12" : "right-10"
                ),
                children: /* @__PURE__ */ r.jsx(
                  kr,
                  {
                    size: a === "sm" ? 12 : a === "lg" ? 16 : 14,
                    className: "animate-spin"
                  }
                )
              }
            ),
            /* @__PURE__ */ r.jsx(
              pr,
              {
                ref: ir,
                type: "search",
                className: u(
                  Ye({ size: a, variant: j }),
                  p && (a === "lg" ? "pr-10" : "pr-9"),
                  N && !p && (a === "lg" ? "pr-16" : "pr-14"),
                  N && p && (a === "lg" ? "pr-20" : "pr-18"),
                  e
                ),
                placeholder: c,
                value: l,
                onChange: dr,
                onFocus: () => Y(!0),
                onBlur: (g) => {
                  setTimeout(() => Y(!1), 150);
                }
              }
            ),
            p && /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                onClick: D,
                className: u(
                  "absolute top-1/2 transform -translate-y-1/2",
                  "[color:var(--text-tertiary)] hover:[color:var(--text-secondary)]",
                  "transition-colors cursor-pointer p-0.5 rounded",
                  "hover:bg-[var(--bg-secondary)]",
                  a === "lg" ? "right-4" : "right-3"
                ),
                "aria-label": "Clear search",
                children: /* @__PURE__ */ r.jsx(_r, { size: a === "sm" ? 12 : a === "lg" ? 16 : 14 })
              }
            ),
            G && /* @__PURE__ */ r.jsx("div", { className: u(Ge()), children: N && R.length === 0 ? /* @__PURE__ */ r.jsxs("div", { className: "px-4 py-3 text-center [color:var(--text-secondary)]", children: [
              /* @__PURE__ */ r.jsx(kr, { size: 16, className: "animate-spin mx-auto mb-2" }),
              /* @__PURE__ */ r.jsx("div", { className: "text-sm", children: "Searching..." })
            ] }) : R.length > 0 ? /* @__PURE__ */ r.jsx("div", { children: R.map((g) => /* @__PURE__ */ r.jsx(
              "div",
              {
                className: u(De()),
                onClick: () => Ir(g),
                onMouseDown: (E) => E.preventDefault(),
                children: q ? q(g) : Pr(g)
              },
              g.id
            )) }) : l.length >= C ? /* @__PURE__ */ r.jsx("div", { className: "px-4 py-3 text-center [color:var(--text-secondary)] text-sm", children: sr }) : null })
          ] }),
          i && /* @__PURE__ */ r.jsx(Tr, { slot: "description", className: u(We()), children: i })
        ]
      }
    );
  }
);
Le.displayName = "Search";
const Je = v(["relative w-full"], {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: ""
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Xe = v(
  [
    "flex w-full items-center justify-between whitespace-nowrap",
    "border font-sans text-left transition-all cursor-pointer",
    "focus-ring hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
    // Using same tokens as Input component
    "[transition-duration:var(--transition-normal)]",
    "[border-radius:var(--radius-full)]",
    "[background-color:var(--bg-primary)]",
    "[color:var(--text-primary)]",
    "[border-color:var(--border-primary)]",
    "focus:[border-color:var(--border-focus)]"
  ],
  {
    variants: {
      size: {
        sm: [
          "[height:var(--input-height-sm)]",
          "[font-size:var(--font-size-xs)]",
          "px-3"
        ],
        md: [
          "[height:var(--input-height-md)]",
          "[font-size:var(--font-size-sm)]",
          "px-3"
        ],
        lg: [
          "[height:var(--input-height-lg)]",
          "[font-size:var(--font-size-md)]",
          "px-4"
        ]
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), He = v([
  "z-50 min-w-[8rem] overflow-hidden",
  "[background-color:var(--bg-primary)]",
  "[border:1px_solid_var(--border-primary)]",
  "[border-radius:var(--radius-md)]",
  "[box-shadow:var(--shadow-lg)]",
  "data-[entering]:animate-in data-[entering]:fade-in-0 data-[entering]:zoom-in-95",
  "data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95"
]), qe = v([
  "relative flex cursor-pointer select-none items-center",
  "px-3 py-2 outline-none font-sans",
  "[font-size:var(--font-size-sm)]",
  "[border-radius:var(--radius-sm)]",
  "[color:var(--text-primary)]",
  "data-[focused]:[background-color:var(--interactive-secondary-hover)]",
  "data-[selected]:[background-color:var(--interactive-secondary)]",
  "data-[selected]:[color:var(--text-primary)]",
  "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  "[transition-duration:var(--transition-fast)]",
  "transition-colors"
]), Ue = m.forwardRef(
  ({ className: o, size: e, options: a, placeholder: n = "Select an option...", ...s }, c) => /* @__PURE__ */ r.jsx("div", { className: u(Je({ size: e, className: o })), children: /* @__PURE__ */ r.jsxs(Ur, { ...s, ref: c, children: [
    /* @__PURE__ */ r.jsxs($r, { className: u(Xe({ size: e })), children: [
      /* @__PURE__ */ r.jsx(
        pr,
        {
          className: "flex-1 bg-transparent outline-none border-0 focus:ring-0 px-0 h-auto placeholder:[color:var(--text-tertiary)] cursor-pointer",
          placeholder: n,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ r.jsx(oe, { className: "h-4 w-4 [color:var(--text-secondary)] shrink-0" })
    ] }),
    /* @__PURE__ */ r.jsx(Zr, { className: u(He()), children: /* @__PURE__ */ r.jsx(Qr, { className: "max-h-60 overflow-auto p-1 font-sans", children: a.map((i) => /* @__PURE__ */ r.jsx(
      Fr,
      {
        id: i.value,
        textValue: i.label,
        isDisabled: i.disabled,
        children: i.label
      },
      i.value
    )) }) })
  ] }) })
);
Ue.displayName = "Select";
const Fr = m.forwardRef(
  ({ className: o, children: e, ...a }, n) => /* @__PURE__ */ r.jsx(
    Kr,
    {
      className: ({ isSelected: s }) => u(qe(), s && "pr-8", o),
      ref: n,
      ...a,
      children: ({ isSelected: s }) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx("span", { className: "flex-1", children: e }),
        s && /* @__PURE__ */ r.jsx("span", { className: "absolute right-2 flex h-4 w-4 items-center justify-center", children: /* @__PURE__ */ r.jsx(Vr, { className: "h-3 w-3 [color:var(--text-primary)]" }) })
      ] })
    }
  )
);
Fr.displayName = "SelectItem";
const Ze = v(
  [
    "group flex items-center gap-3 text-sm font-sans cursor-pointer",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "[transition-duration:var(--transition-fast)]",
    "transition-opacity"
  ],
  {
    variants: {
      size: {
        sm: "gap-2 text-xs",
        md: "gap-3 text-sm",
        lg: "gap-4 text-base"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Qe = v(
  [
    "relative flex shrink-0 cursor-pointer rounded-full transition-colors",
    "[transition-duration:var(--transition-normal)]",
    "[background-color:var(--bg-secondary)]",
    "[border:2px_solid_var(--border-primary)]",
    // Focus styles
    "group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-offset-1",
    "group-focus-visible:[ring-color:var(--border-focus)]",
    // Hover styles
    "group-hover:[border-color:var(--border-secondary)]",
    // Selected styles
    "group-data-[selected]:[background-color:var(--interactive-primary)]",
    "group-data-[selected]:[border-color:var(--interactive-primary)]",
    "group-data-[selected]:group-hover:[background-color:var(--interactive-primary-hover)]",
    "group-data-[selected]:group-hover:[border-color:var(--interactive-primary-hover)]",
    // Disabled styles
    "group-data-[disabled]:[background-color:var(--bg-disabled)]",
    "group-data-[disabled]:group-data-[selected]:[background-color:var(--interactive-primary-disabled)]",
    "group-data-[disabled]:group-data-[selected]:[border-color:var(--interactive-primary-disabled)]"
  ],
  {
    variants: {
      size: {
        sm: "h-5 w-9 p-0.5",
        md: "h-6 w-11 p-0.5",
        lg: "h-7 w-13 p-0.5"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Ke = v(
  [
    "absolute block rounded-full bg-white shadow-sm pointer-events-none",
    "top-0 left-0"
  ],
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), ra = (o, e) => {
  if (!e) return 0;
  switch (o) {
    case "sm":
      return 16;
    // 36px track - 16px thumb - 4px padding = 16px travel
    case "md":
      return 20;
    // 44px track - 20px thumb - 4px padding = 20px travel
    case "lg":
      return 24;
    // 52px track - 24px thumb - 4px padding = 24px travel
    default:
      return 20;
  }
}, ea = m.forwardRef(
  ({ className: o, size: e, children: a, description: n, ...s }, c) => /* @__PURE__ */ r.jsx(
    re,
    {
      className: u(Ze({ size: e }), o),
      ref: c,
      ...s,
      children: ({ isSelected: i, isDisabled: d, isHovered: f, isFocusVisible: h }) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: u(
              Qe({ size: e }),
              // Base styles
              !i && "[background-color:var(--bg-secondary)] [border-color:var(--border-primary)]",
              // Hover styles
              f && !i && !d && "[border-color:var(--border-secondary)]",
              // Selected styles
              i && "[background-color:var(--interactive-primary)] [border-color:var(--interactive-primary)]",
              // Selected + hover
              i && f && !d && "[background-color:var(--interactive-primary-hover)] [border-color:var(--interactive-primary-hover)]",
              // Focus styles
              h && !d && "focus-ring",
              // Disabled styles
              d && "opacity-50 cursor-not-allowed"
            ),
            children: /* @__PURE__ */ r.jsx(
              "span",
              {
                className: Ke({ size: e }),
                style: {
                  transform: `translateX(${ra(e || "md", i)}px)`,
                  transition: "transform 200ms ease-out"
                }
              }
            )
          }
        ),
        (a || n) && /* @__PURE__ */ r.jsxs("div", { className: u("flex flex-col", d && "opacity-50"), children: [
          a && /* @__PURE__ */ r.jsx("span", { className: "[color:var(--text-primary)] leading-none", children: a }),
          n && /* @__PURE__ */ r.jsx("span", { className: "text-sm [color:var(--text-tertiary)] mt-1 leading-tight", children: n })
        ] })
      ] })
    }
  )
);
ea.displayName = "Switch";
const aa = v(
  [
    "inline-flex items-center font-sans font-medium transition-all",
    "border rounded-md whitespace-nowrap",
    // Using semantic tokens
    "[transition-duration:var(--transition-normal)]",
    "[font-weight:var(--font-weight-medium)]"
  ],
  {
    variants: {
      variant: {
        default: [
          "[background-color:var(--bg-secondary)]",
          "[color:var(--text-primary)]",
          "[border-color:var(--border-primary)]"
        ],
        primary: [
          "[background-color:var(--bg-brand-muted)]",
          "[color:var(--text-brand)]",
          "[border-color:var(--border-brand)]"
        ],
        secondary: [
          "[background-color:var(--bg-tertiary)]",
          "[color:var(--text-secondary)]",
          "[border-color:var(--border-secondary)]"
        ],
        success: [
          "[background-color:var(--status-success-bg)]",
          "[color:var(--status-success-text)]",
          "[border-color:var(--status-success)]"
        ],
        warning: [
          "[background-color:var(--status-warning-bg)]",
          "[color:var(--status-warning-text)]",
          "[border-color:var(--status-warning)]"
        ],
        danger: [
          "[background-color:var(--status-danger-bg)]",
          "[color:var(--status-danger-text)]",
          "[border-color:var(--status-danger)]"
        ],
        outline: [
          "bg-transparent",
          "[color:var(--text-primary)]",
          "[border-color:var(--border-primary)]"
        ],
        filled: [
          "[background-color:var(--bg-brand)]",
          "[color:var(--text-inverse)]",
          "border-transparent"
        ]
      },
      size: {
        sm: [
          "[height:var(--tag-height-sm)]",
          "[font-size:var(--font-size-xs)]",
          "px-1"
        ],
        md: [
          "[height:var(--tag-height-md)]",
          "[font-size:var(--font-size-sm)]",
          "px-2"
        ],
        lg: [
          "[height:var(--tag-height-lg)]",
          "[font-size:var(--font-size-md)]",
          "px-3"
        ]
      },
      removable: {
        true: "",
        false: ""
      },
      interactive: {
        true: [
          "cursor-pointer",
          "hover:[background-color:var(--bg-tertiary)]",
          "active:[transform:translateY(1px)]"
        ],
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      removable: !1,
      interactive: !1
    }
  }
), ta = m.forwardRef(
  ({
    className: o,
    variant: e,
    size: a,
    removable: n = !1,
    onRemove: s,
    interactive: c = !1,
    leftIcon: i,
    rightIcon: d,
    children: f,
    onClick: h,
    ...y
  }, w) => {
    const b = (S) => {
      S.stopPropagation(), s?.();
    }, x = c || !!h;
    return /* @__PURE__ */ r.jsxs(
      "span",
      {
        ref: w,
        className: u(
          aa({ variant: e, size: a, removable: n, interactive: x }),
          o
        ),
        onClick: h,
        ...y,
        children: [
          i && /* @__PURE__ */ r.jsx("span", { className: "mr-1.5 inline-flex items-center", children: i }),
          /* @__PURE__ */ r.jsx("span", { children: f }),
          d && !n && /* @__PURE__ */ r.jsx("span", { className: "ml-1.5 inline-flex items-center", children: d }),
          n && /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              onClick: b,
              className: u(
                "ml-1.5 inline-flex items-center justify-center rounded-full",
                "hover:[background-color:var(--bg-tertiary)] transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-offset-1",
                a === "sm" && "w-3 h-3",
                a === "md" && "w-4 h-4",
                a === "lg" && "w-5 h-5"
              ),
              "aria-label": "Remove tag",
              children: /* @__PURE__ */ r.jsx(
                _r,
                {
                  size: a === "sm" ? 12 : a === "lg" ? 16 : 14,
                  className: "shrink-0 cursor-pointer"
                }
              )
            }
          )
        ]
      }
    );
  }
);
ta.displayName = "Tag";
const ar = {
  id: "stride",
  name: "Stride",
  description: "Default Stride Design System brand with blue primary colors"
}, oa = {
  id: "coral",
  name: "Coral",
  description: "Coral theme with warm orange-red primary colors and no button radius"
}, na = {
  id: "forest",
  name: "Forest",
  description: "Forest theme with natural green primary colors and generous spacing"
}, sa = {
  id: "runswap",
  name: "Runswap",
  description: "Runswap theme with purple primary colors"
}, tr = [
  ar,
  oa,
  na,
  sa
], ia = (o) => tr.find((e) => e.id === o), Ra = () => ar, br = (o) => {
  const e = ia(o);
  if (!e) {
    console.warn(`Brand "${o}" not found`);
    return;
  }
  const a = tr.map((n) => `brand-${n.id}`);
  document.documentElement.classList.remove(...a), document.documentElement.classList.add(`brand-${e.id}`), typeof window < "u" && localStorage.setItem("stride-brand", o);
}, vr = () => typeof window < "u" && localStorage.getItem("stride-brand") || ar.id, Sa = () => {
  const o = vr();
  br(o);
}, ca = () => (fr(() => {
  br("runswap"), document.documentElement.classList.add("dark");
}, []), null), O = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, or = /* @__PURE__ */ m.createContext(O), Or = /* @__PURE__ */ m.createContext(!1);
function da(o) {
  let e = B(or), a = Br(e === O), [n, s] = nr(!0), c = Wr(() => ({
    // If this is the first SSRProvider, start with an empty string prefix, otherwise
    // append and increment the counter.
    prefix: e === O ? "" : `${e.prefix}-${a}`,
    current: 0
  }), [
    e,
    a
  ]);
  return typeof document < "u" && Gr(() => {
    s(!1);
  }, []), /* @__PURE__ */ m.createElement(or.Provider, {
    value: c
  }, /* @__PURE__ */ m.createElement(Or.Provider, {
    value: n
  }, o.children));
}
let zr = !1;
function la(o) {
  return typeof m.useId == "function" ? (process.env.NODE_ENV !== "test" && process.env.NODE_ENV !== "production" && !zr && (console.warn("In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app."), zr = !0), /* @__PURE__ */ m.createElement(m.Fragment, null, o.children)) : /* @__PURE__ */ m.createElement(da, o);
}
let ua = !!(typeof window < "u" && window.document && window.document.createElement), mr = /* @__PURE__ */ new WeakMap();
function Br(o = !1) {
  let e = B(or), a = Dr(null);
  if (a.current === null && !o) {
    var n, s;
    let c = (s = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || s === void 0 || (n = s.ReactCurrentOwner) === null || n === void 0 ? void 0 : n.current;
    if (c) {
      let i = mr.get(c);
      i == null ? mr.set(c, {
        id: e.current,
        state: c.memoizedState
      }) : c.memoizedState !== i.state && (e.current = i.id, mr.delete(c));
    }
    a.current = ++e.current;
  }
  return a.current;
}
function ma(o) {
  let e = B(or);
  e === O && !ua && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let a = Br(!!o), n = e === O && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${e.prefix}`;
  return o || `${n}-${a}`;
}
function va(o) {
  let e = m.useId(), [a] = nr(hr()), n = a || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${O.prefix}`;
  return o || `${n}-${e}`;
}
m.useId;
function fa() {
  return !1;
}
function pa() {
  return !0;
}
function ga(o) {
  return () => {
  };
}
function hr() {
  return typeof m.useSyncExternalStore == "function" ? m.useSyncExternalStore(ga, fa, pa) : B(Or);
}
function za({ children: o }) {
  return /* @__PURE__ */ r.jsxs(la, { children: [
    /* @__PURE__ */ r.jsx(ca, {}),
    o
  ] });
}
const ba = () => {
  const [o, e] = nr(() => typeof window < "u" ? vr() : "stride"), a = (s) => {
    typeof document < "u" && document.documentElement.classList.add("brand-switching"), br(s), e(s), setTimeout(() => {
      typeof document < "u" && document.documentElement.classList.remove("brand-switching");
    }, 50);
  }, n = () => tr.find((s) => s.id === o);
  return fr(() => {
    if (typeof window < "u") {
      const s = vr();
      s !== o && a(s);
    }
  }, []), {
    currentBrand: o,
    availableBrands: tr,
    setBrand: a,
    getCurrentBrandTheme: n
  };
}, $a = () => {
  const { currentBrand: o, getCurrentBrandTheme: e } = ba(), [a, n] = nr(() => e());
  return fr(() => {
    n(e());
  }, [o, e]), a;
}, Ea = () => hr(), Ca = ({ children: o, fallback: e = null }) => hr() ? /* @__PURE__ */ r.jsx(r.Fragment, { children: e }) : /* @__PURE__ */ r.jsx(r.Fragment, { children: o }), Ta = () => typeof window < "u" ? window : void 0, Va = {
  getItem: (o) => {
    if (typeof window > "u") return null;
    try {
      return localStorage.getItem(o);
    } catch {
      return null;
    }
  },
  setItem: (o, e) => {
    if (!(typeof window > "u"))
      try {
        localStorage.setItem(o, e);
      } catch {
      }
  },
  removeItem: (o) => {
    if (!(typeof window > "u"))
      try {
        localStorage.removeItem(o);
      } catch {
      }
  }
};
export {
  de as Badge,
  ca as BrandInitializer,
  ue as Button,
  he as Card,
  ke as CardContent,
  we as CardDescription,
  je as CardFooter,
  xe as CardHeader,
  ye as CardTitle,
  Se as Checkbox,
  Ca as ClientOnly,
  za as ClientProviders,
  Ce as Input,
  _e as Pagination,
  Te as PaginationEllipsis,
  _ as PaginationItem,
  Pe as Radio,
  Ie as RadioGroup,
  Le as Search,
  Ue as Select,
  Fr as SelectItem,
  ea as Switch,
  ta as Tag,
  br as applyBrandTheme,
  tr as availableBrands,
  u as cn,
  oa as coralBrand,
  na as forestBrand,
  ia as getBrandById,
  vr as getCurrentBrand,
  Ra as getDefaultBrand,
  Sa as initializeBrand,
  sa as runswapBrand,
  Va as safeLocalStorage,
  Ta as safeWindow,
  ar as strideBrand,
  ba as useBrand,
  $a as useBrandTheme,
  Ea as useSSRSafeId
};
