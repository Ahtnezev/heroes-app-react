import * as React from "react"
import { Progress as ProgressPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

// we add the `activeColor` field (custom) 
function Progress({
  className,
  value,
  activeColor = 'bg-primary',
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & { activeColor?: string; }) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted",
        className
      )}
      {...props}
    >
      {/* we add the active color + concatenation */}
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={ cn( activeColor, "size-full flex-1 transition-all") }
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
