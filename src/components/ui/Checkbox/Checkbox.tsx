"use client";

import React from "react";
import {
  Checkbox as AriaCheckbox,
  type CheckboxProps as AriaCheckboxProps,
} from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Check, Minus } from "lucide-react";

const checkboxVariants = cva(
  [
    "group flex items-center gap-3 text-md font-sans cursor-pointer",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "[transition-duration:var(--transition-fast)]",
    "transition-opacity",
  ],
  {
    variants: {
      size: {
        sm: "gap-2 text-sm",
        md: "gap-3 text-md",
        lg: "gap-4 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const checkboxBoxVariants = cva(
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
    "group-data-[disabled]:group-data-[selected]:[background-color:var(--bg-brand)]",
  ],
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-7 w-7",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface CheckboxProps
  extends Omit<AriaCheckboxProps, "children">,
    VariantProps<typeof checkboxVariants> {
  children?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  ({ className, size, children, description, ...props }, ref) => {
    return (
      <AriaCheckbox
        className={cn(checkboxVariants({ size }), className)}
        ref={ref}
        {...props}
      >
        {({
          isSelected,
          isIndeterminate,
          isDisabled,
          isHovered,
          isFocusVisible,
        }) => (
          <>
            <div
              className={cn(
                checkboxBoxVariants({ size }),
                // Base styles
                !isSelected &&
                  !isIndeterminate &&
                  "[border-color:var(--border-primary)] [background-color:var(--bg-primary)]",
                // Hover styles
                isHovered &&
                  !isSelected &&
                  !isIndeterminate &&
                  !isDisabled &&
                  "[border-color:var(--border-secondary)]",
                // Selected/Indeterminate styles
                (isSelected || isIndeterminate) &&
                  "[background-color:var(--interactive-primary)] [border-color:var(--interactive-primary)]",
                // Selected + hover
                (isSelected || isIndeterminate) &&
                  isHovered &&
                  !isDisabled &&
                  "[background-color:var(--interactive-primary-hover)] [border-color:var(--interactive-primary-hover)]",
                // Focus styles
                isFocusVisible && !isDisabled && "focus-ring",
                // Disabled styles - simple opacity
                isDisabled && "opacity-50 cursor-not-allowed"
              )}
            >
              {isIndeterminate ? (
                <Minus
                  strokeWidth={4}
                  className={cn(
                    "text-white",
                    isSelected || isIndeterminate ? "opacity-100" : "opacity-0",
                    size === "sm" && "h-2.5 w-2.5",
                    size === "md" && "h-4 w-4",
                    size === "lg" && "h-5 w-5"
                  )}
                />
              ) : (
                <Check
                  strokeWidth={4}
                  className={cn(
                    "text-white",
                    isSelected ? "opacity-100" : "opacity-0",
                    size === "sm" && "h-2.5 w-2.5",
                    size === "md" && "h-4 w-4",
                    size === "lg" && "h-5 w-5"
                  )}
                />
              )}
            </div>
            {(children || description) && (
              <div className={cn("flex flex-col", isDisabled && "opacity-50")}>
                {children && (
                  <span className="[color:var(--text-primary)] leading-none">
                    {children}
                  </span>
                )}
                {description && (
                  <span className="text-sm [color:var(--text-tertiary)] mt-1 leading-tight">
                    {description}
                  </span>
                )}
              </div>
            )}
          </>
        )}
      </AriaCheckbox>
    );
  }
);

Checkbox.displayName = "Checkbox";
