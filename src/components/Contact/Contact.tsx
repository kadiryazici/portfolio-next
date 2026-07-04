import type { ComponentProps } from "react"
import { GithubIcon } from "@/components/GithubIcon/GithubIcon"
import { Section } from "@/components/Section/Section"

export type ContactProps = ComponentProps<"section">

export function Contact(props: ContactProps) {
  return (
    <Section
      {...props}
      id="contact"
      index="02"
      label="Contact"
    >
      <p className="m-0 max-w-xl text-[17px] text-ink-muted">
        I keep communication simple. Email is the best place for a direct
        message — I&apos;m happy to talk about work, projects or ideas.
      </p>

      <a
        href="mailto:kyzc411@gmail.com"
        className="group mt-6 inline-flex items-center gap-3 text-[24px] font-semibold tracking-[-0.02em] text-ink no-underline transition-colors hover:text-accent md:text-[30px]"
      >
        kyzc411@gmail.com
        <span className="text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-accent">
          →
        </span>
      </a>

      <div className="mt-8">
        <a
          href="https://github.com/kadiryazici"
          target="_blank"
          className="group inline-flex items-center gap-2.5 text-ink no-underline transition-colors hover:text-accent"
        >
          <GithubIcon className="h-5 w-5" />
          <span className="font-mono text-[15px]">kadiryazici</span>
        </a>
      </div>
    </Section>
  )
}
