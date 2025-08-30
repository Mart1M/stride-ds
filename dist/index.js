import u, { createContext as he, useContext as G, useEffect as mr, useState as W, useMemo as xe, useLayoutEffect as ye, useRef as we } from "react";
import { clsx as ke } from "clsx";
import { twMerge as je } from "tailwind-merge";
import { cva as f } from "class-variance-authority";
import { X as pr, AlertCircle as Wr, AlertTriangle as Mr, CheckCircle as Yr, Info as jr, ChevronDown as Gr, Minus as Hr, Check as Nr, ChevronLeft as Er, ChevronRight as Br, MoreHorizontal as Ne, Search as Te, Loader2 as _r } from "lucide-react";
import { DisclosureGroup as Re, Disclosure as Ce, Button as M, DisclosurePanel as $e, Checkbox as Jr, Radio as Ur, Dialog as Ve, DialogTrigger as Se, ModalOverlay as ze, Modal as Ee, Heading as Be, TextField as qr, Label as Tr, Input as Rr, Text as fr, RadioGroup as _e, ComboBox as Ae, Popover as De, ListBox as Fe, ListBoxItem as Oe, Slider as Ie, SliderOutput as Pe, SliderTrack as Le, SliderThumb as We, Switch as Me, Tabs as Ye, TabList as Ge, Tab as He, TabPanel as Je, Tooltip as Ue, TooltipTrigger as qe, UNSTABLE_ToastQueue as Xe, UNSTABLE_Toast as Ze, UNSTABLE_ToastContent as Qe, UNSTABLE_ToastRegion as Ke } from "react-aria-components";
var ur = { exports: {} }, Q = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar;
function ra() {
  if (Ar) return Q;
  Ar = 1;
  var r = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function a(o, s, d) {
    var n = null;
    if (d !== void 0 && (n = "" + d), s.key !== void 0 && (n = "" + s.key), "key" in s) {
      d = {};
      for (var i in s)
        i !== "key" && (d[i] = s[i]);
    } else d = s;
    return s = d.ref, {
      $$typeof: r,
      type: o,
      key: n,
      ref: s !== void 0 ? s : null,
      props: d
    };
  }
  return Q.Fragment = e, Q.jsx = a, Q.jsxs = a, Q;
}
var K = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dr;
function ea() {
  return Dr || (Dr = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === hr ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case C:
          return "Fragment";
        case O:
          return "Profiler";
        case B:
          return "StrictMode";
        case nr:
          return "Suspense";
        case sr:
          return "SuspenseList";
        case br:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case R:
            return "Portal";
          case L:
            return (c.displayName || "Context") + ".Provider";
          case V:
            return (c._context.displayName || "Context") + ".Consumer";
          case or:
            var g = c.render;
            return c = c.displayName, c || (c = g.displayName || g.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case ir:
            return g = c.displayName || null, g !== null ? g : r(c.type) || "Memo";
          case cr:
            g = c._payload, c = c._init;
            try {
              return r(c(g));
            } catch {
            }
        }
      return null;
    }
    function e(c) {
      return "" + c;
    }
    function a(c) {
      try {
        e(c);
        var g = !1;
      } catch {
        g = !0;
      }
      if (g) {
        g = console;
        var h = g.error, N = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return h.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), e(c);
      }
    }
    function o(c) {
      if (c === C) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === cr)
        return "<...>";
      try {
        var g = r(c);
        return g ? "<" + g + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var c = I.A;
      return c === null ? null : c.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function n(c) {
      if (H.call(c, "key")) {
        var g = Object.getOwnPropertyDescriptor(c, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function i(c, g) {
      function h() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          g
        ));
      }
      h.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: h,
        configurable: !0
      });
    }
    function m() {
      var c = r(this.type);
      return lr[c] || (lr[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function p(c, g, h, N, $, T, P, X) {
      return h = T.ref, c = {
        $$typeof: b,
        type: c,
        key: g,
        props: T,
        _owner: $
      }, (h !== void 0 ? h : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(c, "ref", { enumerable: !1, value: null }), c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(c, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(c, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function y(c, g, h, N, $, T, P, X) {
      var j = g.children;
      if (j !== void 0)
        if (N)
          if (J(j)) {
            for (N = 0; N < j.length; N++)
              w(j[N]);
            Object.freeze && Object.freeze(j);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(j);
      if (H.call(g, "key")) {
        j = r(c);
        var A = Object.keys(g).filter(function(xr) {
          return xr !== "key";
        });
        N = 0 < A.length ? "{key: someKey, " + A.join(": ..., ") + ": ...}" : "{key: someKey}", _[j + N] || (A = 0 < A.length ? "{" + A.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          j,
          A,
          j
        ), _[j + N] = !0);
      }
      if (j = null, h !== void 0 && (a(h), j = "" + h), n(g) && (a(g.key), j = "" + g.key), "key" in g) {
        h = {};
        for (var Z in g)
          Z !== "key" && (h[Z] = g[Z]);
      } else h = g;
      return j && i(
        h,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), p(
        c,
        j,
        T,
        $,
        s(),
        h,
        P,
        X
      );
    }
    function w(c) {
      typeof c == "object" && c !== null && c.$$typeof === b && c._store && (c._store.validated = 1);
    }
    var v = u, b = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), L = Symbol.for("react.context"), or = Symbol.for("react.forward_ref"), nr = Symbol.for("react.suspense"), sr = Symbol.for("react.suspense_list"), ir = Symbol.for("react.memo"), cr = Symbol.for("react.lazy"), br = Symbol.for("react.activity"), hr = Symbol.for("react.client.reference"), I = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, J = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(c) {
        return c();
      }
    };
    var z, lr = {}, q = v["react-stack-bottom-frame"].bind(
      v,
      d
    )(), dr = U(o(d)), _ = {};
    K.Fragment = C, K.jsx = function(c, g, h, N, $) {
      var T = 1e4 > I.recentlyCreatedOwnerStacks++;
      return y(
        c,
        g,
        h,
        !1,
        N,
        $,
        T ? Error("react-stack-top-frame") : q,
        T ? U(o(c)) : dr
      );
    }, K.jsxs = function(c, g, h, N, $) {
      var T = 1e4 > I.recentlyCreatedOwnerStacks++;
      return y(
        c,
        g,
        h,
        !0,
        N,
        $,
        T ? Error("react-stack-top-frame") : q,
        T ? U(o(c)) : dr
      );
    };
  })()), K;
}
var Fr;
function aa() {
  return Fr || (Fr = 1, process.env.NODE_ENV === "production" ? ur.exports = ra() : ur.exports = ea()), ur.exports;
}
var t = aa();
function l(...r) {
  return je(ke(r));
}
const ta = f(
  [
    "relative flex gap-3 rounded-lg text-sm font-medium",
    "border transition-all",
    "[border-radius:var(--radius-card)]",
    "[transition-duration:var(--transition-normal)]"
  ],
  {
    variants: {
      variant: {
        info: [
          "bg-blue-50 border-blue-200 text-blue-800",
          "dark:bg-blue-950/50 dark:border-blue-800 dark:text-blue-200"
        ],
        success: [
          "[background-color:var(--status-success-bg)]",
          "[border-color:var(--status-success)]",
          "[color:var(--status-success-text)]",
          "dark:bg-green-950/50 dark:border-green-800 dark:text-green-200"
        ],
        warning: [
          "[background-color:var(--status-warning-bg)]",
          "[border-color:var(--status-warning)]",
          "[color:var(--status-warning-text)]",
          "dark:bg-orange-950/50 dark:border-orange-800 dark:text-orange-200"
        ],
        error: [
          "[background-color:var(--status-danger-bg)]",
          "[border-color:var(--status-danger)]",
          "[color:var(--status-danger-text)]",
          "dark:bg-red-950/50 dark:border-red-800 dark:text-red-200"
        ]
      },
      size: {
        sm: "p-3 text-xs",
        md: "p-4 text-sm",
        lg: "p-5 text-base"
      },
      alignment: {
        start: "items-start",
        center: "items-center"
      }
    },
    defaultVariants: {
      variant: "info",
      size: "md",
      alignment: "start"
    }
  }
), oa = f([], {
  variants: {
    variant: {
      info: "text-blue-600 dark:text-blue-400",
      success: "[color:var(--status-success)] dark:text-green-400",
      warning: "[color:var(--status-warning)] dark:text-orange-400",
      error: "[color:var(--status-danger)] dark:text-red-400"
    }
  },
  defaultVariants: {
    variant: "info"
  }
}), na = "flex-shrink-0", Or = f(
  [
    "inline-flex items-center justify-center rounded-md",
    "text-current opacity-70 hover:opacity-100 focus:opacity-100",
    "focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2",
    "dark:focus:ring-offset-0",
    "transition-opacity cursor-pointer",
    "[transition-duration:var(--transition-fast)]"
  ],
  {
    variants: {
      size: {
        sm: "p-0.5 w-5 h-5",
        md: "p-1 w-6 h-6",
        lg: "p-1 w-6 h-6"
      },
      position: {
        absolute: "absolute",
        inline: "flex-shrink-0"
      },
      absolutePosition: {
        sm: "top-2.5 right-2.5",
        md: "top-1 right-1",
        lg: "top-4 right-4"
      }
    },
    defaultVariants: {
      size: "md",
      position: "absolute"
    }
  }
), sa = {
  info: jr,
  success: Yr,
  warning: Mr,
  error: Wr
}, ia = u.forwardRef(
  ({
    className: r,
    variant: e = "info",
    size: a = "md",
    title: o,
    children: s,
    icon: d = !0,
    dismissible: n = !1,
    onDismiss: i,
    role: m = "alert",
    ...p
  }, y) => {
    const w = e ? sa[e] : jr, v = d !== !1, b = a === "sm" ? 16 : a === "md" ? 20 : 24, R = d === !0 ? /* @__PURE__ */ t.jsx(w, { size: b }) : d, C = !!o, B = !!s, O = C && !B || !C && B, V = O ? "center" : "start", L = O ? "inline" : "absolute";
    return /* @__PURE__ */ t.jsxs(
      "div",
      {
        ref: y,
        className: l(ta({ variant: e, size: a, alignment: V }), r),
        role: m,
        ...p,
        children: [
          v && /* @__PURE__ */ t.jsx(
            "div",
            {
              className: l(
                na,
                oa({ variant: e })
              ),
              children: R
            }
          ),
          /* @__PURE__ */ t.jsxs("div", { className: "flex-1 min-w-0", children: [
            o && /* @__PURE__ */ t.jsx("h4", { className: "font-semibold mb-1 text-current", children: o }),
            /* @__PURE__ */ t.jsx("div", { className: "text-current opacity-90", children: s })
          ] }),
          n && /* @__PURE__ */ t.jsx(
            "button",
            {
              className: l(
                Or({
                  size: a,
                  position: L
                }),
                !O && Or({
                  absolutePosition: a
                })
              ),
              onClick: i,
              "aria-label": "Dismiss alert",
              children: /* @__PURE__ */ t.jsx(pr, { className: a === "sm" ? "w-3 h-3" : "w-4 h-4" })
            }
          )
        ]
      }
    );
  }
);
ia.displayName = "Alert";
const ca = f(
  [
    "w-full min-w-80 max-w-2xl",
    "rounded-lg",
    "overflow-hidden",
    "transition-all duration-300 ease-out"
  ],
  {
    variants: {
      variant: {
        default: [
          "border border-[var(--border-primary)]",
          "shadow-sm",
          "bg-[var(--bg-primary)]",
          "divide-y divide-[var(--border-primary)]"
        ],
        ghost: ["bg-transparent", "divide-y divide-[var(--border-primary)]"],
        filled: [
          "border border-[var(--border-primary)]",
          "shadow-sm",
          "bg-[var(--bg-secondary)]",
          "divide-y divide-[var(--border-primary)]"
        ]
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
), la = (r) => ({
  fontFamily: "var(--font-family-primary)"
}), da = f(
  ["group transition-all duration-300 ease-out", "w-full"],
  {
    variants: {
      variant: {
        default: ["bg-[var(--bg-primary)]", "hover:bg-[var(--bg-secondary)]"],
        ghost: ["bg-transparent", "hover:bg-[var(--bg-secondary)]"],
        filled: ["bg-[var(--bg-secondary)]", "hover:bg-[var(--bg-tertiary)]"]
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), ua = (r) => ({
  transition: "var(--brand-transition)"
}), ma = f(
  [
    "flex w-full items-center justify-between font-medium text-left",
    "text-[var(--text-primary)]",
    "focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]",
    "focus:ring-inset",
    "rounded-sm",
    "transition-all duration-300 ease-out",
    "disabled:pointer-events-none disabled:opacity-50 disabled:text-[var(--text-disabled)]",
    "hover:text-[var(--text-primary)]",
    "group-data-[expanded]:text-[var(--text-primary)]"
  ],
  {
    variants: {
      size: {
        sm: "px-4 py-3 text-sm gap-3",
        md: "px-5 py-4 text-base gap-4",
        lg: "px-6 py-5 text-lg gap-5"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), fa = () => ({
  fontFamily: "var(--font-family-primary)",
  fontWeight: "500",
  lineHeight: "1.5"
}), va = f(
  ["overflow-hidden", "text-[var(--text-secondary)]", "w-full"],
  {
    variants: {
      size: {
        sm: "px-4 py-3 text-sm aria-[hidden=true]:!px-0 aria-[hidden=true]:!py-0",
        md: "px-5 py-4 text-base aria-[hidden=true]:!px-0 aria-[hidden=true]:!py-0",
        lg: "px-6 py-5 text-lg aria-[hidden=true]:!px-0 aria-[hidden=true]:!py-0"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), ga = () => ({
  fontFamily: "var(--font-family-primary)",
  lineHeight: "1.6"
}), pa = f(
  [
    "shrink-0",
    "text-[var(--text-tertiary)]",
    "group-hover:text-[var(--text-secondary)]",
    "transform-gpu",
    "transition-all duration-300 ease-out"
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
), ba = () => ({
  strokeWidth: "1.5"
}), Xr = u.forwardRef(
  ({ className: r, variant: e, size: a, children: o, ...s }, d) => /* @__PURE__ */ t.jsx(
    Re,
    {
      ref: d,
      className: l(ca({ variant: e, size: a }), r),
      style: la(),
      ...s,
      children: u.Children.map(o, (n) => {
        if (u.isValidElement(n) && n.type === Cr) {
          const i = n;
          return u.cloneElement(i, {
            variant: e,
            ...i.props || {}
          });
        }
        return n;
      })
    }
  )
);
Xr.displayName = "Accordion";
const Cr = u.forwardRef(({ className: r, variant: e, children: a, ...o }, s) => /* @__PURE__ */ t.jsx(
  Ce,
  {
    ref: s,
    className: l(da({ variant: e }), r),
    style: ua(),
    ...o,
    children: a
  }
));
Cr.displayName = "AccordionItem";
const Zr = u.forwardRef(({ className: r, size: e, children: a, icon: o, hideIcon: s = !1, ...d }, n) => {
  const i = o || Gr;
  return /* @__PURE__ */ t.jsxs(
    M,
    {
      ref: n,
      slot: "trigger",
      className: l(ma({ size: e }), r),
      style: fa(),
      ...d,
      children: [
        /* @__PURE__ */ t.jsx("span", { className: "flex-1 text-left", children: a }),
        !s && /* @__PURE__ */ t.jsx(
          i,
          {
            className: l(pa({ size: e })),
            style: ba(),
            "aria-hidden": !0
          }
        )
      ]
    }
  );
});
Zr.displayName = "AccordionTrigger";
const Qr = u.forwardRef(({ className: r, size: e, children: a, ...o }, s) => /* @__PURE__ */ t.jsx(
  $e,
  {
    ref: s,
    className: l(va({ size: e }), r),
    style: ga(),
    ...o,
    children: a
  }
));
Qr.displayName = "AccordionContent";
const _o = Object.assign(Xr, {
  Item: Cr,
  Trigger: Zr,
  Content: Qr
}), ha = f(
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
), xa = u.forwardRef(
  ({ className: r, variant: e, size: a, dot: o, dotColor: s, numeric: d, children: n, ...i }, m) => /* @__PURE__ */ t.jsxs(
    "span",
    {
      ref: m,
      className: l(
        ha({ variant: e, size: a, dot: o, numeric: d }),
        r
      ),
      ...i,
      children: [
        o && /* @__PURE__ */ t.jsx(
          "span",
          {
            className: l(
              "inline-block w-1.5 h-1.5 rounded-full mr-1.5",
              s ? `bg-[${s}]` : "[background-color:var(--status-success)]"
            )
          }
        ),
        n
      ]
    }
  )
);
xa.displayName = "Badge";
const ya = f(
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
), wa = u.forwardRef(
  ({ className: r, variant: e, size: a, leftIcon: o, rightIcon: s, children: d, ...n }, i) => /* @__PURE__ */ t.jsxs(
    M,
    {
      className: l(ya({ variant: e, size: a, className: r })),
      ref: i,
      ...n,
      children: [
        o && /* @__PURE__ */ t.jsx("span", { className: "flex-shrink-0", children: o }),
        d && /* @__PURE__ */ t.jsx("span", { className: "flex-1", children: d }),
        s && /* @__PURE__ */ t.jsx("span", { className: "flex-shrink-0", children: s })
      ]
    }
  )
);
wa.displayName = "Button";
const $r = he({
  size: "md",
  hasFooter: !1,
  setHasFooter: () => {
  }
}), ka = f(
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
), ja = f(
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
), Na = f([
  "font-semibold leading-none tracking-tight",
  "[color:var(--text-primary)]",
  "[font-size:var(--font-size-lg)]",
  "[font-weight:var(--font-weight-semibold)]"
]), Ta = f([
  "[color:var(--text-secondary)]",
  "[font-size:var(--font-size-sm)]"
]), Ra = f([
  "[color:var(--text-primary)]",
  "[font-size:var(--font-size-md)]",
  "flex-grow"
]), Ca = f(
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
), $a = u.forwardRef(
  ({ className: r, variant: e, size: a = "md", ...o }, s) => {
    const d = a || "md", [n, i] = u.useState(!1);
    return /* @__PURE__ */ t.jsx($r.Provider, { value: { size: d, hasFooter: n, setHasFooter: i }, children: /* @__PURE__ */ t.jsx(
      "div",
      {
        ref: s,
        className: l(
          ka({ variant: e, size: d, hasFooter: n }),
          r
        ),
        ...o
      }
    ) });
  }
);
$a.displayName = "Card";
const Va = u.forwardRef(
  ({ className: r, fullWidth: e, size: a, ...o }, s) => {
    const d = G($r), n = a ?? d.size;
    return /* @__PURE__ */ t.jsx(
      "div",
      {
        ref: s,
        className: l(
          ja({ fullWidth: e, size: n }),
          r
        ),
        ...o
      }
    );
  }
);
Va.displayName = "CardHeader";
const Sa = u.forwardRef(
  ({ className: r, as: e = "h3", ...a }, o) => /* @__PURE__ */ t.jsx(
    e,
    {
      ref: o,
      className: l(Na(), r),
      ...a
    }
  )
);
Sa.displayName = "CardTitle";
const za = u.forwardRef(({ className: r, ...e }, a) => /* @__PURE__ */ t.jsx(
  "p",
  {
    ref: a,
    className: l(Ta(), r),
    ...e
  }
));
za.displayName = "CardDescription";
const Ea = u.forwardRef(
  ({ className: r, ...e }, a) => /* @__PURE__ */ t.jsx(
    "div",
    {
      ref: a,
      className: l(Ra(), r),
      ...e
    }
  )
);
Ea.displayName = "CardContent";
const Ba = u.forwardRef(
  ({ className: r, size: e, ...a }, o) => {
    const s = G($r), d = e ?? s.size;
    return u.useEffect(() => (s.setHasFooter(!0), () => s.setHasFooter(!1)), [s]), /* @__PURE__ */ t.jsx(
      "div",
      {
        ref: o,
        className: l(Ca({ size: d }), r),
        ...a
      }
    );
  }
);
Ba.displayName = "CardFooter";
const _a = f(
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
), Aa = f(
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
    "group-data-[disabled]:[border-color:var(--border-secondary)]",
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
), Da = u.forwardRef(
  ({ className: r, size: e, children: a, description: o, ...s }, d) => /* @__PURE__ */ t.jsx(
    Jr,
    {
      className: l(_a({ size: e }), r),
      ref: d,
      ...s,
      children: ({
        isSelected: n,
        isIndeterminate: i,
        isDisabled: m,
        isHovered: p,
        isFocusVisible: y
      }) => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: l(
              Aa({ size: e }),
              // Base styles
              !n && !i && "[border-color:var(--border-primary)] [background-color:var(--bg-primary)]",
              // Hover styles
              p && !n && !i && !m && "[border-color:var(--border-secondary)]",
              // Selected/Indeterminate styles
              (n || i) && "[background-color:var(--interactive-primary)] [border-color:var(--interactive-primary)]",
              // Selected + hover
              (n || i) && p && !m && "[background-color:var(--interactive-primary-hover)] [border-color:var(--interactive-primary-hover)]",
              // Focus styles
              y && !m && "focus-ring",
              // Disabled styles - simple opacity
              m && "opacity-50 cursor-not-allowed"
            ),
            children: i ? /* @__PURE__ */ t.jsx(
              Hr,
              {
                strokeWidth: 4,
                className: l(
                  "text-white",
                  n || i ? "opacity-100" : "opacity-0",
                  e === "sm" && "h-2.5 w-2.5",
                  e === "md" && "h-4 w-4",
                  e === "lg" && "h-5 w-5"
                )
              }
            ) : /* @__PURE__ */ t.jsx(
              Nr,
              {
                strokeWidth: 4,
                className: l(
                  "text-white",
                  n ? "opacity-100" : "opacity-0",
                  e === "sm" && "h-2.5 w-2.5",
                  e === "md" && "h-4 w-4",
                  e === "lg" && "h-5 w-5"
                )
              }
            )
          }
        ),
        (a || o) && /* @__PURE__ */ t.jsxs("div", { className: l("flex flex-col", m && "opacity-50"), children: [
          a && /* @__PURE__ */ t.jsx("span", { className: "[color:var(--text-primary)] leading-none", children: a }),
          o && /* @__PURE__ */ t.jsx("span", { className: "text-sm [color:var(--text-tertiary)] mt-1 leading-tight", children: o })
        ] })
      ] })
    }
  )
);
Da.displayName = "Checkbox";
const Kr = f(
  [
    "group relative flex cursor-pointer",
    "border border-solid [border-color:var(--border-primary)]",
    "[border-radius:var(--radius-md)]",
    "[background-color:var(--bg-primary)]",
    "transition-all [transition-duration:var(--transition-normal)]",
    // Hover styles
    "hover:[border-color:var(--border-secondary)]",
    "hover:[background-color:var(--bg-secondary)]",
    // Selected styles
    "data-[selected]:[border-color:var(--interactive-primary)]",
    "data-[selected]:[background-color:var(--bg-secondary)]",
    // Focus styles
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
    "focus-visible:[ring-color:var(--border-focus)]",
    // Disabled styles
    "disabled:cursor-not-allowed disabled:opacity-50",
    "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
  ],
  {
    variants: {
      size: {
        sm: "p-3",
        md: "p-4",
        lg: "p-6"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Fa = f(
  [
    "absolute top-3 right-3 flex items-center justify-center shrink-0",
    "border-2 transition-all",
    "[transition-duration:var(--transition-normal)]",
    "[border-color:var(--border-primary)]",
    "[background-color:var(--bg-primary)]",
    "[border-radius:var(--radius-sm)]",
    // Hover styles
    "group-hover:[border-color:var(--border-secondary)]",
    // Selected styles
    "group-data-[selected]:[background-color:var(--interactive-primary)]",
    "group-data-[selected]:[border-color:var(--interactive-primary)]",
    "group-data-[selected]:group-hover:[background-color:var(--interactive-primary-hover)]",
    "group-data-[selected]:group-hover:[border-color:var(--interactive-primary-hover)]",
    // Disabled styles
    "group-data-[disabled]:[border-color:var(--border-secondary)]",
    "group-data-[disabled]:group-data-[selected]:[background-color:var(--bg-brand)]"
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
), Oa = f(
  [
    "absolute top-3 right-3 flex items-center justify-center shrink-0",
    "border-2 transition-all rounded-full",
    "[transition-duration:var(--transition-normal)]",
    "[border-color:var(--border-primary)]",
    "[background-color:var(--bg-primary)]",
    // Hover styles
    "group-hover:[border-color:var(--border-secondary)]",
    // Selected styles
    "group-data-[selected]:[background-color:var(--interactive-primary)]",
    "group-data-[selected]:[border-color:var(--interactive-primary)]",
    "group-data-[selected]:group-hover:[background-color:var(--interactive-primary-hover)]",
    "group-data-[selected]:group-hover:[border-color:var(--interactive-primary-hover)]",
    // Disabled styles
    "group-data-[disabled]:[border-color:var(--border-secondary)]",
    "group-data-[disabled]:group-data-[selected]:[background-color:var(--bg-brand)]"
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
), Ia = f(
  [
    "flex flex-col gap-1 pr-8"
    // pr-8 pour laisser l'espace pour l'indicateur
  ],
  {
    variants: {
      size: {
        sm: "gap-1 pr-6",
        md: "gap-1 pr-8",
        lg: "gap-2 pr-10"
      },
      centered: {
        true: "justify-center items-center text-center pr-0",
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      centered: !1
    }
  }
), re = ({
  title: r,
  description: e,
  size: a,
  isDisabled: o,
  isCheckboxVariant: s = !0
}) => {
  const d = !e && r;
  return /* @__PURE__ */ t.jsxs("div", { className: l(
    Ia({
      size: a,
      centered: !!(d && !s)
    }),
    o && "opacity-50",
    d && !s && "min-h-full"
  ), children: [
    r && /* @__PURE__ */ t.jsx("span", { className: l(
      "font-medium [color:var(--text-primary)] leading-tight",
      a === "sm" && "text-sm",
      a === "md" && "text-base",
      a === "lg" && "text-lg"
    ), children: r }),
    e && /* @__PURE__ */ t.jsx("span", { className: l(
      "[color:var(--text-tertiary)] leading-tight",
      a === "sm" && "text-xs",
      a === "md" && "text-sm",
      a === "lg" && "text-base"
    ), children: e })
  ] });
}, Pa = f(
  [
    "absolute rounded-full bg-white pointer-events-none",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
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
), La = ({
  isSelected: r,
  isIndeterminate: e,
  size: a
}) => /* @__PURE__ */ t.jsx(t.Fragment, { children: e ? /* @__PURE__ */ t.jsx(
  Hr,
  {
    strokeWidth: 4,
    className: l(
      "text-white",
      r || e ? "opacity-100" : "opacity-0",
      a === "sm" && "h-2.5 w-2.5",
      a === "md" && "h-3 w-3",
      a === "lg" && "h-4 w-4"
    )
  }
) : /* @__PURE__ */ t.jsx(
  Nr,
  {
    strokeWidth: 4,
    className: l(
      "text-white",
      r ? "opacity-100" : "opacity-0",
      a === "sm" && "h-2.5 w-2.5",
      a === "md" && "h-3 w-3",
      a === "lg" && "h-4 w-4"
    )
  }
) }), Wa = ({
  isSelected: r,
  size: e
}) => /* @__PURE__ */ t.jsx("span", { className: l(
  Pa({ size: e }),
  r ? "opacity-100" : "opacity-0"
) }), Ma = u.forwardRef(
  ({ className: r, size: e, title: a, description: o, ...s }, d) => /* @__PURE__ */ t.jsx(
    Jr,
    {
      className: l(Kr({ size: e }), r),
      ref: d,
      ...s,
      children: ({
        isSelected: n,
        isIndeterminate: i,
        isDisabled: m,
        isHovered: p,
        isFocusVisible: y
      }) => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: l(
              Fa({ size: e }),
              // Base styles
              !n && !i && "[border-color:var(--border-primary)] [background-color:var(--bg-primary)]",
              // Hover styles
              p && !n && !i && !m && "[border-color:var(--border-secondary)]",
              // Selected/Indeterminate styles
              (n || i) && "[background-color:var(--interactive-primary)] [border-color:var(--interactive-primary)]",
              // Selected + hover
              (n || i) && p && !m && "[background-color:var(--interactive-primary-hover)] [border-color:var(--interactive-primary-hover)]",
              // Focus styles
              y && !m && "focus-ring",
              // Disabled styles - simple opacity
              m && "opacity-50 cursor-not-allowed"
            ),
            children: /* @__PURE__ */ t.jsx(
              La,
              {
                isSelected: n,
                isIndeterminate: i,
                size: e || "md"
              }
            )
          }
        ),
        (a || o) && /* @__PURE__ */ t.jsx(
          re,
          {
            title: a,
            description: o,
            size: e || "md",
            isDisabled: m,
            isCheckboxVariant: !0
          }
        )
      ] })
    }
  )
), Ya = u.forwardRef(
  ({ className: r, size: e, title: a, description: o, ...s }, d) => /* @__PURE__ */ t.jsx(
    Ur,
    {
      className: l(Kr({ size: e }), r),
      ref: d,
      ...s,
      children: ({
        isSelected: n,
        isDisabled: i,
        isHovered: m,
        isFocusVisible: p
      }) => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: l(
              Oa({ size: e }),
              // Base styles
              !n && "[border-color:var(--border-primary)] [background-color:var(--bg-primary)]",
              // Hover styles
              m && !n && !i && "[border-color:var(--border-secondary)]",
              // Selected styles
              n && "[background-color:var(--interactive-primary)] [border-color:var(--interactive-primary)]",
              // Selected + hover
              n && m && !i && "[background-color:var(--interactive-primary-hover)] [border-color:var(--interactive-primary-hover)]",
              // Focus styles
              p && !i && "focus-ring",
              // Disabled styles - simple opacity
              i && "opacity-50 cursor-not-allowed"
            ),
            children: /* @__PURE__ */ t.jsx(
              Wa,
              {
                isSelected: n,
                size: e || "md"
              }
            )
          }
        ),
        (a || o) && /* @__PURE__ */ t.jsx(
          re,
          {
            title: a,
            description: o,
            size: e || "md",
            isDisabled: i,
            isCheckboxVariant: !1
          }
        )
      ] })
    }
  )
);
Ma.displayName = "Choicebox";
Ya.displayName = "ChoiceboxRadio";
const Ga = f([
  "fixed inset-0 z-50 flex items-center justify-center p-4",
  "[background-color:var(--bg-overlay)]"
]), Ha = f(
  [
    "relative flex flex-col gap-4 rounded-lg shadow-lg",
    "[background-color:var(--bg-primary)]",
    "[border:1px_solid_var(--border-primary)]",
    "[color:var(--text-primary)]",
    "focus:outline-none"
  ],
  {
    variants: {
      size: {
        sm: ["max-w-sm w-full"],
        md: ["max-w-md w-full"],
        lg: ["max-w-lg w-full"],
        xl: ["max-w-xl w-full"],
        "2xl": ["max-w-2xl w-full"],
        "3xl": ["max-w-3xl w-full"],
        "4xl": ["max-w-4xl w-full"],
        "5xl": ["max-w-5xl w-full"],
        "6xl": ["max-w-6xl w-full"],
        "7xl": ["max-w-7xl w-full"],
        full: ["w-full h-full max-w-full"]
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Ja = f([
  "flex items-center justify-between p-6 pb-0"
]), Ua = f(["flex-1 p-6 py-0"]), qa = f([
  "flex items-center justify-end gap-2 p-6 pt-0"
]), Xa = f([
  "text-lg font-semibold leading-none tracking-tight",
  "[color:var(--text-primary)]",
  "[font-family:var(--font-family-primary)]"
]), Za = f([
  "text-sm",
  "[color:var(--text-secondary)]"
]), Qa = f([
  "rounded-sm opacity-70 transition-opacity hover:opacity-100",
  "focus:outline-none focus:ring-2 focus:ring-offset-2",
  "[--tw-ring-color:var(--border-focus)]",
  "disabled:pointer-events-none",
  "h-6 w-6 p-0 flex items-center justify-center",
  "[color:var(--text-secondary)]",
  "hover:[color:var(--text-primary)]",
  "transition-colors duration-200"
]), Ka = u.forwardRef(({ children: r, ...e }, a) => /* @__PURE__ */ t.jsx(Se, { ...e, children: r }));
Ka.displayName = "DialogTrigger";
const rt = u.forwardRef(({ className: r, children: e, ...a }, o) => /* @__PURE__ */ t.jsx(
  ze,
  {
    ref: o,
    className: l(Ga({ className: r })),
    ...a,
    children: /* @__PURE__ */ t.jsx(Ee, { children: e })
  }
));
rt.displayName = "DialogOverlay";
const et = u.forwardRef(
  ({ className: r, size: e, ...a }, o) => /* @__PURE__ */ t.jsx(
    Ve,
    {
      ref: o,
      className: l(Ha({ size: e, className: r })),
      ...a
    }
  )
);
et.displayName = "Dialog";
const at = u.forwardRef(
  ({ className: r, ...e }, a) => /* @__PURE__ */ t.jsx(
    "div",
    {
      ref: a,
      className: l(Ja({ className: r })),
      ...e
    }
  )
);
at.displayName = "DialogHeader";
const tt = u.forwardRef(
  ({ className: r, ...e }, a) => /* @__PURE__ */ t.jsx(
    "div",
    {
      ref: a,
      className: l(Ua({ className: r })),
      ...e
    }
  )
);
tt.displayName = "DialogBody";
const ot = u.forwardRef(
  ({ className: r, ...e }, a) => /* @__PURE__ */ t.jsx(
    "div",
    {
      ref: a,
      className: l(qa({ className: r })),
      ...e
    }
  )
);
ot.displayName = "DialogFooter";
const nt = u.forwardRef(({ className: r, ...e }, a) => /* @__PURE__ */ t.jsx(
  Be,
  {
    ref: a,
    slot: "title",
    className: l(Xa({ className: r })),
    ...e
  }
));
nt.displayName = "DialogTitle";
const st = u.forwardRef(({ className: r, ...e }, a) => /* @__PURE__ */ t.jsx(
  "p",
  {
    ref: a,
    className: l(Za({ className: r })),
    ...e
  }
));
st.displayName = "DialogDescription";
const it = u.forwardRef(({ className: r, children: e, ...a }, o) => /* @__PURE__ */ t.jsx(
  M,
  {
    ref: o,
    slot: "close",
    className: l(Qa({ className: r })),
    "aria-label": "Close dialog",
    ...a,
    children: e || /* @__PURE__ */ t.jsx(
      "svg",
      {
        width: "15",
        height: "15",
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ t.jsx(
          "path",
          {
            d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd"
          }
        )
      }
    )
  }
));
it.displayName = "DialogClose";
const ct = f(
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
), lt = f([
  "block font-medium mb-1 ml-2",
  "[color:var(--text-primary)]",
  "[font-size:var(--font-size-sm)]",
  "[font-weight:var(--font-weight-medium)]"
]), dt = f(
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
), ut = u.forwardRef(
  ({
    className: r,
    inputClassName: e,
    size: a,
    variant: o,
    label: s,
    placeholder: d,
    helperText: n,
    errorMessage: i,
    leftIcon: m,
    rightIcon: p,
    isRequired: y,
    isDisabled: w,
    ...v
  }, b) => {
    const R = i ? "error" : o, C = i || n, B = i ? "error" : "default";
    return /* @__PURE__ */ t.jsxs(
      qr,
      {
        className: l("w-full", r),
        isRequired: y,
        isDisabled: w,
        ...v,
        children: [
          s && /* @__PURE__ */ t.jsxs(Tr, { className: l(lt()), children: [
            s,
            y && /* @__PURE__ */ t.jsx("span", { className: "[color:var(--status-danger)] ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
            m && /* @__PURE__ */ t.jsx("div", { className: "absolute left-3 top-1/2 transform -translate-y-1/2 [color:var(--text-tertiary)] pointer-events-none", children: m }),
            /* @__PURE__ */ t.jsx(
              Rr,
              {
                ref: b,
                className: l(
                  ct({ size: a, variant: R }),
                  m && "pl-10",
                  p && "pr-10",
                  e
                ),
                placeholder: d
              }
            ),
            p && /* @__PURE__ */ t.jsx("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2 [color:var(--text-tertiary)] pointer-events-none", children: p })
          ] }),
          C && /* @__PURE__ */ t.jsx(
            fr,
            {
              slot: i ? "errorMessage" : "description",
              className: l(dt({ variant: B })),
              children: C
            }
          )
        ]
      }
    );
  }
);
ut.displayName = "Input";
const Ir = f([
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
}), ee = f([
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
}), D = u.forwardRef(
  ({ className: r, variant: e, size: a, isActive: o, ...s }, d) => /* @__PURE__ */ t.jsx(
    "button",
    {
      ref: d,
      className: l(ee({ variant: e, size: a, isActive: o }), r),
      ...s
    }
  )
);
D.displayName = "PaginationItem";
const mt = ({ className: r, size: e = "md" }) => /* @__PURE__ */ t.jsxs("span", { className: l(ee({ variant: "ghost", size: e }), "pointer-events-none", r), children: [
  /* @__PURE__ */ t.jsx(Ne, { size: e === "sm" ? 14 : e === "lg" ? 18 : 16 }),
  /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "More pages" })
] }), ft = ({
  currentPage: r = 1,
  totalPages: e = 1,
  siblingCount: a = 1
}) => {
  const o = (w, v) => {
    const b = v - w + 1;
    return Array.from({ length: b }, (R, C) => C + w);
  };
  if (a + 5 >= e)
    return o(1, e);
  const d = Math.max(r - a, 1), n = Math.min(r + a, e), i = d > 2, m = n < e - 2, p = 1, y = e;
  if (!i && m) {
    const w = 3 + 2 * a;
    return [...o(1, w), "dots", e];
  }
  if (i && !m) {
    const w = 3 + 2 * a, v = o(e - w + 1, e);
    return [p, "dots", ...v];
  }
  if (i && m) {
    const w = o(d, n);
    return [p, "dots", ...w, "dots", y];
  }
  return [];
}, vt = u.forwardRef(
  ({
    className: r,
    size: e = "md",
    currentPage: a = 1,
    totalPages: o = 1,
    onPageChange: s,
    showPrevNext: d = !0,
    showFirstLast: n = !1,
    siblingCount: i = 1,
    variant: m = "numbered",
    ...p
  }, y) => {
    const w = ft({ currentPage: a, totalPages: o, siblingCount: i }), v = (b) => {
      b >= 1 && b <= o && b !== a && s?.(b);
    };
    return m === "simple" ? /* @__PURE__ */ t.jsxs(
      "div",
      {
        ref: y,
        className: l(Ir({ size: e }), r),
        ...p,
        children: [
          /* @__PURE__ */ t.jsxs(
            D,
            {
              variant: "outline",
              size: e,
              onClick: () => v(a - 1),
              disabled: a === 1,
              children: [
                /* @__PURE__ */ t.jsx(Er, { size: e === "sm" ? 14 : e === "lg" ? 18 : 16 }),
                /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Go to previous page" })
              ]
            }
          ),
          /* @__PURE__ */ t.jsxs("span", { className: l(
            "px-4 py-2 text-sm font-medium",
            "[color:var(--text-primary)]",
            e === "sm" && "[font-size:var(--font-size-xs)]",
            e === "lg" && "[font-size:var(--font-size-md)]"
          ), children: [
            "Page ",
            a,
            " of ",
            o
          ] }),
          /* @__PURE__ */ t.jsxs(
            D,
            {
              variant: "outline",
              size: e,
              onClick: () => v(a + 1),
              disabled: a === o,
              children: [
                /* @__PURE__ */ t.jsx(Br, { size: e === "sm" ? 14 : e === "lg" ? 18 : 16 }),
                /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Go to next page" })
              ]
            }
          )
        ]
      }
    ) : /* @__PURE__ */ t.jsxs(
      "div",
      {
        ref: y,
        className: l(Ir({ size: e }), r),
        ...p,
        children: [
          n && a > 1 && /* @__PURE__ */ t.jsx(
            D,
            {
              variant: "outline",
              size: e,
              onClick: () => v(1),
              children: "First"
            }
          ),
          d && /* @__PURE__ */ t.jsxs(
            D,
            {
              variant: "outline",
              size: e,
              onClick: () => v(a - 1),
              disabled: a === 1,
              children: [
                /* @__PURE__ */ t.jsx(Er, { size: e === "sm" ? 14 : e === "lg" ? 18 : 16 }),
                /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Go to previous page" })
              ]
            }
          ),
          w.map((b, R) => b === "dots" ? /* @__PURE__ */ t.jsx(mt, { size: e }, `ellipsis-${R}`) : /* @__PURE__ */ t.jsx(
            D,
            {
              size: e,
              isActive: b === a,
              onClick: () => v(b),
              children: b
            },
            b
          )),
          d && /* @__PURE__ */ t.jsxs(
            D,
            {
              variant: "outline",
              size: e,
              onClick: () => v(a + 1),
              disabled: a === o,
              children: [
                /* @__PURE__ */ t.jsx(Br, { size: e === "sm" ? 14 : e === "lg" ? 18 : 16 }),
                /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Go to next page" })
              ]
            }
          ),
          n && a < o && /* @__PURE__ */ t.jsx(
            D,
            {
              variant: "outline",
              size: e,
              onClick: () => v(o),
              children: "Last"
            }
          )
        ]
      }
    );
  }
);
vt.displayName = "Pagination";
const gt = f(["flex gap-3"], {
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
}), pt = f(
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
), bt = f(
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
    "group-data-[disabled]:[border-color:var(--border-secondary)]",
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
), ht = f(
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
), xt = u.forwardRef(
  ({
    className: r,
    orientation: e,
    size: a,
    children: o,
    label: s,
    description: d,
    errorMessage: n,
    ...i
  }, m) => /* @__PURE__ */ t.jsx(
    _e,
    {
      className: l("flex flex-col gap-3", r),
      ref: m,
      ...i,
      children: ({ isInvalid: p }) => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        s && /* @__PURE__ */ t.jsx("span", { className: "text-sm font-medium [color:var(--text-primary)]", children: s }),
        d && /* @__PURE__ */ t.jsx("span", { className: "text-sm [color:var(--text-secondary)]", children: d }),
        /* @__PURE__ */ t.jsx("div", { className: gt({ orientation: e, size: a }), children: o }),
        n && /* @__PURE__ */ t.jsx("span", { className: "text-sm [color:var(--status-error)]", children: n })
      ] })
    }
  )
), yt = u.forwardRef(
  ({ className: r, size: e, children: a, description: o, ...s }, d) => /* @__PURE__ */ t.jsx(
    Ur,
    {
      className: l(pt({ size: e }), r),
      ref: d,
      ...s,
      children: ({ isSelected: n, isDisabled: i, isHovered: m, isFocusVisible: p }) => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: l(
              bt({ size: e }),
              // Base styles
              !n && "[background-color:var(--bg-primary)] [border-color:var(--border-primary)]",
              // Hover styles
              m && !n && !i && "[border-color:var(--border-secondary)]",
              // Selected styles
              n && "[background-color:var(--interactive-primary)] [border-color:var(--interactive-primary)]",
              // Selected + hover
              n && m && !i && "[background-color:var(--interactive-primary-hover)] [border-color:var(--interactive-primary-hover)]",
              // Focus styles
              p && !i && "focus-ring",
              // Disabled styles
              i && "opacity-50 cursor-not-allowed"
            ),
            children: /* @__PURE__ */ t.jsx("span", { className: ht({ size: e }) })
          }
        ),
        (a || o) && /* @__PURE__ */ t.jsxs("div", { className: l("flex flex-col", i && "opacity-50"), children: [
          a && /* @__PURE__ */ t.jsx("span", { className: "[color:var(--text-primary)] leading-none", children: a }),
          o && /* @__PURE__ */ t.jsx("span", { className: "text-sm [color:var(--text-tertiary)] mt-1 leading-tight", children: o })
        ] })
      ] })
    }
  )
);
xt.displayName = "RadioGroup";
yt.displayName = "Radio";
const wt = f(
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
), kt = f([
  "block font-medium mb-1 ml-2",
  "[color:var(--text-primary)]",
  "[font-size:var(--font-size-sm)]",
  "[font-weight:var(--font-weight-medium)]"
]), jt = f([
  "mt-1 text-sm ml-2",
  "[font-size:var(--font-size-xs)]",
  "[color:var(--text-secondary)]"
]), Nt = f([
  "absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-50 max-h-80 overflow-auto",
  "top-full left-0",
  "[background-color:var(--bg-primary)]",
  "[border-color:var(--border-primary)]",
  "[box-shadow:var(--shadow-lg)]"
]), Tt = f([
  "px-4 py-3 cursor-pointer transition-colors border-b last:border-b-0",
  "[border-color:var(--border-secondary)]",
  "hover:[background-color:var(--bg-secondary)]",
  "focus:[background-color:var(--bg-secondary)]",
  "focus:outline-none"
]), Rt = u.forwardRef(
  ({
    className: r,
    inputClassName: e,
    size: a,
    variant: o,
    label: s,
    placeholder: d = "Search...",
    helperText: n,
    isDisabled: i,
    onClear: m,
    showClearButton: p = !0,
    value: y,
    onValueChange: w,
    // Live search props
    enableLiveSearch: v = !1,
    searchResults: b = [],
    onSearch: R,
    onResultSelect: C,
    isLoading: B = !1,
    noResultsText: O = "No results found",
    minSearchLength: V = 2,
    searchDelay: L = 300,
    showPopover: or,
    renderResult: nr,
    // Highlighting props
    enableHighlighting: sr = !0,
    highlightClassName: ir = "[background-color:var(--brand-warning-500)] [color:var(--text-primary)] px-1 py-0.5 rounded font-medium",
    ...cr
  }, br) => {
    const [hr, I] = u.useState(y || ""), [H, J] = u.useState(!1), [U, z] = u.useState([]), [lr, q] = u.useState(!1), [dr, _] = u.useState(""), c = u.useRef(null), g = y !== void 0 ? y : hr, h = p && g.length > 0 && !i, N = H ? "focused" : o, $ = b.length > 0 ? b : U, T = B || lr, P = b.length > 0 ? g : dr, X = or !== void 0 ? or : v && H && g.length >= V && ($.length > 0 || T || g.length > 0), j = u.useCallback(
      async (x) => {
        if (!v || !R || x.length < V) {
          z([]), _("");
          return;
        }
        q(!0);
        try {
          const E = await R(x);
          z(Array.isArray(E) ? E : []), _(x);
        } catch (E) {
          console.error("Search error:", E), z([]), _("");
        } finally {
          q(!1);
        }
      },
      [v, R, V]
    );
    u.useEffect(() => (c.current && clearTimeout(c.current), g.length >= V && v ? c.current = setTimeout(() => {
      j(g);
    }, L) : z([]), () => {
      c.current && clearTimeout(c.current);
    }), [
      g,
      V,
      v,
      L,
      j
    ]);
    const A = (x) => {
      y === void 0 && I(x), w?.(x);
    }, Z = () => {
      y === void 0 && I(""), w?.(""), m?.(), z([]), _("");
    }, xr = (x) => {
      A(x.target.value);
    }, ge = (x) => {
      C?.(x), y === void 0 && I(x.title), w?.(x.title), J(!1), z([]), _("");
    }, yr = u.useCallback(
      (x, E) => {
        if (!sr || !E.trim()) return x;
        const zr = new RegExp(
          `(${E.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
          "gi"
        );
        return x.split(zr).map(
          (wr, be) => zr.test(wr) ? /* @__PURE__ */ t.jsx("mark", { className: l(ir), children: wr }, be) : wr
        );
      },
      [sr, ir]
    ), pe = (x) => /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t.jsx("div", { className: "font-medium [color:var(--text-primary)] text-sm", children: yr(x.title, P) }),
      x.description && /* @__PURE__ */ t.jsx("div", { className: "text-xs [color:var(--text-secondary)] mt-1", children: yr(x.description, P) }),
      x.category && /* @__PURE__ */ t.jsx("div", { className: "text-xs [color:var(--text-tertiary)] mt-1 font-medium uppercase tracking-wide", children: yr(x.category, P) })
    ] });
    return /* @__PURE__ */ t.jsxs(
      qr,
      {
        className: l("w-full", r),
        isDisabled: i,
        ...cr,
        children: [
          s && /* @__PURE__ */ t.jsx(Tr, { className: l(kt()), children: s }),
          /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ t.jsx(
              "div",
              {
                className: l(
                  "absolute top-1/2 transform left-3 -translate-y-1/2 [color:var(--text-tertiary)] pointer-events-none",
                  a === "sm" && "left-3",
                  a === "md" && "left-3",
                  a === "lg" && "left-4"
                ),
                children: /* @__PURE__ */ t.jsx(Te, { size: a === "sm" ? 14 : a === "lg" ? 18 : 16 })
              }
            ),
            T && /* @__PURE__ */ t.jsx(
              "div",
              {
                className: l(
                  "absolute top-1/2 transform -translate-y-1/2 [color:var(--text-tertiary)]",
                  a === "lg" ? "right-12" : "right-10"
                ),
                children: /* @__PURE__ */ t.jsx(
                  _r,
                  {
                    size: a === "sm" ? 12 : a === "lg" ? 16 : 14,
                    className: "animate-spin"
                  }
                )
              }
            ),
            /* @__PURE__ */ t.jsx(
              Rr,
              {
                ref: br,
                type: "search",
                className: l(
                  wt({ size: a, variant: N }),
                  h && (a === "lg" ? "pr-10" : "pr-9"),
                  T && !h && (a === "lg" ? "pr-16" : "pr-14"),
                  T && h && (a === "lg" ? "pr-20" : "pr-18"),
                  e
                ),
                placeholder: d,
                value: g,
                onChange: xr,
                onFocus: () => J(!0),
                onBlur: (x) => {
                  setTimeout(() => J(!1), 150);
                }
              }
            ),
            h && /* @__PURE__ */ t.jsx(
              "button",
              {
                type: "button",
                onClick: Z,
                className: l(
                  "absolute top-1/2 transform -translate-y-1/2",
                  "[color:var(--text-tertiary)] hover:[color:var(--text-secondary)]",
                  "transition-colors cursor-pointer p-0.5 rounded",
                  "hover:bg-[var(--bg-secondary)]",
                  a === "lg" ? "right-4" : "right-3"
                ),
                "aria-label": "Clear search",
                children: /* @__PURE__ */ t.jsx(pr, { size: a === "sm" ? 12 : a === "lg" ? 16 : 14 })
              }
            ),
            X && /* @__PURE__ */ t.jsx("div", { className: l(Nt()), children: T && $.length === 0 ? /* @__PURE__ */ t.jsxs("div", { className: "px-4 py-3 text-center [color:var(--text-secondary)]", children: [
              /* @__PURE__ */ t.jsx(_r, { size: 16, className: "animate-spin mx-auto mb-2" }),
              /* @__PURE__ */ t.jsx("div", { className: "text-sm", children: "Searching..." })
            ] }) : $.length > 0 ? /* @__PURE__ */ t.jsx("div", { children: $.map((x) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: l(Tt()),
                onClick: () => ge(x),
                onMouseDown: (E) => E.preventDefault(),
                children: nr ? nr(x) : pe(x)
              },
              x.id
            )) }) : g.length >= V ? /* @__PURE__ */ t.jsx("div", { className: "px-4 py-3 text-center [color:var(--text-secondary)] text-sm", children: O }) : null })
          ] }),
          n && /* @__PURE__ */ t.jsx(fr, { slot: "description", className: l(jt()), children: n })
        ]
      }
    );
  }
);
Rt.displayName = "Search";
const Ct = f(["relative w-full"], {
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
}), $t = f(
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
), Vt = f([
  "z-50 min-w-[8rem] overflow-hidden",
  "[background-color:var(--bg-primary)]",
  "[border:1px_solid_var(--border-primary)]",
  "[border-radius:var(--radius-md)]",
  "[box-shadow:var(--shadow-lg)]",
  "data-[entering]:animate-in data-[entering]:fade-in-0 data-[entering]:zoom-in-95",
  "data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95"
]), St = f([
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
]), zt = u.forwardRef(
  ({ className: r, size: e, options: a, placeholder: o = "Select an option...", ...s }, d) => /* @__PURE__ */ t.jsx("div", { className: l(Ct({ size: e, className: r })), children: /* @__PURE__ */ t.jsxs(Ae, { ...s, ref: d, children: [
    /* @__PURE__ */ t.jsxs(M, { className: l($t({ size: e })), children: [
      /* @__PURE__ */ t.jsx(
        Rr,
        {
          className: "flex-1 bg-transparent outline-none border-0 focus:ring-0 px-0 h-auto placeholder:[color:var(--text-tertiary)] cursor-pointer",
          placeholder: o,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ t.jsx(Gr, { className: "h-4 w-4 [color:var(--text-secondary)] shrink-0" })
    ] }),
    /* @__PURE__ */ t.jsx(De, { className: l(Vt()), children: /* @__PURE__ */ t.jsx(Fe, { className: "max-h-60 overflow-auto p-1 font-sans", children: a.map((n) => /* @__PURE__ */ t.jsx(
      ae,
      {
        id: n.value,
        textValue: n.label,
        isDisabled: n.disabled,
        children: n.label
      },
      n.value
    )) }) })
  ] }) })
);
zt.displayName = "Select";
const ae = u.forwardRef(
  ({ className: r, children: e, ...a }, o) => /* @__PURE__ */ t.jsx(
    Oe,
    {
      className: ({ isSelected: s }) => l(St(), s && "pr-8", r),
      ref: o,
      ...a,
      children: ({ isSelected: s }) => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx("span", { className: "flex-1", children: e }),
        s && /* @__PURE__ */ t.jsx("span", { className: "absolute right-2 flex h-4 w-4 items-center justify-center", children: /* @__PURE__ */ t.jsx(Nr, { className: "h-3 w-3 [color:var(--text-primary)]" }) })
      ] })
    }
  )
);
ae.displayName = "SelectItem";
const Et = f([
  "group flex flex-col gap-2 w-full min-w-48",
  "text-base",
  "disabled:opacity-50 disabled:cursor-not-allowed"
]), Bt = f([
  "relative w-full flex items-center h-8",
  "[transition-duration:var(--transition-normal)]",
  "transition-colors"
]), _t = f([
  "flex justify-between items-center",
  "font-medium text-[var(--text-primary)]",
  "group-disabled:text-[var(--text-disabled)]"
]), At = f([
  "font-mono text-sm",
  "text-[var(--text-secondary)]",
  "group-disabled:text-[var(--text-disabled)]"
]), Dt = u.forwardRef(
  ({
    className: r,
    trackClassName: e,
    thumbClassName: a,
    label: o,
    showOutput: s = !0,
    formatValue: d = (m) => m.toString(),
    ...n
  }, i) => /* @__PURE__ */ t.jsxs(
    Ie,
    {
      ref: i,
      className: l(Et(), r),
      ...n,
      children: [
        o && /* @__PURE__ */ t.jsxs("div", { className: l(_t()), children: [
          /* @__PURE__ */ t.jsx(Tr, { children: o }),
          s && /* @__PURE__ */ t.jsx(Pe, { className: l(At()), children: ({ state: m }) => d(m.getThumbValue(0)) })
        ] }),
        /* @__PURE__ */ t.jsx(Le, { className: l(Bt(), e), children: ({ state: m, isDisabled: p }) => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: l(
                "absolute top-1/2 left-0 w-full -translate-y-1/2 rounded-full h-2",
                "bg-[var(--border-primary)] dark:bg-[var(--border-secondary)]",
                p && "bg-[var(--interactive-primary-disabled)]"
              )
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: l(
                "absolute top-1/2 left-0 -translate-y-1/2 rounded-full h-2",
                "bg-[var(--interactive-primary)]",
                p && "bg-[color-mix(in_srgb,var(--interactive-primary-disabled)_50%,black_20%)] dark:bg-[color-mix(in_srgb,var(--interactive-primary-disabled)_50%,white_20%)]",
                "[transition-duration:var(--transition-normal)]",
                "transition-colors",
                "z-0"
                // Sous le thumb
              ),
              style: {
                width: `${m.getThumbPercent(0) * 100}%`
              }
            }
          ),
          /* @__PURE__ */ t.jsx(
            We,
            {
              className: l(
                "absolute rounded-full w-5 h-5",
                "bg-[var(--bg-primary)]",
                "border-2 border-[var(--interactive-primary)]",
                "shadow-[var(--shadow-sm)]",
                "cursor-pointer",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-focus)]/50",
                "pressed:scale-110",
                "[transition-duration:var(--transition-fast)]",
                "transition-all",
                "top-6.5 -translate-y-1/2 -translate-x-1/2",
                // Centrage parfait
                "z-10",
                // Au-dessus du track
                p && "cursor-not-allowed border-[var(--border-secondary)] bg-[var(--interactive-primary-disabled)] shadow-none",
                a
              ),
              style: {
                left: `${m.getThumbPercent(0) * 100}%`
              }
            }
          )
        ] }) })
      ]
    }
  )
);
Dt.displayName = "Slider";
const Ft = f(
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
), Ot = f(
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
), It = f(
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
), Pt = (r, e) => {
  if (!e) return 0;
  switch (r) {
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
}, Lt = u.forwardRef(
  ({ className: r, size: e, children: a, description: o, ...s }, d) => /* @__PURE__ */ t.jsx(
    Me,
    {
      className: l(Ft({ size: e }), r),
      ref: d,
      ...s,
      children: ({ isSelected: n, isDisabled: i, isHovered: m, isFocusVisible: p }) => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: l(
              Ot({ size: e }),
              // Base styles
              !n && "[background-color:var(--bg-secondary)] [border-color:var(--border-primary)]",
              // Hover styles
              m && !n && !i && "[border-color:var(--border-secondary)]",
              // Selected styles
              n && "[background-color:var(--interactive-primary)] [border-color:var(--interactive-primary)]",
              // Selected + hover
              n && m && !i && "[background-color:var(--interactive-primary-hover)] [border-color:var(--interactive-primary-hover)]",
              // Focus styles
              p && !i && "focus-ring",
              // Disabled styles
              i && "opacity-50 cursor-not-allowed"
            ),
            children: /* @__PURE__ */ t.jsx(
              "span",
              {
                className: It({ size: e }),
                style: {
                  transform: `translateX(${Pt(e || "md", n)}px)`,
                  transition: "transform 200ms ease-out"
                }
              }
            )
          }
        ),
        (a || o) && /* @__PURE__ */ t.jsxs("div", { className: l("flex flex-col", i && "opacity-50"), children: [
          a && /* @__PURE__ */ t.jsx("span", { className: "[color:var(--text-primary)] leading-none", children: a }),
          o && /* @__PURE__ */ t.jsx("span", { className: "text-sm [color:var(--text-tertiary)] mt-1 leading-tight", children: o })
        ] })
      ] })
    }
  )
);
Lt.displayName = "Switch";
const Wt = f(["w-full"], {
  variants: {
    orientation: {
      horizontal: "flex flex-col",
      vertical: "flex flex-row"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
}), Mt = f(
  [
    "flex font-sans",
    "focus:outline-none",
    "[font-family:var(--font-family-primary)]"
  ],
  {
    variants: {
      variant: {
        default: ["border-b", "[border-color:var(--border-primary)]"],
        soft: ["p-1 rounded-lg", "[background-color:var(--bg-secondary)]"],
        outline: [
          "p-1 border rounded-lg",
          "[border-color:var(--border-primary)]",
          "[background-color:var(--bg-secondary)]"
        ],
        ghost: [
          // No background or border
        ]
      },
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col min-w-[200px] mr-4"
      },
      size: {
        sm: "gap-1",
        md: "gap-2",
        lg: "gap-3"
      }
    },
    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
      size: "md"
    }
  }
), Yt = f(
  [
    "relative flex items-center justify-center whitespace-nowrap",
    "font-medium transition-all cursor-pointer",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "[--tw-ring-color:var(--border-focus)]",
    "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
    "[transition-duration:var(--transition-normal)]",
    "[font-family:var(--font-family-primary)]"
  ],
  {
    variants: {
      variant: {
        default: [
          "border-b-2 border-transparent pb-2",
          "[color:var(--text-secondary)]",
          "hover:[color:var(--text-primary)]",
          "data-[selected=true]:border-b-2 data-[selected=true]:[border-color:var(--interactive-primary)]",
          "data-[selected=true]:[color:var(--interactive-primary)]",
          "data-[disabled=true]:[color:var(--text-disabled)]"
        ],
        soft: [
          "rounded-md px-3 py-1.5",
          "[color:var(--text-secondary)]",
          "hover:[background-color:var(--bg-tertiary)]",
          "hover:[color:var(--text-primary)]",
          "data-[selected=true]:[background-color:var(--bg-primary)]",
          "data-[selected=true]:[color:var(--text-primary)]",
          "data-[disabled=true]:[color:var(--text-disabled)]"
        ],
        outline: [
          "rounded-md px-3 py-1.5 border",
          "[border-color:transparent]",
          "[color:var(--text-secondary)]",
          "hover:[border-color:var(--border-secondary)]",
          "hover:[background-color:var(--bg-tertiary)]",
          "hover:[color:var(--text-primary)]",
          "data-[selected=true]:[border-color:var(--border-primary)]",
          "data-[selected=true]:[background-color:var(--bg-primary)]",
          "data-[selected=true]:[color:var(--text-primary)]",
          "data-[disabled=true]:[color:var(--text-disabled)]"
        ],
        ghost: [
          "rounded-md px-3 py-1.5",
          "[color:var(--text-secondary)]",
          "hover:[background-color:var(--bg-tertiary)]",
          "hover:[color:var(--text-primary)]",
          "data-[selected=true]:[background-color:var(--bg-primary)]",
          "data-[selected=true]:[color:var(--text-primary)]",
          "data-[selected=true]:font-semibold",
          "data-[disabled=true]:[color:var(--text-disabled)]"
        ]
      },
      size: {
        sm: ["[font-size:var(--font-size-xs)]", "h-7 px-2 py-1"],
        md: ["[font-size:var(--font-size-sm)]", "h-9 px-3 py-2"],
        lg: ["[font-size:var(--font-size-md)]", "h-11 px-4 py-2.5"]
      },
      orientation: {
        horizontal: "",
        vertical: "w-full justify-start"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      orientation: "horizontal"
    }
  }
), Gt = f(
  [
    "mt-4",
    "[color:var(--text-primary)]",
    "[font-family:var(--font-family-primary)]"
  ],
  {
    variants: {
      orientation: {
        horizontal: "mt-4",
        vertical: "mt-0 flex-1"
      }
    },
    defaultVariants: {
      orientation: "horizontal"
    }
  }
), Ht = u.forwardRef(
  ({ className: r, orientation: e = "horizontal", children: a, ...o }, s) => /* @__PURE__ */ t.jsx(
    Ye,
    {
      ref: s,
      className: l(Wt({ orientation: e }), r),
      orientation: e,
      ...o,
      children: a
    }
  )
);
Ht.displayName = "Tabs";
const Jt = u.forwardRef(
  ({
    className: r,
    variant: e = "default",
    orientation: a = "horizontal",
    size: o = "md",
    children: s,
    ...d
  }, n) => /* @__PURE__ */ t.jsx(
    Ge,
    {
      ref: n,
      className: l(
        Mt({ variant: e, orientation: a, size: o }),
        r
      ),
      ...d,
      children: s
    }
  )
);
Jt.displayName = "TabList";
const Ut = u.forwardRef(
  ({
    className: r,
    variant: e = "default",
    size: a = "md",
    orientation: o = "horizontal",
    children: s,
    ...d
  }, n) => /* @__PURE__ */ t.jsx(
    He,
    {
      ref: n,
      className: l(Yt({ variant: e, size: a, orientation: o }), r),
      ...d,
      children: s
    }
  )
);
Ut.displayName = "Tab";
const qt = u.forwardRef(
  ({ className: r, orientation: e = "horizontal", children: a, ...o }, s) => /* @__PURE__ */ t.jsx(
    Je,
    {
      ref: s,
      className: l(Gt({ orientation: e }), r),
      ...o,
      children: a
    }
  )
);
qt.displayName = "TabPanel";
const Xt = f(
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
), Zt = u.forwardRef(
  ({
    className: r,
    variant: e,
    size: a,
    removable: o = !1,
    onRemove: s,
    interactive: d = !1,
    leftIcon: n,
    rightIcon: i,
    children: m,
    onClick: p,
    ...y
  }, w) => {
    const v = (R) => {
      R.stopPropagation(), s?.();
    }, b = d || !!p;
    return /* @__PURE__ */ t.jsxs(
      "span",
      {
        ref: w,
        className: l(
          Xt({ variant: e, size: a, removable: o, interactive: b }),
          r
        ),
        onClick: p,
        ...y,
        children: [
          n && /* @__PURE__ */ t.jsx("span", { className: "mr-1.5 inline-flex items-center", children: n }),
          /* @__PURE__ */ t.jsx("span", { children: m }),
          i && !o && /* @__PURE__ */ t.jsx("span", { className: "ml-1.5 inline-flex items-center", children: i }),
          o && /* @__PURE__ */ t.jsx(
            "button",
            {
              type: "button",
              onClick: v,
              className: l(
                "ml-1.5 inline-flex items-center justify-center rounded-full",
                "hover:[background-color:var(--bg-tertiary)] transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-offset-1",
                a === "sm" && "w-3 h-3",
                a === "md" && "w-4 h-4",
                a === "lg" && "w-5 h-5"
              ),
              "aria-label": "Remove tag",
              children: /* @__PURE__ */ t.jsx(
                pr,
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
Zt.displayName = "Tag";
const Qt = f(
  [
    "px-3 py-2 text-sm font-medium z-50",
    "rounded-md shadow-lg border",
    "max-w-xs break-words",
    "backdrop-blur-sm",
    // Using semantic tokens
    "[background-color:var(--bg-inverse)]",
    "[color:var(--text-inverse)]",
    "[border-color:var(--border-strong)]",
    "[font-family:var(--font-family-primary)]",
    // Animation
    "opacity-100",
    "data-[entering]:animate-in data-[entering]:fade-in data-[entering]:zoom-in-95",
    "data-[exiting]:animate-out data-[exiting]:fade-out data-[exiting]:zoom-out-95",
    "transition-all duration-150 ease-out"
  ],
  {
    variants: {
      size: {
        sm: ["px-2 py-1 text-xs", "max-w-48"],
        md: ["px-3 py-2 text-sm", "max-w-xs"],
        lg: ["px-4 py-3 text-base", "max-w-sm"]
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), te = ({ children: r, ...e }) => /* @__PURE__ */ t.jsx(qe, { ...e, children: r });
te.displayName = "TooltipTrigger";
const oe = u.forwardRef(
  ({ size: r, className: e, ...a }, o) => /* @__PURE__ */ t.jsx(
    Ue,
    {
      ref: o,
      className: l(Qt({ size: r }), e),
      ...a
    }
  )
);
oe.displayName = "Tooltip";
const Kt = u.forwardRef(
  ({
    content: r,
    children: e,
    size: a,
    className: o,
    delay: s = 700,
    placement: d = "top",
    isDisabled: n = !1,
    ...i
  }, m) => /* @__PURE__ */ t.jsxs(te, { isDisabled: n, delay: s, children: [
    e,
    /* @__PURE__ */ t.jsx(
      oe,
      {
        ref: m,
        size: a,
        className: o,
        placement: d,
        ...i,
        children: r
      }
    )
  ] })
);
Kt.displayName = "TooltipWrapper";
const S = new Xe(), ro = f(
  [
    "group pointer-events-auto relative flex w-full items-center gap-3 overflow-hidden rounded-md p-4 shadow-lg",
    "border backdrop-blur-sm",
    "[font-family:var(--font-family-primary)]",
    // Base animations - Default slide in from right
    "data-[entering]:toast-slide-in-right",
    "data-[exiting]:toast-slide-out-right",
    // Transform origin for better animation
    "origin-center",
    // Smooth transitions for hover/focus states
    "transition-all duration-200 ease-out",
    // Hover effects with subtle animation
    "hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1",
    // Focus effects for accessibility
    "focus-within:ring-2 focus-within:ring-offset-2",
    "[&:focus-within]:[--tw-ring-color:var(--border-focus)]",
    // Micro-interaction: gentle glow effect
    "relative before:absolute before:inset-0 before:rounded-md before:opacity-0 before:transition-opacity",
    "before:[background:linear-gradient(135deg,rgba(255,255,255,0.1),transparent)]",
    "hover:before:opacity-100"
  ],
  {
    variants: {
      variant: {
        default: [
          "[background-color:var(--bg-primary)]",
          "[color:var(--text-primary)]",
          "[border-color:var(--border-primary)]"
        ],
        success: [
          "[background-color:var(--status-success-bg)]",
          "[color:var(--status-success-text)]",
          "[border-color:var(--status-success)]",
          // Success-specific entrance with checkmark effect
          "data-[entering]:duration-600",
          "border-l-4 border-l-[var(--status-success)]"
        ],
        warning: [
          "[background-color:var(--status-warning-bg)]",
          "[color:var(--status-warning-text)]",
          "[border-color:var(--status-warning)]",
          // Warning-specific gentle attention animation
          "border-l-4 border-l-[var(--status-warning)]",
          "data-[entering]:animate-[wiggle_1s_ease-in-out_1]"
        ],
        error: [
          "[background-color:var(--status-danger-bg)]",
          "[color:var(--status-danger-text)]",
          "[border-color:var(--status-danger)]",
          // Error-specific urgent attention animation
          "border-l-4 border-l-[var(--status-danger)]",
          "data-[entering]:animate-[shake_0.82s_cubic-bezier(.36,.07,.19,.97)_1]"
        ],
        info: [
          "[background-color:var(--bg-secondary)]",
          "[color:var(--text-primary)]",
          "[border-color:var(--border-focus)]"
        ]
      },
      position: {
        "top-right": [
          "origin-top-right",
          "data-[entering]:toast-slide-in-right",
          "data-[exiting]:toast-slide-out-right"
        ],
        "top-left": [
          "origin-top-left",
          "data-[entering]:toast-slide-in-left",
          "data-[exiting]:toast-slide-out-left"
        ],
        "bottom-right": [
          "origin-bottom-right",
          "data-[entering]:toast-slide-in-right",
          "data-[exiting]:toast-slide-out-right"
        ],
        "bottom-left": [
          "origin-bottom-left",
          "data-[entering]:toast-slide-in-left",
          "data-[exiting]:toast-slide-out-left"
        ],
        "top-center": [
          "origin-top",
          "data-[entering]:toast-slide-in-top",
          "data-[exiting]:toast-slide-out-top"
        ],
        "bottom-center": [
          "origin-bottom",
          "data-[entering]:toast-slide-in-bottom",
          "data-[exiting]:toast-slide-out-bottom"
        ]
      }
    },
    defaultVariants: {
      variant: "default",
      position: "top-right"
    }
  }
), eo = f(
  [
    "pointer-events-none fixed z-50 flex max-h-screen gap-2 p-4",
    "focus:outline-none",
    "[&[data-focus-visible]]:outline-2 [&[data-focus-visible]]:outline-offset-2",
    "[&[data-focus-visible]]:[outline-color:var(--border-focus)]"
  ],
  {
    variants: {
      position: {
        "top-right": "top-0 right-0 flex-col-reverse w-full sm:max-w-sm",
        "top-left": "top-0 left-0 flex-col-reverse w-full sm:max-w-sm",
        "bottom-right": "bottom-0 right-0 flex-col w-full sm:max-w-sm",
        "bottom-left": "bottom-0 left-0 flex-col w-full sm:max-w-sm",
        "top-center": "top-0 left-1/2 -translate-x-1/2 flex-col-reverse w-full sm:max-w-sm",
        "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 flex-col w-full sm:max-w-sm"
      }
    },
    defaultVariants: {
      position: "top-right"
    }
  }
), ao = {
  success: Yr,
  warning: Mr,
  error: Wr,
  info: jr,
  default: void 0
}, ne = u.forwardRef(
  ({ variant: r = "default", position: e = "top-right", className: a, ...o }, s) => /* @__PURE__ */ t.jsx(
    Ze,
    {
      ref: s,
      className: l(ro({ variant: r, position: e }), a),
      ...o
    }
  )
);
ne.displayName = "Toast";
const se = u.forwardRef(
  ({ toast: r, showDismiss: e = !0, className: a }, o) => {
    const { title: s, description: d, variant: n = "default", action: i } = r.content, m = ao[n];
    return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsxs(
        Qe,
        {
          ref: o,
          className: l("flex items-center gap-3 flex-1", a),
          children: [
            m && /* @__PURE__ */ t.jsx(
              m,
              {
                className: "h-5 w-5 flex-shrink-0",
                style: {
                  color: n === "default" ? "var(--text-secondary)" : "currentColor"
                }
              }
            ),
            /* @__PURE__ */ t.jsxs("div", { className: "flex-1 space-y-1", children: [
              s && /* @__PURE__ */ t.jsx(fr, { slot: "title", className: "text-sm font-medium leading-none", children: s }),
              /* @__PURE__ */ t.jsx(fr, { slot: "description", className: "text-sm opacity-90", children: d })
            ] })
          ]
        }
      ),
      i && /* @__PURE__ */ t.jsx(
        M,
        {
          onPress: i.onClick,
          className: l(
            "inline-flex h-8 shrink-0 items-center justify-center rounded-md px-3 text-xs font-medium",
            "transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
            n === "default" && [
              "[background-color:var(--interactive-secondary)]",
              "[color:var(--text-primary)]",
              "hover:[background-color:var(--interactive-secondary-hover)]",
              "[--tw-ring-color:var(--border-focus)]"
            ],
            n === "success" && [
              "[background-color:var(--status-success)]",
              "[color:var(--text-inverse)]",
              "hover:[background-color:var(--status-success-hover)]",
              "[--tw-ring-color:var(--status-success)]"
            ],
            n === "warning" && [
              "[background-color:var(--status-warning)]",
              "[color:var(--text-inverse)]",
              "hover:[background-color:var(--status-warning-hover)]",
              "[--tw-ring-color:var(--status-warning)]"
            ],
            n === "error" && [
              "[background-color:var(--status-danger)]",
              "[color:var(--text-inverse)]",
              "hover:[background-color:var(--status-danger-hover)]",
              "[--tw-ring-color:var(--status-danger)]"
            ],
            n === "info" && [
              "[background-color:var(--interactive-primary)]",
              "[color:var(--interactive-primary-text)]",
              "hover:[background-color:var(--interactive-primary-hover)]",
              "[--tw-ring-color:var(--border-focus)]"
            ]
          ),
          children: i.label
        }
      ),
      e && /* @__PURE__ */ t.jsx(
        M,
        {
          slot: "close",
          className: l(
            "absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-md",
            "opacity-70 transition-opacity hover:opacity-100",
            "focus:outline-none focus:ring-2 focus:ring-offset-2",
            "[--tw-ring-color:var(--border-focus)]"
          ),
          "aria-label": "Dismiss notification",
          children: /* @__PURE__ */ t.jsx(pr, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
se.displayName = "ToastContent";
const ie = u.forwardRef(
  ({ position: r = "top-right", className: e, ...a }, o) => /* @__PURE__ */ t.jsx(
    Ke,
    {
      ref: o,
      queue: S,
      className: l(eo({ position: r }), e),
      ...a,
      children: ({ toast: s }) => /* @__PURE__ */ t.jsx(
        ne,
        {
          toast: s,
          variant: s.content.variant,
          position: r,
          children: /* @__PURE__ */ t.jsx(se, { toast: s })
        }
      )
    }
  )
);
ie.displayName = "ToastRegion";
const to = {
  success: (r, e) => {
    const { timeout: a = 5e3, ...o } = e || {};
    return S.add(
      { ...o, description: r, variant: "success" },
      { timeout: a }
    );
  },
  error: (r, e) => {
    const { timeout: a = 5e3, ...o } = e || {};
    return S.add(
      { ...o, description: r, variant: "error" },
      { timeout: a }
    );
  },
  warning: (r, e) => {
    const { timeout: a = 5e3, ...o } = e || {};
    return S.add(
      { ...o, description: r, variant: "warning" },
      { timeout: a }
    );
  },
  info: (r, e) => {
    const { timeout: a = 5e3, ...o } = e || {};
    return S.add(
      { ...o, description: r, variant: "info" },
      { timeout: a }
    );
  },
  default: (r, e) => {
    const { timeout: a = 5e3, ...o } = e || {};
    return S.add(
      { ...o, description: r, variant: "default" },
      { timeout: a }
    );
  },
  // Utility methods
  close: (r) => S.close(r),
  clear: () => S.clear(),
  pauseAll: () => S.pauseAll(),
  resumeAll: () => S.resumeAll()
}, Ao = () => to, Do = ({ children: r }) => /* @__PURE__ */ t.jsx(t.Fragment, { children: r }), Fo = ie, ce = {
  id: "stride",
  name: "Stride",
  description: "Default Stride Design System brand with blue primary colors"
}, oo = {
  id: "coral",
  name: "Coral",
  description: "Coral theme with warm orange-red primary colors and no button radius"
}, no = {
  id: "forest",
  name: "Forest",
  description: "Forest theme with natural green primary colors and generous spacing"
}, so = {
  id: "runswap",
  name: "Runswap",
  description: "Runswap theme with purple primary colors"
}, io = {
  id: "acme",
  name: "Acme",
  description: "Acme theme with indigo primary colors and modern tech aesthetic"
}, ar = [
  ce,
  oo,
  no,
  so,
  io
], co = (r) => ar.find((e) => e.id === r), Oo = () => ce;
let k = {
  defaultFallbackBrand: "stride",
  enableLocalStorage: !0,
  enableTransitions: !0,
  transitionDuration: 50
};
const F = /* @__PURE__ */ new Map(), lo = (r) => {
  k = { ...k, ...r }, console.info("🎨 Dynamic brand system configured:", k);
}, Io = () => ({ ...k }), le = (r) => {
  if (!r.id || !r.name)
    throw new Error("Dynamic brand must have an id and name");
  F.has(r.id) && console.warn(`⚠️ Dynamic brand "${r.id}" already exists, overwriting...`);
  const e = {
    ...r,
    fallback: {
      brand: k.defaultFallbackBrand,
      useSemanticFallback: !0,
      ...r.fallback
    }
  };
  if (F.set(r.id, e), k.enableLocalStorage && typeof window < "u")
    try {
      localStorage.setItem(`stride-dynamic-brand:${r.id}`, JSON.stringify(e));
    } catch (a) {
      console.warn("Failed to save dynamic brand to localStorage:", a);
    }
  console.info(`✅ Dynamic brand "${r.name}" (${r.id}) registered successfully`);
}, Vr = (r) => F.get(r), rr = () => Array.from(F.values()), er = (r) => F.has(r), de = (r) => {
  const e = F.delete(r);
  return e && (k.enableLocalStorage && typeof window < "u" && localStorage.removeItem(`stride-dynamic-brand:${r}`), typeof document < "u" && (vr() === r && tr(k.defaultFallbackBrand), mo(r)), console.info(`🗑️ Dynamic brand "${r}" unregistered successfully`)), e;
}, ue = (r) => {
  const e = Vr(r);
  if (!e) {
    console.error(`❌ Dynamic brand "${r}" not found`);
    return;
  }
  if (typeof document > "u") {
    console.warn("Cannot apply dynamic brand theme on server side");
    return;
  }
  const a = document.documentElement;
  k.enableTransitions && a.classList.add("brand-switching"), me();
  const o = e.fallback?.brand || k.defaultFallbackBrand;
  o && a.classList.add(`brand-${o}`), a.classList.add(`brand-dynamic-${r}`), uo(e), k.enableLocalStorage && localStorage.setItem("stride-brand", `dynamic:${r}`), k.enableTransitions && setTimeout(() => {
    a.classList.remove("brand-switching");
  }, k.transitionDuration), console.info(`🎨 Applied dynamic brand: ${e.name} (${r})`);
}, me = () => {
  const r = document.documentElement, e = ar.map((o) => `brand-${o.id}`);
  r.classList.remove(...e);
  const a = Array.from(r.classList).filter((o) => o.startsWith("brand-dynamic-"));
  r.classList.remove(...a);
}, uo = (r) => {
  const e = `dynamic-brand-${r.id}`;
  let a = document.getElementById(e);
  a || (a = document.createElement("style"), a.id = e, document.head.appendChild(a));
  const o = [], s = `.brand-dynamic-${r.id}`;
  r.tokens.core && (r.tokens.core.primary && Object.entries(r.tokens.core.primary).forEach(([n, i]) => {
    i && o.push(`  --brand-primary-${n}: ${i};`);
  }), r.tokens.core.neutral && Object.entries(r.tokens.core.neutral).forEach(([n, i]) => {
    i && o.push(`  --brand-neutral-${n}: ${i};`);
  }), r.tokens.core.success && Object.entries(r.tokens.core.success).forEach(([n, i]) => {
    i && o.push(`  --brand-success-${n}: ${i};`);
  }), r.tokens.core.warning && Object.entries(r.tokens.core.warning).forEach(([n, i]) => {
    i && o.push(`  --brand-warning-${n}: ${i};`);
  }), r.tokens.core.danger && Object.entries(r.tokens.core.danger).forEach(([n, i]) => {
    i && o.push(`  --brand-danger-${n}: ${i};`);
  })), r.tokens.semantic && Object.entries(r.tokens.semantic).forEach(([n, i]) => {
    if (i) {
      const m = n.replace(/([A-Z])/g, "-$1").toLowerCase();
      o.push(`  --${m}: ${i};`);
    }
  }), r.tokens.typography && Object.entries(r.tokens.typography).forEach(([n, i]) => {
    if (i) {
      const m = n.replace(/([A-Z])/g, "-$1").toLowerCase();
      o.push(`  --${m}: ${i};`);
    }
  }), r.tokens.layout && Object.entries(r.tokens.layout).forEach(([n, i]) => {
    if (i) {
      const m = n.replace(/([A-Z])/g, "-$1").toLowerCase();
      o.push(`  --${m}: ${i};`);
    }
  }), r.tokens.custom && Object.entries(r.tokens.custom).forEach(([n, i]) => {
    if (i) {
      const m = n.startsWith("--") ? n : `--${n}`;
      o.push(`  ${m}: ${i};`);
    }
  });
  const d = o.length > 0 ? `${s} {
${o.join(`
`)}
}` : `/* No tokens defined for ${r.name} */`;
  a.textContent = d;
}, mo = (r) => {
  const e = document.getElementById(`dynamic-brand-${r}`);
  e && e.remove();
}, fo = () => {
  if (!(!k.enableLocalStorage || typeof window > "u"))
    try {
      Object.keys(localStorage).forEach((e) => {
        if (e.startsWith("stride-dynamic-brand:")) {
          const a = e.replace("stride-dynamic-brand:", ""), o = localStorage.getItem(e);
          if (o)
            try {
              const s = JSON.parse(o);
              le(s);
            } catch (s) {
              console.warn(`Failed to restore dynamic brand ${a}:`, s), localStorage.removeItem(e);
            }
        }
      });
      const r = localStorage.getItem("stride-brand");
      if (r?.startsWith("dynamic:")) {
        const e = r.replace("dynamic:", "");
        F.has(e) ? ue(e) : (console.warn(`Dynamic brand ${e} not found, reverting to fallback`), localStorage.setItem("stride-brand", k.defaultFallbackBrand), tr(k.defaultFallbackBrand));
      }
    } catch (r) {
      console.error("Failed to restore dynamic brands from storage:", r);
    }
}, tr = (r) => {
  if (er(r)) {
    ue(r);
    return;
  }
  const e = co(r);
  if (!e) {
    console.warn(`❌ Brand "${r}" not found`);
    return;
  }
  if (typeof document > "u") {
    console.warn("Cannot apply brand theme on server side");
    return;
  }
  k.enableTransitions && document.documentElement.classList.add("brand-switching"), me(), document.documentElement.classList.add(`brand-${e.id}`), k.enableLocalStorage && typeof window < "u" && localStorage.setItem("stride-brand", r), k.enableTransitions && setTimeout(() => {
    document.documentElement.classList.remove("brand-switching");
  }, k.transitionDuration), console.info(`🎨 Applied static brand: ${e.name} (${r})`);
}, vr = () => {
  if (typeof window < "u") {
    const r = localStorage.getItem("stride-brand") || k.defaultFallbackBrand;
    return r.startsWith("dynamic:") ? r.replace("dynamic:", "") : r;
  }
  return k.defaultFallbackBrand;
}, Pr = () => typeof window < "u" && (localStorage.getItem("stride-brand") || k.defaultFallbackBrand).startsWith("dynamic:") ? "dynamic" : "static", Po = () => {
  fo();
  const r = vr();
  tr(r);
}, vo = () => {
  const r = [...ar], e = rr();
  return [...r, ...e];
}, go = (r) => {
  if (typeof document > "u") return !0;
  const e = document.createElement("div");
  return e.style.color = r, e.style.color !== "";
}, po = () => {
  Array.from(F.keys()).forEach((e) => {
    de(e);
  }), console.info("🧹 All dynamic brands cleared");
}, Lo = (r) => {
  const e = Vr(r);
  if (!e)
    return null;
  const a = [], o = `.brand-dynamic-${r}`;
  return a.length > 0 ? `${o} {
${a.join(`
`)}
}` : `/* No tokens defined for ${e.name} */`;
}, Wo = (r) => (console.warn("generateColorPalette is a placeholder - implement with a color manipulation library"), {
  500: r
  // TODO: Implémenter la génération automatique de palette
}), Mo = (r) => {
  const e = [];
  return (!r.id || typeof r.id != "string") && e.push("Brand ID is required and must be a string"), (!r.name || typeof r.name != "string") && e.push("Brand name is required and must be a string"), r.id && !/^[a-zA-Z0-9-_]+$/.test(r.id) && e.push("Brand ID must contain only alphanumeric characters, hyphens, and underscores"), r.tokens.core?.primary && Object.entries(r.tokens.core.primary).forEach(([a, o]) => {
    o && !go(o) && e.push(`Invalid primary color for shade ${a}: ${o}`);
  }), {
    valid: e.length === 0,
    errors: e
  };
}, bo = () => (mr(() => {
  tr("runswap"), document.documentElement.classList.add("dark");
}, []), null), Y = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, gr = /* @__PURE__ */ u.createContext(Y), fe = /* @__PURE__ */ u.createContext(!1);
function ho(r) {
  let e = G(gr), a = ve(e === Y), [o, s] = W(!0), d = xe(() => ({
    // If this is the first SSRProvider, start with an empty string prefix, otherwise
    // append and increment the counter.
    prefix: e === Y ? "" : `${e.prefix}-${a}`,
    current: 0
  }), [
    e,
    a
  ]);
  return typeof document < "u" && ye(() => {
    s(!1);
  }, []), /* @__PURE__ */ u.createElement(gr.Provider, {
    value: d
  }, /* @__PURE__ */ u.createElement(fe.Provider, {
    value: o
  }, r.children));
}
let Lr = !1;
function xo(r) {
  return typeof u.useId == "function" ? (process.env.NODE_ENV !== "test" && process.env.NODE_ENV !== "production" && !Lr && (console.warn("In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app."), Lr = !0), /* @__PURE__ */ u.createElement(u.Fragment, null, r.children)) : /* @__PURE__ */ u.createElement(ho, r);
}
let yo = !!(typeof window < "u" && window.document && window.document.createElement), kr = /* @__PURE__ */ new WeakMap();
function ve(r = !1) {
  let e = G(gr), a = we(null);
  if (a.current === null && !r) {
    var o, s;
    let d = (s = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || s === void 0 || (o = s.ReactCurrentOwner) === null || o === void 0 ? void 0 : o.current;
    if (d) {
      let n = kr.get(d);
      n == null ? kr.set(d, {
        id: e.current,
        state: d.memoizedState
      }) : d.memoizedState !== n.state && (e.current = n.id, kr.delete(d));
    }
    a.current = ++e.current;
  }
  return a.current;
}
function wo(r) {
  let e = G(gr);
  e === Y && !yo && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let a = ve(!!r), o = e === Y && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${e.prefix}`;
  return r || `${o}-${a}`;
}
function ko(r) {
  let e = u.useId(), [a] = W(Sr()), o = a || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Y.prefix}`;
  return r || `${o}-${e}`;
}
u.useId;
function jo() {
  return !1;
}
function No() {
  return !0;
}
function To(r) {
  return () => {
  };
}
function Sr() {
  return typeof u.useSyncExternalStore == "function" ? u.useSyncExternalStore(To, jo, No) : G(fe);
}
function Yo({ children: r }) {
  return /* @__PURE__ */ t.jsxs(xo, { children: [
    /* @__PURE__ */ t.jsx(bo, {}),
    r
  ] });
}
const Ro = () => {
  const [r, e] = W(() => typeof window < "u" ? vr() : "stride"), [a, o] = W(() => typeof window < "u" ? Pr() : "static"), [s, d] = W(() => rr()), n = (v) => {
    tr(v), e(v), o(er(v) ? "dynamic" : "static");
  }, i = () => er(r) ? Vr(r) : ar.find((v) => v.id === r), m = (v) => {
    le(v), d(rr());
  }, p = (v) => {
    const b = de(v);
    return b && (d(rr()), r === v && n("stride")), b;
  }, y = () => {
    const v = er(r);
    po(), d([]), v && n("stride");
  }, w = (v) => {
    lo(v);
  };
  return mr(() => {
    if (typeof window < "u") {
      const v = vr(), b = Pr();
      (v !== r || b !== a) && (e(v), o(b));
    }
  }, [r, a]), mr(() => {
    const v = () => {
      d(rr());
    };
    if (typeof window < "u")
      return window.addEventListener("storage", v), () => window.removeEventListener("storage", v);
  }, []), {
    currentBrand: r,
    currentBrandType: a,
    availableBrands: ar,
    dynamicBrands: s,
    allBrands: vo(),
    setBrand: n,
    getCurrentBrandTheme: i,
    // Gestion des marques dynamiques
    registerDynamicBrand: m,
    unregisterDynamicBrand: p,
    isDynamicBrand: er,
    clearAllDynamicBrands: y,
    // Configuration du système
    configureDynamicSystem: w
  };
}, Go = () => {
  const { currentBrand: r, getCurrentBrandTheme: e } = Ro(), [a, o] = W(() => e());
  return mr(() => {
    o(e());
  }, [r, e]), a;
}, Ho = () => Sr(), Jo = ({ children: r, fallback: e = null }) => Sr() ? /* @__PURE__ */ t.jsx(t.Fragment, { children: e }) : /* @__PURE__ */ t.jsx(t.Fragment, { children: r }), Uo = () => typeof window < "u" ? window : void 0, qo = {
  getItem: (r) => {
    if (typeof window > "u") return null;
    try {
      return localStorage.getItem(r);
    } catch {
      return null;
    }
  },
  setItem: (r, e) => {
    if (!(typeof window > "u"))
      try {
        localStorage.setItem(r, e);
      } catch {
      }
  },
  removeItem: (r) => {
    if (!(typeof window > "u"))
      try {
        localStorage.removeItem(r);
      } catch {
      }
  }
};
export {
  Xr as Accordion,
  _o as AccordionComponent,
  Qr as AccordionContent,
  Cr as AccordionItem,
  Zr as AccordionTrigger,
  ia as Alert,
  xa as Badge,
  bo as BrandInitializer,
  wa as Button,
  $a as Card,
  Ea as CardContent,
  za as CardDescription,
  Ba as CardFooter,
  Va as CardHeader,
  Sa as CardTitle,
  Da as Checkbox,
  Ma as Choicebox,
  Ya as ChoiceboxRadio,
  Jo as ClientOnly,
  Yo as ClientProviders,
  et as Dialog,
  tt as DialogBody,
  it as DialogClose,
  st as DialogDescription,
  ot as DialogFooter,
  at as DialogHeader,
  rt as DialogOverlay,
  nt as DialogTitle,
  Ka as DialogTrigger,
  ut as Input,
  vt as Pagination,
  mt as PaginationEllipsis,
  D as PaginationItem,
  yt as Radio,
  xt as RadioGroup,
  Rt as Search,
  zt as Select,
  ae as SelectItem,
  Dt as Slider,
  Lt as Switch,
  Ut as Tab,
  Jt as TabList,
  qt as TabPanel,
  Ht as Tabs,
  Zt as Tag,
  ne as Toast,
  Fo as ToastContainer,
  se as ToastContent,
  Do as ToastProvider,
  ie as ToastRegion,
  oe as Tooltip,
  te as TooltipTrigger,
  Kt as TooltipWrapper,
  io as acmeBrand,
  tr as applyBrandTheme,
  ue as applyDynamicBrandTheme,
  ar as availableBrands,
  po as clearAllDynamicBrands,
  l as cn,
  lo as configureDynamicBrandSystem,
  oo as coralBrand,
  Lo as exportDynamicBrandToCSS,
  no as forestBrand,
  Wo as generateColorPalette,
  vo as getAllBrands,
  rr as getAllDynamicBrands,
  co as getBrandById,
  vr as getCurrentBrand,
  Pr as getCurrentBrandType,
  Oo as getDefaultBrand,
  Vr as getDynamicBrand,
  Io as getDynamicBrandSystemConfig,
  Po as initializeBrand,
  er as isDynamicBrand,
  go as isValidColor,
  le as registerDynamicBrand,
  fo as restoreDynamicBrandsFromStorage,
  so as runswapBrand,
  qo as safeLocalStorage,
  Uo as safeWindow,
  ce as strideBrand,
  to as toast,
  S as toastQueue,
  de as unregisterDynamicBrand,
  Ro as useBrand,
  Go as useBrandTheme,
  Ho as useSSRSafeId,
  Ao as useToastHelpers,
  Mo as validateDynamicBrandConfig
};
