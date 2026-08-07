"use client"

import { cn } from "@/lib/utils"
import { MobileSidebar } from "@/components/Sidebar/MobileSidebar/MobileSidebar"
import type { ComponentProps } from "react"
import { usePathname } from "vinext/shims/navigation"
import { SidebarContent } from "./SidebarContent/SidebarContent"

export type SidebarProps = ComponentProps<"aside">

export function Sidebar(props: SidebarProps) {
  const { className, ...attrs } = props
  const pathname = usePathname()

  return (
    <>
      <MobileSidebar pathname={pathname} />
      <aside
        {...attrs}
        className={cn(
          "relative z-30 hidden w-full flex-col gap-2 rounded-[24px] bg-sidebar p-2.5 shadow-sidebar ring-1 ring-neutral-800/50",
          "md:sticky md:top-3 md:flex md:h-[calc(100dvh-24px)]",
          className,
        )}
      >
        <SidebarContent pathname={pathname} />
      </aside>
    </>
  )
}
