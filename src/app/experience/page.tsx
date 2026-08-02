import { Experience } from "@/components/Experience/Experience"
import { ExperienceCard } from "@/components/ExperienceCard/ExperienceCard"
import { Page } from "@/components/Page/Page"

export const metadata = {
  title: "Experience — Kadir Yazıcı",
  description: "Work history and software development experience.",
}

export default function ExperiencePage() {
  return (
    <Page
      pathname="/experience"
      title="Experience"
    >
      <main className="mx-auto w-full max-w-[980px] px-5 pb-20 md:px-8 lg:px-12">
        <header className="pb-12 pt-8 md:pb-16 md:pt-12">
          <p className="mb-3 mt-0 text-[13px] font-medium text-accent">Work</p>
          <h1 className="m-0 max-w-2xl text-[40px] font-semibold leading-[1.05] text-ink md:text-[48px]">
            Experience shaped by product work.
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-7 text-ink-muted">
            Building reliable interfaces, design systems and performance-sensitive products across teams and
            platforms.
          </p>
        </header>

        <ExperienceCard
          className="w-full"
          tags={["Next.js", "React", "Web Components", "Open Source", "State Management", "Performance"]}
          videoUrls={[
            "/videos/seam/seam-3.webm",
            "/videos/seam/seam-1.webm",
          ]}
          title="Seam"
          subtitle="Software Developer - Full Time"
          fromTo={["2024/10", "2026/08"]}
          logoUrl="/logos/seam.png"
          description={
            <>
              Building web components and complex UI systems with Next.js and React — API and state management, performance optimization and refactoring, plus open-source libraries.

              Achievements:
              • Reduced page load time from 80 seconds to 10 seconds by parallelizing independent API requests.
              • Simplified product searching by implementing an optimized querying algorithm for lightning fast results and caching.
            </>
          }
        />

        <ExperienceCard
          className="w-full"
          tags={["Next.js", "React", "Web Components", "Open Source", "State Management", "Performance"]}
          videoUrls={[
            "/videos/wope/wope-1.mov",
            "/videos/wope/wope-2.mov",
            "/videos/wope/wope-3.mov",
            "/videos/wope/wope-4.mov",
            "/videos/wope/wope-5.mov",
          ]}
          title="Wope"
          subtitle="Frontend Developer - Full Time"
          fromTo={["2021/09", "2024/10"]}
          logoUrl="/logos/wope.png"
          description={
            <>
              Building UI components from scratch, handling animations, writing performant code, and owning app state and logic.

              Achievements:
              • Built a component library for the entire company.
              • Implemented a new state management system with Pinia, which improved performance and reduced complexity.
              • Improved large-table performance by virtualizing rows and columns and moving expensive calculations to Web Workers.
            </>
          }
        />


        <Experience />
      </main>
    </Page>
  )
}
