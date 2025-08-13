var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/ui/Badge/Badge.tsx
import React from "react";
import { cva } from "class-variance-authority";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/Badge/Badge.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var badgeVariants = cva(
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
      dot: false,
      numeric: false
    }
  }
);
var Badge = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, dot, dotColor, numeric, children } = _b, props = __objRest(_b, ["className", "variant", "size", "dot", "dotColor", "numeric", "children"]);
    return /* @__PURE__ */ jsxs(
      "span",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          badgeVariants({ variant, size, dot, numeric }),
          className
        )
      }, props), {
        children: [
          dot && /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "inline-block w-1.5 h-1.5 rounded-full mr-1.5",
                dotColor ? `bg-[${dotColor}]` : "[background-color:var(--status-success)]"
              )
            }
          ),
          children
        ]
      })
    );
  }
);
Badge.displayName = "Badge";

// src/components/ui/Button/Button.tsx
import React2 from "react";
import {
  Button as AriaButton
} from "react-aria-components";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var buttonVariants = cva2(
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
);
var Button = React2.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, leftIcon, rightIcon, children } = _b, props = __objRest(_b, ["className", "variant", "size", "leftIcon", "rightIcon", "children"]);
    return /* @__PURE__ */ jsxs2(
      AriaButton,
      __spreadProps(__spreadValues({
        className: cn(buttonVariants({ variant, size, className })),
        ref
      }, props), {
        children: [
          leftIcon && /* @__PURE__ */ jsx2("span", { className: "flex-shrink-0", children: leftIcon }),
          children && /* @__PURE__ */ jsx2("span", { className: "flex-1", children }),
          rightIcon && /* @__PURE__ */ jsx2("span", { className: "flex-shrink-0", children: rightIcon })
        ]
      })
    );
  }
);
Button.displayName = "Button";

// src/components/ui/Card/Card.tsx
import React3, { createContext, useContext } from "react";
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx3 } from "react/jsx-runtime";
var CardContext = createContext({
  size: "md",
  hasFooter: false,
  setHasFooter: () => {
  }
});
var cardVariants = cva3(
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
        hasFooter: true,
        class: "[padding-bottom:var(--spacing-md)]"
      },
      {
        size: "md",
        hasFooter: true,
        class: "[padding-bottom:var(--spacing-md)]"
      },
      {
        size: "lg",
        hasFooter: true,
        class: "[padding-bottom:var(--spacing-md)]"
      }
    ],
    defaultVariants: {
      variant: "outlined",
      size: "md",
      hasFooter: false
    }
  }
);
var cardHeaderVariants = cva3(
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
        fullWidth: true,
        size: "sm",
        class: [
          "[margin-top:calc(-1_*_var(--card-padding-sm))]",
          "[margin-left:calc(-1_*_var(--card-padding-sm))]",
          "[margin-right:calc(-1_*_var(--card-padding-sm))]"
        ]
      },
      {
        fullWidth: true,
        size: "lg",
        class: [
          "[margin-top:calc(-1_*_var(--card-padding-lg))]",
          "[margin-left:calc(-1_*_var(--card-padding-lg))]",
          "[margin-right:calc(-1_*_var(--card-padding-lg))]"
        ]
      }
    ],
    defaultVariants: {
      fullWidth: false,
      size: "md"
    }
  }
);
var cardTitleVariants = cva3([
  "font-semibold leading-none tracking-tight",
  "[color:var(--text-primary)]",
  "[font-size:var(--font-size-lg)]",
  "[font-weight:var(--font-weight-semibold)]"
]);
var cardDescriptionVariants = cva3([
  "[color:var(--text-secondary)]",
  "[font-size:var(--font-size-sm)]"
]);
var cardContentVariants = cva3([
  "[color:var(--text-primary)]",
  "[font-size:var(--font-size-md)]",
  "flex-grow"
]);
var cardFooterVariants = cva3(
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
);
var Card = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size = "md" } = _b, props = __objRest(_b, ["className", "variant", "size"]);
    const cardSize = size || "md";
    const [hasFooter, setHasFooter] = React3.useState(false);
    return /* @__PURE__ */ jsx3(CardContext.Provider, { value: { size: cardSize, hasFooter, setHasFooter }, children: /* @__PURE__ */ jsx3(
      "div",
      __spreadValues({
        ref,
        className: cn(
          cardVariants({ variant, size: cardSize, hasFooter }),
          className
        )
      }, props)
    ) });
  }
);
Card.displayName = "Card";
var CardHeader = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, fullWidth, size } = _b, props = __objRest(_b, ["className", "fullWidth", "size"]);
    const cardContext = useContext(CardContext);
    const headerSize = size != null ? size : cardContext.size;
    return /* @__PURE__ */ jsx3(
      "div",
      __spreadValues({
        ref,
        className: cn(
          cardHeaderVariants({ fullWidth, size: headerSize }),
          className
        )
      }, props)
    );
  }
);
CardHeader.displayName = "CardHeader";
var CardTitle = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, as: Component = "h3" } = _b, props = __objRest(_b, ["className", "as"]);
    return /* @__PURE__ */ jsx3(
      Component,
      __spreadValues({
        ref,
        className: cn(cardTitleVariants(), className)
      }, props)
    );
  }
);
CardTitle.displayName = "CardTitle";
var CardDescription = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx3(
    "p",
    __spreadValues({
      ref,
      className: cn(cardDescriptionVariants(), className)
    }, props)
  );
});
CardDescription.displayName = "CardDescription";
var CardContent = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx3(
      "div",
      __spreadValues({
        ref,
        className: cn(cardContentVariants(), className)
      }, props)
    );
  }
);
CardContent.displayName = "CardContent";
var CardFooter = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, size } = _b, props = __objRest(_b, ["className", "size"]);
    const cardContext = useContext(CardContext);
    const footerSize = size != null ? size : cardContext.size;
    React3.useEffect(() => {
      cardContext.setHasFooter(true);
      return () => cardContext.setHasFooter(false);
    }, [cardContext]);
    return /* @__PURE__ */ jsx3(
      "div",
      __spreadValues({
        ref,
        className: cn(cardFooterVariants({ size: footerSize }), className)
      }, props)
    );
  }
);
CardFooter.displayName = "CardFooter";

