"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { 
  DisclosureGroup, 
  Disclosure, 
  DisclosurePanel, 
  Button as AriaButton,
  type DisclosureGroupProps 
} from "react-aria-components";

const accordionVariants = cva(
  [
    "w-full",
    "divide-y",
    "[border-radius:var(--radius-card)]",
    "border",
    "[border-color:var(--border-primary)]",
    "overflow-hidden"
  ],
  {
    variants: {
      variant: {
        default: "bg-[var(--bg-primary)]",
        ghost: "border-transparent bg-transparent divide-transparent",
        outline: "bg-transparent",
      },
      size: {
        sm: "text-sm",
        md: "text-base", 
        lg: "text-lg",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const accordionItemVariants = cva(
  [
    "group",
    "[&:first-child]:rounded-t-[var(--radius-card)]",
    "[&:last-child]:rounded-b-[var(--radius-card)]",
    "[&:last-child]:border-b-0"
  ],
  {
    variants: {
      variant: {
        default: "",
        ghost: "",
        outline: "",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const accordionTriggerVariants = cva(
  [
    "flex w-full items-center justify-between",
    "text-left font-medium",
    "transition-all",
    "[transition-duration:var(--transition-normal)]",
    "hover:bg-[var(--bg-secondary)]",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-[var(--border-focus)]",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-[var(--bg-primary)]",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "[&[data-pressed]]:bg-[var(--bg-tertiary)]",
    "group-data-[expanded]:bg-[var(--bg-secondary)]"
  ],
  {
    variants: {
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-3 text-base",
        lg: "px-5 py-4 text-lg",
      },
      variant: {
        default: "",
        ghost: "hover:bg-[var(--bg-tertiary)]",
        outline: "hover:bg-[var(--bg-secondary)]",
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

const accordionContentVariants = cva(
  [
    "overflow-hidden",
    "transition-all",
    "[transition-duration:var(--transition-normal)]",
    "data-[entering]:animate-in",
    "data-[entering]:slide-down-from-0",
    "data-[exiting]:animate-out", 
    "data-[exiting]:slide-up-to-0"
  ],
  {
    variants: {
      size: {
        sm: "px-3 pb-2",
        md: "px-4 pb-3", 
        lg: "px-5 pb-4",
      }
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const accordionChevronVariants = cva(
  [
    "h-4 w-4",
    "shrink-0",
    "transition-transform",
    "[transition-duration:var(--transition-normal)]",
    "group-data-[expanded]:rotate-180"
  ]
);

export interface AccordionProps 
  extends Omit<DisclosureGroupProps, "children">,
    VariantProps<typeof accordionVariants> {
  children?: React.ReactNode;
  className?: string;
}

export interface AccordionItemProps {
  children?: React.ReactNode;
  className?: string;
  variant?: VariantProps<typeof accordionItemVariants>["variant"];
}

export interface AccordionTriggerProps {
  children?: React.ReactNode;
  className?: string;
  size?: VariantProps<typeof accordionTriggerVariants>["size"];
  variant?: VariantProps<typeof accordionTriggerVariants>["variant"];
  showChevron?: boolean;
}

export interface AccordionContentProps {
  children?: React.ReactNode;
  className?: string;
  size?: VariantProps<typeof accordionContentVariants>["size"];
}

export const Accordion = React.forwardRef<
  React.ElementRef<typeof DisclosureGroup>,
  AccordionProps
>(({ className, variant, size, children, ...props }, ref) => (
  <DisclosureGroup
    ref={ref}
    className={cn(accordionVariants({ variant, size }), className)}
    {...props}
  >
    {children}
  </DisclosureGroup>
));
Accordion.displayName = "Accordion";

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof Disclosure>,
  AccordionItemProps
>(({ className, variant, children, ...props }, ref) => (
  <Disclosure
    ref={ref}
    className={cn(accordionItemVariants({ variant }), className)}
    {...props}
  >
    {children}
  </Disclosure>
));
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AriaButton>,
  AccordionTriggerProps
>(({ className, size, variant, showChevron = true, children, ...props }, ref) => (
  <AriaButton
    ref={ref}
    slot="trigger"
    className={cn(accordionTriggerVariants({ size, variant }), className)}
    {...props}
  >
    <span className="flex-1 text-left">{children}</span>
    {showChevron && (
      <ChevronDown className={accordionChevronVariants()} />
    )}
  </AriaButton>
));
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof DisclosurePanel>,
  AccordionContentProps
>(({ className, size, children, ...props }, ref) => (
  <DisclosurePanel
    ref={ref}
    className={cn(accordionContentVariants({ size }), className)}
    {...props}
  >
    <div className="text-[var(--text-secondary)]">
      {children}
    </div>
  </DisclosurePanel>
));
AccordionContent.displayName = "AccordionContent";
