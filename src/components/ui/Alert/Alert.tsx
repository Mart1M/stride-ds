"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

const alertVariants = cva(
  [
    "relative flex gap-3 rounded-lg text-sm font-medium",
    "border transition-all",
    "[border-radius:var(--radius-card)]",
    "[transition-duration:var(--transition-normal)]",
  ],
  {
    variants: {
      variant: {
        info: [
          "bg-blue-50 border-blue-200 text-blue-800",
          "dark:bg-blue-950/50 dark:border-blue-800 dark:text-blue-200",
        ],
        success: [
          "[background-color:var(--status-success-bg)]",
          "[border-color:var(--status-success)]",
          "[color:var(--status-success-text)]",
        ],
        warning: [
          "[background-color:var(--status-warning-bg)]",
          "[border-color:var(--status-warning)]",
          "[color:var(--status-warning-text)]",
        ],
        error: [
          "[background-color:var(--status-danger-bg)]",
          "[border-color:var(--status-danger)]",
          "[color:var(--status-danger-text)]",
        ],
      },
      size: {
        sm: "p-3 text-xs",
        md: "p-4 text-sm",
        lg: "p-5 text-base",
      },
      alignment: {
        start: "items-start",
        center: "items-center",
      },
    },
    defaultVariants: {
      variant: "info",
      size: "md",
      alignment: "start",
    },
  }
);

const alertIconColorVariants = cva([], {
  variants: {
    variant: {
      info: "text-blue-600 dark:text-blue-400",
      success: "[color:var(--status-success)]",
      warning: "[color:var(--status-warning)]",
      error: "[color:var(--status-danger)]",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

const alertIconBaseClass = "flex-shrink-0";

const alertCloseButtonVariants = cva(
  [
    "inline-flex items-center justify-center rounded-md",
    "text-current opacity-70 hover:opacity-100 focus:opacity-100",
    "focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2",
    "transition-opacity cursor-pointer",
    "[transition-duration:var(--transition-fast)]",
  ],
  {
    variants: {
      size: {
        sm: "p-0.5 w-5 h-5",
        md: "p-1 w-6 h-6",
        lg: "p-1 w-6 h-6",
      },
      position: {
        absolute: "absolute",
        inline: "flex-shrink-0",
      },
      absolutePosition: {
        sm: "top-2.5 right-2.5",
        md: "top-1 right-1",
        lg: "top-4 right-4",
      },
    },
    defaultVariants: {
      size: "md",
      position: "absolute",
    },
  }
);

const iconMap = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
};

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode | boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = "info",
      size = "md",
      title,
      children,
      icon = true,
      dismissible = false,
      onDismiss,
      role = "alert",
      ...props
    },
    ref
  ) => {
    const IconComponent = variant ? iconMap[variant] : Info;
    const showIcon = icon !== false;

    const iconSize = size === "sm" ? 16 : size === "md" ? 20 : 24;

    const iconToRender =
      icon === true ? <IconComponent size={iconSize} /> : icon;

    const hasTitle = Boolean(title);
    const hasChildren = Boolean(children);
    const singleElement =
      (hasTitle && !hasChildren) || (!hasTitle && hasChildren);
    const alignment = singleElement ? "center" : "start";

    const closeButtonPosition = singleElement ? "inline" : "absolute";

    return (
      <div
        ref={ref}
        className={cn(alertVariants({ variant, size, alignment }), className)}
        role={role}
        {...props}
      >
        {showIcon && (
          <div
            className={cn(
              alertIconBaseClass,
              alertIconColorVariants({ variant })
            )}
          >
            {iconToRender}
          </div>
        )}

        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="font-semibold mb-1 text-current">{title}</h4>
          )}
          <div className="text-current opacity-90">{children}</div>
        </div>

        {dismissible && (
          <button
            className={cn(
              alertCloseButtonVariants({
                size,
                position: closeButtonPosition,
              }),
              !singleElement &&
                alertCloseButtonVariants({
                  absolutePosition: size,
                })
            )}
            onClick={onDismiss}
            aria-label="Dismiss alert"
          >
            <X className={size === "sm" ? "w-3 h-3" : "w-4 h-4"} />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = "Alert";

export { Alert, type AlertProps };
