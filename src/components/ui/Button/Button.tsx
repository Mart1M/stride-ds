"use client";

import React from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium font-sans cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "focus-visible:[--tw-ring-color:var(--border-focus)]",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:active:transform-none",
    "transition-all",
    // Using semantic tokens
    "[transition-duration:var(--transition-normal)]",
    "[border-radius:var(--radius-button)]",
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
          "disabled:[color:var(--text-disabled)]",
        ],
        secondary: [
          "[background-color:var(--interactive-secondary)]",
          "[color:var(--text-primary)]",
          "[border:1px_solid_var(--border-primary)]",
          "hover:[background-color:var(--interactive-secondary-hover)]",
          "active:[background-color:var(--interactive-secondary-active)]",
          "active:[transform:translateY(1px)]",
          "active:[box-shadow:var(--shadow-skeuomorphic)]",
          "disabled:[background-color:var(--interactive-secondary-disabled)]",
        ],
        ghost: [
          "[background-color:var(--interactive-ghost)]",
          "[color:var(--text-secondary)]",
          "hover:[background-color:var(--interactive-ghost-hover)]",
          "hover:[color:var(--text-primary)]",
          "active:[background-color:var(--interactive-ghost-active)]",
          "active:[transform:translateY(1px)]",
          "active:[box-shadow:var(--shadow-skeuomorphic)]",
          "disabled:[background-color:var(--interactive-ghost-disabled)]",
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
          "disabled:[color:var(--text-disabled)]",
        ],
      },
      size: {
        sm: [
          "[height:var(--button-height-sm)]",
          "[padding:var(--button-padding-sm)]",
          "[font-size:var(--font-size-xs)]",
        ],
        md: [
          "[height:var(--button-height-md)]",
          "[padding:var(--button-padding-md)]",
          "[font-size:var(--font-size-sm)]",
        ],
        lg: [
          "[height:var(--button-height-lg)]",
          "[padding:var(--button-padding-lg)]",
          "[font-size:var(--font-size-md)]",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends AriaButtonProps,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, leftIcon, rightIcon, children, ...props },
    ref
  ) => {
    return (
      <AriaButton
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {children && <span className="flex-1">{children}</span>}
        {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </AriaButton>
    );
  }
);

Button.displayName = "Button";
