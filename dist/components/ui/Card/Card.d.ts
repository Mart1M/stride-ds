import React from "react";
import { type VariantProps } from "class-variance-authority";
declare const cardVariants: (props?: ({
    variant?: "default" | "outlined" | "elevated" | "interactive" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    hasFooter?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    className?: string;
}
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    fullWidth?: boolean;
    size?: "sm" | "md" | "lg";
}
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    className?: string;
}
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    size?: "sm" | "md" | "lg";
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<CardHeaderProps & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<CardTitleProps & React.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<CardDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<CardContentProps & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<CardFooterProps & React.RefAttributes<HTMLDivElement>>;
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, };
