import { Hero } from "@/components/Hero/Hero"
import { PageMain } from "@/components/PageMain/PageMain"

export const metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <PageMain>
      <Hero />
    </PageMain>
  )
}
