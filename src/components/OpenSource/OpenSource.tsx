import type { ComponentProps } from "react"
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

export type OpenSourceProps = ComponentProps<"section"> & {
  step: string
}

export function OpenSource(props: OpenSourceProps) {
  const { step, ...attrs } = props

  return (
    <Section
      {...attrs}
      id="open-source"
      step={step}
      label="Open Source"
    >
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-[6px] border border-line bg-surface p-5 no-underline transition-colors hover:border-line-strong hover:bg-surface-hover md:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="m-0 text-[19px] font-semibold text-ink">
                  {project.name}
                </h3>
                <div className="mt-1 font-mono text-[11px] text-ink-soft">
                  {project.subtitle}
                </div>
              </div>

              <span className="shrink-0 pt-0.5 font-mono text-[14px] text-ink-soft transition-transform group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-accent">
                ↗
              </span>
            </div>

            <p className="mb-0 mt-5 max-w-2xl text-[15px] leading-7 text-ink-muted">
              {project.description}
            </p>

            <p className="mb-0 mt-4 max-w-2xl border-t border-line pt-4 text-[14px] leading-6 text-ink-soft">
              {project.purpose}
            </p>

            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[11px] text-ink-soft">
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
