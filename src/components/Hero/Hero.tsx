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
      <p className="mb-3 mt-0 text-[13px] font-medium text-accent">Frontend-Focused Engineer</p>
      <h1 className="m-0 text-[48px] font-semibold leading-none text-ink md:text-[64px]">
        Kadir Yazıcı
      </h1>
      <p className="mt-5 max-w-2xl text-[24px] font-medium leading-8 text-ink-muted md:text-[28px] md:leading-9">
        I build frontend systems for products people rely on.
      </p>

      <p className="mt-8 max-w-xl text-[17px] leading-7 text-ink-muted">
        From accessible interfaces and thoughtful interaction design to performance and complex product workflows,
        I turn ambitious ideas into software that feels clear, fast, and reliable.
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
        <Button
          href="https://linkedin.com/in/kadiryzc"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          title="GitHub"
          variant="icon"
          padding="icon"
          leftIcon={<Icons.Linkedin />}
        />
        <Button
          href="https://x.com/kadiryazicidev"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          title="GitHub"
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
    </section>
  )
}
