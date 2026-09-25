"use client"

import { SidebarLink } from "@/components/Sidebar/Sidebar"
import { navigationLinks } from "@/components/Sidebar/Sidebar.constants"
import { useUpdateEffect } from "@/hooks/useUpdateEffect"
import { cn } from "@/lib/utils"
import { useLayoutEffect, useState } from "react"
import type { ComponentProps } from "react"
import { usePathname } from "vinext/shims/navigation"

const mobileNavigationLinks = navigationLinks.map((link) => ({
  ...link,
  name: link.href === "/" ? "Me" : link.name,
}))

export type MobileSidebarProps = ComponentProps<"nav">

export function MobileSidebar(props: MobileSidebarProps) {
  const { className, ...attrs } = props
  const pathname = usePathname()
  const activeIndex = navigationLinks.findIndex((link) => (
    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
  ))
  const [isAnimating, setIsAnimating] = useState(false)
  const [shrinked, setShrinked] = useState(false)

  useUpdateEffect(() => {
    setIsAnimating(true)
    setShrinked(false)

    const timeout = window.setTimeout(() => {
      setIsAnimating(false)
    }, 400)

    return () => window.clearTimeout(timeout)
  }, [pathname])


  useLayoutEffect(() => {
    let oldScroll = document.documentElement.scrollTop

    function handler() {
      const top = document.documentElement.scrollTop;

      if (top < 0 || window.innerHeight + window.scrollY > document.body.scrollHeight - 1) {
        return
      }

      setShrinked(top > oldScroll)
      oldScroll = top
    }

    document.addEventListener("scroll", handler)

    return () => void document.removeEventListener("scroll", handler)
  }, [])

  return (
    <nav
      aria-label="Main navigation"
      {...attrs}
      className={cn(
        "origin-bottom transition-transform duration-400 pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center px-3 pt-3 pb-[calc(env(safe-area-inset-bottom)+16px)] md:hidden",
        shrinked && "scale-80",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-auto w-full max-w-sm rounded-full bg-sidebar/50 backdrop-blur-sm p-1 ring-1 ring-neutral-800/50 inset-shadow-liquid",
          "transition-[scale,filter,opacity] duration-1000 delay-400 starting:scale-125 starting:blur-sm starting:opacity-0 motion-reduce:transition-none",
        )}
      >
        <div className="relative isolate grid grid-cols-4">
          {activeIndex >= 0 && (
            <div
              aria-hidden="true"
              style={{
                translate: `${activeIndex * 100}% 0px`,
                transitionTimingFunction: "linear(0, 0.013 1%, 0.051 2.2%, 0.404 9.8%, 0.51 12.6%, 0.602 15.5%, 0.683 18.7%, 0.754 22.2%, 0.813 26%, 0.861 30.2%, 0.9 34.8%, 0.931 40%, 0.972 52.7%, 0.992 70.2%, 1), linear(0, 0.009 1.4%, 0.032 2.8%, 0.131 6%, 0.265 9.1%, 0.675 17.6%, 0.88 22.8%, 0.953 25.2%, 1.014 27.7%, 1.062 30.3%, 1.094 32.9%, 1.121 37.2%, 1.121 42.2%, 1.102 46.7%, 1.019 61.2%, 0.989 71.5%, 0.985 81.1%, 1)",
                transitionProperty: "translate, scale, background-color"
              }}
              className={cn(
                "pointer-events-none absolute inset-y-0 left-0 w-1/4 rounded-full border border-transparent bg-bg-2 inset-shadow-liquid duration-650 motion-reduce:transition-none",
                isAnimating && "scale-135 bg-bg-2/50 motion-reduce:scale-100",
              )}
            />
          )}
          {mobileNavigationLinks.map((link) => (
            <SidebarLink
              key={link.href}
              href={link.href}
              title={link.name}
              aria-label={link.name}
              className="flex h-16 w-full min-w-0 flex-col items-center justify-center gap-0.5 text-[10px] font-medium"
            >
              <span
                aria-hidden="true"
                className="text-[26px]"
              >
                {link.icon}
              </span>
              <span>{link.name}</span>
            </SidebarLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
