import type { ComponentProps, ReactNode } from "react"
import { AppIcon } from "@/components/AppIcon/AppIcon"
import { cn } from "@/lib/utils"

export type BlogPostProps = ComponentProps<"article"> & {
  title: string
  date: string
  children: ReactNode
}

export function BlogPost(props: BlogPostProps) {
  const { title, date, children, className, ...attrs } = props

  return (
    <article
      {...attrs}
      className={cn(
        "mx-auto w-full max-w-[780px] px-5 pb-24 pt-12 md:px-8 md:pt-20 lg:px-12",
        className,
      )}
    >
      <a
        href="/blog"
        className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-soft no-underline hover:text-ink"
      >
        <AppIcon
          name="chevron"
          className="size-3.5 rotate-180"
        />
        Blog
      </a>

      <h1 className="mt-9 text-[36px] font-semibold leading-[1.08] text-ink md:text-[46px]">
        {title}
      </h1>
      <p className="mt-4 text-[13px] text-ink-soft">
        {date}
      </p>

      <div className="mt-12 w-full border-t border-line pt-9 md:mt-14 md:pt-11">
        {children}
      </div>
    </article>
  )
}
