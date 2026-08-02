import type { ComponentProps } from "react"
import { ProjectCard } from "@/components/ProjectCard/ProjectCard"
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
  const { className, ...attrs } = props

  return (
    <section
      {...attrs}
      id="projects"
      className={cn("flex flex-col gap-8 *:mx-auto", className)}
    >
      {projects.map((project) => (
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
