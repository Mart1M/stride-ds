"use client";

import React from "react";
import {
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  type DialogProps as AriaDialogProps,
  type DialogTriggerProps as AriaDialogTriggerProps,
  type ModalOverlayProps as AriaModalOverlayProps,
  Heading,
} from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const dialogOverlayVariants = cva([
  "fixed inset-0 z-50 flex items-center justify-center p-4",
  "[background-color:var(--bg-overlay)]",
]);

const dialogVariants = cva(
  [
    "relative flex flex-col gap-4 rounded-lg shadow-lg",
    "[background-color:var(--bg-primary)]",
    "[border:1px_solid_var(--border-primary)]",
    "[color:var(--text-primary)]",
    "focus:outline-none",
  ],
  {
    variants: {
      size: {
        sm: ["max-w-sm w-full"],
        md: ["max-w-md w-full"],
        lg: ["max-w-lg w-full"],
        xl: ["max-w-xl w-full"],
        "2xl": ["max-w-2xl w-full"],
        "3xl": ["max-w-3xl w-full"],
        "4xl": ["max-w-4xl w-full"],
        "5xl": ["max-w-5xl w-full"],
        "6xl": ["max-w-6xl w-full"],
        "7xl": ["max-w-7xl w-full"],
        full: ["w-full h-full max-w-full"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const dialogHeaderVariants = cva([
  "flex items-center justify-between p-6 pb-0",
]);

const dialogBodyVariants = cva(["flex-1 p-6 py-0"]);

const dialogFooterVariants = cva([
  "flex items-center justify-end gap-2 p-6 pt-0",
]);

const dialogTitleVariants = cva([
  "text-lg font-semibold leading-none tracking-tight",
  "[color:var(--text-primary)]",
  "[font-family:var(--font-family-primary)]",
]);

const dialogDescriptionVariants = cva([
  "text-sm",
  "[color:var(--text-secondary)]",
  "[font-family:var(--font-family-secondary)]",
]);

const dialogCloseButtonVariants = cva([
  "rounded-sm opacity-70 transition-opacity hover:opacity-100",
  "focus:outline-none focus:ring-2 focus:ring-offset-2",
  "[--tw-ring-color:var(--border-focus)]",
  "disabled:pointer-events-none",
  "h-6 w-6 p-0 flex items-center justify-center",
  "[color:var(--text-secondary)]",
  "hover:[color:var(--text-primary)]",
  "transition-colors duration-200",
]);

// Main Dialog Components
export interface DialogTriggerProps extends AriaDialogTriggerProps {
  children: React.ReactNode;
}

export const DialogTrigger = React.forwardRef<
  HTMLDivElement,
  DialogTriggerProps
>(({ children, ...props }, ref) => {
  return (
    <AriaDialogTrigger {...props}>
      {children}
    </AriaDialogTrigger>
  );
});

DialogTrigger.displayName = "DialogTrigger";

export interface DialogOverlayProps
  extends AriaModalOverlayProps,
    VariantProps<typeof dialogOverlayVariants> {
  className?: string;
}

export const DialogOverlay = React.forwardRef<
  HTMLDivElement,
  DialogOverlayProps
>(({ className, children, ...props }, ref) => {
  return (
    <AriaModalOverlay
      ref={ref}
      className={cn(dialogOverlayVariants({ className }))}
      {...props}
    >
      <AriaModal>{children}</AriaModal>
    </AriaModalOverlay>
  );
});

DialogOverlay.displayName = "DialogOverlay";

export interface DialogProps
  extends AriaDialogProps,
    VariantProps<typeof dialogVariants> {
  className?: string;
}

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <AriaDialog
        ref={ref}
        className={cn(dialogVariants({ size, className }))}
        {...props}
      />
    );
  }
);

Dialog.displayName = "Dialog";

export interface DialogHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(dialogHeaderVariants({ className }))}
        {...props}
      />
    );
  }
);

DialogHeader.displayName = "DialogHeader";

export interface DialogBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(dialogBodyVariants({ className }))}
        {...props}
      />
    );
  }
);

DialogBody.displayName = "DialogBody";

export interface DialogFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(dialogFooterVariants({ className }))}
        {...props}
      />
    );
  }
);

DialogFooter.displayName = "DialogFooter";

export interface DialogTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

export const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  DialogTitleProps
>(({ className, ...props }, ref) => {
  return (
    <Heading
      ref={ref}
      slot="title"
      className={cn(dialogTitleVariants({ className }))}
      {...props}
    />
  );
});

DialogTitle.displayName = "DialogTitle";

export interface DialogDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(dialogDescriptionVariants({ className }))}
      {...props}
    />
  );
});

DialogDescription.displayName = "DialogDescription";

export interface DialogCloseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const DialogClose = React.forwardRef<
  HTMLButtonElement,
  DialogCloseProps
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      slot="close"
      className={cn(dialogCloseButtonVariants({ className }))}
      aria-label="Close dialog"
      {...props}
    >
      {children || (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
});

DialogClose.displayName = "DialogClose";
