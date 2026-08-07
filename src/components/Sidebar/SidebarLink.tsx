"use client"

import type { ComponentProps, ReactNode } from "react"
import Link from "vinext/shims/link"
import { cn } from "@/lib/utils"

export type SidebarLinkProps = ComponentProps<typeof Link> & {
  icon: ReactNode
  active: boolean
}

export function SidebarLink(props: SidebarLinkProps) {
  const { icon, active, children, className, target, rel, ...attrs } = props

  return (
    <Link
      {...attrs}
      target={target}
      rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative flex h-10 items-center gap-3 rounded-[10px] px-3 text-[14px] font-medium text-ink-muted no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        active ? "text-gray-300" : "hover:text-ink-soft",
        className,
      )}
    >
      {active && (
        <div className="absolute inset-0 z-[-1] rounded-[inherit] bg-neutral-900 shadow-[0_24px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.06)]" />
      )}

      <span className={cn("grid size-6 shrink-0 place-items-center text-[24px]", active && "text-accent")}>
        {icon}
      </span>
      <span>{children}</span>
    </Link>
  )
}
