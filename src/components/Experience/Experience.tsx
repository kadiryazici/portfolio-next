import { Fragment, type ComponentProps } from "react"
import { Section } from "@/components/Section/Section"

const jobs = [
  {
    name: "Seam",
    website: "https://www.seam.co",
    period: "2024/10 — 2026/06",
    role: "Software Developer",
    type: "Full-time · Remote",
    detail: <Fragment>
      Building web components and complex UI systems with Next.js and React — API and state management, performance optimization and refactoring, plus open-source libraries.
      <br />
      <br />
      <strong>Achievements:</strong>
      <br />
      • Reduced page load time from 80 seconds to 10 seconds by parallelizing independent API requests.
      <br />
      • Simplified product searching by implementing an optimized querying algorithm which is cached by default and deliveres lightning fast results.
    </Fragment>,
    stack: "Next.js · React · Web Components · State · Performance",
  },
  {
    name: "Wope",
    website: "https://wope.com",
    period: "2021 — 2024",
    role: "Frontend Developer",
    type: "Full-time · Remote",
    detail: <Fragment>
      Building UI components from scratch, handling animations, writing performant code, and owning app state and logic.
      <br />
      <br />
      <strong>Achievements:</strong>
      <br />
      • Built a component library for the entire company, which is used in all of our products.
      <br />
      • Implemented a new state management system that improved performance and reduced complexity.
      <br />
      • Improved table algorithm by virtualizing rows and columns and multi threaded calculations, which improved performance and reduced complexity.
    </Fragment>,
    stack: "Vue · TypeScript · Pinia · Storybook · SCSS",
  },
  {
    name: "CryptoSea",
    website: null,
    period: "May — Jul 2024",
    role: "Frontend Web Developer",
    type: "Contract · Remote",
    detail:
      "Stripe payments, analytics, backend integration and user management with server-side rendering.",
    stack: "Vue · TypeScript · Qwik · SSR · Stripe",
  },
  {
    name: "House in Korea",
    website: null,
    period: "Jan — Apr 2021",
    role: "Frontend Web Developer",
    type: "Contract · Remote",
    detail:
      "Fetching and displaying houses on a map based on the map view bounds, and building custom mobile-friendly UI elements.",
    stack: "Vue 3 · Composition API · Maps",
  },
  {
    name: "Atlantic International Technology",
    website: "https://atlantic.es",
    period: "Jul — Oct 2019",
    role: "Intern",
    type: "Internship · On-site",
    detail:
      "My first step into the industry as an intern, building and maintaining websites.",
    stack: "WordPress · PHP",
  },
] as const

export type ExperienceProps = ComponentProps<"section">

export function Experience(props: ExperienceProps) {
  return (
    <Section
      {...props}
      id="experience"
      index="01"
      label="Experience"
    >
      <div className="flex flex-col">
        {jobs.map((job) => {
          const body = (
            <>
              <div className="pt-1 font-mono text-[13px] text-ink-soft">
                {job.period}
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="m-0 text-[18px] font-semibold text-ink">
                    {job.name}
                  </h3>
                  {job.website != null && (
                    <span className="shrink-0 text-[13px] text-ink-soft transition-transform group-hover:-translate-y-px group-hover:text-accent">
                      ↗
                    </span>
                  )}
                </div>

                <div className="mt-0.5 text-[14px] text-ink-muted">
                  {job.role} · {job.type}
                </div>

                <p className="mb-0 mt-3 max-w-xl text-[15px]">{job.detail}</p>

                <div className="mt-3 font-mono text-[12px] text-ink-soft">
                  {job.stack}
                </div>
              </div>
            </>
          )

          const rowClass =
            "grid grid-cols-1 gap-2 border-b border-line py-7 no-underline first:pt-0 last:border-b-0 md:grid-cols-[130px_1fr] md:gap-8"

          if (job.website == null) {
            return (
              <div
                key={job.name}
                className={rowClass}
              >
                {body}
              </div>
            )
          }

          return (
            <a
              key={job.name}
              href={job.website}
              target="_blank"
              className={`group ${rowClass} transition-colors hover:bg-surface`}
            >
              {body}
            </a>
          )
        })}
      </div>
    </Section>
  )
}
