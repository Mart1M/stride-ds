import React from 'react';
export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
    showPrevNext?: boolean;
    showFirstLast?: boolean;
    siblingCount?: number;
    variant?: 'simple' | 'numbered';
}
export interface PaginationItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: 'default' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    isActive?: boolean;
}
declare const PaginationItem: React.ForwardRefExoticComponent<PaginationItemProps & React.RefAttributes<HTMLButtonElement>>;
declare const PaginationEllipsis: ({ className, size }: {
    className?: string;
    size?: "sm" | "md" | "lg";
}) => React.JSX.Element;
declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLDivElement>>;
export { Pagination, PaginationItem, PaginationEllipsis };
