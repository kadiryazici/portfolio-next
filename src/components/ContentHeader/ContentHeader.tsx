import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"

export type ContentHeaderProps = ComponentProps<"header"> & {
  eyebrow?: ReactNode
  title: ReactNode
}

export function ContentHeader(props: ContentHeaderProps) {
  const { eyebrow, title, className, ...attrs } = props

  return (
    <header
      {...attrs}
      className={cn("pb-12 pt-8 md:pb-16 md:pt-12", className)}
    >
      {eyebrow != null && (
        <p className="starting:opacity-0 starting:blur-xs delay-800 duration-600 mb-3 mt-0 text-[13px] font-medium text-accent">
          {eyebrow}
        </p>
      )}
      <h1 className="transition-all starting:opacity-0 starting:blur-md duration-1000 m-0 max-w-2xl text-[40px] font-semibold leading-[1.05] text-ink md:text-[48px]">
        {title}
      </h1>
    </header>
  )
}
