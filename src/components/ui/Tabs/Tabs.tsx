"use client";

import React from "react";
import {
  Tabs as AriaTabs,
  TabList as AriaTabList,
  Tab as AriaTab,
  TabPanel as AriaTabPanel,
  type TabsProps as AriaTabsProps,
  type TabListProps as AriaTabListProps,
  type TabProps as AriaTabProps,
  type TabPanelProps as AriaTabPanelProps,
} from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// === TABS VARIANTS ===
const tabsVariants = cva(["w-full"], {
  variants: {
    orientation: {
      horizontal: "flex flex-col",
      vertical: "flex flex-row",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

const tabListVariants = cva(
  [
    "flex font-sans",
    "focus:outline-none",
    "[font-family:var(--font-family-primary)]",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-b",
          "[border-color:var(--border-primary)]",
        ],
        soft: [
          "p-1 rounded-lg",
          "[background-color:var(--bg-secondary)]",
        ],
        outline: [
          "p-1 border rounded-lg",
          "[border-color:var(--border-primary)]",
          "[background-color:var(--bg-primary)]",
        ],
        ghost: [
          // No background or border
        ],
      },
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col min-w-[200px] mr-4",
      },
      size: {
        sm: "gap-1",
        md: "gap-2", 
        lg: "gap-3",
      },
    },
    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
      size: "md",
    },
  }
);

const tabVariants = cva(
  [
    "relative flex items-center justify-center whitespace-nowrap",
    "font-medium transition-all cursor-pointer",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "[--tw-ring-color:var(--border-focus)]",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "[transition-duration:var(--transition-normal)]",
    "[font-family:var(--font-family-primary)]",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-b-2 border-transparent pb-2",
          "[color:var(--text-secondary)]",
          "hover:[color:var(--text-primary)]",
          "selected:border-b-2 selected:[border-color:var(--interactive-primary)]",
          "selected:[color:var(--interactive-primary)]",
        ],
        soft: [
          "rounded-md px-3 py-1.5",
          "[color:var(--text-secondary)]",
          "hover:[background-color:var(--bg-tertiary)]",
          "hover:[color:var(--text-primary)]",
          "selected:[background-color:var(--interactive-primary)]",
          "selected:[color:var(--interactive-primary-text)]",
        ],
        outline: [
          "rounded-md px-3 py-1.5 border",
          "[border-color:transparent]",
          "[color:var(--text-secondary)]",
          "hover:[border-color:var(--border-secondary)]",
          "hover:[color:var(--text-primary)]",
          "selected:[border-color:var(--interactive-primary)]",
          "selected:[background-color:var(--interactive-primary)]",
          "selected:[color:var(--interactive-primary-text)]",
        ],
        ghost: [
          "rounded-md px-3 py-1.5",
          "[color:var(--text-secondary)]",
          "hover:[background-color:var(--bg-secondary)]",
          "hover:[color:var(--text-primary)]",
          "selected:[color:var(--interactive-primary)]",
          "selected:font-semibold",
        ],
      },
      size: {
        sm: [
          "[font-size:var(--font-size-xs)]",
          "h-7 px-2 py-1",
        ],
        md: [
          "[font-size:var(--font-size-sm)]",
          "h-9 px-3 py-2",
        ],
        lg: [
          "[font-size:var(--font-size-md)]",
          "h-11 px-4 py-2.5",
        ],
      },
      orientation: {
        horizontal: "",
        vertical: "w-full justify-start",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      orientation: "horizontal",
    },
  }
);

const tabPanelVariants = cva([
  "mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2",
  "[--tw-ring-color:var(--border-focus)]",
  "[color:var(--text-primary)]",
  "[font-family:var(--font-family-primary)]",
], {
  variants: {
    orientation: {
      horizontal: "mt-4",
      vertical: "mt-0 flex-1",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

// === MAIN TABS COMPONENT ===
export interface TabsProps
  extends AriaTabsProps,
    Omit<VariantProps<typeof tabsVariants>, 'orientation'> {
  className?: string;
  children: React.ReactNode;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, orientation = "horizontal", children, ...props }, ref) => {
    return (
      <AriaTabs
        ref={ref}
        className={cn(tabsVariants({ orientation }), className)}
        orientation={orientation}
        {...props}
      >
        {children}
      </AriaTabs>
    );
  }
);

Tabs.displayName = "Tabs";

// === TAB LIST COMPONENT ===
export interface TabListProps
  extends AriaTabListProps<object>,
    VariantProps<typeof tabListVariants> {
  className?: string;
  children: React.ReactNode;
}

export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  (
    {
      className,
      variant = "default",
      orientation = "horizontal",
      size = "md",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <AriaTabList
        ref={ref}
        className={cn(tabListVariants({ variant, orientation, size }), className)}
        {...props}
      >
        {children}
      </AriaTabList>
    );
  }
);

TabList.displayName = "TabList";

// === TAB COMPONENT ===
export interface TabProps
  extends AriaTabProps,
    VariantProps<typeof tabVariants> {
  className?: string;
  children: React.ReactNode;
}

export const Tab = React.forwardRef<HTMLDivElement, TabProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      orientation = "horizontal",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <AriaTab
        ref={ref}
        className={cn(tabVariants({ variant, size, orientation }), className)}
        {...props}
      >
        {children}
      </AriaTab>
    );
  }
);

Tab.displayName = "Tab";

// === TAB PANEL COMPONENT ===
export interface TabPanelProps
  extends AriaTabPanelProps,
    VariantProps<typeof tabPanelVariants> {
  className?: string;
  children: React.ReactNode;
}

export const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  (
    { className, orientation = "horizontal", children, ...props },
    ref
  ) => {
    return (
      <AriaTabPanel
        ref={ref}
        className={cn(tabPanelVariants({ orientation }), className)}
        {...props}
      >
        {children}
      </AriaTabPanel>
    );
  }
);

TabPanel.displayName = "TabPanel";
