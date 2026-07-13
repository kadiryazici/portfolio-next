import { Page } from "@/components/Page/Page"
import { Contact } from "@/components/Contact/Contact"
import { Experience } from "@/components/Experience/Experience"
import { Hero } from "@/components/Hero/Hero"
import { OpenSource } from "@/components/OpenSource/OpenSource"
import { Projects } from "@/components/Projects/Projects"

export default function HomePage() {
  return (
    <Page pathname="/">
      <main className="mx-auto w-full max-w-6xl">
        <Hero />
        <Projects step="01" />
        <Experience step="02" />
        <OpenSource step="03" />
        <Contact step="04" />
      </main>
    </Page>
  )
}
