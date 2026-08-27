import { AppIcon } from "@/components/AppIcon/AppIcon"
import { ContentHeader } from "@/components/ContentHeader/ContentHeader"
import { ExperienceCard } from "@/components/ExperienceCard/ExperienceCard"
import { LinkCard } from "@/components/LinkCard/LinkCard"
import { PageMain } from "@/components/PageMain/PageMain"
import { experiences } from "@/lib/portfolio"
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
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.company}
            className="w-full"
            tags={experience.tags.slice()}
            videoUrls={experience.videoUrls.map((videoUrl) => videoUrl.slice())}
            title={experience.company}
            subtitle={experience.role}
            fromTo={[experience.fromTo[0], experience.fromTo[1]]}
            logoUrl={experience.logoUrl}
            description={getExperienceDescription(experience)}
          />
        ))}
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

function getExperienceDescription(experience: (typeof experiences)[number]) {
  return (
    <Fragment>
      {experience.description}
      <br />
      <br />
      <strong>Achievements:</strong>
      <br />
      {experience.achievements.map((achievement) => (
        <Fragment key={achievement}>
          • {achievement}
          <br />
        </Fragment>
      ))}
    </Fragment>
  )
}
