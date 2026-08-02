import { Experience } from "@/components/Experience/Experience"
import { ExperienceCard } from "@/components/ExperienceCard/ExperienceCard"
import { Page } from "@/components/Page/Page"
import { Fragment } from "react/jsx-runtime"

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
          <h1 className=" max-w-[700px] mx-auto m-0 max-w-2xl text-[40px] font-semibold leading-[1.05] text-ink md:text-[48px]">
            Experience shaped by product work.
          </h1>
        </header>

        <div className="flex flex-col gap-16 *:mx-auto">
          <ExperienceCard
            className="w-full"
            tags={["Next.js", "React", "Web Components", "Open Source", "State Management", "Performance"]}
            videoUrls={[
              "/videos/seam/seam-1.mov",
              "/videos/seam/seam-2.mov",
            ]}
            title="Seam"
            subtitle="Software Developer - Full Time"
            fromTo={["2024/10", "2026/08"]}
            logoUrl="/logos/seam.png"
            description={
              <Fragment>
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
              </Fragment>
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
              <Fragment>
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
              </Fragment>
            }
          />
        </div>


        {/*<Experience />*/}
      </main>
    </Page>
  )
}
