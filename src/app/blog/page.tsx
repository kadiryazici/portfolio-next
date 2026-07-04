export const metadata = {
  title: "Blog — Kadir Yazıcı",
  description: "Notes on software, tools, and the way I like to work.",
}

const posts = [
  {
    slug: "surviving-ai-world-as-a-stubborn-old-developer",
    title: "Surviving AI World as a Stubborn Old Developer",
    date: "July 4, 2026",
  },
] as const

export default function BlogPage() {
  return (
    <section className="fade-up py-14 md:py-20">
      <h1 className="m-0 text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[44px]">
        Blog
      </h1>
      <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-ink-muted">
        Notes on software, tools, and the way I like to work.
      </p>

      <ul className="mt-12 flex flex-col gap-0">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="border-t border-line last:border-b"
          >
            <a
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-2 py-6 no-underline md:flex-row md:items-baseline md:justify-between md:gap-8"
            >
              <span className="text-[19px] font-medium text-ink transition-colors hover:text-accent">
                {post.title}
              </span>
              <span className="shrink-0 font-mono text-[12px] uppercase tracking-[0.18em] text-ink-soft">
                {post.date}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
