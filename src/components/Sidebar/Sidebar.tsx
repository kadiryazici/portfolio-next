"use client"

import { cn } from "@/lib/utils"
import { MobileSidebar } from "@/components/Sidebar/MobileSidebar/MobileSidebar"
import type { ComponentProps, ReactNode } from "react"
import { usePathname } from "vinext/shims/navigation"
import { SidebarContent } from "./SidebarContent/SidebarContent"
import Link from "vinext/shims/link"
import { navigationLinks, socialLinks } from "./Sidebar.constants"
import { Icons } from "../Icons"
import { LiquidBorders } from "../LiquidBorders/LiquidBorders"

export type SidebarProps = ComponentProps<"aside">

export function Sidebar(props: SidebarProps) {
  const { className, ...attrs } = props
  const pathname = usePathname()

  const isBlogContent = pathname.startsWith("/blog") && pathname.length > 8

  return (
    <>
      <aside
        {...attrs}
        className={cn(
          "z-[100] sticky shrink-0 py-8 md:py-12 top-0 gap-2 flex flex-col h-[100dvh]",
          className,
        )}
      >
        <Group>
          {navigationLinks.map((link) => (
            <GroupLinkItem
              href={link.href}
              key={link.href}
              title={link.name}
            >
              {link.icon}
            </GroupLinkItem>
          ))}
        </Group>

        <Group className="mt-auto">
          {socialLinks.map((link) => (
            <GroupLinkItem
              key={link.href}
              href={link.href}
              title={link.name}
              target={"target" in link ? link.target : undefined}
            >
              {link.icon}
            </GroupLinkItem>
          ))}
        </Group>
      </aside>
    </>
  )
}

function Group(props: ComponentProps<"div">) {
  const { className, children, ...attrs } = props
  return (
    <div
      {...attrs}
      className={cn(
        "isolate relative flex flex-col py-[6px] gap-[2px] bg-sidebar rounded-full ring-1 ring-neutral-800/50 inset-shadow-[0_1px_0_var(--color-neutral-800),0_-1px_0_var(--color-neutral-700)]",
        className,
      )}
    >
      {children}
    </div>
  )
}

type GroupLinkItemProps = Omit<ComponentProps<typeof Link>, "title"> & {
  inactive?: boolean
  title: string
}

function GroupLinkItem(props: GroupLinkItemProps) {
  const { className, children, inactive = false, href, title, ...attrs } = props
  const pathname = usePathname()

  const active = !inactive && (href === "/"
    ? pathname === "/"
    : pathname.startsWith(href))

  return (
    <Link
      {...attrs}
      href={href}
      title={title}
      className={cn(
        "group rounded-full relative isolate inline-grid place-items-center size-[48px] text-[28px] text-ink-muted",
        active ? "text-yellow-500" : "hover:text-gray-300",
        className,
      )}
    >
      <div aria-hidden="true" className="transition-[translate,opacity] -translate-x-[4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 ring-1 ring-neutral-800/50 whitespace-nowrap absolute left-[calc(100%+8px)] top-0 bottom-0 my-auto size-fit px-[6px] py-[2px] text-xs text-gray-300 bg-sidebar shadow-sidebar rounded-full">
        {title}
      </div>

      {active && (
        <div
          className="pointer-events-none z-[-1] rounded-full absolute inset-0 m-auto w-[44px] h-[56px] bg-bg-2/100"
        />
      )}
      {children}
    </Link>
  )
}
