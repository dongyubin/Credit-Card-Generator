"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ScrollingBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  isReverse?: boolean;
  showShadow?: boolean;
  shouldPauseOnHover?: boolean;
  isVertical?: boolean;
  gap?: string;
  duration?: number; // in seconds
}

const ScrollingBanner = React.forwardRef<HTMLDivElement, ScrollingBannerProps>(
  (
    {
      className,
      isReverse,
      isVertical = false,
      gap = "1rem",
      showShadow = true,
      shouldPauseOnHover = true,
      duration = 40,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          "flex",
          {
            "w-full": !isVertical,
            "overflow-y-hidden": isVertical,
            "overflow-x-hidden": !isVertical,
            "max-h-[calc(100vh_-_200px)]": isVertical,
            // Add shadow classes
            "scrollbar-hide": true,
            "[--tw-shadow:0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]": showShadow && !isVertical,
            "[--tw-shadow:0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]": showShadow && isVertical,
          },
          className
        )}
        style={{
          "--scroll-gap": gap,
          "--duration": `${duration}s`,
        } as React.CSSProperties}
      >
        <div
          className={cn("flex w-max items-stretch", {
            "flex-col": isVertical,
            "h-full": isVertical,
            "animate-scrolling-banner": !isVertical,
            "animate-scrolling-banner-vertical": isVertical,
            "[animation-direction:reverse]": isReverse,
            "hover:[animation-play-state:paused]": shouldPauseOnHover,
          })}
          style={{ gap: gap, "--scroll-gap": gap } as React.CSSProperties}
        >
          {React.Children.map(children, (child) =>
            React.cloneElement(child as any)
          )}
        </div>
      </div>
    );
  }
);

ScrollingBanner.displayName = "ScrollingBanner";

export default ScrollingBanner;
