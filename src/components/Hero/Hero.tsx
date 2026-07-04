import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export type HeroProps = ComponentProps<"section">

export function Hero(props: HeroProps) {
  const { className, ...attrs } = props

  return (
    <section
      {...attrs}
      id="about"
      className={cn(
        "fade-up scroll-mt-28 pb-16 pt-14 md:pt-20",
        className,
      )}
    >
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
        <div>
          <h1 className="m-0 text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-ink md:text-[52px]">
            Kadir Yazıcı
          </h1>
          <p className="mt-2 font-mono text-[15px] text-accent">
            Software Developer
          </p>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-muted">
            I&apos;m a software developer who mostly works in TypeScript and
            React, but I&apos;m comfortable picking up whatever framework a
            project needs. I care about the small details that make software
            feel calm and reliable to use.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-[15px] font-medium text-white no-underline transition-colors hover:bg-accent-hover"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/kadiryazici"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-2.5 text-[15px] font-medium text-ink no-underline transition-colors hover:border-line-strong hover:bg-surface-hover"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="max-md:-order-1 justify-self-start md:justify-self-auto">
          <img
            src="https://avatars.githubusercontent.com/u/47540799?v=4"
            alt="Kadir Yazıcı"
            className="h-28 w-28 rounded-2xl border border-line object-cover md:h-40 md:w-40"
          />
        </div>
      </div>
    </section>
  )
}
