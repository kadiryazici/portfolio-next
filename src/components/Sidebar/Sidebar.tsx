"use client"

import { cn } from "@/lib/utils"
import { useLayoutEffect, useState, type ComponentProps } from "react"
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
    }, 400)

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
              style={{
                translate: `0px ${activeIndex * 50}px`,
                transitionTimingFunction: "linear(0, 0.013 1%, 0.051 2.2%, 0.404 9.8%, 0.51 12.6%, 0.602 15.5%, 0.683 18.7%, 0.754 22.2%, 0.813 26%, 0.861 30.2%, 0.9 34.8%, 0.931 40%, 0.972 52.7%, 0.992 70.2%, 1)"
              }}
              className={cn(
                "border border-transparent pointer-events-none absolute left-0 right-0 mx-auto top-[2px] h-[56px] w-[44px] rounded-full bg-bg-2/100 transition-all duration-650 ease-out motion-reduce:transition-none",
                isAnimating && "scale-140 inset-shadow-liquid bg-bg-2/50"
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

type GroupLinkItemProps = ComponentProps<typeof Link> & {
  inactive?: boolean
}

function GroupLinkItem(props: GroupLinkItemProps) {
  const { className, children, inactive = false, href, ...attrs } = props
  const pathname = usePathname()

  const active = !inactive && (href === "/"
    ? pathname === "/"
    : pathname.startsWith(href))

  return (
    <Link
      {...attrs}
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "transition-colors duration-400 group rounded-full relative isolate inline-grid place-items-center size-[48px] text-[28px] text-ink-muted",
        active ? "text-yellow-500" : "hover:text-gray-300",
        className,
      )}
    >
      {children}
    </Link>
  )
}