// src/components/ui/Checkbox/Checkbox.tsx
import React4 from "react";
import {
  Checkbox as AriaCheckbox
} from "react-aria-components";
import { cva as cva4 } from "class-variance-authority";
import { Check, Minus } from "lucide-react";
import { Fragment, jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var checkboxVariants = cva4(
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
);
var checkboxBoxVariants = cva4(
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
);
var Checkbox = React4.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, size, children, description } = _b, props = __objRest(_b, ["className", "size", "children", "description"]);
    return /* @__PURE__ */ jsx4(
      AriaCheckbox,
      __spreadProps(__spreadValues({
        className: cn(checkboxVariants({ size }), className),
        ref
      }, props), {
        children: ({
          isSelected,
          isIndeterminate,
          isDisabled,
          isHovered,
          isFocusVisible
        }) => /* @__PURE__ */ jsxs3(Fragment, { children: [
          /* @__PURE__ */ jsx4(
            "div",
            {
              className: cn(
                checkboxBoxVariants({ size }),
                // Base styles
                !isSelected && !isIndeterminate && "[border-color:var(--border-primary)] [background-color:var(--bg-primary)]",
                // Hover styles
                isHovered && !isSelected && !isIndeterminate && !isDisabled && "[border-color:var(--border-secondary)]",
                // Selected/Indeterminate styles
                (isSelected || isIndeterminate) && "[background-color:var(--interactive-primary)] [border-color:var(--interactive-primary)]",
                // Selected + hover
                (isSelected || isIndeterminate) && isHovered && !isDisabled && "[background-color:var(--interactive-primary-hover)] [border-color:var(--interactive-primary-hover)]",
                // Focus styles
                isFocusVisible && !isDisabled && "focus-ring",
                // Disabled styles - simple opacity
                isDisabled && "opacity-50 cursor-not-allowed"
              ),
              children: isIndeterminate ? /* @__PURE__ */ jsx4(
                Minus,
                {
                  strokeWidth: 4,
                  className: cn(
                    "text-white",
                    isSelected || isIndeterminate ? "opacity-100" : "opacity-0",
                    size === "sm" && "h-2.5 w-2.5",
                    size === "md" && "h-4 w-4",
                    size === "lg" && "h-5 w-5"
                  )
                }
              ) : /* @__PURE__ */ jsx4(
                Check,
                {
                  strokeWidth: 4,
                  className: cn(
                    "text-white",
                    isSelected ? "opacity-100" : "opacity-0",
                    size === "sm" && "h-2.5 w-2.5",
                    size === "md" && "h-4 w-4",
                    size === "lg" && "h-5 w-5"
                  )
                }
              )
            }
          ),
          (children || description) && /* @__PURE__ */ jsxs3("div", { className: cn("flex flex-col", isDisabled && "opacity-50"), children: [
            children && /* @__PURE__ */ jsx4("span", { className: "[color:var(--text-primary)] leading-none", children }),
            description && /* @__PURE__ */ jsx4("span", { className: "text-sm [color:var(--text-tertiary)] mt-1 leading-tight", children: description })
          ] })
        ] })
      })
    );
  }
);
Checkbox.displayName = "Checkbox";

// src/components/ui/Input/Input.tsx
import React5 from "react";
import {
  Input as AriaInput,
  Label as AriaLabel,
  Text as AriaText,
  TextField as AriaTextField
} from "react-aria-components";
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var inputVariants = cva5(
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
);
var labelVariants = cva5([
  "block font-medium mb-1 ml-2",
  "[color:var(--text-primary)]",
  "[font-size:var(--font-size-sm)]",
  "[font-weight:var(--font-weight-medium)]"
]);
var helperTextVariants = cva5(
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
);
var Input = React5.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      inputClassName,
      size,
      variant,
      label,
      placeholder,
      helperText,
      errorMessage,
      leftIcon,
      rightIcon,
      isRequired,
      isDisabled
    } = _b, props = __objRest(_b, [
      "className",
      "inputClassName",
      "size",
      "variant",
      "label",
      "placeholder",
      "helperText",
      "errorMessage",
      "leftIcon",
      "rightIcon",
      "isRequired",
      "isDisabled"
    ]);
    const computedVariant = errorMessage ? "error" : variant;
    const displayHelperText = errorMessage || helperText;
    const helperVariant = errorMessage ? "error" : "default";
    return /* @__PURE__ */ jsxs4(
      AriaTextField,
      __spreadProps(__spreadValues({
        className: cn("w-full", className),
        isRequired,
        isDisabled
      }, props), {
        children: [
          label && /* @__PURE__ */ jsxs4(AriaLabel, { className: cn(labelVariants()), children: [
            label,
            isRequired && /* @__PURE__ */ jsx5("span", { className: "[color:var(--status-danger)] ml-1", children: "*" })
          ] }),
          /* @__PURE__ */ jsxs4("div", { className: "relative", children: [
            leftIcon && /* @__PURE__ */ jsx5("div", { className: "absolute left-3 top-1/2 transform -translate-y-1/2 [color:var(--text-tertiary)] pointer-events-none", children: leftIcon }),
            /* @__PURE__ */ jsx5(
              AriaInput,
              {
                ref,
                className: cn(
                  inputVariants({ size, variant: computedVariant }),
                  leftIcon && "pl-10",
                  rightIcon && "pr-10",
                  inputClassName
                ),
                placeholder
              }
            ),
            rightIcon && /* @__PURE__ */ jsx5("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2 [color:var(--text-tertiary)] pointer-events-none", children: rightIcon })
          ] }),
          displayHelperText && /* @__PURE__ */ jsx5(
            AriaText,
            {
              slot: errorMessage ? "errorMessage" : "description",
              className: cn(helperTextVariants({ variant: helperVariant })),
              children: displayHelperText
            }
          )
        ]
      })
    );
  }
);
Input.displayName = "Input";

