import { Button } from "@/components/Button/Button"
import { LinkCard } from "@/components/LinkCard/LinkCard"
import { MePic } from "@/components/MePic/MePic"
import { Constants } from "@/constants"
import { portfolioHome } from "@/lib/portfolio"
import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"
import { Icons } from "../Icons"

export type HeroProps = ComponentProps<"section">

export function Hero(props: HeroProps) {
  const { className, ...attrs } = props

  return (
    <section
      {...attrs}
      id="about"
      className={cn(
        "pb-12 pt-8 md:pb-16 md:pt-12",
        className,
      )}
    >
      <div className="w-full flex flex-nowrap justify-center">
        <MePic className="shrink-0 mb-4" />
      </div>

      <div className="text-center starting:blur-sm starting:opacity-0 duration-1000 transition-all delay-1000 relative z-10">
        <p className="mb-2 mt-0 text-[13px] font-medium text-accent">{portfolioHome.role}</p>
        <h1 className="m-0 text-[32px] font-bold leading-none text-ink md:text-[64px]">
          {portfolioHome.title}
        </h1>

        <p className="mt-4 text-center mx-auto max-w-xl text-[16px] md:text-[18px] leading-7 text-ink-muted">
          {portfolioHome.description}
        </p>

        <div className="mt-4 flex justify-center flex-wrap items-center gap-2.5">
          <Button
            href={`mailto:${Constants.email}`}
            variant="secondary"
            padding="md"
            leftIcon={
              <Icons.Message className="text-2xl" />
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
            leftIcon={<Icons.Github className="text-xl" />}
          />
          <Button
            href="https://linkedin.com/in/kadiryzc"
            target="_blank"
            rel="noreferrer"
            aria-label="Linkedin profile"
            title="Linkedin"
            variant="icon"
            padding="icon"
            leftIcon={<Icons.Linkedin className="text-xl" />}
          />
          <Button
            href={Constants.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter profile"
            title="X / Twitter"
            variant="icon"
            padding="icon"
            leftIcon={<Icons.TwitterX className="text-xl" />}
          />
        </div>
      </div>

      <LinkCard
        href="/experience"
        className="mt-8 starting:blur-sm starting:[transform:translateY(24px)] starting:opacity-0 duration-1000 delay-1400 transition-all"
        icon={
          <Icons.StarDuotone />
        }
        title="Wanna See What I've Built?"
      />
    </section>
  )
}
