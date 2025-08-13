"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const tagVariants = cva(
  [
    "inline-flex items-center font-sans font-medium transition-all",
    "border rounded-md whitespace-nowrap",
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
          "[border-color:var(--border-brand)]",
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
        filled: [
          "[background-color:var(--bg-brand)]",
          "[color:var(--text-inverse)]",
          "border-transparent",
        ],
      },
      size: {
        sm: [
          "[height:var(--tag-height-sm)]",
          "[font-size:var(--font-size-xs)]",
          "px-1",
        ],
        md: [
          "[height:var(--tag-height-md)]",
          "[font-size:var(--font-size-sm)]",
          "px-2",
        ],
        lg: [
          "[height:var(--tag-height-lg)]",
          "[font-size:var(--font-size-md)]",
          "px-3",
        ],
      },
      removable: {
        true: "",
        false: "",
      },
      interactive: {
        true: [
          "cursor-pointer",
          "hover:[background-color:var(--bg-tertiary)]",
          "active:[transform:translateY(1px)]",
        ],
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      removable: false,
      interactive: false,
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  className?: string;
  children?: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
  interactive?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      className,
      variant,
      size,
      removable = false,
      onRemove,
      interactive = false,
      leftIcon,
      rightIcon,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleRemove = (e: React.MouseEvent) => {
      e.stopPropagation();
      onRemove?.();
    };

    const isClickable = interactive || !!onClick;

    return (
      <span
        ref={ref}
        className={cn(
          tagVariants({ variant, size, removable, interactive: isClickable }),
          className
        )}
        onClick={onClick}
        {...props}
      >
        {leftIcon && (
          <span className="mr-1.5 inline-flex items-center">{leftIcon}</span>
        )}

        <span>{children}</span>

        {rightIcon && !removable && (
          <span className="ml-1.5 inline-flex items-center">{rightIcon}</span>
        )}

        {removable && (
          <button
            type="button"
            onClick={handleRemove}
            className={cn(
              "ml-1.5 inline-flex items-center justify-center rounded-full",
              "hover:[background-color:var(--bg-tertiary)] transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-offset-1",
              size === "sm" && "w-3 h-3",
              size === "md" && "w-4 h-4",
              size === "lg" && "w-5 h-5"
            )}
            aria-label="Remove tag"
          >
            <X
              size={size === "sm" ? 12 : size === "lg" ? 16 : 14}
              className="shrink-0 cursor-pointer"
            />
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = "Tag";
