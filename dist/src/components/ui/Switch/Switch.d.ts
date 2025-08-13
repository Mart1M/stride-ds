import React from "react";
import { type SwitchProps as AriaSwitchProps } from "react-aria-components";
import { type VariantProps } from "class-variance-authority";
declare const switchVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface SwitchProps extends Omit<AriaSwitchProps, "children">, VariantProps<typeof switchVariants> {
    children?: React.ReactNode;
    description?: React.ReactNode;
    className?: string;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLLabelElement>>;
export {};
//# sourceMappingURL=Switch.d.ts.map