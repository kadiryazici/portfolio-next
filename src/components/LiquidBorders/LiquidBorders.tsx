import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export type LiquidBordersProps = ComponentProps<"div">

export function LiquidBorders(props: LiquidBordersProps) {
  const { className, ...attrs } = props

  return (
    <div
      aria-hidden="true"
      {...attrs}
      className={cn(
        "pointer-events-none absolute inset-0 z-[-1] m-auto rounded-[inherit] shadow-[inset_0_1px_0_var(--color-gray-700),inset_0_-1px_0_var(--color-gray-700)]",
        className,
      )}
    />
  )
}
