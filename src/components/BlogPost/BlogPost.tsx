import type { ComponentProps, ReactNode } from "react"
import { AppIcon } from "@/components/AppIcon/AppIcon"
import { PageMain } from "@/components/PageMain/PageMain"
import { cn } from "@/lib/utils"
import Link from "vinext/shims/link"
import Script from "vinext/shims/script"

const giscusThemeUrl = import.meta.env.DEV
  ? "http://localhost:3000/giscus-theme.css"
  : "https://kadiryazici.dev/giscus-theme.css"

export type BlogPostProps = ComponentProps<"article"> & {
  title: string
  date: string
  headerContent?: ReactNode
  children: ReactNode
}

export function BlogPost(props: BlogPostProps) {
  const { title, date, headerContent, children, className, ...attrs } = props

  return (
    <PageMain>
      <article
        {...attrs}
        className={cn("w-full", className)}
      >
        <h1 className="mb-0 mt-8 md:mt-12 max-w-3xl text-[36px] font-semibold leading-[1.08] text-ink md:mt-10 md:text-[46px]">
          {title}
        </h1>
        <p className="mb-0 mt-4 text-[13px] text-ink-soft">
          {date}
        </p>
        {headerContent}

        <div className="blog-post-content mt-10 w-full md:mt-12">
          {children}
        </div>
      </article>

      <div className="giscus mt-24"></div>

      <Script
        src="https://giscus.app/client.js"
        data-repo="kadiryazici/portfolio-next"
        data-repo-id="R_kgDOTNI_gQ"
        data-category-id="DIC_kwDOTNI_gc4DEqZz"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme={giscusThemeUrl}
        data-lang="en"
        data-loading="lazy"
        crossOrigin="anonymous"
        async
      />
    </PageMain>
  )
}
