import type { ComponentProps } from "react"
import { AppIcon } from "@/components/AppIcon/AppIcon"
import { Button } from "@/components/Button/Button"
import { GithubIcon } from "@/components/GithubIcon/GithubIcon"
import { LinkCard } from "@/components/LinkCard/LinkCard"
import { cn } from "@/lib/utils"
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
        <p className="mb-3 mt-0 text-[13px] font-medium text-accent">Full-Stack Engineer</p>
        <h1 className="m-0 text-[48px] font-bold leading-none text-ink md:text-[64px]">
          Kadir Yazıcı
        </h1>

        <p className="mt-5 max-w-2xl text-[24px] font-medium leading-8 text-ink-muted md:text-[28px] md:leading-9">
          I build full-stack systems for products people rely on.
        </p>

        <p className="mt-8 max-w-xl text-[17px] leading-7 text-ink-muted">
          From accessible interfaces and thoughtful interaction design to performance and complex product workflows,
          I turn ambitious ideas into software that feels clear, fast, and reliable.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-2.5">
          <Button
            href={"mailto:kyzc411@gmail.com"}
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
          <Button
            href="https://linkedin.com/in/kadiryzc"
            target="_blank"
            rel="noreferrer"
            aria-label="Linkedin profile"
            title="Linkedin"
            variant="icon"
            padding="icon"
            leftIcon={<Icons.Linkedin />}
          />
          <Button
            href="https://x.com/kadiryazicidev"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter profile"
            title="X / Twitter"
            variant="icon"
            padding="icon"
            leftIcon={<Icons.TwitterX />}
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
