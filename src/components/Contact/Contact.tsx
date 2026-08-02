import type { ComponentProps } from "react"
import { AppIcon } from "@/components/AppIcon/AppIcon"
import { GithubIcon } from "@/components/GithubIcon/GithubIcon"
import { cn } from "@/lib/utils"

export type ContactProps = ComponentProps<"section">

export function Contact(props: ContactProps) {
  const { className, ...attrs } = props

  return (
    <section
      {...attrs}
      id="contact"
      className={cn("border-t border-line py-14 md:py-16", className)}
    >
      <h2 className="mb-0 mt-0 text-[13px] font-semibold uppercase text-ink-soft">Direct channels</h2>
      <p className="mb-0 mt-5 max-w-xl text-[17px] leading-7 text-ink-muted">
        I keep communication simple. Email is the best place for a direct
        message — I&apos;m happy to talk about work, projects or ideas.
      </p>

      <div className="mt-9 overflow-hidden rounded-[8px] bg-surface shadow-control">
        <a
          href="mailto:kyzc411@gmail.com"
          className="group flex items-center gap-3 px-4 py-3.5 text-ink no-underline hover:bg-surface-hover"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-[8px] bg-accent text-white">
            <AppIcon
              name="contact"
              className="size-4"
            />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[14px] font-medium">Email</span>
            <span className="block truncate text-[12px] text-ink-soft">kyzc411@gmail.com</span>
          </span>
          <AppIcon
            name="chevron"
            className="size-3.5 text-ink-soft group-hover:text-accent"
          />
        </a>

        <div className="ml-15 border-t border-line" />

        <a
          href="https://github.com/kadiryazici"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 px-4 py-3.5 text-ink no-underline hover:bg-surface-hover"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-[8px] bg-ink text-white">
            <GithubIcon className="size-4" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[14px] font-medium">GitHub</span>
            <span className="block truncate text-[12px] text-ink-soft">github.com/kadiryazici</span>
          </span>
          <AppIcon
            name="arrow"
            className="size-3.5 text-ink-soft group-hover:text-accent"
          />
        </a>
      </div>
    </section>
  )
}
