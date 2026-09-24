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
        "w-full max-w-4xl mx-auto min-h-screen",
        "flex flex-row md:gap-12 md:px-6 gap-3 px-3",
        className,
      )}
    >
      <div
        className="z-[10] top-0 fixed left-0 right-0 mx-auto w-full backdrop-blur-md max-w-4xl pointer-events-none"
      />
      <SSHChip />
      <Sidebar />
      {children}
    </div>
  )
}
