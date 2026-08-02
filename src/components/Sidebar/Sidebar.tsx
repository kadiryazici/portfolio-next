"use client"

import { ReactNode, useRef, type ComponentProps } from "react"
import type { AppIconName } from "@/components/AppIcon/AppIcon"
import { AppIcon } from "@/components/AppIcon/AppIcon"
import type { SettingsDialogInstance } from "@/components/SettingsDialog/SettingsDialog"
import { SettingsDialog } from "@/components/SettingsDialog/SettingsDialog"
import { cn } from "@/lib/utils"
import { posts } from "@/lib/posts"
import { Icons } from "../Icons"
import Link from "vinext/shims/link"
import { motion } from "motion/react"

const sectionLinks = [
  {
    name: "Experience",
    href: "/experience",
    icon: <Icons.Star />
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <Icons.Box />
  },
  // {
  //   name: "Contact Me",
  //   href: "/contact",
  //   icon: <Icons.Message />
  // },
  {
    name: "Blog",
    href: "/blog",
    icon: <Icons.BookOpen />
  },
] as const satisfies ReadonlyArray<{
  name: string
  href: string
  icon: ReactNode
}>

export type SidebarProps = ComponentProps<"aside"> & {
  pathname: string
}

export function Sidebar(props: SidebarProps) {
  const { pathname, className, ...attrs } = props

  return (
    <aside
      {...attrs}
      className={cn(
        "ring-1 ring-neutral-800/50 flex flex-col gap-2 relative z-30 w-full rounded-[24px] bg-sidebar p-2.5 shadow-sidebar",
        "md:sticky md:top-3 md:h-[calc(100dvh-24px)]",
        className,
      )}
    >
      <motion.div layoutRoot layout className="flex w-full flex-col gap-2">
        <Link
          href="/"
          className={cn(
            "relative flex group items-center gap-3 rounded-[16px] px-2.5 py-3 text-ink no-underline",
          )}
        >
          {pathname === "/" && (
            <motion.div className="bg-neutral-900 rounded-[inherit] inset-0 absolute z-[-1]" />
          )}

          <img
            src="/me.png"
            alt="Kadir Yazıcı"
            className="size-10 rounded-[11px] object-cover shadow-avatar"
          />
          <span className="min-w-0">
            <span className="group-hover:text-yellow-500 block truncate text-[15px] font-semibold leading-5">Kadir Yazıcı</span>
            <span className="block truncate text-[12px] text-ink-soft">Software Developer</span>
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
              active={link.href === pathname}
            >
              {link.name}
            </SidebarLink>
          ))}
        </nav>
      </motion.div>

      <div className="mt-auto flex flex-col">
        <SidebarLink
          href={"mailto:kyzc411@gmail.com"}
          icon={<Icons.Message />}
          active={false}
        >
          Contact Me
        </SidebarLink>

        <SidebarLink
          href={"https://github.com/kadiryazici"}
          icon={<Icons.Github />}
          active={false}
          target="_blank"
        >
          Github
        </SidebarLink>

        <SidebarLink
          href={"https://linkedin.com/in/kadiryzc"}
          icon={<Icons.Linkedin />}
          active={false}
          target="_blank"
        >
          LinkedIn
        </SidebarLink>

        <SidebarLink
          href={"https://x.com/kadiryazicidev"}
          icon={<Icons.TwitterX />}
          active={false}
          target="_blank"
        >
          X / Twitter
        </SidebarLink>
      </div>
    </aside>
  )
}

type SidebarLinkProps = ComponentProps<typeof Link> & {
  icon: ReactNode
  active: boolean
}

function SidebarLink(props: SidebarLinkProps) {
  const { icon, active, children, className, ...attrs } = props

  return (
    <Link
      {...attrs}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative flex flex-row h-10 items-center gap-3 rounded-[10px] px-3 text-[14px] font-medium text-ink-muted no-underline",
        active ? "text-gray-300" : "hover:text-ink-soft",
        className,
      )}
    >
      {active && (
        <motion.div className="bg-neutral-900 rounded-[inherit] inset-0 absolute z-[-1]" />
      )}

      <span className={cn("size-[24px] shrink-0 grid place-items-center text-[24px] align-middle", active && "text-accent")}>
        {icon}
      </span>
      <span>{children}</span>
    </Link>
  )
}
