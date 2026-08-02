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

        <div className="flex flex-col gap-8 *:mx-auto">
          <ExperienceCard
            className="w-full"
            tags={["Next.js", "Strapi", "Web Components", "Zustand", "Accessibility", "Performance"]}
            videoUrls={[
              "/videos/seam/seam-1.mov",
              "/videos/seam/seam-2.mov",
            ]}
            title="Seam"
            subtitle="Software Developer - Full Time"
            fromTo={["2024/10", "2026/08"]}
            logoUrl="/logos/seam.webp"
            description={
              <Fragment>
                Building web components and complex UI systems with Next.js and React — API and state management,
                performance optimization and refactoring, plus open-source libraries.
                <br />
                <br />
                <strong>Achievements:</strong>
                <br />
                • Recreated the marketing website frontend with Next.js and Strapi.
                <br />
                • Implemented Strapi integration and API endpoints.
                <br />
                • Optimized the marketing network through caching, reducing load times by 80%.
                <br />
                • Developed reusable Web Components for customers.
                <br />
                • Handled state management with Zustand.
                <br />
                • Implemented accessible UI components.
                <br />
                • Resolved performance issues in the dashboard application.
              </Fragment>
            }
          />

          <ExperienceCard
            className="w-full"
            tags={["Vue", "AG Grid", "Web Workers", "Pinia", "Onboarding", "Network Optimization"]}
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
                • Built a comprehensive UI component library from scratch with Vue.
                <br />
                • Implemented performant table rendering with AG Grid virtualization.
                <br />
                • Used Web Workers to improve table performance.
                <br />
                • Handled state management with Pinia.
                <br />
                • Implemented onboarding for new customers.
                <br />
                • Implemented custom network handling to improve performance and optimize requests.
              </Fragment>
            }
          />

          <ExperienceCard
            className="w-full"
            tags={["Vue", "TypeScript", "Qwik", "SSR", "Stripe"]}
            videoUrls={["/videos/cryptosea/cryptosea-1.mov"]}
            title="CryptoSea"
            subtitle="Frontend Web Developer - Contract"
            fromTo={["2024/05", "2024/07"]}
            logoUrl="/logos/cryptosea.jpg"
            description={
              <Fragment>
                Building payment, analytics, backend integration, and user management flows with server-side rendering.
                <br />
                <br />
                <strong>Achievements:</strong>
                <br />
                • Implemented Stripe payment flows.
                <br />
                • Integrated analytics and backend APIs.
                <br />
                • Built user management flows.
                <br />
                • Implemented server-side rendering with Qwik.
              </Fragment>
            }
          />
        </div>


        {/*<Experience />*/}
      </main>
    </Page>
  )
}
