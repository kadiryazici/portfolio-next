import { Page } from "@/components/Page/Page"
import { Hero } from "@/components/Hero/Hero"

export default function HomePage() {
  return (
    <Page
      pathname="/"
      title="Home"
    >
      <main className="mx-auto w-full max-w-[980px] px-5 pb-20 md:px-8 lg:px-12">
        <Hero />
      </main>
    </Page>
  )
}
