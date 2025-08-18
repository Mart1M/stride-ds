"use client";

import React from "react";
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  type RadioProps as AriaRadioProps,
  type RadioGroupProps as AriaRadioGroupProps,
} from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const radioGroupVariants = cva(["flex gap-3"], {
  variants: {
    orientation: {
      horizontal: "flex-row flex-wrap",
      vertical: "flex-col",
    },
    size: {
      sm: "gap-2 text-xs",
      md: "gap-3 text-sm",
      lg: "gap-4 text-base",
    },
  },
  defaultVariants: {
    orientation: "vertical",
    size: "md",
  },
});

const radioVariants = cva(
  [
    "group flex items-center gap-3 text-sm font-sans cursor-pointer",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "[transition-duration:var(--transition-fast)]",
    "transition-opacity",
  ],
  {
    variants: {
      size: {
        sm: "gap-2 text-sm",
        md: "gap-3 text-base",
        lg: "gap-4 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const radioIndicatorVariants = cva(
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
    "group-data-[disabled]:group-data-[selected]:[border-color:var(--interactive-primary-disabled)]",
  ],
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const radioDotVariants = cva(
  [
    "absolute rounded-full bg-white pointer-events-none",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "opacity-0 group-data-[selected]:opacity-100",
    "transition-opacity duration-150 ease-out",
  ],
  {
    variants: {
      size: {
        sm: "h-1.5 w-1.5",
        md: "h-2 w-2",
        lg: "h-2.5 w-2.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface RadioGroupProps
  extends Omit<AriaRadioGroupProps, "children" | "orientation">,
    VariantProps<typeof radioGroupVariants> {
  children?: React.ReactNode;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  className?: string;
}

export interface RadioProps
  extends Omit<AriaRadioProps, "children">,
    VariantProps<typeof radioVariants> {
  children?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      className,
      orientation,
      size,
      children,
      label,
      description,
      errorMessage,
      ...props
    },
    ref
  ) => {
    return (
      <AriaRadioGroup
        className={cn("flex flex-col gap-3", className)}
        ref={ref}
        {...props}
      >
        {({ isInvalid }) => (
          <>
            {label && (
              <span className="text-sm font-medium [color:var(--text-primary)]">
                {label}
              </span>
            )}
            {description && (
              <span className="text-sm [color:var(--text-secondary)]">
                {description}
              </span>
            )}
            <div className={radioGroupVariants({ orientation, size })}>
              {children}
            </div>
            {errorMessage && (
              <span className="text-sm [color:var(--status-error)]">
                {errorMessage}
              </span>
            )}
          </>
        )}
      </AriaRadioGroup>
    );
  }
);

export const Radio = React.forwardRef<HTMLLabelElement, RadioProps>(
  ({ className, size, children, description, ...props }, ref) => {
    return (
      <AriaRadio
        className={cn(radioVariants({ size }), className)}
        ref={ref}
        {...props}
      >
        {({ isSelected, isDisabled, isHovered, isFocusVisible }) => (
          <>
            <div
              className={cn(
                radioIndicatorVariants({ size }),
                // Base styles
                !isSelected &&
                  "[background-color:var(--bg-primary)] [border-color:var(--border-primary)]",
                // Hover styles
                isHovered &&
                  !isSelected &&
                  !isDisabled &&
                  "[border-color:var(--border-secondary)]",
                // Selected styles
                isSelected &&
                  "[background-color:var(--interactive-primary)] [border-color:var(--interactive-primary)]",
                // Selected + hover
                isSelected &&
                  isHovered &&
                  !isDisabled &&
                  "[background-color:var(--interactive-primary-hover)] [border-color:var(--interactive-primary-hover)]",
                // Focus styles
                isFocusVisible && !isDisabled && "focus-ring",
                // Disabled styles
                isDisabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <span className={radioDotVariants({ size })} />
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
      </AriaRadio>
    );
  }
);

RadioGroup.displayName = "RadioGroup";
Radio.displayName = "Radio";
