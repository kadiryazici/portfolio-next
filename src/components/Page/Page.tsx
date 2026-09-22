import type { ComponentProps } from "react"
import { SSHChip } from "@/components/SSHChip/SSHChip"
import { Sidebar } from "@/components/Sidebar/Sidebar"
import { cn } from "@/lib/utils"

export type PageProps = ComponentProps<"div">

export function Page(props: PageProps) {
  const { children, className, ...attrs } = props

  return (
    <div
      {...attrs}
      className={cn(
        "w-full max-w-5xl mx-auto min-h-screen",
        "flex flex-row md:gap-12 md:px-12 gap-4 px-4",
        className,
      )}
    >
      <SSHChip />
      <Sidebar />
      {children}
    </div>
  )
}
