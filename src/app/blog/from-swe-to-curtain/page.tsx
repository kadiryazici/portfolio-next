import { BlogPost } from "@/components/BlogPost/BlogPost"
import { BlogPostImage } from "@/components/BlogPostImage/BlogPostImage"
import { Header } from "@/components/BlogPost/Header"
import { Highlight } from "@/components/BlogPost/Highlight"
import { JsonLd } from "@/components/JsonLd/JsonLd"
import { getSiteUrl } from "@/lib/site"

const title = "Making Curtains as a Software Developer"
const description =
  "After being laid off, a frontend-heavy developer reflects on learning a family curtain business and finding calm in making pleated curtains by hand."
const path = "/blog/from-swe-to-curtain"
const imagePath = "/posts/from-swe-to-curtain/curtains.webp"

export const metadata = {
  title: `${title} — Kadir Yazıcı`,
  description,
  openGraph: {
    title: `${title} — Kadir Yazıcı`,
    description,
    type: "article",
    publishedTime: "2026-08-15",
    images: [
      {
        url: imagePath,
        width: 1440,
        height: 1080,
        alt: "Pleated curtains being manufactured by hand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} — Kadir Yazıcı`,
    description,
    images: [
      {
        url: imagePath,
        alt: "Pleated curtains being manufactured by hand",
      },
    ],
  },
  alternates: {
    canonical: path,
  },
}

export default function FromSweToCurtainPage() {
  const imageUrl = getSiteUrl(imagePath)

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          description,
          image: {
            "@type": "ImageObject",
            url: imageUrl,
            width: 1440,
            height: 1080,
          },
          datePublished: "2026-08-15",
          dateModified: "2026-08-15",
          mainEntityOfPage: getSiteUrl(path),
          author: {
            "@type": "Person",
            name: "Kadir Yazıcı",
            url: getSiteUrl(),
          },
          publisher: {
            "@type": "Person",
            name: "Kadir Yazıcı",
          },
        }}
      />
      <BlogPost
        title={title}
        date="August 15, 2026"
        headerContent={
          <BlogPostImage
            src={imagePath}
            alt="Pleated curtains being manufactured by hand"
            width={1440}
            height={1080}
            className="mt-6 [&_img]:aspect-video [&_img]:object-cover"
          />
        }
      >
        <p>
          Let me start by introducing myself shortly (I promise!).
        </p>
        <p>
          I&apos;m a 25-year-old frontend-heavy software developer who has been
          coding since I was 13. I have more than five years of experience and
          I&apos;m obsessed with the idea of programming.
        </p>
        <p>
          I got laid off a month ago, and it was a weird experience for me.
          It&apos;s the first time in my life that I&apos;ve been unemployed. I&apos;ve
          worked in the field since I was 19. I didn&apos;t even go to university
          because of the pandemic; I didn&apos;t want to lose time there while I
          could be earning money.
        </p>
        <p>
          After the layoff, I felt a little purposeless. I didn&apos;t know what to
          do, and I&apos;ve been living in my own place for the last two years, so
          I need to earn money to pay rent. The money I have won&apos;t keep me
          going for more than eight months.
        </p>
        <p>
          My mind immediately went into survival mode. Every day I had new
          ideas and daydreamed a lot. I started four projects, then quit them
          after two or three days because they were only meant to give me more
          experience outside frontend development. I realized that when I was
          learning something new, I was mostly just learning syntax and
          libraries.
        </p>
        <p>
          For instance, I sat down and started learning Swift and SwiftUI as a
          TypeScript developer. After three hours of reading docs and topics, I
          realized it was nearly the same as frontend development. I had no
          reason to build something with it just to prove that I could. Now we
          have agents: when you know the architecture, you can guide an agent to
          write code for you. As an experienced developer, it&apos;s not that hard
          to read another language or library.
        </p>
        <p>
          Last week, I sat down and started reading about PostgreSQL and,
          surprisingly, I got hooked. I know how to write a backend server and
          theoretically understand how a service should behave, how its
          architecture must be coded, how middleware must be handled, and how
          queries must be efficient. But learning Postgres was exciting; finally,
          it was something my mind was not already familiar with.
        </p>

        <Header>Let&apos;s get to the curtains</Header>
        <p>
          Two days ago, I visited my friend, who works with her father in their
          family&apos;s local curtain business. We started talking about how bad the
          job market is right now, and how every job application means competing
          with more than a thousand other people. Then I said to her, &quot;I could
          work for you hourly if you&apos;d like, preferably five hours a day.&quot; She
          was okay with it.
        </p>

        <p>
          I learned the job in just one day and started making pleated curtains
          the next day. Oh my God, I realized how much less brain fog you get
          from doing a repetitive physical task. It feels like a kind of
          meditation: you&apos;re not thinking hard to fix a problem, but thinking
          about how to produce something faster and with fewer mistakes.
        </p>
        <p>
          It felt like a <Highlight>Celeste</Highlight> speedrun. I&apos;m obsessed
          with Celeste because playing it makes my mind peaceful. I know the
          rooms and where the platforms are, but every time I play, I think
          about how I can be faster and more efficient to finish a run. When I
          fail and replay the same room, I still enjoy it because every retry
          makes me a better player. Making curtains by hand felt like that.
        </p>
        <p>
          I still program, though. That&apos;s why I work five hours a day. But five
          hours of manufacturing something is better than doom-scrolling through
          Reddit and Hacker News.
        </p>
      </BlogPost>
    </>
  )
}
