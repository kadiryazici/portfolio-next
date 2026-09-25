import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"
import Link from "vinext/shims/link"
import { Icons } from "../Icons"

export type LinkCardProps = ComponentProps<typeof Link> & {
  icon: ReactNode
  title: ReactNode
}

export function LinkCard(props: LinkCardProps) {
  const { icon, title, className, ...attrs } = props

  return (
    <Link
      {...attrs}
      prefetch={false}
      className={cn(
        "group flex w-full items-center justify-between gap-2 sm:gap-4 rounded-3xl inset-shadow-liquid border border-white/[0.05]  backdrop-blur-sm bg-bg-2/40 hover:bg-bg-2/80 px-5 py-5 text-ink no-underline transition-[border-color,background-color,transform,box-shadow] duration-300",
        className,
      )}
    >
      <span className="flex min-w-0 items-center gap-2 sm:gap-4">
        <span className="grid p-2 text-lg sm:text-[24px] shrink-0 place-items-center rounded-full text-accent border border-white/[0.1] bg-white/[0.06]">
          {icon}
        </span>
        <span className="text-left min-w-0 text-base font-semibold leading-6 text-ink md:text-xl">
          {title}
        </span>
      </span>
      <Icons.ArrowOutward
        className="text-base shrink-0 transition-colors group-hover:text-yellow-400"
      />
    </Link>
  )
}
