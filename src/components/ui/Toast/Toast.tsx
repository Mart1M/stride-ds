"use client";

import React from "react";
import {
  Button,
  Text,
  UNSTABLE_Toast as AriaToast,
  UNSTABLE_ToastContent as AriaToastContent,
  UNSTABLE_ToastQueue as AriaToastQueue,
  UNSTABLE_ToastRegion as AriaToastRegion,
  type ToastProps as AriaToastProps,
  type ToastRegionProps as AriaToastRegionProps,
} from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";

// === TOAST TYPES ===
export interface ToastContent {
  title?: string;
  description: string;
  variant?: "success" | "warning" | "error" | "info" | "default";
  action?: {
    label: string;
    onClick: () => void;
  };
}

// Create a global ToastQueue
export const toastQueue = new AriaToastQueue<ToastContent>();

// === TOAST STYLES ===
const toastVariants = cva(
  [
    "group pointer-events-auto relative flex w-full items-center gap-3 overflow-hidden rounded-md p-4 shadow-lg",
    "border backdrop-blur-sm",
    "[font-family:var(--font-family-primary)]",
    // Base animations - Default slide in from right
    "data-[entering]:toast-slide-in-right",
    "data-[exiting]:toast-slide-out-right",
    // Transform origin for better animation
    "origin-center",
    // Smooth transitions for hover/focus states
    "transition-all duration-200 ease-out",
    // Hover effects with subtle animation
    "hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1",
    // Focus effects for accessibility
    "focus-within:ring-2 focus-within:ring-offset-2",
    "[&:focus-within]:[--tw-ring-color:var(--border-focus)]",
    // Micro-interaction: gentle glow effect
    "relative before:absolute before:inset-0 before:rounded-md before:opacity-0 before:transition-opacity",
    "before:[background:linear-gradient(135deg,rgba(255,255,255,0.1),transparent)]",
    "hover:before:opacity-100",
  ],
  {
    variants: {
      variant: {
        default: [
          "[background-color:var(--bg-primary)]",
          "[color:var(--text-primary)]",
          "[border-color:var(--border-primary)]",
        ],
        success: [
          "[background-color:var(--status-success-bg)]",
          "[color:var(--status-success-text)]",
          "[border-color:var(--status-success)]",
          // Success-specific entrance with checkmark effect
          "data-[entering]:duration-600",
          "border-l-4 border-l-[var(--status-success)]",
        ],
        warning: [
          "[background-color:var(--status-warning-bg)]",
          "[color:var(--status-warning-text)]",
          "[border-color:var(--status-warning)]",
          // Warning-specific gentle attention animation
          "border-l-4 border-l-[var(--status-warning)]",
          "data-[entering]:animate-[wiggle_1s_ease-in-out_1]",
        ],
        error: [
          "[background-color:var(--status-danger-bg)]",
          "[color:var(--status-danger-text)]",
          "[border-color:var(--status-danger)]",
          // Error-specific urgent attention animation
          "border-l-4 border-l-[var(--status-danger)]",
          "data-[entering]:animate-[shake_0.82s_cubic-bezier(.36,.07,.19,.97)_1]",
        ],
        info: [
          "[background-color:var(--bg-secondary)]",
          "[color:var(--text-primary)]",
          "[border-color:var(--border-focus)]",
        ],
      },
      position: {
        "top-right": [
          "origin-top-right",
          "data-[entering]:toast-slide-in-right",
          "data-[exiting]:toast-slide-out-right",
        ],
        "top-left": [
          "origin-top-left",
          "data-[entering]:toast-slide-in-left",
          "data-[exiting]:toast-slide-out-left",
        ],
        "bottom-right": [
          "origin-bottom-right",
          "data-[entering]:toast-slide-in-right",
          "data-[exiting]:toast-slide-out-right",
        ],
        "bottom-left": [
          "origin-bottom-left",
          "data-[entering]:toast-slide-in-left",
          "data-[exiting]:toast-slide-out-left",
        ],
        "top-center": [
          "origin-top",
          "data-[entering]:toast-slide-in-top",
          "data-[exiting]:toast-slide-out-top",
        ],
        "bottom-center": [
          "origin-bottom",
          "data-[entering]:toast-slide-in-bottom",
          "data-[exiting]:toast-slide-out-bottom",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
      position: "top-right",
    },
  }
);

const toastRegionVariants = cva(
  [
    "pointer-events-none fixed z-50 flex max-h-screen gap-2 p-4",
    "focus:outline-none",
    "[&[data-focus-visible]]:outline-2 [&[data-focus-visible]]:outline-offset-2",
    "[&[data-focus-visible]]:[outline-color:var(--border-focus)]",
  ],
  {
    variants: {
      position: {
        "top-right": "top-0 right-0 flex-col-reverse w-full sm:max-w-sm",
        "top-left": "top-0 left-0 flex-col-reverse w-full sm:max-w-sm",
        "bottom-right": "bottom-0 right-0 flex-col w-full sm:max-w-sm",
        "bottom-left": "bottom-0 left-0 flex-col w-full sm:max-w-sm",
        "top-center":
          "top-0 left-1/2 -translate-x-1/2 flex-col-reverse w-full sm:max-w-sm",
        "bottom-center":
          "bottom-0 left-1/2 -translate-x-1/2 flex-col w-full sm:max-w-sm",
      },
    },
    defaultVariants: {
      position: "top-right",
    },
  }
);

// === TOAST ICON MAPPING ===
const toastIcons = {
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
  info: Info,
  default: undefined,
};

// === TOAST COMPONENT ===
export interface ToastProps
  extends AriaToastProps<ToastContent>,
    VariantProps<typeof toastVariants> {
  className?: string;
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    { variant = "default", position = "top-right", className, ...props },
    ref
  ) => {
    return (
      <AriaToast
        ref={ref}
        className={cn(toastVariants({ variant, position }), className)}
        {...props}
      />
    );
  }
);

Toast.displayName = "Toast";

// === TOAST CONTENT COMPONENT ===
export interface ToastContentProps {
  toast: { content: ToastContent };
  showDismiss?: boolean;
  className?: string;
}

export const ToastContent = React.forwardRef<HTMLDivElement, ToastContentProps>(
  ({ toast, showDismiss = true, className }, ref) => {
    const { title, description, variant = "default", action } = toast.content;
    const IconComponent = toastIcons[variant];

    return (
      <>
        <AriaToastContent
          ref={ref}
          className={cn("flex items-center gap-3 flex-1", className)}
        >
          {/* Icon */}
          {IconComponent && (
            <IconComponent
              className="h-5 w-5 flex-shrink-0"
              style={{
                color:
                  variant === "default"
                    ? "var(--text-secondary)"
                    : "currentColor",
              }}
            />
          )}

          {/* Content */}
          <div className="flex-1 space-y-1">
            {title && (
              <Text slot="title" className="text-sm font-medium leading-none">
                {title}
              </Text>
            )}
            <Text slot="description" className="text-sm opacity-90">
              {description}
            </Text>
          </div>
        </AriaToastContent>

        {/* Action Button */}
        {action && (
          <Button
            onPress={action.onClick}
            className={cn(
              "inline-flex h-8 shrink-0 items-center justify-center rounded-md px-3 text-xs font-medium",
              "transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
              variant === "default" && [
                "[background-color:var(--interactive-secondary)]",
                "[color:var(--text-primary)]",
                "hover:[background-color:var(--interactive-secondary-hover)]",
                "[--tw-ring-color:var(--border-focus)]",
              ],
              variant === "success" && [
                "[background-color:var(--status-success)]",
                "[color:var(--text-inverse)]",
                "hover:[background-color:var(--status-success-hover)]",
                "[--tw-ring-color:var(--status-success)]",
              ],
              variant === "warning" && [
                "[background-color:var(--status-warning)]",
                "[color:var(--text-inverse)]",
                "hover:[background-color:var(--status-warning-hover)]",
                "[--tw-ring-color:var(--status-warning)]",
              ],
              variant === "error" && [
                "[background-color:var(--status-danger)]",
                "[color:var(--text-inverse)]",
                "hover:[background-color:var(--status-danger-hover)]",
                "[--tw-ring-color:var(--status-danger)]",
              ],
              variant === "info" && [
                "[background-color:var(--interactive-primary)]",
                "[color:var(--interactive-primary-text)]",
                "hover:[background-color:var(--interactive-primary-hover)]",
                "[--tw-ring-color:var(--border-focus)]",
              ]
            )}
          >
            {action.label}
          </Button>
        )}

        {/* Dismiss Button */}
        {showDismiss && (
          <Button
            slot="close"
            className={cn(
              "absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-md",
              "opacity-70 transition-opacity hover:opacity-100",
              "focus:outline-none focus:ring-2 focus:ring-offset-2",
              "[--tw-ring-color:var(--border-focus)]"
            )}
            aria-label="Dismiss notification"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </>
    );
  }
);

ToastContent.displayName = "ToastContent";

// === TOAST REGION ===
export interface ToastRegionProps
  extends Omit<AriaToastRegionProps<ToastContent>, "queue" | "children">,
    VariantProps<typeof toastRegionVariants> {
  className?: string;
}

export const ToastRegion = React.forwardRef<HTMLDivElement, ToastRegionProps>(
  ({ position = "top-right", className, ...props }, ref) => {
    return (
      <AriaToastRegion
        ref={ref}
        queue={toastQueue}
        className={cn(toastRegionVariants({ position }), className)}
        {...props}
      >
        {({ toast }) => (
          <Toast
            toast={toast}
            variant={toast.content.variant}
            position={position}
          >
            <ToastContent toast={toast} />
          </Toast>
        )}
      </AriaToastRegion>
    );
  }
);

ToastRegion.displayName = "ToastRegion";

// === HELPER FUNCTIONS FOR EASY USAGE ===
export const toast = {
  success: (
    description: string,
    options?: Partial<Omit<ToastContent, "variant" | "description">> & {
      timeout?: number;
    }
  ) => {
    const { timeout = 5000, ...content } = options || {};
    return toastQueue.add(
      { ...content, description, variant: "success" },
      { timeout }
    );
  },

  error: (
    description: string,
    options?: Partial<Omit<ToastContent, "variant" | "description">> & {
      timeout?: number;
    }
  ) => {
    const { timeout = 5000, ...content } = options || {};
    return toastQueue.add(
      { ...content, description, variant: "error" },
      { timeout }
    );
  },

  warning: (
    description: string,
    options?: Partial<Omit<ToastContent, "variant" | "description">> & {
      timeout?: number;
    }
  ) => {
    const { timeout = 5000, ...content } = options || {};
    return toastQueue.add(
      { ...content, description, variant: "warning" },
      { timeout }
    );
  },

  info: (
    description: string,
    options?: Partial<Omit<ToastContent, "variant" | "description">> & {
      timeout?: number;
    }
  ) => {
    const { timeout = 5000, ...content } = options || {};
    return toastQueue.add(
      { ...content, description, variant: "info" },
      { timeout }
    );
  },

  default: (
    description: string,
    options?: Partial<Omit<ToastContent, "variant" | "description">> & {
      timeout?: number;
    }
  ) => {
    const { timeout = 5000, ...content } = options || {};
    return toastQueue.add(
      { ...content, description, variant: "default" },
      { timeout }
    );
  },

  // Utility methods
  close: (key: string) => toastQueue.close(key),
  clear: () => toastQueue.clear(),
  pauseAll: () => toastQueue.pauseAll(),
  resumeAll: () => toastQueue.resumeAll(),
};

// === LEGACY COMPATIBILITY ===
// For backwards compatibility with existing code
export const useToastHelpers = () => toast;
export const ToastProvider = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);
export const ToastContainer = ToastRegion; // Alias for backwards compatibility
