import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"

export type HighlightProps = ComponentProps<"code"> & {
  children: ReactNode
}

export function Highlight(props: HighlightProps) {
  const { children, className, ...attrs } = props

  return (
    <code
      {...attrs}
      className={cn(
        "rounded-md border border-line bg-surface px-1.5 py-0.5 font-mono text-[14px] text-ink",
        className,
      )}
    >
      <span className="text-ink-soft">`</span>
      {children}
      <span className="text-ink-soft">`</span>
    </code>
  )
}
