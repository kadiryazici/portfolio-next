import { cn } from "@/lib/utils"
import Link from "vinext/shims/link"
import type { ComponentProps } from "react"
import { navigationLinks, socialLinks } from "../Sidebar.constants"
import { SidebarLink } from "../SidebarLink"

export type SidebarContentProps = ComponentProps<"div"> & {
  pathname: string
  onLinkClick?: () => void
}

export function SidebarContent(props: SidebarContentProps) {
  const { pathname, onLinkClick, className, ...attrs } = props

  return (
    <div
      {...attrs}
      className={cn("flex min-h-0 flex-1 flex-col gap-2", className)}
    >
      <div className="flex w-full flex-col gap-2">
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          onClick={onLinkClick}
          className="group relative flex items-center gap-3 rounded-[16px] px-2.5 py-3 text-ink no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {pathname === "/" && (
            <div className="absolute inset-0 z-[-1] rounded-[inherit] bg-neutral-900 shadow-[0_24px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.06)]" />
          )}

          <img
            src="/me.webp"
            alt="Kadir Yazıcı"
            className="size-10 rounded-[11px] object-cover shadow-avatar"
          />
          <span className="min-w-0">
            <span className="block truncate text-[15px] font-semibold leading-5 group-hover:text-yellow-500">Kadir Yazıcı</span>
            <span className="block truncate text-[12px] text-ink-soft">Full-Stack Engineer</span>
          </span>
        </Link>

        <nav
          aria-label="Portfolio"
          className="flex flex-col gap-0.5"
        >
          {navigationLinks.map((link) => (
            <SidebarLink
              key={link.href}
              href={link.href}
              icon={link.icon}
              active={pathname.startsWith(link.href)}
              onClick={onLinkClick}
            >
              {link.name}
            </SidebarLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto flex flex-col">
        <div className="mb-2 h-px w-full bg-neutral-800" />
        {socialLinks.map((link) => (
          <SidebarLink
            key={link.href}
            href={link.href}
            icon={link.icon}
            target={"target" in link ? link.target : undefined}
            active={false}
            onClick={onLinkClick}
          >
            {link.name}
          </SidebarLink>
        ))}
      </div>
    </div>
  )
}
