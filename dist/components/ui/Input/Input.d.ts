import React from "react";
import { type TextFieldProps as AriaTextFieldProps } from "react-aria-components";
import { type VariantProps } from "class-variance-authority";
declare const inputVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    variant?: "default" | "success" | "error" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface InputProps extends Omit<AriaTextFieldProps, "children">, VariantProps<typeof inputVariants> {
    label?: string;
    placeholder?: string;
    helperText?: string;
    errorMessage?: string;
    className?: string;
    inputClassName?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export {};
