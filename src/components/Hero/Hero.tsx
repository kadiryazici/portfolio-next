import type { ComponentProps } from "react"
import { AppIcon } from "@/components/AppIcon/AppIcon"
import { GithubIcon } from "@/components/GithubIcon/GithubIcon"
import { cn } from "@/lib/utils"

export type HeroProps = ComponentProps<"section">

export function Hero(props: HeroProps) {
  const { className, ...attrs } = props

  return (
    <section
      {...attrs}
      id="about"
      className={cn(
        "pb-20 pt-10 md:pb-28 md:pt-16",
        className,
      )}
    >
      <div className="max-w-3xl">
        <p className="mb-3 mt-0 text-[13px] font-medium text-accent">Software Developer</p>
        <h1 className="m-0 text-[48px] font-semibold leading-none text-ink md:text-[64px]">
          Kadir Yazıcı
        </h1>
        <p className="mt-5 max-w-2xl text-[24px] font-medium leading-8 text-ink-muted md:text-[28px] md:leading-9">
          I build software that feels considered, calm and reliable to use.
        </p>

        <p className="mt-8 max-w-xl text-[17px] leading-7 text-ink-muted">
          I mostly work in TypeScript and React, but I&apos;m comfortable picking up whatever framework a project
          needs. I care about thoughtful product decisions, maintainable systems and the details people notice while
          using software every day.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-2.5">
          <a
            href="/projects"
            className={cn(
              "inline-flex h-10 items-center gap-2 rounded-[9px] bg-accent px-4",
              "text-[14px] font-medium text-white no-underline hover:bg-accent-hover",
            )}
          >
            <AppIcon
              name="projects"
              className="size-4"
            />
            View projects
          </a>
          <a
            href="/contact"
            className={cn(
              "inline-flex h-10 items-center gap-2 rounded-[9px] bg-surface px-4 shadow-control",
              "text-[14px] font-medium text-ink no-underline hover:bg-surface-hover",
            )}
          >
            <AppIcon
              name="contact"
              className="size-4"
            />
            Contact me
          </a>
          <a
            href="https://github.com/kadiryazici"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-[9px] bg-surface shadow-control",
              "text-ink no-underline",
            )}
          >
            <GithubIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