// src/components/ui/Pagination/Pagination.tsx
import React6 from "react";
import { cva as cva6 } from "class-variance-authority";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var paginationVariants = cva6([
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
});
var paginationItemVariants = cva6([
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
    isActive: false
  }
});
var PaginationItem = React6.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, isActive } = _b, props = __objRest(_b, ["className", "variant", "size", "isActive"]);
    return /* @__PURE__ */ jsx6(
      "button",
      __spreadValues({
        ref,
        className: cn(paginationItemVariants({ variant, size, isActive }), className)
      }, props)
    );
  }
);
PaginationItem.displayName = "PaginationItem";
var PaginationEllipsis = ({ className, size = "md" }) => /* @__PURE__ */ jsxs5("span", { className: cn(paginationItemVariants({ variant: "ghost", size }), "pointer-events-none", className), children: [
  /* @__PURE__ */ jsx6(MoreHorizontal, { size: size === "sm" ? 14 : size === "lg" ? 18 : 16 }),
  /* @__PURE__ */ jsx6("span", { className: "sr-only", children: "More pages" })
] });
var usePagination = ({
  currentPage = 1,
  totalPages = 1,
  siblingCount = 1
}) => {
  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };
  const totalPageNumbers = siblingCount + 5;
  if (totalPageNumbers >= totalPages) {
    return range(1, totalPages);
  }
  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPages - 2;
  const firstPageIndex = 1;
  const lastPageIndex = totalPages;
  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = range(1, leftItemCount);
    return [...leftRange, "dots", totalPages];
  }
  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = range(totalPages - rightItemCount + 1, totalPages);
    return [firstPageIndex, "dots", ...rightRange];
  }
  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, "dots", ...middleRange, "dots", lastPageIndex];
  }
  return [];
};
var Pagination = React6.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      size = "md",
      currentPage = 1,
      totalPages = 1,
      onPageChange,
      showPrevNext = true,
      showFirstLast = false,
      siblingCount = 1,
      variant = "numbered"
    } = _b, props = __objRest(_b, [
      "className",
      "size",
      "currentPage",
      "totalPages",
      "onPageChange",
      "showPrevNext",
      "showFirstLast",
      "siblingCount",
      "variant"
    ]);
    const paginationRange = usePagination({ currentPage, totalPages, siblingCount });
    const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages && page !== currentPage) {
        onPageChange == null ? void 0 : onPageChange(page);
      }
    };
    if (variant === "simple") {
      return /* @__PURE__ */ jsxs5(
        "div",
        __spreadProps(__spreadValues({
          ref,
          className: cn(paginationVariants({ size }), className)
        }, props), {
          children: [
            /* @__PURE__ */ jsxs5(
              PaginationItem,
              {
                variant: "outline",
                size,
                onClick: () => handlePageChange(currentPage - 1),
                disabled: currentPage === 1,
                children: [
                  /* @__PURE__ */ jsx6(ChevronLeft, { size: size === "sm" ? 14 : size === "lg" ? 18 : 16 }),
                  /* @__PURE__ */ jsx6("span", { className: "sr-only", children: "Go to previous page" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs5("span", { className: cn(
              "px-4 py-2 text-sm font-medium",
              "[color:var(--text-primary)]",
              size === "sm" && "[font-size:var(--font-size-xs)]",
              size === "lg" && "[font-size:var(--font-size-md)]"
            ), children: [
              "Page ",
              currentPage,
              " of ",
              totalPages
            ] }),
            /* @__PURE__ */ jsxs5(
              PaginationItem,
              {
                variant: "outline",
                size,
                onClick: () => handlePageChange(currentPage + 1),
                disabled: currentPage === totalPages,
                children: [
                  /* @__PURE__ */ jsx6(ChevronRight, { size: size === "sm" ? 14 : size === "lg" ? 18 : 16 }),
                  /* @__PURE__ */ jsx6("span", { className: "sr-only", children: "Go to next page" })
                ]
              }
            )
          ]
        })
      );
    }
    return /* @__PURE__ */ jsxs5(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(paginationVariants({ size }), className)
      }, props), {
        children: [
          showFirstLast && currentPage > 1 && /* @__PURE__ */ jsx6(
            PaginationItem,
            {
              variant: "outline",
              size,
              onClick: () => handlePageChange(1),
              children: "First"
            }
          ),
          showPrevNext && /* @__PURE__ */ jsxs5(
            PaginationItem,
            {
              variant: "outline",
              size,
              onClick: () => handlePageChange(currentPage - 1),
              disabled: currentPage === 1,
              children: [
                /* @__PURE__ */ jsx6(ChevronLeft, { size: size === "sm" ? 14 : size === "lg" ? 18 : 16 }),
                /* @__PURE__ */ jsx6("span", { className: "sr-only", children: "Go to previous page" })
              ]
            }
          ),
          paginationRange.map((pageNumber, index) => {
            if (pageNumber === "dots") {
              return /* @__PURE__ */ jsx6(PaginationEllipsis, { size }, `ellipsis-${index}`);
            }
            return /* @__PURE__ */ jsx6(
              PaginationItem,
              {
                size,
                isActive: pageNumber === currentPage,
                onClick: () => handlePageChange(pageNumber),
                children: pageNumber
              },
              pageNumber
            );
          }),
          showPrevNext && /* @__PURE__ */ jsxs5(
            PaginationItem,
            {
              variant: "outline",
              size,
              onClick: () => handlePageChange(currentPage + 1),
              disabled: currentPage === totalPages,
              children: [
                /* @__PURE__ */ jsx6(ChevronRight, { size: size === "sm" ? 14 : size === "lg" ? 18 : 16 }),
                /* @__PURE__ */ jsx6("span", { className: "sr-only", children: "Go to next page" })
              ]
            }
          ),
          showFirstLast && currentPage < totalPages && /* @__PURE__ */ jsx6(
            PaginationItem,
            {
              variant: "outline",
              size,
              onClick: () => handlePageChange(totalPages),
              children: "Last"
            }
          )
        ]
      })
    );
  }
);
Pagination.displayName = "Pagination";

