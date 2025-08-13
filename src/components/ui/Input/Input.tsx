"use client";

import React from "react";
import {
  Input as AriaInput,
  Label as AriaLabel,
  Text as AriaText,
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps,
} from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  [
    "w-full px-3 font-sans border rounded-full transition-all",
    "focus-ring disabled:cursor-not-allowed disabled:opacity-50",
    // Using semantic tokens
    "[transition-duration:var(--transition-normal)]",
    "[border-radius:var(--radius-full)]",
    "[background-color:var(--bg-primary)]",
    "[color:var(--text-primary)]",
    "[border-color:var(--border-primary)]",
    "placeholder:[color:var(--text-tertiary)]",
  ],
  {
    variants: {
      size: {
        sm: [
          "[height:var(--input-height-sm)]",
          "[font-size:var(--font-size-xs)]",
          "px-3",
        ],
        md: [
          "[height:var(--input-height-md)]",
          "[font-size:var(--font-size-sm)]",
          "px-3",
        ],
        lg: [
          "[height:var(--input-height-lg)]",
          "[font-size:var(--font-size-md)]",
          "px-4",
        ],
      },
      variant: {
        default: "",
        error: [
          "[border-color:var(--status-danger)]",
          "focus-ring-danger",
          "focus:[border-color:var(--status-danger)]",
        ],
        success: [
          "[border-color:var(--status-success)]",
          "focus-ring-success",
          "focus:[border-color:var(--status-success)]",
        ],
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

const labelVariants = cva([
  "block font-medium mb-1 ml-2",
  "[color:var(--text-primary)]",
  "[font-size:var(--font-size-sm)]",
  "[font-weight:var(--font-weight-medium)]",
]);

const helperTextVariants = cva(
  ["mt-1 text-sm ml-2", "[font-size:var(--font-size-xs)]"],
  {
    variants: {
      variant: {
        default: "[color:var(--text-secondary)]",
        error: "[color:var(--status-danger-text)]",
        success: "[color:var(--status-success-text)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends Omit<AriaTextFieldProps, "children">,
    VariantProps<typeof inputVariants> {
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  className?: string;
  inputClassName?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
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
      isDisabled,
      ...props
    },
    ref
  ) => {
    // Determine variant based on error state
    const computedVariant = errorMessage ? "error" : variant;
    const displayHelperText = errorMessage || helperText;
    const helperVariant = errorMessage ? "error" : "default";

    return (
      <AriaTextField
        className={cn("w-full", className)}
        isRequired={isRequired}
        isDisabled={isDisabled}
        {...props}
      >
        {label && (
          <AriaLabel className={cn(labelVariants())}>
            {label}
            {isRequired && (
              <span className="[color:var(--status-danger)] ml-1">*</span>
            )}
          </AriaLabel>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 [color:var(--text-tertiary)] pointer-events-none">
              {leftIcon}
            </div>
          )}

          <AriaInput
            ref={ref}
            className={cn(
              inputVariants({ size, variant: computedVariant }),
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              inputClassName
            )}
            placeholder={placeholder}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 [color:var(--text-tertiary)] pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>

        {displayHelperText && (
          <AriaText
            slot={errorMessage ? "errorMessage" : "description"}
            className={cn(helperTextVariants({ variant: helperVariant }))}
          >
            {displayHelperText}
          </AriaText>
        )}
      </AriaTextField>
    );
  }
);

Input.displayName = "Input";
