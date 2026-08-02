import type { ComponentProps } from "react"
import { ProjectCard } from "@/components/ProjectCard/ProjectCard"
import { Section } from "@/components/Section/Section"

const projects = [
  {
    name: "Bottom Sheet Vue 3",
    description:
      "A touch-supported bottom sheet component library for Vue 3, designed for mobile-friendly interfaces.",
    purpose:
      "Created in the pre-shadcn era as a focused, reusable UI primitive with swipe gestures, slots, teleporting, and configurable behavior.",
    website: "https://github.com/kadiryazici/bottom-sheet-vue3",
    stack: ["Vue 3", "TypeScript", "SCSS", "Vite"],
    subtitle: "Vue component library",
  },
  {
    name: "Auto Namespace Imports",
    description:
      "A VS Code extension that makes TypeScript namespace imports easier to discover and insert through autocomplete.",
    purpose:
      "It suggests namespace imports for workspace files and packages, supports custom aliases, and respects TypeScript path resolution settings.",
    website: "https://github.com/kadiryazici/typescript-namespace-imports-vscode-plugin",
    stack: ["TypeScript", "VS Code API", "Autocomplete", "tsconfig"],
    subtitle: "VS Code extension",
  },
  {
    name: "Wowerlay",
    description:
      "A popover library for Vue 3 applications, powered by Floating UI.",
    purpose:
      "It provides scoped overlays, transitions, and lifecycle-aware mounting for floating Vue components.",
    website: "https://github.com/wopehq/wowerlay",
    stack: ["Vue 3", "TypeScript", "Floating UI", "Popovers"],
    subtitle: "Vue popover library",
  },
  {
    name: "Vue 3 Replacer",
    description:
      "A focused text replacer component for Vue 3 applications.",
    purpose:
      "Built as a small, reusable interface primitive for text replacement workflows.",
    website: "https://github.com/kadiryazici/vue3-replacer",
    stack: ["Vue 3", "TypeScript", "Vite", "Component Library"],
    subtitle: "Vue component library",
  },
] as const

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
        {projects.map((project) => (
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
