import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"

export type HeaderProps = ComponentProps<"h2"> & {
  children: ReactNode
}

export function Header(props: HeaderProps) {
  const { children, className, ...attrs } = props

  return (
    <h2
      {...attrs}
      className={cn(
        "mb-4 mt-14 text-[22px] font-semibold tracking-[-0.02em] text-ink md:text-[26px]",
        className,
      )}
    >
      <span className="mr-2 font-mono font-normal text-accent">##</span>
      {children}
    </h2>
  )
}
