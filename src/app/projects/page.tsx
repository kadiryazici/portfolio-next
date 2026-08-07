import { ContentHeader } from "@/components/ContentHeader/ContentHeader"
import { GithubIcon } from "@/components/GithubIcon/GithubIcon"
import { LinkCard } from "@/components/LinkCard/LinkCard"
import { OpenSource } from "@/components/OpenSource/OpenSource"
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
    <PageMain>
      <ContentHeader
        eyebrow="Selected work"
        title="Products and tools built with intent."
      />
      <Projects />
      <OpenSource />
      <LinkCard
        href="https://github.com/kadiryazici"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto"
        icon={<GithubIcon className="size-5" />}
        title="Wanna see more?"
      />
    </PageMain>
  )
}
