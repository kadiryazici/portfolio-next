import { Contact } from "@/components/Contact/Contact"
import { ContentHeader } from "@/components/ContentHeader/ContentHeader"
import { PageMain } from "@/components/PageMain/PageMain"

export const metadata = {
  title: "Contact — Kadir Yazıcı",
  description: "Get in touch with Kadir Yazıcı.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <PageMain>
      <ContentHeader
        eyebrow="Get in touch"
        title="Let's talk about the work."
      />
      <Contact />
    </PageMain>
  )
}
