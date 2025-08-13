import React from "react";
import { type ComboBoxProps, type ListBoxItemProps } from "react-aria-components";
import { type VariantProps } from "class-variance-authority";
declare const selectVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface SelectProps extends Omit<ComboBoxProps<SelectOption>, "children">, VariantProps<typeof selectVariants> {
    options: SelectOption[];
    placeholder?: string;
    className?: string;
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>;
export interface SelectItemProps extends ListBoxItemProps {
    children: React.ReactNode;
}
export declare const SelectItem: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Select.d.ts.map