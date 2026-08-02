import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"

export type BlockquoteProps = ComponentProps<"blockquote"> & {
  children: ReactNode
}

export function Blockquote(props: BlockquoteProps) {
  const { children, className, ...attrs } = props

  return (
    <blockquote
      {...attrs}
      className={cn(
        "my-8 border-l-2 border-accent pl-5 text-[15px] italic leading-relaxed text-ink-muted",
        className,
      )}
    >
      {children}
    </blockquote>
  )
}
