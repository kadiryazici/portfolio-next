import { BlogPost } from "@/components/BlogPost/BlogPost"
import { BlogPostImage } from "@/components/BlogPostImage/BlogPostImage"
import { Header } from "@/components/BlogPost/Header"
import { Highlight } from "@/components/BlogPost/Highlight"
import { JsonLd } from "@/components/JsonLd/JsonLd"
import { getSiteUrl } from "@/lib/site"

const title = "Building an SSH Portfolio"
const description =
  "How I learned SSH, terminal user interfaces, and virtual machines to build and host an SSH version of my portfolio."
const path = "/blog/building-an-ssh-portfolio"
const imagePath = "/posts/building-an-ssh-portfolio/terminal.webp"
const publishedAt = "2026-09-02"

export const metadata = {
  title: `${title} — Kadir Yazıcı`,
  description,
  openGraph: {
    title: `${title} — Kadir Yazıcı`,
    description,
    type: "article",
    publishedTime: publishedAt,
    images: [
      {
        url: imagePath,
        width: 1280,
        height: 791,
        alt: "Terminal interface for Kadir Yazıcı's SSH portfolio",
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
        alt: "Terminal interface for Kadir Yazıcı's SSH portfolio",
      },
    ],
  },
  alternates: {
    canonical: path,
  },
}

export default function BuildingAnSshPortfolioPage() {
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
            width: 1280,
            height: 791,
          },
          datePublished: publishedAt,
          dateModified: publishedAt,
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
        date="September 2, 2026"
        headerContent={
          <BlogPostImage
            src={imagePath}
            alt="Terminal interface for Kadir Yazıcı's SSH portfolio"
            width={1280}
            height={791}
            className="mt-6 [&_img]:aspect-video [&_img]:object-cover"
          />
        }
      >
        <p>
          I came across <Highlight>terminal.shop</Highlight> while surfing the
          web, and its SSH-based system amazed me instantly. I wondered how it
          worked and what SSH actually was. Okay, do not judge me because I
          did not know what SSH was. I have learned, I promise.
        </p>
        <p>
          Basically, SSH is another type of TCP connection protocol, mainly
          used for remote terminal access to virtual machines. But you can also
          serve a terminal process over an SSH session, and TUI apps are
          perfect for this. A TUI app is just like a regular frontend
          application, but rendered with text instead of graphics, so it limits
          the freedom to create interfaces. But the limits improve our imagination.
        </p>
        <p>
          I decided to build an SSH version of my portfolio. I had never seen
          an SSH portfolio in my life, and I wanted to be one of the
          exceptions. But to do that, I had to learn about SSH, virtual
          machines, and TUIs first.
        </p>

        <Header>Learning TUI and VM</Header>
        <p>
          Actually, it was not that hard to learn TUI thanks to{" "}
          <Highlight>@opentui/react</Highlight>. It took me 30 minutes to get
          started with it, and serving it with Bun was so easy.
        </p>
        <p>
          But there was a problem I needed to solve: how would I serve this to
          people over my domain? My main HTTP server is deployed on Vercel, and
          it does not support SSH functionality. After some research, I came
          across Oracle Free VM. I set up a user account, a virtual machine,
          port forwarding, remote SSH control, an SSL certificate, a subdomain
          for my domain, and an automatic restart system in case the process
          ever crashes.
        </p>
        <p>
          It took my whole night to set up a virtual machine for the first
          time, and I want to admit that I would not have been able to do it
          this quickly if I did not get help from ChatGPT. I asked it to give
          me instructions one by one, and it answered my questions correctly.
          AI is such an amazing learning opportunity nowadays.
        </p>
        <p>
          Anyway, I am so glad that I learned about SSH development. One new
          skill goes to the CV.
        </p>
        <p>
          Check it out at <Highlight>ssh ssh.kadiryazici.dev</Highlight>
        </p>
      </BlogPost>
    </>
  )
}
