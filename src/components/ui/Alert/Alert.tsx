"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

const alertVariants = cva(
  [
    "relative flex items-start gap-3 rounded-lg text-sm font-medium",
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
    },
    defaultVariants: {
      variant: "info",
      size: "md",
    },
  }
);

const alertIconVariants = cva(["flex-shrink-0"], {
  variants: {
    variant: {
      info: "text-blue-600 dark:text-blue-400",
      success: "[color:var(--status-success)]",
      warning: "[color:var(--status-warning)]",
      error: "[color:var(--status-danger)]",
    },
    size: {
      sm: "w-4 h-4 mt-[1px]", // Alignement avec text-xs
      md: "w-4 h-4 mt-0.5",   // Alignement avec text-sm  
      lg: "w-5 h-5 mt-[1px]", // Alignement avec text-base
    },
  },
  defaultVariants: {
    variant: "info",
    size: "md",
  },
});

const alertCloseButtonVariants = cva(
  [
    "absolute inline-flex items-center justify-center rounded-md",
    "text-current opacity-70 hover:opacity-100 focus:opacity-100",
    "focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2",
    "transition-opacity cursor-pointer",
    "[transition-duration:var(--transition-fast)]",
  ],
  {
    variants: {
      size: {
        sm: "top-2.5 right-2.5 p-0.5 w-5 h-5",
        md: "top-3 right-3 p-1 w-6 h-6",
        lg: "top-4 right-4 p-1 w-6 h-6",
      },
    },
    defaultVariants: {
      size: "md",
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
    const iconToRender = icon === true ? <IconComponent /> : icon;

    return (
      <div
        ref={ref}
        className={cn(alertVariants({ variant, size }), className)}
        role={role}
        {...props}
      >
        {showIcon && (
          <div className={cn(alertIconVariants({ variant, size }))}>
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
            className={cn(alertCloseButtonVariants({ size }))}
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
