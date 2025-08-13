import React from "react";
import { type TextFieldProps as AriaTextFieldProps } from "react-aria-components";
import { type VariantProps } from "class-variance-authority";
declare const searchVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    variant?: "default" | "focused" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface SearchResult {
    id: string;
    title: string;
    description?: string;
    category?: string;
    metadata?: Record<string, unknown>;
}
export interface SearchProps extends Omit<AriaTextFieldProps, "children" | "type">, VariantProps<typeof searchVariants> {
    label?: string;
    placeholder?: string;
    helperText?: string;
    className?: string;
    inputClassName?: string;
    onClear?: () => void;
    showClearButton?: boolean;
    value?: string;
    onValueChange?: (value: string) => void;
    enableLiveSearch?: boolean;
    searchResults?: SearchResult[];
    onSearch?: (query: string) => Promise<SearchResult[]> | SearchResult[];
    onResultSelect?: (result: SearchResult) => void;
    isLoading?: boolean;
    noResultsText?: string;
    minSearchLength?: number;
    searchDelay?: number;
    showPopover?: boolean;
    renderResult?: (result: SearchResult) => React.ReactNode;
    enableHighlighting?: boolean;
    highlightClassName?: string;
}
export declare const Search: React.ForwardRefExoticComponent<SearchProps & React.RefAttributes<HTMLInputElement>>;
export {};
