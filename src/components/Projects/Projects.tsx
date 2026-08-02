import type { ComponentProps } from "react"
import { AppIcon } from "@/components/AppIcon/AppIcon"
import { Section } from "@/components/Section/Section"
import { cn } from "@/lib/utils"

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

export type ProjectsProps = ComponentProps<"section">

export function Projects(props: ProjectsProps) {
  const { ...attrs } = props

  return (
    <Section
      {...attrs}
      id="projects"
      label="Selected project"
    >
      <div className="flex flex-col">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "group grid gap-7 border-y border-line py-7 text-ink no-underline",
              "md:grid-cols-[minmax(0,1fr)_280px] md:items-center md:gap-10",
            )}
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  {project.logoImage != null && (
                    <img
                      src={project.logoImage}
                      alt=""
                      className="size-10 rounded-[9px] shadow-control"
                    />
                  )}

                  <div>
                    <h3 className="m-0 text-[20px] font-semibold text-ink">
                      {project.name}
                    </h3>
                    <div className="mt-1 text-[12px] text-ink-soft">
                      {project.subtitle}
                    </div>
                  </div>
                </div>

                <AppIcon
                  name="arrow"
                  className="size-4 shrink-0 text-ink-soft group-hover:text-accent"
                />
              </div>

              <p className="mb-0 mt-5 text-[15px] leading-6 text-ink-muted">
                {project.description}
              </p>

              <p className="mb-0 mt-3 text-[14px] leading-6 text-ink-soft">
                {project.purpose}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-[11px] font-medium text-ink-soft">
                {project.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <img
              src={project.image}
              alt={`${project.name} application interface`}
              className="aspect-[992/794] w-full rounded-[8px] object-cover object-left-top shadow-project"
            />
          </a>
        ))}
      </div>
    </Section>
  )
}