// src/components/ui/Radio/Radio.tsx
import React7 from "react";
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup
} from "react-aria-components";
import { cva as cva7 } from "class-variance-authority";
import { Fragment as Fragment2, jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var radioGroupVariants = cva7(
  [
    "flex gap-3"
  ],
  {
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
  }
);
var radioVariants = cva7(
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
);
var radioIndicatorVariants = cva7(
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
);
var radioDotVariants = cva7(
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
);
var RadioGroup = React7.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, orientation, size, children, label, description, errorMessage } = _b, props = __objRest(_b, ["className", "orientation", "size", "children", "label", "description", "errorMessage"]);
    return /* @__PURE__ */ jsx7(
      AriaRadioGroup,
      __spreadProps(__spreadValues({
        className: cn("flex flex-col gap-3", className),
        ref
      }, props), {
        children: ({ isInvalid }) => /* @__PURE__ */ jsxs6(Fragment2, { children: [
          label && /* @__PURE__ */ jsx7("span", { className: "text-sm font-medium [color:var(--text-primary)]", children: label }),
          description && /* @__PURE__ */ jsx7("span", { className: "text-sm [color:var(--text-secondary)]", children: description }),
          /* @__PURE__ */ jsx7("div", { className: radioGroupVariants({ orientation, size }), children }),
          errorMessage && /* @__PURE__ */ jsx7("span", { className: "text-sm [color:var(--status-error)]", children: errorMessage })
        ] })
      })
    );
  }
);
var Radio = React7.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, size, children, description } = _b, props = __objRest(_b, ["className", "size", "children", "description"]);
    return /* @__PURE__ */ jsx7(
      AriaRadio,
      __spreadProps(__spreadValues({
        className: cn(radioVariants({ size }), className),
        ref
      }, props), {
        children: ({ isSelected, isDisabled, isHovered, isFocusVisible }) => /* @__PURE__ */ jsxs6(Fragment2, { children: [
          /* @__PURE__ */ jsx7(
            "div",
            {
              className: cn(
                radioIndicatorVariants({ size }),
                // Base styles
                !isSelected && "[background-color:var(--bg-primary)] [border-color:var(--border-primary)]",
                // Hover styles
                isHovered && !isSelected && !isDisabled && "[border-color:var(--border-secondary)]",
                // Selected styles
                isSelected && "[background-color:var(--interactive-primary)] [border-color:var(--interactive-primary)]",
                // Selected + hover
                isSelected && isHovered && !isDisabled && "[background-color:var(--interactive-primary-hover)] [border-color:var(--interactive-primary-hover)]",
                // Focus styles
                isFocusVisible && !isDisabled && "focus-ring",
                // Disabled styles
                isDisabled && "opacity-50 cursor-not-allowed"
              ),
              children: /* @__PURE__ */ jsx7("span", { className: radioDotVariants({ size }) })
            }
          ),
          (children || description) && /* @__PURE__ */ jsxs6("div", { className: cn("flex flex-col", isDisabled && "opacity-50"), children: [
            children && /* @__PURE__ */ jsx7("span", { className: "[color:var(--text-primary)] leading-none", children }),
            description && /* @__PURE__ */ jsx7("span", { className: "text-xs [color:var(--text-secondary)] mt-1 leading-tight", children: description })
          ] })
        ] })
      })
    );
  }
);
RadioGroup.displayName = "RadioGroup";
Radio.displayName = "Radio";

