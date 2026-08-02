import type { ComponentProps, ReactNode } from "react"
import { AppIcon } from "@/components/AppIcon/AppIcon"
import { cn } from "@/lib/utils"
import Link from "vinext/shims/link"

export type LinkCardProps = ComponentProps<typeof Link> & {
  icon: ReactNode
  title: ReactNode
}

export function LinkCard(props: LinkCardProps) {
  const { icon, title, className, ...attrs } = props

  return (
    <Link
      {...attrs}
      className={cn(
        "group flex w-full items-center justify-between gap-4 rounded-[18px] border border-white/[0.09] bg-white/[0.035] px-5 py-5 text-ink no-underline shadow-[0_24px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-[border-color,background-color,transform,box-shadow] duration-300",
        "hover:border-white/[0.15] hover:bg-white/[0.05]",
        className,
      )}
    >
      <span className="flex min-w-0 items-center gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-[11px] text-accent border border-white/[0.1] bg-white/[0.06] shadow-[0_5px_14px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.08)]">
          {icon}
        </span>
        <span className="min-w-0 text-[19px] font-semibold leading-6 text-ink md:text-xl">
          {title}
        </span>
      </span>
      <AppIcon
        name="arrow"
        className="size-5 shrink-0 transition-colors text-accent"
      />
    </Link>
  )
}
