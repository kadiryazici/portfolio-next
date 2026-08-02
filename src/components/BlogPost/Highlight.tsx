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
        "rounded-[5px] border border-line bg-surface px-1.5 py-0.5 text-[14px] font-medium text-ink",
        className,
      )}
    >
      <span className="text-ink-soft">`</span>
      {children}
      <span className="text-ink-soft">`</span>
    </code>
  )
}