// src/components/ui/Search/Search.tsx
import React8 from "react";
import {
  Input as AriaInput2,
  Label as AriaLabel2,
  Text as AriaText2,
  TextField as AriaTextField2
} from "react-aria-components";
import { cva as cva8 } from "class-variance-authority";
import { Search as SearchIcon, X, Loader2 } from "lucide-react";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var searchVariants = cva8(
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
);
var labelVariants2 = cva8([
  "block font-medium mb-1 ml-2",
  "[color:var(--text-primary)]",
  "[font-size:var(--font-size-sm)]",
  "[font-weight:var(--font-weight-medium)]"
]);
var helperTextVariants2 = cva8([
  "mt-1 text-sm ml-2",
  "[font-size:var(--font-size-xs)]",
  "[color:var(--text-secondary)]"
]);
var popoverVariants = cva8([
  "absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-50 max-h-80 overflow-auto",
  "top-full left-0",
  "[background-color:var(--bg-primary)]",
  "[border-color:var(--border-primary)]",
  "[box-shadow:var(--shadow-lg)]"
]);
var resultItemVariants = cva8([
  "px-4 py-3 cursor-pointer transition-colors border-b last:border-b-0",
  "[border-color:var(--border-secondary)]",
  "hover:[background-color:var(--bg-secondary)]",
  "focus:[background-color:var(--bg-secondary)]",
  "focus:outline-none"
]);
var Search = React8.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      inputClassName,
      size,
      variant,
      label,
      placeholder = "Search...",
      helperText,
      isDisabled,
      onClear,
      showClearButton = true,
      value,
      onValueChange,
      enableLiveSearch: enableLiveSearch = false,
      searchResults = [],
      onSearch,
      onResultSelect,
      isLoading = false,
      noResultsText = "No results found",
      minSearchLength = 2,
      searchDelay = 300,
      showPopover,
      renderResult,
      enableHighlighting: enableHighlighting = true,
      highlightClassName = "[background-color:var(--brand-warning-500)] [color:var(--text-primary)] px-1 py-0.5 rounded font-medium"
    } = _b, props = __objRest(_b, [
      "className",
      "inputClassName",
      "size",
      "variant",
      "label",
      "placeholder",
      "helperText",
      "isDisabled",
      "onClear",
      "showClearButton",
      "value",
      "onValueChange",
      // Live search props
      "enableLiveSearch",
      "searchResults",
      "onSearch",
      "onResultSelect",
      "isLoading",
      "noResultsText",
      "minSearchLength",
      "searchDelay",
      "showPopover",
      "renderResult",
      // Highlighting props
      "enableHighlighting",
      "highlightClassName"
    ]);
    const [internalValue, setInternalValue] = React8.useState(value || "");
    const [isFocused, setIsFocused] = React8.useState(false);
    const [internalResults, setInternalResults] = React8.useState([]);
    const [internalLoading, setInternalLoading] = React8.useState(false);
    const [lastSearchTerm, setLastSearchTerm] = React8.useState("");
    const searchTimeoutRef = React8.useRef(null);
    const currentValue = value !== void 0 ? value : internalValue;
    const showClear = showClearButton && currentValue.length > 0 && !isDisabled;
    const computedVariant = isFocused ? "focused" : variant;
    const displayResults = searchResults.length > 0 ? searchResults : internalResults;
    const displayLoading = isLoading || internalLoading;
    const effectiveSearchTerm = searchResults.length > 0 ? currentValue : lastSearchTerm;
    const shouldShowPopover = showPopover !== void 0 ? showPopover : enableLiveSearch && isFocused && currentValue.length >= minSearchLength && (displayResults.length > 0 || displayLoading || currentValue.length > 0);
    const performSearch = React8.useCallback(
      async (query) => {
        if (!enableLiveSearch || !onSearch || query.length < minSearchLength) {
          setInternalResults([]);
          setLastSearchTerm("");
          return;
        }
        setInternalLoading(true);
        try {
          const results = await onSearch(query);
          setInternalResults(Array.isArray(results) ? results : []);
          setLastSearchTerm(query);
        } catch (error) {
          console.error("Search error:", error);
          setInternalResults([]);
          setLastSearchTerm("");
        } finally {
          setInternalLoading(false);
        }
      },
      [enableLiveSearch, onSearch, minSearchLength]
    );
    React8.useEffect(() => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
      if (currentValue.length >= minSearchLength && enableLiveSearch) {
        searchTimeoutRef.current = setTimeout(() => {
          performSearch(currentValue);
        }, searchDelay);
      } else {
        setInternalResults([]);
      }
      return () => {
        if (searchTimeoutRef.current) {
          clearTimeout(searchTimeoutRef.current);
        }
      };
    }, [
      currentValue,
      minSearchLength,
      enableLiveSearch,
      searchDelay,
      performSearch
    ]);
    const handleValueChange = (newValue) => {
      if (value === void 0) {
        setInternalValue(newValue);
      }
      onValueChange == null ? void 0 : onValueChange(newValue);
    };
    const handleClear = () => {
      const newValue = "";
      if (value === void 0) {
        setInternalValue(newValue);
      }
      onValueChange == null ? void 0 : onValueChange(newValue);
      onClear == null ? void 0 : onClear();
      setInternalResults([]);
      setLastSearchTerm("");
    };
    const handleChange = (e) => {
      handleValueChange(e.target.value);
    };
    const handleResultSelect = (result) => {
      onResultSelect == null ? void 0 : onResultSelect(result);
      if (value === void 0) {
        setInternalValue(result.title);
      }
      onValueChange == null ? void 0 : onValueChange(result.title);
      setIsFocused(false);
      setInternalResults([]);
      setLastSearchTerm("");
    };
    const highlightText = React8.useCallback(
      (text, searchTerm) => {
        if (!enableHighlighting || !searchTerm.trim()) return text;
        const regex = new RegExp(
          `(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
          "gi"
        );
        const parts = text.split(regex);
        return parts.map(
          (part, index) => regex.test(part) ? /* @__PURE__ */ jsx8("mark", { className: cn(highlightClassName), children: part }, index) : part
        );
      },
      [enableHighlighting, highlightClassName]
    );
    const defaultRenderResult = (result) => {
      return /* @__PURE__ */ jsxs7("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx8("div", { className: "font-medium [color:var(--text-primary)] text-sm", children: highlightText(result.title, effectiveSearchTerm) }),
        result.description && /* @__PURE__ */ jsx8("div", { className: "text-xs [color:var(--text-secondary)] mt-1", children: highlightText(result.description, effectiveSearchTerm) }),
        result.category && /* @__PURE__ */ jsx8("div", { className: "text-xs [color:var(--text-tertiary)] mt-1 font-medium uppercase tracking-wide", children: highlightText(result.category, effectiveSearchTerm) })
      ] });
    };
    return /* @__PURE__ */ jsxs7(
      AriaTextField2,
      __spreadProps(__spreadValues({
        className: cn("w-full", className),
        isDisabled
      }, props), {
        children: [
          label && /* @__PURE__ */ jsx8(AriaLabel2, { className: cn(labelVariants2()), children: label }),
          /* @__PURE__ */ jsxs7("div", { className: "relative", children: [
            /* @__PURE__ */ jsx8(
              "div",
              {
                className: cn(
                  "absolute top-1/2 transform left-3 -translate-y-1/2 [color:var(--text-tertiary)] pointer-events-none",
                  size === "sm" && "left-3",
                  size === "md" && "left-3",
                  size === "lg" && "left-4"
                ),
                children: /* @__PURE__ */ jsx8(SearchIcon, { size: size === "sm" ? 14 : size === "lg" ? 18 : 16 })
              }
            ),
            displayLoading && /* @__PURE__ */ jsx8(
              "div",
              {
                className: cn(
                  "absolute top-1/2 transform -translate-y-1/2 [color:var(--text-tertiary)]",
                  size === "lg" ? "right-12" : "right-10"
                ),
                children: /* @__PURE__ */ jsx8(
                  Loader2,
                  {
                    size: size === "sm" ? 12 : size === "lg" ? 16 : 14,
                    className: "animate-spin"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx8(
              AriaInput2,
              {
                ref,
                type: "search",
                className: cn(
                  searchVariants({ size, variant: computedVariant }),
                  showClear && (size === "lg" ? "pr-10" : "pr-9"),
                  displayLoading && !showClear && (size === "lg" ? "pr-16" : "pr-14"),
                  displayLoading && showClear && (size === "lg" ? "pr-20" : "pr-18"),
                  inputClassName
                ),
                placeholder,
                value: currentValue,
                onChange: handleChange,
                onFocus: () => setIsFocused(true),
                onBlur: (e) => {
                  setTimeout(() => setIsFocused(false), 150);
                }
              }
            ),
            showClear && /* @__PURE__ */ jsx8(
              "button",
              {
                type: "button",
                onClick: handleClear,
                className: cn(
                  "absolute top-1/2 transform -translate-y-1/2",
                  "[color:var(--text-tertiary)] hover:[color:var(--text-secondary)]",
                  "transition-colors cursor-pointer p-0.5 rounded",
                  "hover:bg-[var(--bg-secondary)]",
                  size === "lg" ? "right-4" : "right-3"
                ),
                "aria-label": "Clear search",
                children: /* @__PURE__ */ jsx8(X, { size: size === "sm" ? 12 : size === "lg" ? 16 : 14 })
              }
            ),
            shouldShowPopover && /* @__PURE__ */ jsx8("div", { className: cn(popoverVariants()), children: displayLoading && displayResults.length === 0 ? /* @__PURE__ */ jsxs7("div", { className: "px-4 py-3 text-center [color:var(--text-secondary)]", children: [
              /* @__PURE__ */ jsx8(Loader2, { size: 16, className: "animate-spin mx-auto mb-2" }),
              /* @__PURE__ */ jsx8("div", { className: "text-sm", children: "Searching..." })
            ] }) : displayResults.length > 0 ? /* @__PURE__ */ jsx8("div", { children: displayResults.map((result) => /* @__PURE__ */ jsx8(
              "div",
              {
                className: cn(resultItemVariants()),
                onClick: () => handleResultSelect(result),
                onMouseDown: (e) => e.preventDefault(),
                children: renderResult ? renderResult(result) : defaultRenderResult(result)
              },
              result.id
            )) }) : currentValue.length >= minSearchLength ? /* @__PURE__ */ jsx8("div", { className: "px-4 py-3 text-center [color:var(--text-secondary)] text-sm", children: noResultsText }) : null })
          ] }),
          helperText && /* @__PURE__ */ jsx8(AriaText2, { slot: "description", className: cn(helperTextVariants2()), children: helperText })
        ]
      })
    );
  }
);
Search.displayName = "Search";

// src/components/ui/Select/Select.tsx
import React9 from "react";
import {
  ComboBox,
  Input as Input2,
  ListBox,
  ListBoxItem,
  Popover as Popover2,
  Button as Button2
} from "react-aria-components";
import { cva as cva9 } from "class-variance-authority";
import { ChevronDown, Check as Check2 } from "lucide-react";
import { Fragment as Fragment3, jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var selectVariants = cva9(["relative w-full"], {
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
});
var selectTriggerVariants = cva9(
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
);
var selectPopoverVariants = cva9([
  "z-50 min-w-[8rem] overflow-hidden",
  "[background-color:var(--bg-primary)]",
  "[border:1px_solid_var(--border-primary)]",
  "[border-radius:var(--radius-md)]",
  "[box-shadow:var(--shadow-lg)]",
  "data-[entering]:animate-in data-[entering]:fade-in-0 data-[entering]:zoom-in-95",
  "data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95"
]);
var selectItemVariants = cva9([
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
]);
var Select = React9.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, size, options, placeholder = "Select an option..." } = _b, props = __objRest(_b, ["className", "size", "options", "placeholder"]);
    return /* @__PURE__ */ jsx9("div", { className: cn(selectVariants({ size, className })), children: /* @__PURE__ */ jsxs8(ComboBox, __spreadProps(__spreadValues({}, props), { ref, children: [
      /* @__PURE__ */ jsxs8(Button2, { className: cn(selectTriggerVariants({ size })), children: [
        /* @__PURE__ */ jsx9(
          Input2,
          {
            className: "flex-1 bg-transparent outline-none border-0 focus:ring-0 px-0 h-auto placeholder:[color:var(--text-tertiary)] cursor-pointer",
            placeholder,
            readOnly: true
          }
        ),
        /* @__PURE__ */ jsx9(ChevronDown, { className: "h-4 w-4 [color:var(--text-secondary)] shrink-0" })
      ] }),
      /* @__PURE__ */ jsx9(Popover2, { className: cn(selectPopoverVariants()), children: /* @__PURE__ */ jsx9(ListBox, { className: "max-h-60 overflow-auto p-1 font-sans", children: options.map((option) => /* @__PURE__ */ jsx9(
        SelectItem,
        {
          id: option.value,
          textValue: option.label,
          isDisabled: option.disabled,
          children: option.label
        },
        option.value
      )) }) })
    ] })) });
  }
);
Select.displayName = "Select";
var SelectItem = React9.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
    return /* @__PURE__ */ jsx9(
      ListBoxItem,
      __spreadProps(__spreadValues({
        className: ({ isSelected }) => cn(selectItemVariants(), isSelected && "pr-8", className),
        ref
      }, props), {
        children: ({ isSelected }) => /* @__PURE__ */ jsxs8(Fragment3, { children: [
          /* @__PURE__ */ jsx9("span", { className: "flex-1", children }),
          isSelected && /* @__PURE__ */ jsx9("span", { className: "absolute right-2 flex h-4 w-4 items-center justify-center", children: /* @__PURE__ */ jsx9(Check2, { className: "h-3 w-3 [color:var(--text-primary)]" }) })
        ] })
      })
    );
  }
);
SelectItem.displayName = "SelectItem";

// src/components/ui/Switch/Switch.tsx
import React10 from "react";
import {
  Switch as AriaSwitch
} from "react-aria-components";
import { cva as cva10 } from "class-variance-authority";
import { Fragment as Fragment4, jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var switchVariants = cva10(
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
);
var switchTrackVariants = cva10(
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
);
var switchThumbVariants = cva10(
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
);
var getThumbTranslateX = (size, isSelected) => {
  if (!isSelected) return 0;
  switch (size) {
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
};
var Switch = React10.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, size, children, description } = _b, props = __objRest(_b, ["className", "size", "children", "description"]);
    return /* @__PURE__ */ jsx10(
      AriaSwitch,
      __spreadProps(__spreadValues({
        className: cn(switchVariants({ size }), className),
        ref
      }, props), {
        children: ({ isSelected, isDisabled, isHovered, isFocusVisible }) => /* @__PURE__ */ jsxs9(Fragment4, { children: [
          /* @__PURE__ */ jsx10(
            "div",
            {
              className: cn(
                switchTrackVariants({ size }),
                // Base styles
                !isSelected && "[background-color:var(--bg-secondary)] [border-color:var(--border-primary)]",
                // Hover styles
                isHovered && !isSelected && !isDisabled && "[border-color:var(--border-secondary)]",
                // Selected styles
                isSelected && "[background-color:var(--interactive-primary)] [border-color:var(--interactive-primary)]",
                // Selected + hover
                isSelected && isHovered && !isDisabled && "[background-color:var(--interactive-primary-hover)] [border-color:var(--interactive-primary-hover)]",
                // Focus styles
                isFocusVisible && !isDisabled && "focus-ring",
                // Disabled styles
                isDisabled && "opacity-50 cursor-not-allowed"
              ),
              children: /* @__PURE__ */ jsx10(
                "span",
                {
                  className: switchThumbVariants({ size }),
                  style: {
                    transform: `translateX(${getThumbTranslateX(size || "md", isSelected)}px)`,
                    transition: "transform 200ms ease-out"
                  }
                }
              )
            }
          ),
          (children || description) && /* @__PURE__ */ jsxs9("div", { className: cn("flex flex-col", isDisabled && "opacity-50"), children: [
            children && /* @__PURE__ */ jsx10("span", { className: "[color:var(--text-primary)] leading-none", children }),
            description && /* @__PURE__ */ jsx10("span", { className: "text-sm [color:var(--text-tertiary)] mt-1 leading-tight", children: description })
          ] })
        ] })
      })
    );
  }
);
Switch.displayName = "Switch";

// src/components/ui/Tag/Tag.tsx
import React11 from "react";
import { cva as cva11 } from "class-variance-authority";
import { X as X2 } from "lucide-react";
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
var tagVariants = cva11(
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
      removable: false,
      interactive: false
    }
  }
);
var Tag = React11.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant,
      size,
      removable = false,
      onRemove,
      interactive = false,
      leftIcon,
      rightIcon,
      children,
      onClick
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "size",
      "removable",
      "onRemove",
      "interactive",
      "leftIcon",
      "rightIcon",
      "children",
      "onClick"
    ]);
    const handleRemove = (e) => {
      e.stopPropagation();
      onRemove == null ? void 0 : onRemove();
    };
    const isClickable = interactive || !!onClick;
    return /* @__PURE__ */ jsxs10(
      "span",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          tagVariants({ variant, size, removable, interactive: isClickable }),
          className
        ),
        onClick
      }, props), {
        children: [
          leftIcon && /* @__PURE__ */ jsx11("span", { className: "mr-1.5 inline-flex items-center", children: leftIcon }),
          /* @__PURE__ */ jsx11("span", { children }),
          rightIcon && !removable && /* @__PURE__ */ jsx11("span", { className: "ml-1.5 inline-flex items-center", children: rightIcon }),
          removable && /* @__PURE__ */ jsx11(
            "button",
            {
              type: "button",
              onClick: handleRemove,
              className: cn(
                "ml-1.5 inline-flex items-center justify-center rounded-full",
                "hover:[background-color:var(--bg-tertiary)] transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-offset-1",
                size === "sm" && "w-3 h-3",
                size === "md" && "w-4 h-4",
                size === "lg" && "w-5 h-5"
              ),
              "aria-label": "Remove tag",
              children: /* @__PURE__ */ jsx11(
                X2,
                {
                  size: size === "sm" ? 12 : size === "lg" ? 16 : 14,
                  className: "shrink-0 cursor-pointer"
                }
              )
            }
          )
        ]
      })
    );
  }
);
Tag.displayName = "Tag";

// src/components/BrandInitializer.tsx
import { useEffect } from "react";

// src/lib/brands.ts
var strideBrand = {
  id: "stride",
  name: "Stride",
  description: "Default Stride Design System brand with blue primary colors"
};
var coralBrand = {
  id: "coral",
  name: "Coral",
  description: "Coral theme with warm orange-red primary colors and no button radius"
};
var forestBrand = {
  id: "forest",
  name: "Forest",
  description: "Forest theme with natural green primary colors and generous spacing"
};
var runswapBrand = {
  id: "runswap",
  name: "Runswap",
  description: "Runswap theme with purple primary colors"
};
var availableBrands = [
  strideBrand,
  coralBrand,
  forestBrand,
  runswapBrand
];
var getBrandById = (brandId) => {
  return availableBrands.find((brand) => brand.id === brandId);
};
var getDefaultBrand = () => strideBrand;
var applyBrandTheme = (brandId) => {
  const brand = getBrandById(brandId);
  if (!brand) {
    console.warn(`Brand "${brandId}" not found`);
    return;
  }
  const existingBrands = availableBrands.map((b) => `brand-${b.id}`);
  document.documentElement.classList.remove(...existingBrands);
  document.documentElement.classList.add(`brand-${brand.id}`);
  if (typeof window !== "undefined") {
    localStorage.setItem("stride-brand", brandId);
  }
};
var getCurrentBrand = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("stride-brand") || strideBrand.id;
  }
  return strideBrand.id;
};
var initializeBrand = () => {
  const savedBrand = getCurrentBrand();
  applyBrandTheme(savedBrand);
};

// src/components/BrandInitializer.tsx
var BrandInitializer = () => {
  useEffect(() => {
    applyBrandTheme("runswap");
    document.documentElement.classList.add("dark");
  }, []);
  return null;
};

// node_modules/@react-aria/ssr/dist/SSRProvider.mjs
import $670gB$react, { useContext as $670gB$useContext, useState as $670gB$useState, useMemo as $670gB$useMemo, useLayoutEffect as $670gB$useLayoutEffect, useRef as $670gB$useRef } from "react";
var $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
var $b5e257d569688ac6$var$SSRContext = /* @__PURE__ */ (0, $670gB$react).createContext($b5e257d569688ac6$var$defaultContext);
var $b5e257d569688ac6$var$IsSSRContext = /* @__PURE__ */ (0, $670gB$react).createContext(false);
function $b5e257d569688ac6$var$LegacySSRProvider(props) {
  let cur = (0, $670gB$useContext)($b5e257d569688ac6$var$SSRContext);
  let counter = $b5e257d569688ac6$var$useCounter(cur === $b5e257d569688ac6$var$defaultContext);
  let [isSSR, setIsSSR] = (0, $670gB$useState)(true);
  let value = (0, $670gB$useMemo)(() => ({
    // If this is the first SSRProvider, start with an empty string prefix, otherwise
    // append and increment the counter.
    prefix: cur === $b5e257d569688ac6$var$defaultContext ? "" : `${cur.prefix}-${counter}`,
    current: 0
  }), [
    cur,
    counter
  ]);
  if (typeof document !== "undefined")
    (0, $670gB$useLayoutEffect)(() => {
      setIsSSR(false);
    }, []);
  return /* @__PURE__ */ (0, $670gB$react).createElement($b5e257d569688ac6$var$SSRContext.Provider, {
    value
  }, /* @__PURE__ */ (0, $670gB$react).createElement($b5e257d569688ac6$var$IsSSRContext.Provider, {
    value: isSSR
  }, props.children));
}
var $b5e257d569688ac6$var$warnedAboutSSRProvider = false;
function $b5e257d569688ac6$export$9f8ac96af4b1b2ae(props) {
  if (typeof (0, $670gB$react)["useId"] === "function") {
    if (process.env.NODE_ENV !== "test" && process.env.NODE_ENV !== "production" && !$b5e257d569688ac6$var$warnedAboutSSRProvider) {
      console.warn("In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.");
      $b5e257d569688ac6$var$warnedAboutSSRProvider = true;
    }
    return /* @__PURE__ */ (0, $670gB$react).createElement((0, $670gB$react).Fragment, null, props.children);
  }
  return /* @__PURE__ */ (0, $670gB$react).createElement($b5e257d569688ac6$var$LegacySSRProvider, props);
}
var $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
  let ctx = (0, $670gB$useContext)($b5e257d569688ac6$var$SSRContext);
  let ref = (0, $670gB$useRef)(null);
  if (ref.current === null && !isDisabled) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, $670gB$react).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = (0, $670gB$useContext)($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM && process.env.NODE_ENV !== "production") console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix = ctx === $b5e257d569688ac6$var$defaultContext && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${ctx.prefix}`;
  return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = (0, $670gB$react).useId();
  let [didSSR] = (0, $670gB$useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix = didSSR || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix}-${id}`;
}
var $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, $670gB$react)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof (0, $670gB$react)["useSyncExternalStore"] === "function") return (0, $670gB$react)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  return (0, $670gB$useContext)($b5e257d569688ac6$var$IsSSRContext);
}

// src/components/ClientProviders.tsx
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
function ClientProviders({ children }) {
  return /* @__PURE__ */ jsxs11($b5e257d569688ac6$export$9f8ac96af4b1b2ae, { children: [
    /* @__PURE__ */ jsx12(BrandInitializer, {}),
    children
  ] });
}

// src/lib/useBrand.ts
import { useState, useEffect as useEffect2 } from "react";
var useBrand = () => {
  const [currentBrand, setCurrentBrand] = useState(() => {
    if (typeof window !== "undefined") {
      return getCurrentBrand();
    }
    return "stride";
  });
  const setBrand = (brandId) => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("brand-switching");
    }
    applyBrandTheme(brandId);
    setCurrentBrand(brandId);
    setTimeout(() => {
      if (typeof document !== "undefined") {
        document.documentElement.classList.remove("brand-switching");
      }
    }, 50);
  };
  const getCurrentBrandTheme = () => {
    return availableBrands.find((brand) => brand.id === currentBrand);
  };
  useEffect2(() => {
    if (typeof window !== "undefined") {
      const savedBrand = getCurrentBrand();
      if (savedBrand !== currentBrand) {
        setBrand(savedBrand);
      }
    }
  }, []);
  return {
    currentBrand,
    availableBrands,
    setBrand,
    getCurrentBrandTheme
  };
};
var useBrandTheme = () => {
  const { currentBrand, getCurrentBrandTheme } = useBrand();
  const [theme, setTheme] = useState(() => getCurrentBrandTheme());
  useEffect2(() => {
    setTheme(getCurrentBrandTheme());
  }, [currentBrand, getCurrentBrandTheme]);
  return theme;
};

// src/lib/ssr-utils.tsx
import { Fragment as Fragment5, jsx as jsx13 } from "react/jsx-runtime";
var useSSRSafeId = () => {
  const isSSR = $b5e257d569688ac6$export$535bd6ca7f90a273();
  return isSSR;
};
var ClientOnly = ({ children, fallback = null }) => {
  const isSSR = $b5e257d569688ac6$export$535bd6ca7f90a273();
  if (isSSR) {
    return /* @__PURE__ */ jsx13(Fragment5, { children: fallback });
  }
  return /* @__PURE__ */ jsx13(Fragment5, { children });
};
var safeWindow = () => {
  return typeof window !== "undefined" ? window : void 0;
};
var safeLocalStorage = {
  getItem: (key) => {
    if (typeof window === "undefined") return null;
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  },
  setItem: (key, value) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(key, value);
    } catch (e) {
    }
  },
  removeItem: (key) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(key);
    } catch (e) {
    }
  }
};
export {
  Badge,
  BrandInitializer,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  ClientOnly,
  ClientProviders,
  Input,
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  Radio,
  RadioGroup,
  Search,
  Select,
  SelectItem,
  Switch,
  Tag,
  applyBrandTheme,
  availableBrands,
  cn,
  coralBrand,
  forestBrand,
  getBrandById,
  getCurrentBrand,
  getDefaultBrand,
  initializeBrand,
  runswapBrand,
  safeLocalStorage,
  safeWindow,
  strideBrand,
  useBrand,
  useBrandTheme,
  useSSRSafeId
};
//# sourceMappingURL=index.mjs.map