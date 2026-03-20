"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SpacerProps {
  y?: number;
  x?: number;
  className?: string;
}

const Spacer: React.FC<SpacerProps> = ({ y = 0, x = 0, className }) => {
  return (
    <div
      className={cn(
        `block`,
        y > 0 && `my-${y}`,
        x > 0 && `mx-${x}`,
        className
      )}
      style={{
        marginTop: y > 0 ? `${y * 0.25}rem` : undefined,
        marginBottom: y > 0 ? `${y * 0.25}rem` : undefined,
        marginLeft: x > 0 ? `${x * 0.25}rem` : undefined,
        marginRight: x > 0 ? `${x * 0.25}rem` : undefined,
      }}
    />
  )
}

export { Spacer }