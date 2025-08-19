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
  type DisclosureGroupProps,
  type DisclosureProps,
} from "react-aria-components";

// === ACCORDION CONTAINER ===
const accordionVariants = cva(
  [
    "w-full min-w-80 max-w-2xl",
    "rounded-lg",
    "overflow-hidden",
    "transition-all duration-300 ease-out",
  ],
  {
    variants: {
      variant: {
        default: [
          "border border-[var(--border-primary)]",
          "shadow-sm",
          "bg-[var(--bg-primary)]",
          "divide-y divide-[var(--border-primary)]",
        ],
        ghost: ["bg-transparent", "divide-y divide-[var(--border-primary)]"],
        filled: [
          "border border-[var(--border-primary)]",
          "shadow-sm",
          "bg-[var(--bg-secondary)]",
          "divide-y divide-[var(--border-primary)]",
        ],
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

// Get accordion container styles based on variant
const getAccordionStyles = (variant: string) => {
  return {
    fontFamily: "var(--font-family-primary)",
  };
};

// === ACCORDION ITEM ===
const accordionItemVariants = cva(
  ["group transition-all duration-300 ease-out", "w-full"],
  {
    variants: {
      variant: {
        default: ["bg-[var(--bg-primary)]", "hover:bg-[var(--bg-secondary)]"],
        ghost: ["bg-transparent", "hover:bg-[var(--bg-secondary)]"],
        filled: ["bg-[var(--bg-secondary)]", "hover:bg-[var(--bg-tertiary)]"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Get accordion item styles based on variant
const getAccordionItemStyles = (variant: string) => {
  return {
    transition: "var(--brand-transition)",
  };
};

// === ACCORDION TRIGGER ===
const accordionTriggerVariants = cva(
  [
    "flex w-full items-center justify-between font-medium text-left",
    "text-[var(--text-primary)]",
    "focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]",
    "focus:ring-inset",
    "rounded-sm",
    "transition-all duration-300 ease-out",
    "disabled:pointer-events-none disabled:opacity-50 disabled:text-[var(--text-disabled)]",
    "hover:text-[var(--text-primary)]",
    "group-data-[expanded]:text-[var(--text-primary)]",
  ],
  {
    variants: {
      size: {
        sm: "px-4 py-3 text-sm gap-3",
        md: "px-5 py-4 text-base gap-4",
        lg: "px-6 py-5 text-lg gap-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

// Get accordion trigger styles
const getAccordionTriggerStyles = () => {
  return {
    fontFamily: "var(--font-family-primary)",
    fontWeight: "500",
    lineHeight: "1.5",
  };
};

// === ACCORDION CONTENT ===
const accordionContentVariants = cva(
  ["overflow-hidden", "text-[var(--text-secondary)]", "w-full"],
  {
    variants: {
      size: {
        sm: "px-4 py-3 text-sm aria-[hidden=true]:!px-0 aria-[hidden=true]:!py-0",
        md: "px-5 py-4 text-base aria-[hidden=true]:!px-0 aria-[hidden=true]:!py-0",
        lg: "px-6 py-5 text-lg aria-[hidden=true]:!px-0 aria-[hidden=true]:!py-0",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

// Get accordion content styles
const getAccordionContentStyles = () => {
  return {
    fontFamily: "var(--font-family-primary)",
    lineHeight: "1.6",
  };
};

// === ACCORDION ICON ===
const accordionIconVariants = cva(
  [
    "shrink-0",
    "text-[var(--text-tertiary)]",
    "group-hover:text-[var(--text-secondary)]",
    "transform-gpu",
    "transition-all duration-300 ease-out",
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

// Get accordion icon styles
const getAccordionIconStyles = () => {
  return {
    strokeWidth: "1.5",
  };
};

// === TYPE DEFINITIONS ===
export interface AccordionProps
  extends Omit<DisclosureGroupProps, "className">,
    VariantProps<typeof accordionVariants> {
  className?: string;
  children: React.ReactNode;
}

export interface AccordionItemProps
  extends Omit<DisclosureProps, "className">,
    VariantProps<typeof accordionItemVariants> {
  className?: string;
  children: React.ReactNode;
  value?: string;
}

export interface AccordionTriggerProps
  extends VariantProps<typeof accordionTriggerVariants> {
  className?: string;
  children: React.ReactNode;
  icon?: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
    "aria-hidden"?: boolean;
  }>;
  hideIcon?: boolean;
}

export interface AccordionContentProps
  extends VariantProps<typeof accordionContentVariants> {
  className?: string;
  children: React.ReactNode;
}

// === ACCORDION ROOT COMPONENT ===
export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <DisclosureGroup
        ref={ref}
        className={cn(accordionVariants({ variant, size }), className)}
        style={getAccordionStyles(variant || "default")}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === AccordionItem) {
            const typedChild = child as React.ReactElement<AccordionItemProps>;
            return React.cloneElement(typedChild, {
              variant,
              ...(typedChild.props || {}),
            });
          }
          return child;
        })}
      </DisclosureGroup>
    );
  }
);

Accordion.displayName = "Accordion";

// === ACCORDION ITEM COMPONENT ===
export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  AccordionItemProps
>(({ className, variant, children, ...props }, ref) => {
  return (
    <Disclosure
      ref={ref}
      className={cn(accordionItemVariants({ variant }), className)}
      style={getAccordionItemStyles(variant || "default")}
      {...props}
    >
      {children}
    </Disclosure>
  );
});

AccordionItem.displayName = "AccordionItem";

// === ACCORDION TRIGGER COMPONENT ===
export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, size, children, icon, hideIcon = false, ...props }, ref) => {
  const IconComponent = icon || ChevronDown;

  return (
    <AriaButton
      ref={ref}
      slot="trigger"
      className={cn(accordionTriggerVariants({ size }), className)}
      style={getAccordionTriggerStyles()}
      {...props}
    >
      <span className="flex-1 text-left">{children}</span>
      {!hideIcon && (
        <IconComponent
          className={cn(accordionIconVariants({ size }))}
          style={getAccordionIconStyles()}
          aria-hidden={true}
        />
      )}
    </AriaButton>
  );
});

AccordionTrigger.displayName = "AccordionTrigger";

// === ACCORDION CONTENT COMPONENT ===
export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, size, children, ...props }, ref) => {
  return (
    <DisclosurePanel
      ref={ref}
      className={cn(accordionContentVariants({ size }), className)}
      style={getAccordionContentStyles()}
      {...props}
    >
      {children}
    </DisclosurePanel>
  );
});

AccordionContent.displayName = "AccordionContent";

// === COMPOUND COMPONENT ===
export const AccordionComponent = Object.assign(Accordion, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});
