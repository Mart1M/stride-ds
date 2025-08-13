"use client";

import React from "react";
import {
  Switch as AriaSwitch,
  type SwitchProps as AriaSwitchProps,
} from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const switchVariants = cva(
  [
    "group flex items-center gap-3 text-sm font-sans cursor-pointer",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "[transition-duration:var(--transition-fast)]",
    "transition-opacity",
  ],
  {
    variants: {
      size: {
        sm: "gap-2 text-xs",
        md: "gap-3 text-sm",
        lg: "gap-4 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const switchTrackVariants = cva(
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
    "group-data-[disabled]:group-data-[selected]:[border-color:var(--interactive-primary-disabled)]",
  ],
  {
    variants: {
      size: {
        sm: "h-5 w-9 p-0.5",
        md: "h-6 w-11 p-0.5",
        lg: "h-7 w-13 p-0.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const switchThumbVariants = cva(
  [
    "absolute block rounded-full bg-white shadow-sm pointer-events-none",
    "top-0 left-0",
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

// Helper function to get translate distance for smooth animation
const getThumbTranslateX = (size: "sm" | "md" | "lg", isSelected: boolean) => {
  if (!isSelected) return 0;

  switch (size) {
    case "sm":
      return 16; // 36px track - 16px thumb - 4px padding = 16px travel
    case "md":
      return 20; // 44px track - 20px thumb - 4px padding = 20px travel
    case "lg":
      return 24; // 52px track - 24px thumb - 4px padding = 24px travel
    default:
      return 20;
  }
};

export interface SwitchProps
  extends Omit<AriaSwitchProps, "children">,
    VariantProps<typeof switchVariants> {
  children?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

export const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>(
  ({ className, size, children, description, ...props }, ref) => {
    return (
      <AriaSwitch
        className={cn(switchVariants({ size }), className)}
        ref={ref}
        {...props}
      >
        {({ isSelected, isDisabled, isHovered, isFocusVisible }) => (
          <>
            <div
              className={cn(
                switchTrackVariants({ size }),
                // Base styles
                !isSelected &&
                  "[background-color:var(--bg-secondary)] [border-color:var(--border-primary)]",
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
              <span
                className={switchThumbVariants({ size })}
                style={{
                  transform: `translateX(${getThumbTranslateX(size || "md", isSelected)}px)`,
                  transition: "transform 200ms ease-out",
                }}
              />
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
      </AriaSwitch>
    );
  }
);

Switch.displayName = "Switch";
