"use client"

import { cn } from "@/lib/utils"
import { MobileSidebar } from "@/components/MobileSidebar/MobileSidebar"
import { motion } from "motion/react"
import type { ComponentProps, ReactNode } from "react"
import Link from "vinext/shims/link"
import { usePathname } from "vinext/shims/navigation"
import { Icons } from "../Icons"
import { SidebarLink } from "./SidebarLink"

const sectionLinks = [
  {
    name: "Experience",
    href: "/experience",
    icon: <Icons.Star />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <Icons.Box />,
  },
  // {
  //   name: "Contact Me",
  //   href: "/contact",
  //   icon: <Icons.Message />
  // },
  {
    name: "Blog",
    href: "/blog",
    icon: <Icons.BookOpen />,
  },
] as const satisfies ReadonlyArray<{
  name: string
  href: string
  icon: ReactNode
}>

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
        <motion.div layoutRoot layout className="flex w-full flex-col gap-2">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={cn(
              "relative flex group items-center gap-3 rounded-[16px] px-2.5 py-3 text-ink no-underline",
            )}
          >
            {pathname === "/" && (
              <motion.div className="shadow-[0_24px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.06)] bg-neutral-900 rounded-[inherit] inset-0 absolute z-[-1]" />
            )}

            <img
              src="/me.png"
              alt="Kadir Yazıcı"
              className="size-10 rounded-[11px] object-cover shadow-avatar"
            />
            <span className="min-w-0">
              <span className="group-hover:text-yellow-500 block truncate text-[15px] font-semibold leading-5">Kadir Yazıcı</span>
              <span className="block truncate text-[12px] text-ink-soft">Frontend-Focused Engineer</span>
            </span>
          </Link>

          <nav
            aria-label="Portfolio"
            className="flex flex-col gap-0.5"
          >
            {sectionLinks.map((link) => (
              <SidebarLink
                key={link.href}
                href={link.href}
                icon={link.icon}
                active={pathname.startsWith(link.href)}
              >
                {link.name}
              </SidebarLink>
            ))}
          </nav>
        </motion.div>

        <div className="mt-auto flex flex-col">
          <div className="mb-2 h-px w-full bg-neutral-800" />
          <SidebarLink
            href="mailto:kyzc411@gmail.com"
            icon={<Icons.Message />}
            active={false}
          >
            Contact Me
          </SidebarLink>

          <SidebarLink
            href="https://github.com/kadiryazici"
            icon={<Icons.Github />}
            active={false}
            target="_blank"
          >
            Github
          </SidebarLink>

          <SidebarLink
            href="https://linkedin.com/in/kadiryzc"
            icon={<Icons.Linkedin />}
            active={false}
            target="_blank"
          >
            LinkedIn
          </SidebarLink>

          <SidebarLink
            href="https://x.com/kadiryazicidev"
            icon={<Icons.TwitterX />}
            active={false}
            target="_blank"
          >
            X / Twitter
          </SidebarLink>
        </div>
      </aside>
    </>
  )
}
