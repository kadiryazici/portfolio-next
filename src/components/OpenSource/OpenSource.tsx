import type { ComponentProps } from "react"
import { AppIcon } from "@/components/AppIcon/AppIcon"
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
      <div className="flex flex-col">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className="group block border-t border-line py-7 text-ink no-underline first:border-t-0"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="m-0 text-[19px] font-semibold text-ink">
                  {project.name}
                </h3>
                <div className="mt-1 text-[12px] text-ink-soft">
                  {project.subtitle}
                </div>
              </div>

              <AppIcon
                name="arrow"
                className="size-4 shrink-0 text-ink-soft group-hover:text-accent"
              />
            </div>

            <p className="mb-0 mt-5 max-w-2xl text-[15px] leading-7 text-ink-muted">
              {project.description}
            </p>

            <p className="mb-0 mt-3 max-w-2xl text-[14px] leading-6 text-ink-soft">
              {project.purpose}
            </p>

            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-[11px] font-medium text-ink-soft">
              {project.stack.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
