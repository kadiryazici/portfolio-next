import type { ReactNode } from "react"
import "@/styles/globals.css"
import { Background } from "@/components/Background/Background"
import { BackgroundStar } from "@/components/BackgroundStar/BackgroundStar"
import { JsonLd } from "@/components/JsonLd/JsonLd"
import { Page } from "@/components/Page/Page"
import { siteUrl } from "@/lib/site"
import { usePathname } from "vinext/shims/navigation"
import { Sora as UIFont } from "next/font/google"
import { SSHChip } from "@/components/SSHChip/SSHChip"

const uiFont = UIFont({
  subsets: ["latin"],
  variable: "--ui-font",
})

const siteTitle = "Kadir Yazıcı — Software Engineer"
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
        url: "/me-big.webp",
        width: 660,
        height: 660,
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
        url: "/me-big.webp",
        width: 660,
        height: 660,
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
    <html lang="en" className={`${uiFont.variable} md:scrollbar-gutter-both`}>
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
      <body className="relative isolate">
        <BackgroundStar />
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
                jobTitle: "Software Engineer",
                sameAs: ["https://github.com/kadiryazici"],
                knowsAbout: [
                  "TypeScript",
                  "React",
                  "Software systems",
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
          <>
            <SSHChip />
            <Page>{children}</Page>
          </>
        )}
      </body>
    </html>
  )
}
