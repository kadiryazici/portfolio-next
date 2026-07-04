import { Page } from "@/components/Page/Page"
import { Contact } from "@/components/Contact/Contact"
import { Experience } from "@/components/Experience/Experience"
import { Hero } from "@/components/Hero/Hero"

export default function HomePage() {
  return (
    <Page pathname="/">
      <main className="mx-auto w-full max-w-6xl">
        <Hero />
        <Experience />
        <Contact />
      </main>
    </Page>
  )
}
