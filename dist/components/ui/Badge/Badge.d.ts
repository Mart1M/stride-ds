import React from "react";
import { type VariantProps } from "class-variance-authority";
declare const badgeVariants: (props?: ({
    variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "outline" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    dot?: boolean | null | undefined;
    numeric?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
    className?: string;
    children?: React.ReactNode;
    dot?: boolean;
    dotColor?: string;
    numeric?: boolean;
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
export {};
