"use client";

import React from "react";
import {
  ComboBox,
  Input,
  ListBox,
  ListBoxItem,
  Popover,
  Button,
  type ComboBoxProps,
  type ListBoxItemProps,
} from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";

const selectVariants = cva(["relative w-full"], {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const selectTriggerVariants = cva(
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
    "focus:[border-color:var(--border-focus)]",
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
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const selectPopoverVariants = cva([
  "z-50 min-w-[8rem] overflow-hidden",
  "[background-color:var(--bg-primary)]",
  "[border:1px_solid_var(--border-primary)]",
  "[border-radius:var(--radius-md)]",
  "[box-shadow:var(--shadow-lg)]",
  "data-[entering]:animate-in data-[entering]:fade-in-0 data-[entering]:zoom-in-95",
  "data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95",
]);

const selectItemVariants = cva([
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
  "transition-colors",
]);

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<ComboBoxProps<SelectOption>, "children">,
    VariantProps<typeof selectVariants> {
  options: SelectOption[];
  placeholder?: string;
  className?: string;
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    { className, size, options, placeholder = "Select an option...", ...props },
    ref
  ) => {
    return (
      <div className={cn(selectVariants({ size, className }))}>
        <ComboBox {...props} ref={ref}>
          <Button className={cn(selectTriggerVariants({ size }))}>
            <Input
              className="flex-1 bg-transparent outline-none border-0 focus:ring-0 px-0 h-auto placeholder:[color:var(--text-tertiary)] cursor-pointer"
              placeholder={placeholder}
              readOnly
            />
            <ChevronDown className="h-4 w-4 [color:var(--text-secondary)] shrink-0" />
          </Button>
          <Popover className={cn(selectPopoverVariants())}>
            <ListBox className="max-h-60 overflow-auto p-1 font-sans">
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  id={option.value}
                  textValue={option.label}
                  isDisabled={option.disabled}
                >
                  {option.label}
                </SelectItem>
              ))}
            </ListBox>
          </Popover>
        </ComboBox>
      </div>
    );
  }
);

Select.displayName = "Select";

export interface SelectItemProps extends ListBoxItemProps {
  children: React.ReactNode;
}

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ListBoxItem
        className={({ isSelected }) =>
          cn(selectItemVariants(), isSelected && "pr-8", className)
        }
        ref={ref}
        {...props}
      >
        {({ isSelected }) => (
          <>
            <span className="flex-1">{children}</span>
            {isSelected && (
              <span className="absolute right-2 flex h-4 w-4 items-center justify-center">
                <Check className="h-3 w-3 [color:var(--text-primary)]" />
              </span>
            )}
          </>
        )}
      </ListBoxItem>
    );
  }
);

SelectItem.displayName = "SelectItem";
