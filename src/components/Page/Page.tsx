import type { ComponentProps } from "react"
import { Sidebar } from "@/components/Sidebar/Sidebar"
import { cn } from "@/lib/utils"

export type PageProps = ComponentProps<"div">

export function Page(props: PageProps) {
  const { children, className, ...attrs } = props

  return (
    <div
      {...attrs}
      className={cn(
        "min-h-screen w-full p-2.5 md:grid md:grid-cols-[260px_minmax(0,1fr)] md:items-start md:gap-10 md:p-3",
        "lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16",
        className,
      )}
    >
      <Sidebar />

      <article className="min-w-0">
        {children}
      </article>
    </div>
  )
}
