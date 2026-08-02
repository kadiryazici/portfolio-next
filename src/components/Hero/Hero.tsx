import type { ComponentProps } from "react"
import { AppIcon } from "@/components/AppIcon/AppIcon"
import { Button } from "@/components/Button/Button"
import { GithubIcon } from "@/components/GithubIcon/GithubIcon"
import { LinkCard } from "@/components/LinkCard/LinkCard"
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
          <Button
            href="/contact"
            variant="secondary"
            padding="md"
            leftIcon={
              <AppIcon
                name="contact"
                className="size-4"
              />
            }
          >
            Contact me
          </Button>
          <Button
            href="https://github.com/kadiryazici"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
            variant="icon"
            padding="icon"
            leftIcon={<GithubIcon className="size-4" />}
          />
        </div>

        <LinkCard
          href="/experience"
          className="mt-14"
          icon={
            <AppIcon
              name="experience"
              className="size-5"
            />
          }
          title="Wanna See What I've Built?"
        />
      </div>
    </section>
  )
}
