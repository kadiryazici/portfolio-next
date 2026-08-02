import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/preview/",
    },
    sitemap: getSiteUrl("/sitemap.xml"),
  }
}
