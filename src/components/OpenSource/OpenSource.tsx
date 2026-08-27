import type { ComponentProps } from "react"
import { ProjectCard } from "@/components/ProjectCard/ProjectCard"
import { Section } from "@/components/Section/Section"
import { openSourceProjects } from "@/lib/portfolio"

export type OpenSourceProps = ComponentProps<"section">

export function OpenSource(props: OpenSourceProps) {
  const { ...attrs } = props

  return (
    <Section
      {...attrs}
      id="open-source"
      label="Open Source"
    >
      <div className="flex flex-col gap-8 *:mx-auto">
        {openSourceProjects.map((project) => (
          <ProjectCard
            key={project.name}
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className="w-full"
            title={project.name}
            subtitle={project.subtitle}
            description={project.description}
            purpose={project.purpose}
            tags={project.stack}
          />
        ))}
      </div>
    </Section>
  )
}
