import type { ReactNode } from "react"
import "@/styles/globals.css"
import { Background } from "@/components/Background/Background"

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
        url: "/me.jpg",
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
        url: "/me.jpg",
        width: 640,
        height: 640,
        alt: "Kadir Yazıcı",
      },
    ],
  },
}

export default function RootLayout(props: { children: ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Background />
        {children}
      </body>
    </html>
  )
}
