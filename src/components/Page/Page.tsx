import { Sidebar } from "@/components/Sidebar/Sidebar"
import { MobileSidebar } from "@/components/MobileSidebar/MobileSidebar"
import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

export type PageProps = ComponentProps<"div">

export function Page(props: PageProps) {
  const { children, className, ...attrs } = props

  return (
    <div
      {...attrs}
      className={cn(
        "w-full max-w-4xl mx-auto min-h-screen",
        "flex flex-col md:gap-12 md:px-6 gap-3 px-3 pb-[calc(env(safe-area-inset-bottom)+100px)] md:pb-0",
        "md:grid md:max-w-[992px] md:grid-cols-[48px_minmax(0,1fr)_48px] md:items-start",
        className,
      )}
    >
      <Sidebar className="hidden md:flex" />
      <MobileSidebar />
      {children}
    </div>
  )
}
