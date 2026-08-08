import type { MetadataRoute } from "next"
import { posts } from "@/lib/posts"
import { getSiteUrl } from "@/lib/site"

const pages = ["/", "/experience", "/projects", "/blog"] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = pages.map((pathname) => ({
    url: getSiteUrl(pathname),
    lastModified: new Date("2026-08-08"),
    changeFrequency: "weekly",
    priority: pathname === "/" ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap

  const blogPosts = posts.map((post) => ({
    url: getSiteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  })) satisfies MetadataRoute.Sitemap

  return [...staticPages, ...blogPosts]
}
