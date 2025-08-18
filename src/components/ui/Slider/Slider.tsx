"use client";

import React from "react";
import {
  Slider as AriaSlider,
  SliderTrack,
  SliderThumb,
  SliderOutput,
  Label,
  type SliderProps as AriaSliderProps,
} from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sliderVariants = cva([
  "group flex flex-col gap-2 w-full min-w-48",
  "text-base",
  "disabled:opacity-50 disabled:cursor-not-allowed",
]);

const sliderTrackVariants = cva([
  "relative w-full flex items-center h-8",
  "[transition-duration:var(--transition-normal)]",
  "transition-colors",
]);

const sliderLabelVariants = cva([
  "flex justify-between items-center",
  "font-medium text-[var(--text-primary)]",
  "group-disabled:text-[var(--text-disabled)]",
]);

const sliderOutputVariants = cva([
  "font-mono text-sm",
  "text-[var(--text-secondary)]",
  "group-disabled:text-[var(--text-disabled)]",
]);

interface SliderProps extends Omit<AriaSliderProps, "children"> {
  label?: string;
  showOutput?: boolean;
  formatValue?: (value: number) => string;
  className?: string;
  trackClassName?: string;
  thumbClassName?: string;
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      className,
      trackClassName,
      thumbClassName,
      label,
      showOutput = true,
      formatValue = (value) => value.toString(),
      ...props
    },
    ref
  ) => {
    return (
      <AriaSlider
        ref={ref}
        className={cn(sliderVariants(), className)}
        {...props}
      >
        {label && (
          <div className={cn(sliderLabelVariants())}>
            <Label>{label}</Label>
            {showOutput && (
              <SliderOutput className={cn(sliderOutputVariants())}>
                {({ state }) => formatValue(state.getThumbValue(0))}
              </SliderOutput>
            )}
          </div>
        )}

        <SliderTrack className={cn(sliderTrackVariants(), trackClassName)}>
          {({ state, isDisabled }) => (
            <>
              {/* Track background */}
              <div
                className={cn(
                  "absolute top-1/2 left-0 w-full -translate-y-1/2 rounded-full h-2",
                  "bg-[var(--border-primary)] dark:bg-[var(--border-secondary)]",
                  isDisabled && "bg-[var(--interactive-primary-disabled)]"
                )}
              />

              {/* Fill/Progress */}
              <div
                className={cn(
                  "absolute top-1/2 left-0 -translate-y-1/2 rounded-full h-2",
                  "bg-[var(--interactive-primary)]",
                  isDisabled &&
                    "bg-[color-mix(in_srgb,var(--interactive-primary-disabled)_50%,black_20%)] dark:bg-[color-mix(in_srgb,var(--interactive-primary-disabled)_50%,white_20%)]",
                  "[transition-duration:var(--transition-normal)]",
                  "transition-colors",
                  "z-0" // Sous le thumb
                )}
                style={{
                  width: `${state.getThumbPercent(0) * 100}%`,
                }}
              />

              {/* Thumb */}
              <SliderThumb
                className={cn(
                  "absolute rounded-full w-5 h-5",
                  "bg-[var(--bg-primary)]",
                  "border-2 border-[var(--interactive-primary)]",
                  "shadow-[var(--shadow-sm)]",
                  "cursor-pointer",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-focus)]/50",
                  "pressed:scale-110",
                  "[transition-duration:var(--transition-fast)]",
                  "transition-all",
                  "top-6.5 -translate-y-1/2 -translate-x-1/2", // Centrage parfait
                  "z-10", // Au-dessus du track
                  isDisabled &&
                    "cursor-not-allowed border-[var(--border-secondary)] bg-[var(--interactive-primary-disabled)] shadow-none",
                  thumbClassName
                )}
                style={{
                  left: `${state.getThumbPercent(0) * 100}%`,
                }}
              />
            </>
          )}
        </SliderTrack>
      </AriaSlider>
    );
  }
);

Slider.displayName = "Slider";

export { Slider, type SliderProps };
