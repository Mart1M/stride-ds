"use client";

import React from "react";
import {
  Input as AriaInput,
  Label as AriaLabel,
  Text as AriaText,
  TextField as AriaTextField,
  Popover,
  OverlayArrow,
  type TextFieldProps as AriaTextFieldProps,
} from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Search as SearchIcon, X, Loader2 } from "lucide-react";

const searchVariants = cva(
  [
    "w-full font-sans border rounded-full transition-all",
    "focus-ring disabled:cursor-not-allowed disabled:opacity-50",
    // Remove default search input styling
    "[&::-webkit-search-decoration]:appearance-none",
    "[&::-webkit-search-cancel-button]:appearance-none",
    "[&::-webkit-search-results-button]:appearance-none",
    "[&::-webkit-search-results-decoration]:appearance-none",
    // Using semantic tokens
    "[transition-duration:var(--transition-normal)]",
    "[border-radius:var(--radius-full)]",
    "[background-color:var(--bg-primary)]",
    "[color:var(--text-primary)]",
    "[border-color:var(--border-primary)]",
    "placeholder:[color:var(--text-tertiary)]",
  ],
  {
    variants: {
      size: {
        sm: [
          "[height:var(--input-height-sm)]",
          "[font-size:var(--font-size-xs)]",
          "pl-9 pr-3",
        ],
        md: [
          "[height:var(--input-height-md)]",
          "[font-size:var(--font-size-sm)]",
          "pl-10 pr-3",
        ],
        lg: [
          "[height:var(--input-height-lg)]",
          "[font-size:var(--font-size-md)]",
          "pl-12 pr-4",
        ],
      },
      variant: {
        default: "",
        focused: ["[border-color:var(--border-focus)]", "shadow-sm"],
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

const labelVariants = cva([
  "block font-medium mb-1 ml-2",
  "[color:var(--text-primary)]",
  "[font-size:var(--font-size-sm)]",
  "[font-weight:var(--font-weight-medium)]",
]);

const helperTextVariants = cva([
  "mt-1 text-sm ml-2",
  "[font-size:var(--font-size-xs)]",
  "[color:var(--text-secondary)]",
]);

const popoverVariants = cva([
  "absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-50 max-h-80 overflow-auto",
  "top-full left-0",
  "[background-color:var(--bg-primary)]",
  "[border-color:var(--border-primary)]",
  "[box-shadow:var(--shadow-lg)]",
]);

const resultItemVariants = cva([
  "px-4 py-3 cursor-pointer transition-colors border-b last:border-b-0",
  "[border-color:var(--border-secondary)]",
  "hover:[background-color:var(--bg-secondary)]",
  "focus:[background-color:var(--bg-secondary)]",
  "focus:outline-none",
]);

export interface SearchResult {
  id: string;
  title: string;
  description?: string;
  category?: string;
  metadata?: Record<string, any>;
}

export interface SearchProps
  extends Omit<AriaTextFieldProps, "children" | "type">,
    VariantProps<typeof searchVariants> {
  label?: string;
  placeholder?: string;
  helperText?: string;
  className?: string;
  inputClassName?: string;
  onClear?: () => void;
  showClearButton?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
  // Live search props
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
  // Highlighting props
  enableHighlighting?: boolean;
  highlightClassName?: string;
}

export const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      className,
      inputClassName,
      size,
      variant,
      label,
      placeholder = "Search...",
      helperText,
      isDisabled,
      onClear,
      showClearButton = true,
      value,
      onValueChange,
      // Live search props
      enableLiveSearch = false,
      searchResults = [],
      onSearch,
      onResultSelect,
      isLoading = false,
      noResultsText = "No results found",
      minSearchLength = 2,
      searchDelay = 300,
      showPopover,
      renderResult,
      // Highlighting props
      enableHighlighting = true,
      highlightClassName = "[background-color:var(--brand-warning-500)] [color:var(--text-primary)] px-1 py-0.5 rounded font-medium",
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(value || "");
    const [isFocused, setIsFocused] = React.useState(false);
    const [internalResults, setInternalResults] = React.useState<
      SearchResult[]
    >([]);
    const [internalLoading, setInternalLoading] = React.useState(false);
    const [lastSearchTerm, setLastSearchTerm] = React.useState("");
    const searchTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const currentValue = value !== undefined ? value : internalValue;
    const showClear = showClearButton && currentValue.length > 0 && !isDisabled;
    const computedVariant = isFocused ? "focused" : variant;

    // Use external results if provided, otherwise use internal
    const displayResults =
      searchResults.length > 0 ? searchResults : internalResults;
    const displayLoading = isLoading || internalLoading;

    // For external results, use current value as search term
    const effectiveSearchTerm =
      searchResults.length > 0 ? currentValue : lastSearchTerm;

    // Determine if popover should be visible
    const shouldShowPopover =
      showPopover !== undefined
        ? showPopover
        : enableLiveSearch &&
          isFocused &&
          currentValue.length >= minSearchLength &&
          (displayResults.length > 0 ||
            displayLoading ||
            currentValue.length > 0);

    // Debounced search function
    const performSearch = React.useCallback(
      async (query: string) => {
        if (!enableLiveSearch || !onSearch || query.length < minSearchLength) {
          setInternalResults([]);
          setLastSearchTerm("");
          return;
        }

        setInternalLoading(true);
        try {
          const results = await onSearch(query);
          setInternalResults(Array.isArray(results) ? results : []);
          setLastSearchTerm(query); // Store the search term that generated these results
        } catch (error) {
          console.error("Search error:", error);
          setInternalResults([]);
          setLastSearchTerm("");
        } finally {
          setInternalLoading(false);
        }
      },
      [enableLiveSearch, onSearch, minSearchLength]
    );

    React.useEffect(() => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }

      if (currentValue.length >= minSearchLength && enableLiveSearch) {
        searchTimeoutRef.current = setTimeout(() => {
          performSearch(currentValue);
        }, searchDelay);
      } else {
        setInternalResults([]);
      }

      return () => {
        if (searchTimeoutRef.current) {
          clearTimeout(searchTimeoutRef.current);
        }
      };
    }, [
      currentValue,
      minSearchLength,
      enableLiveSearch,
      searchDelay,
      performSearch,
    ]);

    const handleValueChange = (newValue: string) => {
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    const handleClear = () => {
      const newValue = "";
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
      onClear?.();
      setInternalResults([]);
      setLastSearchTerm("");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleValueChange(e.target.value);
    };

    const handleResultSelect = (result: SearchResult) => {
      onResultSelect?.(result);
      if (value === undefined) {
        setInternalValue(result.title);
      }
      onValueChange?.(result.title);
      setIsFocused(false);
      setInternalResults([]);
      setLastSearchTerm("");
    };

    // Utility function to highlight search terms
    const highlightText = React.useCallback(
      (text: string, searchTerm: string) => {
        if (!enableHighlighting || !searchTerm.trim()) return text;

        const regex = new RegExp(
          `(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
          "gi"
        );
        const parts = text.split(regex);

        return parts.map((part, index) =>
          regex.test(part) ? (
            <mark key={index} className={cn(highlightClassName)}>
              {part}
            </mark>
          ) : (
            part
          )
        );
      },
      [enableHighlighting, highlightClassName]
    );

    // Default result renderer with highlighting
    const defaultRenderResult = (result: SearchResult) => {
      return (
        <div className="flex flex-col">
          <div className="font-medium [color:var(--text-primary)] text-sm">
            {highlightText(result.title, effectiveSearchTerm)}
          </div>
          {result.description && (
            <div className="text-xs [color:var(--text-secondary)] mt-1">
              {highlightText(result.description, effectiveSearchTerm)}
            </div>
          )}
          {result.category && (
            <div className="text-xs [color:var(--text-tertiary)] mt-1 font-medium uppercase tracking-wide">
              {highlightText(result.category, effectiveSearchTerm)}
            </div>
          )}
        </div>
      );
    };

    return (
      <AriaTextField
        className={cn("w-full", className)}
        isDisabled={isDisabled}
        {...props}
      >
        {label && (
          <AriaLabel className={cn(labelVariants())}>{label}</AriaLabel>
        )}

        <div className="relative">
          {/* Search Icon */}
          <div
            className={cn(
              "absolute top-1/2 transform left-3 -translate-y-1/2 [color:var(--text-tertiary)] pointer-events-none",
              size === "sm" && "left-3",
              size === "md" && "left-3",
              size === "lg" && "left-4"
            )}
          >
            <SearchIcon size={size === "sm" ? 14 : size === "lg" ? 18 : 16} />
          </div>

          {/* Loading Icon */}
          {displayLoading && (
            <div
              className={cn(
                "absolute top-1/2 transform -translate-y-1/2 [color:var(--text-tertiary)]",
                size === "lg" ? "right-12" : "right-10"
              )}
            >
              <Loader2
                size={size === "sm" ? 12 : size === "lg" ? 16 : 14}
                className="animate-spin"
              />
            </div>
          )}

          <AriaInput
            ref={ref}
            type="search"
            className={cn(
              searchVariants({ size, variant: computedVariant }),
              showClear && (size === "lg" ? "pr-10" : "pr-9"),
              displayLoading &&
                !showClear &&
                (size === "lg" ? "pr-16" : "pr-14"),
              displayLoading &&
                showClear &&
                (size === "lg" ? "pr-20" : "pr-18"),
              inputClassName
            )}
            placeholder={placeholder}
            value={currentValue}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              // Delay blur to allow clicking on popover items
              setTimeout(() => setIsFocused(false), 150);
            }}
          />

          {/* Clear Button */}
          {showClear && (
            <button
              type="button"
              onClick={handleClear}
              className={cn(
                "absolute top-1/2 transform -translate-y-1/2",
                "[color:var(--text-tertiary)] hover:[color:var(--text-secondary)]",
                "transition-colors cursor-pointer p-0.5 rounded",
                "hover:bg-[var(--bg-secondary)]",
                size === "lg" ? "right-4" : "right-3"
              )}
              aria-label="Clear search"
            >
              <X size={size === "sm" ? 12 : size === "lg" ? 16 : 14} />
            </button>
          )}

          {/* Results Popover */}
          {shouldShowPopover && (
            <div className={cn(popoverVariants())}>
              {displayLoading && displayResults.length === 0 ? (
                <div className="px-4 py-3 text-center [color:var(--text-secondary)]">
                  <Loader2 size={16} className="animate-spin mx-auto mb-2" />
                  <div className="text-sm">Searching...</div>
                </div>
              ) : displayResults.length > 0 ? (
                <div>
                  {displayResults.map((result) => (
                    <div
                      key={result.id}
                      className={cn(resultItemVariants())}
                      onClick={() => handleResultSelect(result)}
                      onMouseDown={(e) => e.preventDefault()} // Prevent blur on click
                    >
                      {renderResult
                        ? renderResult(result)
                        : defaultRenderResult(result)}
                    </div>
                  ))}
                </div>
              ) : currentValue.length >= minSearchLength ? (
                <div className="px-4 py-3 text-center [color:var(--text-secondary)] text-sm">
                  {noResultsText}
                </div>
              ) : null}
            </div>
          )}
        </div>

        {helperText && (
          <AriaText slot="description" className={cn(helperTextVariants())}>
            {helperText}
          </AriaText>
        )}
      </AriaTextField>
    );
  }
);

Search.displayName = "Search";
