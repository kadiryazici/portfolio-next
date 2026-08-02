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
        <p className="mb-3 mt-0 text-[13px] font-medium text-accent">
          {eyebrow}
        </p>
      )}
      <h1 className="m-0 max-w-2xl text-[40px] font-semibold leading-[1.05] text-ink md:text-[48px]">
        {title}
      </h1>
    </header>
  )
}
