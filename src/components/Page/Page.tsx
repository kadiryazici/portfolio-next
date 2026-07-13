import type { ComponentProps, ReactNode } from "react"
import { GithubIcon } from "@/components/GithubIcon/GithubIcon"
import { cn } from "@/lib/utils"

export type PageProps = ComponentProps<"div"> & {
  pathname: string
  children: ReactNode
}

const links = [
  { name: "About", href: "/" },
  { name: "Blog", href: "/blog" },
] as const

export function Page(props: PageProps) {
  const { pathname, children, className, ...attrs } = props

  return (
    <div
      {...attrs}
      className={cn(
        "mx-auto w-full max-w-4xl px-[12px] min-h-screen",
        className,
      )}
    >
      <header className="z-30 flex items-center justify-between gap-6 rounded-xl border border-line bg-bg/70 px-4 py-3 backdrop-blur-xl sticky top-4">
        <a
          href="/"
          className="flex items-center gap-2.5 no-underline"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-surface font-mono text-[13px] font-medium text-ink">
            ky
          </span>
          <span className="font-mono text-[13px] text-ink-muted">
            kadiryazici.dev
          </span>
        </a>

        <nav
          aria-label="Sections"
          className="flex items-center gap-1 text-[14px]"
        >
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href)

            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-1.5 no-underline transition-colors",
                  isActive
                    ? "text-ink"
                    : "text-ink-soft hover:text-ink-muted",
                )}
              >
                {link.name}
              </a>
            )
          })}
        </nav>
      </header>

      <article className="lg:px-[64px]">
        {children}
      </article>

      <footer className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-line pb-10 pt-8 text-center font-mono text-[12px] text-ink-soft md:flex-row md:text-left">
        <span>© {new Date().getFullYear()} Kadir Yazıcı</span>

        <a
          href="https://github.com/kadiryazici"
          target="_blank"
          className="inline-flex items-center gap-2 text-ink-soft no-underline transition-colors hover:text-ink"
        >
          <GithubIcon className="h-4 w-4" />
          kadiryazici
        </a>
      </footer>
    </div>
  )
}
