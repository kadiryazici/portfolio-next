import { ContentHeader } from "@/components/ContentHeader/ContentHeader"
import { Icons } from "@/components/Icons"
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
      <Projects className="transition-all starting:opacity-0 starting:[transform:translateY(12px)] duration-1000 delay-600" />
      <OpenSource className="transition-all starting:opacity-0 starting:[transform:translateY(12px)] duration-1000 delay-1000" />
      <LinkCard
        href="https://github.com/kadiryazici"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-8"
        icon={<Icons.Github />}
        title="Wanna see more?"
      />
    </PageMain>
  )
}
