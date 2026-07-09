import type { ComponentProps, ReactNode } from "react"
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
        "fade-up py-14 md:py-20",
        className,
      )}
    >
      <a
        href="/blog"
        className="inline-flex items-center gap-2 font-mono text-[13px] text-ink-soft no-underline transition-colors hover:text-ink-muted"
      >
        ← Blog
      </a>

      <h1 className="mt-8 text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[44px]">
        {title}
      </h1>
      <p className="mt-3 font-mono text-[13px] uppercase tracking-[0.18em] text-ink-soft">
        {date}
      </p>

      <div className="mt-12 w-full">
        {children}
      </div>
    </article>
  )
}
