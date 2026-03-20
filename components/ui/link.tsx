"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const linkVariants = cva(
  "text-primary underline-offset-4 hover:underline",
  {
    variants: {
      color: {
        default: "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",
        foreground: "text-foreground",
        primary: "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",
        secondary: "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300",
        success: "text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300",
        warning: "text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300",
        danger: "text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300",
      },
      underline: {
        always: "underline",
        hover: "hover:underline",
        none: "no-underline",
      },
    },
    defaultVariants: {
      color: "primary",
      underline: "hover",
    },
  }
)

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "color" | "underline"> {
  asChild?: boolean
  color?: VariantProps<typeof linkVariants>["color"]
  underline?: VariantProps<typeof linkVariants>["underline"]
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, color, underline, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a"
    return (
      <Comp
        className={cn(linkVariants({ color, underline, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Link.displayName = "Link"

export { Link, linkVariants }