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
        "my-8 rounded-r-[8px] border-l-2 border-accent bg-white/[0.035] px-5 py-4 text-[15px] italic leading-relaxed text-ink-soft",
        className,
      )}
    >
      {children}
    </blockquote>
  )
}
