import { Contact } from "@/components/Contact/Contact"
import { ContentHeader } from "@/components/ContentHeader/ContentHeader"
import { Page } from "@/components/Page/Page"
import { PageMain } from "@/components/PageMain/PageMain"

export const metadata = {
  title: "Contact — Kadir Yazıcı",
  description: "Get in touch with Kadir Yazıcı.",
}

export default function ContactPage() {
  return (
    <Page
      pathname="/contact"
      title="Contact"
    >
      <PageMain>
        <ContentHeader
          eyebrow="Get in touch"
          title="Let's talk about the work."
        />
        <Contact />
      </PageMain>
    </Page>
  )
}
