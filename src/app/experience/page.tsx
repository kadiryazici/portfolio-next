import { AppIcon } from "@/components/AppIcon/AppIcon"
import { ContentHeader } from "@/components/ContentHeader/ContentHeader"
import { ExperienceCard } from "@/components/ExperienceCard/ExperienceCard"
import { LinkCard } from "@/components/LinkCard/LinkCard"
import { PageMain } from "@/components/PageMain/PageMain"
import { Fragment } from "react/jsx-runtime"

export const metadata = {
  title: "Experience — Kadir Yazıcı",
  description: "Work history and software development experience.",
  alternates: {
    canonical: "/experience",
  },
}

export default function ExperiencePage() {
  return (
    <PageMain>
      <ContentHeader
        eyebrow="Experience"
        title="Experience shaped by product work."
      />

      <div className="flex flex-col gap-8 *:mx-auto">
        <ExperienceCard
          className="w-full"
          tags={["Next.js", "Strapi", "Web Components", "Zustand", "Accessibility", "Performance"]}
          videoUrls={[
            ["/videos/seam/seam-2.webm", "/videos/seam/seam-2.mp4"],
            ["/videos/seam/seam-1.webm", "/videos/seam/seam-1.mp4"],
          ]}
          title="Seam"
          subtitle="Software Developer - Full Time"
          fromTo={["2024/10", "2026/08"]}
          logoUrl="/logos/seam.webp"
          description={
            <Fragment>
              Building web components and complex UI systems with Next.js and React. API and state management,
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
              • Implemented accessible UI components for the dashboard application.
              <br />
              • Implemented animated UI visuals and graphics.
              <br />
              • Resolved performance issues in the dashboard application.
              <br />
              • Fixed minor bugs in Back-End endpoints.
            </Fragment>
          }
        />

        <ExperienceCard
          className="w-full"
          tags={["Vue", "AG Grid", "Web Workers", "Pinia", "Onboarding", "Network Optimization", "Stripe"]}
          videoUrls={[
            ["/videos/wope/wope-1.webm", "/videos/wope/wope-1.mp4"],
            ["/videos/wope/wope-2.webm", "/videos/wope/wope-2.mp4"],
            ["/videos/wope/wope-3.webm", "/videos/wope/wope-3.mp4"],
            ["/videos/wope/wope-4.webm", "/videos/wope/wope-4.mp4"],
            ["/videos/wope/wope-5.webm", "/videos/wope/wope-5.mp4"],
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
              • Implemented Stripe payment flows.
              <br />
              • Implemented custom network handling to improve performance and optimize requests.
            </Fragment>
          }
        />

        <ExperienceCard
          className="w-full"
          tags={["Vue", "TypeScript", "Qwik", "SSR", "Stripe"]}
          videoUrls={[["/videos/cryptosea/cryptosea-1.webm", "/videos/cryptosea/cryptosea-1.mp4"]]}
          title="CryptoSea"
          subtitle="Frontend Web Developer - Contract"
          fromTo={["2024/04", "2024/07"]}
          logoUrl="/logos/cryptosea.jpg"
          description={
            <Fragment>
              Building payment, analytics, backend integration, and user management flows.
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

      <LinkCard
        href="/projects"
        className="mx-auto mt-8"
        icon={
          <AppIcon
            name="projects"
            className="size-5"
          />
        }
        title="Wanna See My Own Projects?"
      />


      {/*<Experience />*/}
    </PageMain>
  )
}
