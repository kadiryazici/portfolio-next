import type { ComponentProps, ReactNode } from "react"
import { Sidebar } from "@/components/Sidebar/Sidebar"
import { cn } from "@/lib/utils"

export type PageProps = ComponentProps<"div"> & {
  pathname: string
  title: string
  children: ReactNode
}

export function Page(props: PageProps) {
  const { pathname, title, children, className, ...attrs } = props

  return (
    <div
      {...attrs}
      className={cn(
        "min-h-screen w-full p-2.5 md:grid md:grid-cols-[260px_minmax(0,1fr)] md:items-start md:gap-10 md:p-3",
        "lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16",
        className,
      )}
    >
      <Sidebar pathname={pathname} />

      <article className="min-w-0">
        {/*<header className="sticky top-0 z-20 flex h-14 items-center bg-bg/85 px-5 backdrop-blur-2xl md:px-8 lg:px-12">
          <span className="text-[13px] font-semibold text-ink-muted">{title}</span>
        </header>*/}
        {children}
      </article>
    </div>
  )
}
