import { ContentHeader } from "@/components/ContentHeader/ContentHeader"
import { OpenSource } from "@/components/OpenSource/OpenSource"
import { Page } from "@/components/Page/Page"
import { PageMain } from "@/components/PageMain/PageMain"
import { Projects } from "@/components/Projects/Projects"

export const metadata = {
  title: "Projects — Kadir Yazıcı",
  description: "Selected products and open-source projects by Kadir Yazıcı.",
  alternates: {
    canonical: "/projects",
  },
}

export default function ProjectsPage() {
  return (
    <Page
      pathname="/projects"
      title="Projects"
    >
      <PageMain>
        <ContentHeader
          eyebrow="Selected work"
          title="Products and tools built with intent."
        />
        <Projects />
        <OpenSource />
      </PageMain>
    </Page>
  )
}
