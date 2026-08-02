import type { ReactNode } from "react"
import "@/styles/globals.css"
import { Background } from "@/components/Background/Background"
import { usePathname } from "vinext/shims/navigation"
import { Sora as UIFont } from "next/font/google"

const uiFont = UIFont({
  subsets: ["latin"],
  variable: "--ui-font",
})

export const metadata = {
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
        url: "/me.png",
        width: 640,
        height: 640,
        alt: "Kadir Yazıcı",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Kadir Yazıcı — Software Developer",
    description:
      "Software developer working mostly in TypeScript and React. Experience and ways to get in touch.",
    images: [
      {
        url: "/me.png",
        width: 640,
        height: 640,
        alt: "Kadir Yazıcı",
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
        {pathName.includes("/preview") && <Background noMask />}
        {children}
      </body>
    </html>
  )
}
