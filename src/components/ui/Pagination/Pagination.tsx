'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

const paginationVariants = cva([
  'flex items-center justify-center gap-1',
], {
  variants: {
    size: {
      sm: '[gap:var(--spacing-xs)]',
      md: '[gap:var(--spacing-sm)]',
      lg: '[gap:var(--spacing-md)]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const paginationItemVariants = cva([
  'inline-flex items-center justify-center',
  'font-medium transition-colors',
  'disabled:opacity-50 disabled:pointer-events-none',
  '[transition-duration:var(--transition-fast)]',
  '[color:var(--text-secondary)]',
  'hover:[color:var(--text-primary)]',
  'hover:[background-color:var(--interactive-ghost-hover)]',
  'focus-visible:outline-none',
  'focus-visible:[outline:2px_solid_var(--border-focus)]',
  'focus-visible:[outline-offset:2px]',
], {
  variants: {
    variant: {
      default: [
        '[border:1px_solid_var(--border-primary)]',
        '[background-color:var(--bg-primary)]',
        'hover:[border-color:var(--border-secondary)]',
      ],
      ghost: [
        'border-transparent',
        '[background-color:transparent]',
      ],
      outline: [
        '[border:1px_solid_var(--border-primary)]',
        '[background-color:transparent]',
        'hover:[background-color:var(--interactive-ghost-hover)]',
        'hover:[border-color:var(--border-secondary)]',
      ],
    },
    size: {
      sm: [
        '[height:var(--button-height-sm)]',
        '[min-width:var(--button-height-sm)]',
        '[padding:0_var(--spacing-sm)]',
        '[font-size:var(--font-size-sm)]',
        '[border-radius:var(--radius-sm)]',
      ],
      md: [
        '[height:var(--button-height-md)]',
        '[min-width:var(--button-height-md)]',
        '[padding:0_var(--spacing-md)]',
        '[font-size:var(--font-size-md)]',
        '[border-radius:var(--radius-md)]',
      ],
      lg: [
        '[height:var(--button-height-lg)]',
        '[min-width:var(--button-height-lg)]',
        '[padding:0_var(--spacing-lg)]',
        '[font-size:var(--font-size-lg)]',
        '[border-radius:var(--radius-lg)]',
      ],
    },
    isActive: {
      true: [
        '[background-color:var(--interactive-primary)]',
        '[color:var(--interactive-primary-text)]',
        '[border-color:var(--interactive-primary)]',
      ],
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    isActive: false,
  },
});

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

const PaginationItem = React.forwardRef<HTMLButtonElement, PaginationItemProps>(
  ({ className, variant, size, isActive, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(paginationItemVariants({ variant, size, isActive }), className)}
      {...props}
    />
  )
);
PaginationItem.displayName = 'PaginationItem';

const PaginationEllipsis = ({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) => (
  <span className={cn(paginationItemVariants({ variant: 'ghost', size }), 'pointer-events-none', className)}>
    <MoreHorizontal size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />
    <span className="sr-only">More pages</span>
  </span>
);

const usePagination = ({
  currentPage = 1,
  totalPages = 1,
  siblingCount = 1,
}: {
  currentPage?: number;
  totalPages?: number;
  siblingCount?: number;
}) => {
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const totalPageNumbers = siblingCount + 5; // 1 + siblingCount + currentPage + siblingCount + totalPages

  if (totalPageNumbers >= totalPages) {
    return range(1, totalPages);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

  const firstPageIndex = 1;
  const lastPageIndex = totalPages;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = range(1, leftItemCount);

    return [...leftRange, 'dots', totalPages];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = range(totalPages - rightItemCount + 1, totalPages);

    return [firstPageIndex, 'dots', ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, 'dots', ...middleRange, 'dots', lastPageIndex];
  }

  return [];
};

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({ 
    className, 
    size = 'md',
    currentPage = 1,
    totalPages = 1,
    onPageChange,
    showPrevNext = true,
    showFirstLast = false,
    siblingCount = 1,
    variant = 'numbered',
    ...props 
  }, ref) => {
    const paginationRange = usePagination({ currentPage, totalPages, siblingCount });

    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages && page !== currentPage) {
        onPageChange?.(page);
      }
    };

    if (variant === 'simple') {
      return (
        <div
          ref={ref}
          className={cn(paginationVariants({ size }), className)}
          {...props}
        >
          <PaginationItem
            variant="outline"
            size={size}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />
            <span className="sr-only">Go to previous page</span>
          </PaginationItem>
          
          <span className={cn(
            'px-4 py-2 text-sm font-medium',
            '[color:var(--text-primary)]',
            size === 'sm' && '[font-size:var(--font-size-xs)]',
            size === 'lg' && '[font-size:var(--font-size-md)]'
          )}>
            Page {currentPage} of {totalPages}
          </span>

          <PaginationItem
            variant="outline"
            size={size}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />
            <span className="sr-only">Go to next page</span>
          </PaginationItem>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(paginationVariants({ size }), className)}
        {...props}
      >
        {showFirstLast && currentPage > 1 && (
          <PaginationItem
            variant="outline"
            size={size}
            onClick={() => handlePageChange(1)}
          >
            First
          </PaginationItem>
        )}

        {showPrevNext && (
          <PaginationItem
            variant="outline"
            size={size}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />
            <span className="sr-only">Go to previous page</span>
          </PaginationItem>
        )}

        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === 'dots') {
            return <PaginationEllipsis key={`ellipsis-${index}`} size={size} />;
          }

          return (
            <PaginationItem
              key={pageNumber}
              size={size}
              isActive={pageNumber === currentPage}
              onClick={() => handlePageChange(pageNumber as number)}
            >
              {pageNumber}
            </PaginationItem>
          );
        })}

        {showPrevNext && (
          <PaginationItem
            variant="outline"
            size={size}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />
            <span className="sr-only">Go to next page</span>
          </PaginationItem>
        )}

        {showFirstLast && currentPage < totalPages && (
          <PaginationItem
            variant="outline"
            size={size}
            onClick={() => handlePageChange(totalPages)}
          >
            Last
          </PaginationItem>
        )}
      </div>
    );
  }
);

Pagination.displayName = 'Pagination';

export { Pagination, PaginationItem, PaginationEllipsis };