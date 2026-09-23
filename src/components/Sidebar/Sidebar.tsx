"use client"

import { cn } from "@/lib/utils"
import { useLayoutEffect, useRef, useState, type ComponentProps } from "react"
import Link from "vinext/shims/link"
import { usePathname } from "vinext/shims/navigation"
import { navigationLinks, socialLinks } from "./Sidebar.constants"

export type SidebarProps = ComponentProps<"aside">

export function Sidebar(props: SidebarProps) {
  const { className, ...attrs } = props
  const pathname = usePathname()

  // Each navigation row is 48px tall with a 2px gap; animate in group-local coordinates.
  const activeIndex = navigationLinks.findIndex((link) => (
    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
  ))

  const [isAnimating, setIsAnimating] = useState(false)
  useLayoutEffect(() => {
    setIsAnimating(true)

    const timeout = window.setTimeout(() => {
      setIsAnimating(false)
    }, 300)

    return () => window.clearTimeout(timeout)
  }, [pathname])


  return (
    <>
      <aside
        {...attrs}
        className={cn(
          "z-[100] sticky shrink-0 py-8 md:py-12 top-0 gap-2 flex justify-between flex-col h-[100dvh]",
          className,
        )}
      >
        <Group className="delay-300">
          {activeIndex >= 0 && (
            <div
              aria-hidden="true"
              style={{ translate: `0px ${activeIndex * 50}px` }}
              className={cn(
                "border border-transparent pointer-events-none absolute left-0 right-0 mx-auto top-[2px] h-[56px] w-[44px] rounded-full bg-bg-2/100 transition-[translate,scale,border-color,box-shadow] duration-300 ease-out motion-reduce:transition-none",
                isAnimating && "scale-135 inset-shadow-liquid"
              )}
            />
          )}
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

        <Group className="delay-700">
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
        "group/Wrapper isolate relative flex flex-col py-[6px] gap-[2px] bg-sidebar rounded-full ring-1 ring-neutral-800/50 inset-shadow-liquid",
        "duration-600 transition-[scale,filter,opacity] starting:blur-sm starting:opacity-0 starting:scale-125",
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
      aria-current={active ? "page" : undefined}
      className={cn(
        "group rounded-full relative isolate inline-grid place-items-center size-[48px] text-[28px] text-ink-muted",
        active ? "text-yellow-500" : "hover:text-gray-300",
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none transition-[translate,opacity] -translate-x-[4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 ring-1 ring-neutral-800/50 whitespace-nowrap absolute left-[calc(100%+8px)] top-0 bottom-0 my-auto size-fit px-[6px] py-[2px] text-xs text-gray-300 bg-sidebar shadow-sidebar rounded-full">
        {title}
      </div>

      {children}
    </Link>
  )
}
