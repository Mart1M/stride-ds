"use client";

import React from "react";
import {
  Checkbox as AriaCheckbox,
  Radio as AriaRadio,
  type CheckboxProps as AriaCheckboxProps,
  type RadioProps as AriaRadioProps,
} from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Check, Minus } from "lucide-react";

const choiceboxVariants = cva(
  [
    "group relative flex cursor-pointer",
    "border border-solid [border-color:var(--border-primary)]",
    "[border-radius:var(--radius-md)]",
    "[background-color:var(--bg-primary)]",
    "transition-all [transition-duration:var(--transition-normal)]",
    // Hover styles
    "hover:[border-color:var(--border-secondary)]",
    "hover:[background-color:var(--bg-secondary)]",
    // Selected styles
    "data-[selected]:[border-color:var(--interactive-primary)]",
    "data-[selected]:[background-color:var(--bg-secondary)]",
    // Focus styles
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
    "focus-visible:[ring-color:var(--border-focus)]",
    // Disabled styles
    "disabled:cursor-not-allowed disabled:opacity-50",
    "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
  ],
  {
    variants: {
      size: {
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const checkboxIndicatorVariants = cva(
  [
    "absolute top-3 right-3 flex items-center justify-center shrink-0",
    "border-2 transition-all",
    "[transition-duration:var(--transition-normal)]",
    "[border-color:var(--border-primary)]",
    "[background-color:var(--bg-primary)]",
    "[border-radius:var(--radius-sm)]",
    // Hover styles
    "group-hover:[border-color:var(--border-secondary)]",
    // Selected styles
    "group-data-[selected]:[background-color:var(--interactive-primary)]",
    "group-data-[selected]:[border-color:var(--interactive-primary)]",
    "group-data-[selected]:group-hover:[background-color:var(--interactive-primary-hover)]",
    "group-data-[selected]:group-hover:[border-color:var(--interactive-primary-hover)]",
    // Disabled styles
    "group-data-[disabled]:[border-color:var(--border-secondary)]",
    "group-data-[disabled]:group-data-[selected]:[background-color:var(--bg-brand)]",
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

const radioIndicatorVariants = cva(
  [
    "absolute top-3 right-3 flex items-center justify-center shrink-0",
    "border-2 transition-all rounded-full",
    "[transition-duration:var(--transition-normal)]",
    "[border-color:var(--border-primary)]",
    "[background-color:var(--bg-primary)]",
    // Hover styles
    "group-hover:[border-color:var(--border-secondary)]",
    // Selected styles
    "group-data-[selected]:[background-color:var(--interactive-primary)]",
    "group-data-[selected]:[border-color:var(--interactive-primary)]",
    "group-data-[selected]:group-hover:[background-color:var(--interactive-primary-hover)]",
    "group-data-[selected]:group-hover:[border-color:var(--interactive-primary-hover)]",
    // Disabled styles
    "group-data-[disabled]:[border-color:var(--border-secondary)]",
    "group-data-[disabled]:group-data-[selected]:[background-color:var(--bg-brand)]",
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

const choiceboxContentVariants = cva(
  [
    "flex flex-col gap-1 pr-8", // pr-8 pour laisser l'espace pour l'indicateur
  ],
  {
    variants: {
      size: {
        sm: "gap-1 pr-6",
        md: "gap-1 pr-8",
        lg: "gap-2 pr-10",
      },
      centered: {
        true: "justify-center items-center text-center pr-0",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      centered: false,
    },
  }
);

export interface ChoiceboxProps
  extends Omit<AriaCheckboxProps, "children">,
    VariantProps<typeof choiceboxVariants> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

export interface ChoiceboxRadioProps
  extends Omit<AriaRadioProps, "children">,
    VariantProps<typeof choiceboxVariants> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

const ChoiceboxContent = ({ 
  title, 
  description, 
  size, 
  isDisabled, 
  isCheckboxVariant = true 
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  isCheckboxVariant?: boolean;
}) => {
  const centered = !description && title;
  
  return (
    <div className={cn(
      choiceboxContentVariants({ 
        size, 
        centered: centered && !isCheckboxVariant ? true : false 
      }), 
      isDisabled && "opacity-50",
      centered && !isCheckboxVariant && "min-h-full"
    )}>
      {title && (
        <span className={cn(
          "font-medium [color:var(--text-primary)] leading-tight",
          size === "sm" && "text-sm",
          size === "md" && "text-base",
          size === "lg" && "text-lg"
        )}>
          {title}
        </span>
      )}
      {description && (
        <span className={cn(
          "[color:var(--text-tertiary)] leading-tight",
          size === "sm" && "text-xs",
          size === "md" && "text-sm",
          size === "lg" && "text-base"
        )}>
          {description}
        </span>
      )}
    </div>
  );
};

const radioDotVariants = cva(
  [
    "absolute rounded-full bg-white pointer-events-none",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "transition-opacity duration-150 ease-out",
  ],
  {
    variants: {
      size: {
        sm: "h-1.5 w-1.5",
        md: "h-2 w-2",
        lg: "h-2.5 w-2.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const CheckboxIndicator = ({ 
  isSelected, 
  isIndeterminate, 
  size
}: {
  isSelected?: boolean;
  isIndeterminate?: boolean;
  size?: "sm" | "md" | "lg";
}) => {
  return (
    <>
      {isIndeterminate ? (
        <Minus
          strokeWidth={4}
          className={cn(
            "text-white",
            isSelected || isIndeterminate ? "opacity-100" : "opacity-0",
            size === "sm" && "h-2.5 w-2.5",
            size === "md" && "h-3 w-3",
            size === "lg" && "h-4 w-4"
          )}
        />
      ) : (
        <Check
          strokeWidth={4}
          className={cn(
            "text-white",
            isSelected ? "opacity-100" : "opacity-0",
            size === "sm" && "h-2.5 w-2.5",
            size === "md" && "h-3 w-3",
            size === "lg" && "h-4 w-4"
          )}
        />
      )}
    </>
  );
};

const RadioIndicator = ({ 
  isSelected, 
  size
}: {
  isSelected?: boolean;
  size?: "sm" | "md" | "lg";
}) => {
  return (
    <span className={cn(
      radioDotVariants({ size }),
      isSelected ? "opacity-100" : "opacity-0"
    )} />
  );
};

export const Choicebox = React.forwardRef<HTMLLabelElement, ChoiceboxProps>(
  ({ className, size, title, description, ...props }, ref) => {
    return (
      <AriaCheckbox
        className={cn(choiceboxVariants({ size }), className)}
        ref={ref}
        {...props}
      >
        {({
          isSelected,
          isIndeterminate,
          isDisabled,
          isHovered,
          isFocusVisible,
        }) => (
          <>
            {/* Indicateur checkbox en haut à droite */}
            <div
              className={cn(
                checkboxIndicatorVariants({ size }),
                // Base styles
                !isSelected &&
                  !isIndeterminate &&
                  "[border-color:var(--border-primary)] [background-color:var(--bg-primary)]",
                // Hover styles
                isHovered &&
                  !isSelected &&
                  !isIndeterminate &&
                  !isDisabled &&
                  "[border-color:var(--border-secondary)]",
                // Selected/Indeterminate styles
                (isSelected || isIndeterminate) &&
                  "[background-color:var(--interactive-primary)] [border-color:var(--interactive-primary)]",
                // Selected + hover
                (isSelected || isIndeterminate) &&
                  isHovered &&
                  !isDisabled &&
                  "[background-color:var(--interactive-primary-hover)] [border-color:var(--interactive-primary-hover)]",
                // Focus styles
                isFocusVisible && !isDisabled && "focus-ring",
                // Disabled styles - simple opacity
                isDisabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <CheckboxIndicator 
                isSelected={isSelected} 
                isIndeterminate={isIndeterminate} 
                size={size || "md"}
              />
            </div>
            
            {/* Contenu principal */}
            {(title || description) && (
              <ChoiceboxContent 
                title={title}
                description={description}
                size={size || "md"}
                isDisabled={isDisabled}
                isCheckboxVariant={true}
              />
            )}
          </>
        )}
      </AriaCheckbox>
    );
  }
);

export const ChoiceboxRadio = React.forwardRef<HTMLLabelElement, ChoiceboxRadioProps>(
  ({ className, size, title, description, ...props }, ref) => {
    return (
      <AriaRadio
        className={cn(choiceboxVariants({ size }), className)}
        ref={ref}
        {...props}
      >
        {({
          isSelected,
          isDisabled,
          isHovered,
          isFocusVisible,
        }) => (
          <>
            {/* Indicateur radio en haut à droite */}
            <div
              className={cn(
                radioIndicatorVariants({ size }),
                // Base styles
                !isSelected &&
                  "[border-color:var(--border-primary)] [background-color:var(--bg-primary)]",
                // Hover styles
                isHovered &&
                  !isSelected &&
                  !isDisabled &&
                  "[border-color:var(--border-secondary)]",
                // Selected styles
                isSelected &&
                  "[background-color:var(--interactive-primary)] [border-color:var(--interactive-primary)]",
                // Selected + hover
                isSelected &&
                  isHovered &&
                  !isDisabled &&
                  "[background-color:var(--interactive-primary-hover)] [border-color:var(--interactive-primary-hover)]",
                // Focus styles
                isFocusVisible && !isDisabled && "focus-ring",
                // Disabled styles - simple opacity
                isDisabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <RadioIndicator 
                isSelected={isSelected} 
                size={size || "md"}
              />
            </div>
            
            {/* Contenu principal */}
            {(title || description) && (
              <ChoiceboxContent 
                title={title}
                description={description}
                size={size || "md"}
                isDisabled={isDisabled}
                isCheckboxVariant={false}
              />
            )}
          </>
        )}
      </AriaRadio>
    );
  }
);

Choicebox.displayName = "Choicebox";
ChoiceboxRadio.displayName = "ChoiceboxRadio";