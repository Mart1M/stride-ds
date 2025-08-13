import React from "react";
import { type RadioProps as AriaRadioProps, type RadioGroupProps as AriaRadioGroupProps } from "react-aria-components";
import { type VariantProps } from "class-variance-authority";
declare const radioGroupVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare const radioVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface RadioGroupProps extends Omit<AriaRadioGroupProps, "children" | "orientation">, VariantProps<typeof radioGroupVariants> {
    children?: React.ReactNode;
    label?: React.ReactNode;
    description?: React.ReactNode;
    errorMessage?: React.ReactNode;
    className?: string;
}
export interface RadioProps extends Omit<AriaRadioProps, "children">, VariantProps<typeof radioVariants> {
    children?: React.ReactNode;
    description?: React.ReactNode;
    className?: string;
}
export declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLLabelElement>>;
export {};
//# sourceMappingURL=Radio.d.ts.map