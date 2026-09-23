import { Button } from "@/components/Button/Button"
import { LinkCard } from "@/components/LinkCard/LinkCard"
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
      <figure
        className="relative aspect-[1280/340] w-full"
      >
        <img
          src="/me-banner-wide.webp"
          alt="Kadir Yazıcı with a bicycle beside a lake"
          className="left-0 absolute top-0 z-0 h-auto rounded-[12px] object-cover object-top"
          style={{
            maskImage: "linear-gradient(27deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1) 100%)",
            WebkitMaskImage: "linear-gradient(27deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1) 100%)",
          }}
        />
      </figure>

      <div className="relative z-10">
        <p className="mb-2 mt-0 text-[13px] font-medium text-accent">{portfolioHome.role}</p>
        <h1 className="m-0 text-[32px] font-bold leading-none text-ink md:text-[64px]">
          {portfolioHome.title}
        </h1>

        <p className="mt-4 max-w-2xl text-[24px] font-medium leading-8 text-ink-muted md:text-[28px] md:leading-9">
          {portfolioHome.tagline}
        </p>

        <p className="mt-8 max-w-xl text-[16px] md:text-[18px] leading-7 text-ink-muted">
          {portfolioHome.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-2.5">
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

        <LinkCard
          href="/experience"
          className="mt-14 mt-8"
          icon={
            <Icons.StarDuotone />
          }
          title="Wanna See What I've Built?"
        />
      </div>
    </section>
  )
}
