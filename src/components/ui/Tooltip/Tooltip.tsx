"use client";

import React from "react";
import {
  Tooltip as AriaTooltip,
  TooltipTrigger as AriaTooltipTrigger,
  type TooltipProps as AriaTooltipProps,
} from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// === TOOLTIP VARIANTS ===
const tooltipVariants = cva(
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
    "opacity-0 scale-95",
    "data-[entering]:opacity-100 data-[entering]:scale-100",
    "data-[exiting]:opacity-0 data-[exiting]:scale-95",
    "transition-all duration-200 ease-out",
  ],
  {
    variants: {
      variant: {
        default: [
          "[background-color:var(--bg-inverse)]",
          "[color:var(--text-inverse)]",
          "[border-color:var(--border-strong)]",
        ],
        primary: [
          "[background-color:var(--interactive-primary)]",
          "[color:var(--interactive-primary-text)]",
          "[border-color:var(--interactive-primary)]",
        ],
        secondary: [
          "[background-color:var(--bg-secondary)]",
          "[color:var(--text-primary)]",
          "[border-color:var(--border-primary)]",
        ],
        success: [
          "[background-color:var(--status-success)]",
          "[color:var(--status-success-text)]",
          "[border-color:var(--status-success)]",
        ],
        warning: [
          "[background-color:var(--status-warning)]",
          "[color:var(--status-warning-text)]",
          "[border-color:var(--status-warning)]",
        ],
        danger: [
          "[background-color:var(--status-danger)]",
          "[color:var(--status-danger-text)]",
          "[border-color:var(--status-danger)]",
        ],
      },
      size: {
        sm: ["px-2 py-1 text-xs", "max-w-48"],
        md: ["px-3 py-2 text-sm", "max-w-xs"],
        lg: ["px-4 py-3 text-base", "max-w-sm"],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

// === TOOLTIP TRIGGER COMPONENT ===
export interface TooltipTriggerProps {
  children: React.ReactNode;
  delay?: number;
  isDisabled?: boolean;
}

export const TooltipTrigger = ({ children, ...props }: TooltipTriggerProps) => {
  return (
    <AriaTooltipTrigger {...props}>
      {children}
    </AriaTooltipTrigger>
  );
};

TooltipTrigger.displayName = "TooltipTrigger";

// === TOOLTIP CONTENT COMPONENT ===
export interface TooltipProps
  extends AriaTooltipProps,
    VariantProps<typeof tooltipVariants> {
  className?: string;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <AriaTooltip
        ref={ref}
        className={cn(tooltipVariants({ variant, size }), className)}
        offset={8}
        {...props}
      />
    );
  }
);

Tooltip.displayName = "Tooltip";

// === COMPOUND COMPONENT EXPORT ===
export interface TooltipCompoundProps {
  content: React.ReactNode;
  children: React.ReactNode;
  variant?: VariantProps<typeof tooltipVariants>["variant"];
  size?: VariantProps<typeof tooltipVariants>["size"];
  className?: string;
  delay?: number;
  placement?: "top" | "bottom" | "left" | "right" | "top start" | "top end" | "bottom start" | "bottom end";
  isDisabled?: boolean;
}

export const TooltipWrapper = React.forwardRef<
  HTMLDivElement,
  TooltipCompoundProps
>(({ content, children, variant, size, className, delay = 700, placement = "top", isDisabled = false, ...props }, ref) => {
  return (
    <TooltipTrigger isDisabled={isDisabled} delay={delay}>
      {children}
      <Tooltip
        ref={ref}
        variant={variant}
        size={size}
        className={className}
        placement={placement}
        {...props}
      >
        {content}
      </Tooltip>
    </TooltipTrigger>
  );
});

TooltipWrapper.displayName = "TooltipWrapper";
