import { OpenSource } from "@/components/OpenSource/OpenSource"
import { Page } from "@/components/Page/Page"
import { Projects } from "@/components/Projects/Projects"

export const metadata = {
  title: "Projects — Kadir Yazıcı",
  description: "Selected products and open-source projects by Kadir Yazıcı.",
}

export default function ProjectsPage() {
  return (
    <Page
      pathname="/projects"
      title="Projects"
    >
      <main className="mx-auto w-full max-w-[980px] px-5 pb-20 md:px-8 lg:px-12">
        <header className="pb-12 pt-8 md:pb-16 md:pt-12">
          <p className="mb-3 mt-0 text-[13px] font-medium text-accent">Selected work</p>
          <h1 className="m-0 max-w-2xl text-[40px] font-semibold leading-[1.05] text-ink md:text-[48px]">
            Products and tools built with intent.
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-7 text-ink-muted">
            A small selection of product work, desktop software and open-source tools.
          </p>
        </header>
        <Projects />
        <OpenSource />
      </main>
    </Page>
  )
}
