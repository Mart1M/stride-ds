"use client";

import React, { createContext, useContext } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Context pour partager la taille de la card et détecter le footer
const CardContext = createContext<{
  size: "sm" | "md" | "lg";
  hasFooter: boolean;
  setHasFooter: (hasFooter: boolean) => void;
}>({
  size: "md",
  hasFooter: false,
  setHasFooter: () => {},
});

const cardVariants = cva(
  [
    "border font-sans transition-all flex flex-col",
    // Using semantic tokens
    "[border-radius:var(--card-radius)]",
    "[background-color:var(--bg-primary)]",
    "[border-color:var(--border-primary)]",
    "[transition-duration:var(--transition-normal)]",
  ],
  {
    variants: {
      variant: {
        default: "",
        outlined: "[border-width:1px]",
        elevated: "[box-shadow:var(--shadow-md)] border-0",
        interactive: [
          "cursor-pointer",
          "hover:[box-shadow:var(--shadow-lg)]",
          "hover:[border-color:var(--border-secondary)]",
          "active:[transform:translateY(1px)]",
        ],
      },
      size: {
        sm: "[padding:var(--card-padding-sm)]",
        md: "[padding:var(--card-padding-md)]",
        lg: "[padding:var(--card-padding-lg)]",
      },
      hasFooter: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      // Reduce bottom padding when footer is present
      {
        size: "sm",
        hasFooter: true,
        class: "[padding-bottom:var(--spacing-md)]",
      },
      {
        size: "md",
        hasFooter: true,
        class: "[padding-bottom:var(--spacing-md)]",
      },
      {
        size: "lg",
        hasFooter: true,
        class: "[padding-bottom:var(--spacing-md)]",
      },
    ],
    defaultVariants: {
      variant: "outlined",
      size: "md",
      hasFooter: false,
    },
  }
);

const cardHeaderVariants = cva(
  ["flex flex-col space-y-1.5", "[margin-bottom:var(--spacing-lg)]"],
  {
    variants: {
      fullWidth: {
        true: [
          "[margin-top:calc(-1_*_var(--card-padding-md))]",
          "[margin-left:calc(-1_*_var(--card-padding-md))]",
          "[margin-right:calc(-1_*_var(--card-padding-md))]",
          "[margin-bottom:var(--spacing-lg)]",
        ],
        false: "",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
      },
    },
    compoundVariants: [
      {
        fullWidth: true,
        size: "sm",
        class: [
          "[margin-top:calc(-1_*_var(--card-padding-sm))]",
          "[margin-left:calc(-1_*_var(--card-padding-sm))]",
          "[margin-right:calc(-1_*_var(--card-padding-sm))]",
        ],
      },
      {
        fullWidth: true,
        size: "lg",
        class: [
          "[margin-top:calc(-1_*_var(--card-padding-lg))]",
          "[margin-left:calc(-1_*_var(--card-padding-lg))]",
          "[margin-right:calc(-1_*_var(--card-padding-lg))]",
        ],
      },
    ],
    defaultVariants: {
      fullWidth: false,
      size: "md",
    },
  }
);

const cardTitleVariants = cva([
  "font-semibold leading-none tracking-tight",
  "[color:var(--text-primary)]",
  "[font-size:var(--font-size-lg)]",
  "[font-weight:var(--font-weight-semibold)]",
]);

const cardDescriptionVariants = cva([
  "[color:var(--text-secondary)]",
  "[font-size:var(--font-size-sm)]",
]);

const cardContentVariants = cva([
  "[color:var(--text-primary)]",
  "[font-size:var(--font-size-md)]",
  "flex-grow",
]);

const cardFooterVariants = cva(
  [
    "flex items-center justify-between",
    "[margin-top:var(--spacing-lg)]",
    "[border-top:1px_solid_var(--border-primary)]",
  ],
  {
    variants: {
      size: {
        sm: [
          "[margin-left:calc(-1_*_var(--card-padding-sm))]",
          "[margin-right:calc(-1_*_var(--card-padding-sm))]",
          "[padding-left:var(--card-padding-sm)]",
          "[padding-right:var(--card-padding-sm)]",
          "[padding-top:var(--spacing-md)]",
        ],
        md: [
          "[margin-left:calc(-1_*_var(--card-padding-md))]",
          "[margin-right:calc(-1_*_var(--card-padding-md))]",
          "[padding-left:var(--card-padding-sm)]",
          "[padding-right:var(--card-padding-sm)]",
          "[padding-top:var(--spacing-md)]",
        ],
        lg: [
          "[margin-left:calc(-1_*_var(--card-padding-lg))]",
          "[margin-right:calc(-1_*_var(--card-padding-lg))]",
          "[padding-left:var(--card-padding-lg)]",
          "[padding-right:var(--card-padding-lg)]",
          "[padding-top:var(--spacing-xl)]",
          "[padding-bottom:var(--spacing-md)]",
        ],
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  className?: string;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
}

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size = "md", ...props }, ref) => {
    const cardSize = size || "md";
    const [hasFooter, setHasFooter] = React.useState(false);

    return (
      <CardContext.Provider value={{ size: cardSize, hasFooter, setHasFooter }}>
        <div
          ref={ref}
          className={cn(
            cardVariants({ variant, size: cardSize, hasFooter }),
            className
          )}
          {...props}
        />
      </CardContext.Provider>
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, fullWidth, size, ...props }, ref) => {
    const cardContext = useContext(CardContext);
    const headerSize = size ?? cardContext.size;

    return (
      <div
        ref={ref}
        className={cn(
          cardHeaderVariants({ fullWidth, size: headerSize }),
          className
        )}
        {...props}
      />
    );
  }
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as: Component = "h3", ...props }, ref) => (
    <Component
      ref={ref as any} // eslint-disable-line @typescript-eslint/no-explicit-any
      className={cn(cardTitleVariants(), className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(cardDescriptionVariants(), className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardContentVariants(), className)}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, size, ...props }, ref) => {
    const cardContext = useContext(CardContext);
    const footerSize = size ?? cardContext.size;

    // Automatically set hasFooter to true when CardFooter is rendered
    React.useEffect(() => {
      cardContext.setHasFooter(true);
      // Cleanup: set to false when component unmounts
      return () => cardContext.setHasFooter(false);
    }, [cardContext]);

    return (
      <div
        ref={ref}
        className={cn(cardFooterVariants({ size: footerSize }), className)}
        {...props}
      />
    );
  }
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
