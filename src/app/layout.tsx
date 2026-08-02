import type { ReactNode } from "react"
import "@/styles/globals.css"
import { Background } from "@/components/Background/Background"
import { JsonLd } from "@/components/JsonLd/JsonLd"
import { Page } from "@/components/Page/Page"
import { siteUrl } from "@/lib/site"
import { usePathname } from "vinext/shims/navigation"
import { Sora as UIFont } from "next/font/google"

const uiFont = UIFont({
  subsets: ["latin"],
  variable: "--ui-font",
})

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kadir Yazıcı — Software Developer",
  description:
    "Software developer working mostly in TypeScript and React. Experience and ways to get in touch.",
  openGraph: {
    title: "Kadir Yazıcı — Software Developer",
    description:
      "Software developer working mostly in TypeScript and React. Experience and ways to get in touch.",
    type: "website",
    siteName: "Kadir Yazıcı",
    images: [
      {
        url: "/me-banner-wide.webp",
        width: 1280,
        height: 680,
        alt: "Kadir Yazıcı with a bicycle beside a lake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kadir Yazıcı — Software Developer",
    description:
      "Software developer working mostly in TypeScript and React. Experience and ways to get in touch.",
    images: [
      {
        url: "/me-banner-wide.webp",
        width: 1280,
        height: 680,
        alt: "Kadir Yazıcı with a bicycle beside a lake",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout(props: { children: ReactNode }) {
  const { children } = props

  const pathName = usePathname()

  return (
    <html lang="en" className={`${uiFont.variable}`}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                name: "Kadir Yazıcı",
                url: siteUrl,
              },
              {
                "@type": "Person",
                name: "Kadir Yazıcı",
                url: siteUrl,
                jobTitle: "Software Developer",
                sameAs: ["https://github.com/kadiryazici"],
                knowsAbout: [
                  "TypeScript",
                  "React",
                  "Frontend development",
                  "Web accessibility",
                  "Performance optimization",
                ],
              },
            ],
          }}
        />
        {pathName.includes("/preview") ? (
          <>
            <Background noMask />
            {children}
          </>
        ) : (
          <Page>{children}</Page>
        )}
      </body>
    </html>
  )
}
