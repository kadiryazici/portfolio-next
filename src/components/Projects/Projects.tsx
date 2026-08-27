import type { ComponentProps } from "react"
import { ProjectCard } from "@/components/ProjectCard/ProjectCard"
import { featuredProjects } from "@/lib/portfolio"
import { cn } from "@/lib/utils"

export type ProjectsProps = ComponentProps<"section">

export function Projects(props: ProjectsProps) {
  const { className, ...attrs } = props

  return (
    <section
      {...attrs}
      id="projects"
      className={cn("flex flex-col gap-8 *:mx-auto", className)}
    >
      {featuredProjects.map((project) => (
        <ProjectCard
          key={project.name}
          href={project.website}
          target="_blank"
          rel="noreferrer"
          className="w-full"
          imageUrl={project.image}
          logoUrl={project.logoImage}
          title={project.name}
          subtitle={project.subtitle}
          description={project.description}
          purpose={project.purpose}
          tags={project.stack}
        />
      ))}
    </section>
  )
}
