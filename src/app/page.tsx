import { Page } from "@/components/Page/Page"
import { Hero } from "@/components/Hero/Hero"
import { PageMain } from "@/components/PageMain/PageMain"

export const metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <Page
      pathname="/"
      title="Home"
    >
      <PageMain>
        <Hero />
      </PageMain>
    </Page>
  )
}
