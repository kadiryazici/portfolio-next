import { ContentHeader } from "@/components/ContentHeader/ContentHeader"
import { Icons } from "@/components/Icons"
import { PageMain } from "@/components/PageMain/PageMain"
import { posts } from "@/lib/posts"
import Link from "vinext/shims/link"

export const metadata = {
  title: "Blog — Kadir Yazıcı",
  description: "Notes on software, tools, and the way I like to work.",
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  return (
    <PageMain>
      <ContentHeader
        eyebrow="Blog"
        title="Notes & thoughts"
      />
      <ul className="transition-all starting:opacity-0 starting:blur-sm starting:[transform:translateY(8px)] duration-1000 delay-400 overflow-hidden rounded-3xl border border-white/[0.09] shadow-[0_24px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm bg-bg-2/40">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="relative border-b border-white/[0.08] last:border-b-0"
          >
            <Link
              prefetch={false}
              href={`/blog/${post.slug}`}
              className="group grid gap-2 px-5 py-5 no-underline transition-colors hover:bg-white/[0.045] md:grid-cols-[1fr_auto_auto] md:items-center md:gap-8 md:px-6 md:py-6"
            >
              <span className="text-base font-semibold text-ink transition-colors group-hover:text-accent md:text-lg">
                {post.title}
              </span>
              <span className="shrink-0 text-[12px] text-ink-soft">
                {post.date}
              </span>
              <Icons.ArrowOutward
                className="max-md:absolute max-md:right-3 max-md:top-5 text-base text-ink-soft transition-colors group-hover:text-accent md:block"
              />
            </Link>
          </li>
        ))}
      </ul>
    </PageMain>
  )
}
