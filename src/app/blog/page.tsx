import { AppIcon } from "@/components/AppIcon/AppIcon"
import { Page } from "@/components/Page/Page"
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
      <section className="mx-auto w-full max-w-[900px] px-5 pb-20 pt-12 md:px-8 md:pt-20 lg:px-12">
        <p className="mb-3 mt-0 text-[13px] font-medium text-accent">Writing</p>
        <h1 className="m-0 text-[42px] font-semibold leading-[1.05] text-ink md:text-[50px]">
          Blog
        </h1>
        <p className="mt-4 max-w-xl text-[17px] leading-7 text-ink-muted">
          Notes on software, tools, and the way I like to work.
        </p>

        <ul className="mt-14 flex flex-col gap-0">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="border-t border-line last:border-b"
            >
              <a
                href={`/blog/${post.slug}`}
                className="group grid gap-3 py-7 no-underline md:grid-cols-[1fr_auto_auto] md:items-center md:gap-8"
              >
                <span className="text-[19px] font-semibold text-ink group-hover:text-accent">
                  {post.title}
                </span>
                <span className="shrink-0 text-[12px] text-ink-soft">
                  {post.date}
                </span>
                <AppIcon
                  name="arrow"
                  className="hidden size-4 text-ink-soft group-hover:text-accent md:block"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Page>
  )
}
