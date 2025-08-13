import React from "react";
import { type VariantProps } from "class-variance-authority";
declare const tagVariants: (props?: ({
    variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "outline" | "filled" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    removable?: boolean | null | undefined;
    interactive?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tagVariants> {
    className?: string;
    children?: React.ReactNode;
    removable?: boolean;
    onRemove?: () => void;
    interactive?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
export declare const Tag: React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLSpanElement>>;
export {};
//# sourceMappingURL=Tag.d.ts.map