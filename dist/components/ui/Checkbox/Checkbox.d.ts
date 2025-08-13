import React from "react";
import { type CheckboxProps as AriaCheckboxProps } from "react-aria-components";
import { type VariantProps } from "class-variance-authority";
declare const checkboxVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface CheckboxProps extends Omit<AriaCheckboxProps, "children">, VariantProps<typeof checkboxVariants> {
    children?: React.ReactNode;
    description?: React.ReactNode;
    className?: string;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLLabelElement>>;
export {};
