import { AppIcon } from "@/components/AppIcon/AppIcon"
import { ContentHeader } from "@/components/ContentHeader/ContentHeader"
import { Page } from "@/components/Page/Page"
import { PageMain } from "@/components/PageMain/PageMain"
import { posts } from "@/lib/posts"

export const metadata = {
  title: "Blog — Kadir Yazıcı",
  description: "Notes on software, tools, and the way I like to work.",
}

export default function BlogPage() {
  return (
    <Page
      pathname="/blog"
      title="Blog"
    >
      <PageMain>
        <ContentHeader
          eyebrow="Writing"
          title="Blog"
        />
        <ul className="overflow-hidden rounded-[18px] border border-white/[0.09] bg-white/[0.035] shadow-[0_24px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="border-b border-white/[0.08] last:border-b-0"
            >
              <a
                href={`/blog/${post.slug}`}
                className="group grid gap-3 px-5 py-5 no-underline transition-colors hover:bg-white/[0.045] md:grid-cols-[1fr_auto_auto] md:items-center md:gap-8 md:px-6 md:py-6"
              >
                <span className="text-[17px] font-semibold text-ink transition-colors group-hover:text-accent md:text-lg">
                  {post.title}
                </span>
                <span className="shrink-0 text-[12px] text-ink-soft md:text-[13px]">
                  {post.date}
                </span>
                <AppIcon
                  name="arrow"
                  className="hidden size-4 text-ink-soft transition-colors group-hover:text-accent md:block"
                />
              </a>
            </li>
          ))}
        </ul>
      </PageMain>
    </Page>
  )
}
