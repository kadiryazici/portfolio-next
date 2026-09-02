import { featuredProjects, openSourceProjects } from "../../../../src/lib/portfolio"
import { markdownStyle } from "../../terminal"

type TerminalProject = {
  description: string
  name: string
  purpose: string
  stack: readonly string[]
  subtitle: string
  website: string
}

export function ProjectsPage() {
  return (
    <box
      border
      borderColor="#3f3f46"
      borderStyle="rounded"
      flexDirection="column"
      flexGrow={1}
      minWidth={0}
      padding={1}
    >
      <box border={["bottom"]} borderColor="#3f3f46" flexDirection="column">
        <text fg="#fafafa" wrapMode="word">
          <strong>Products and tools built with intent.</strong>
        </text>
        <text fg="#a1a1aa" marginTop={1}>
          kadir@portfolio:~$ cat projects.md
        </text>
      </box>

      <scrollbox
        focused
        marginTop={1}
        scrollY
        style={{
          viewportOptions: { backgroundColor: "#09090b" },
          scrollbarOptions: {
            trackOptions: {
              backgroundColor: "#18181b",
              foregroundColor: "#facc15",
            },
          },
        }}
      >
        <ProjectSection label="Selected work" projects={featuredProjects} />
        <ProjectSection label="Open source" projects={openSourceProjects} />
      </scrollbox>
    </box>
  )
}

function ProjectSection(props: { label: string; projects: readonly TerminalProject[] }) {
  const { label, projects } = props

  return (
    <box flexDirection="column" marginBottom={1}>
      <text fg="#fafafa" marginBottom={1}>
        <strong>{label}</strong>
      </text>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </box>
  )
}

function ProjectCard(props: { project: TerminalProject }) {
  const { project } = props

  return (
    <box
      flexDirection="column"
      marginBottom={1}
      padding={1}
      width="100%"
    >
      <text fg="#fafafa" wrapMode="word">
        <strong>{project.name}</strong>
      </text>
      <text fg="#a1a1aa" marginTop={1}>
        {project.subtitle}
      </text>
      <markdown
        conceal
        content={getProjectContent(project)}
        marginTop={1}
        syntaxStyle={markdownStyle}
        width="100%"
      />
    </box>
  )
}

function getProjectContent(project: TerminalProject) {
  return `${project.description}

${project.purpose}

**Stack:** ${project.stack.join(", ")}
**URL:** ${project.website}`
}
