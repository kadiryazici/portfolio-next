import { Fragment, type ComponentProps } from "react"
import { AppIcon } from "@/components/AppIcon/AppIcon"
import { Section } from "@/components/Section/Section"
import { cn } from "@/lib/utils"

const jobs = [
  {
    name: "Seam",
    website: "https://www.seam.co",
    period: "2024/10 — 2026/06",
    role: "Software Developer",
    type: "Full-time · Remote",
    detail: <Fragment>
      Building web components and complex UI systems with Next.js and React — API and state management,
      performance optimization and refactoring, plus open-source libraries.
      <br />
      <br />
      <strong>Achievements:</strong>
      <br />
      • Reduced page load time from 80 seconds to 10 seconds by parallelizing independent API requests.
      <br />
      • Simplified product searching by implementing an optimized querying algorithm for lightning fast results
      and caching.
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
      • Built a component library for the entire company.
      <br />
      • Implemented a new state management system with Pinia, which improved performance and reduced complexity.
      <br />
      • Improved large-table performance by virtualizing rows and columns and moving expensive calculations to Web
      Workers.
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
  const { ...attrs } = props

  return (
    <Section
      {...attrs}
      id="experience"
      label="Work history"
    >
      <div className="flex flex-col">
        {jobs.map((job) => {
          const body = (
            <>
              <div className="pt-0.5 text-[13px] text-ink-soft">
                {job.period}
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="m-0 text-[19px] font-semibold text-ink">
                    {job.name}
                  </h3>
                  {job.website != null && (
                    <AppIcon
                      name="arrow"
                      className="size-4 shrink-0 text-ink-soft group-hover:text-accent"
                    />
                  )}
                </div>

                <div className="mt-1 text-[14px] text-ink-muted">
                  {job.role} · {job.type}
                </div>

                <p className="mb-0 mt-4 max-w-2xl text-[15px] leading-6">{job.detail}</p>

                <div className="mt-4 text-[12px] text-ink-soft">
                  {job.stack}
                </div>
              </div>
            </>
          )

          const rowClass = cn(
            "grid gap-3 border-t border-line py-7 no-underline first:border-t-0",
            "md:grid-cols-[150px_1fr] md:gap-8",
          )

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
              rel="noreferrer"
              className={cn(
                "group",
                rowClass,
                "hover:text-ink",
              )}
            >
              {body}
            </a>
          )
        })}
      </div>
    </Section>
  )
}
