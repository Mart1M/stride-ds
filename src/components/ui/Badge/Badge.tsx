"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center font-sans font-medium transition-all",
    "border rounded-full whitespace-nowrap text-center",
    // Using semantic tokens
    "[transition-duration:var(--transition-normal)]",
    "[font-weight:var(--font-weight-medium)]",
  ],
  {
    variants: {
      variant: {
        default: [
          "[background-color:var(--bg-secondary)]",
          "[color:var(--text-primary)]",
          "[border-color:var(--border-primary)]",
        ],
        primary: [
          "[background-color:var(--bg-brand-muted)]",
          "[color:var(--text-brand)]",
          "[border-color:var(--border-brand-muted)]",
        ],
        secondary: [
          "[background-color:var(--bg-tertiary)]",
          "[color:var(--text-secondary)]",
          "[border-color:var(--border-secondary)]",
        ],
        success: [
          "[background-color:var(--status-success-bg)]",
          "[color:var(--status-success-text)]",
          "[border-color:var(--status-success)]",
        ],
        warning: [
          "[background-color:var(--status-warning-bg)]",
          "[color:var(--status-warning-text)]",
          "[border-color:var(--status-warning)]",
        ],
        danger: [
          "[background-color:var(--status-danger-bg)]",
          "[color:var(--status-danger-text)]",
          "[border-color:var(--status-danger)]",
        ],
        outline: [
          "bg-transparent",
          "[color:var(--text-primary)]",
          "[border-color:var(--border-primary)]",
        ],
      },
      size: {
        sm: [
          "[height:var(--badge-height-sm)]",
          "[font-size:var(--font-size-xs)]",
          "px-2",
        ],
        md: [
          "[height:var(--badge-height-md)]",
          "[font-size:var(--font-size-sm)]",
          "px-3",
        ],
        lg: [
          "[height:var(--badge-height-lg)]",
          "[font-size:var(--font-size-md)]",
          "px-4",
        ],
      },
      dot: {
        true: "pl-1.5",
        false: "",
      },
      numeric: {
        true: "min-w-[1.25rem] aspect-square justify-center items-center flex-shrink-0",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      dot: false,
      numeric: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  className?: string;
  children?: React.ReactNode;
  dot?: boolean;
  dotColor?: string;
  numeric?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { className, variant, size, dot, dotColor, numeric, children, ...props },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          badgeVariants({ variant, size, dot, numeric }),
          className
        )}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              "inline-block w-1.5 h-1.5 rounded-full mr-1.5",
              dotColor
                ? `bg-[${dotColor}]`
                : "[background-color:var(--status-success)]"
            )}
          />
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
