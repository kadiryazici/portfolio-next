import type { ComponentProps } from "react"
import { Section } from "@/components/Section/Section"

const projects = [
  {
    name: "Gitification",
    description:
      "A lightweight desktop menubar app for managing GitHub notifications without leaving your workflow.",
    purpose:
      "It brings releases, subscriptions, and CI activity into one quiet, glanceable interface.",
    image: "/projects/gitification.png",
    website: "https://github.com/Gitification-App/gitification",
    stack: ["Vue", "TypeScript", "Rust", "Tauri", "Tailwind CSS"],
    logoImage: "/projects/gitification-logo.png",
    subtitle: "Desktop product",
  },
] as const

export type ProjectsProps = ComponentProps<"section"> & {
  step: string
}

export function Projects(props: ProjectsProps) {
  const { step, ...attrs } = props

  return (
    <Section
      {...attrs}
      id="projects"
      step={step}
      label="Projects"
    >
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className="group grid overflow-hidden rounded-[6px] border border-line bg-surface no-underline transition-colors hover:border-line-strong hover:bg-surface-hover"
          >
            <div className="p-5 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  {project.logoImage != null && (
                    <img
                      src={project.logoImage}
                      alt=""
                      className="size-9 rounded-[8px]"
                    />
                  )}

                  <div>
                    <h3 className="m-0 text-[19px] font-semibold text-ink">
                      {project.name}
                    </h3>
                    <div className="mt-1 font-mono text-[11px] text-ink-soft">
                      {project.subtitle}
                    </div>
                  </div>
                </div>

                <span className="shrink-0 pt-0.5 font-mono text-[14px] text-ink-soft transition-transform group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-accent">
                  ↗
                </span>
              </div>

              <p className="mb-0 mt-5 text-[15px] leading-7 text-ink-muted">
                {project.description}
              </p>

              <p className="mb-0 mt-4 border-t border-line pt-4 text-[14px] leading-6 text-ink-soft">
                {project.purpose}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[11px] text-ink-soft">
                {project.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
