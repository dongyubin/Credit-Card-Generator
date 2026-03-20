"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Divider = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-px bg-gray-200 w-full", className)}
    {...props}
  />
))
Divider.displayName = "Divider"

export { Divider }