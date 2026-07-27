import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export type BackgroundProps = ComponentProps<"div"> & {
  noMask?: boolean
}

export function Background(props: BackgroundProps) {
  const { className, noMask = false, ...attrs } = props

  const mask = cn("[mask-image:radial-gradient(circle_at_50%_0%,black,transparent_70%)]")
  return (
    <div
      {...attrs}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-bg",
        className,
      )}
    >
      <div
        className={cn("absolute inset-0 opacity-[0.4] [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:72px_72px]", !noMask && mask)} />
      <div className="absolute -top-1/3 left-1/2 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[130px]" />
    </div>
  )
}
