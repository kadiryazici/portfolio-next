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

const siteTitle = "Kadir Yazıcı — Full-Stack Engineer"
const siteDescription = "Kadir Yazıcı builds accessible, high-performance full-stack systems and thoughtful product experiences."

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
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
    title: siteTitle,
    description: siteDescription,
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
  icons: {
    icon: [
      {
        url: "/me.webp",
        type: "image/png",
        sizes: "678x678",
      },
    ],
    apple: [
      {
        url: "/me.webp",
        type: "image/png",
        sizes: "678x678",
      },
    ],
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
                jobTitle: "Full-Stack Engineer",
                sameAs: ["https://github.com/kadiryazici"],
                knowsAbout: [
                  "TypeScript",
                  "React",
                  "Full-stack systems",
                  "Accessible interfaces",
                  "Product design",
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
