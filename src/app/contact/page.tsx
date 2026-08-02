import { Contact } from "@/components/Contact/Contact"
import { Page } from "@/components/Page/Page"

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
      <main className="mx-auto w-full max-w-[980px] px-5 pb-20 md:px-8 lg:px-12">
        <header className="pb-12 pt-8 md:pb-16 md:pt-12">
          <p className="mb-3 mt-0 text-[13px] font-medium text-accent">Get in touch</p>
          <h1 className="m-0 max-w-2xl text-[40px] font-semibold leading-[1.05] text-ink md:text-[48px]">
            Let&apos;s talk about the work.
          </h1>
        </header>
        <Contact />
      </main>
    </Page>
  )
}
