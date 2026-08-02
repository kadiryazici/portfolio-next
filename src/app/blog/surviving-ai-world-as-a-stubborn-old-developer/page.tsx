import { Page } from "@/components/Page/Page"
import { BlogPost } from "@/components/BlogPost/BlogPost"
import { Header } from "@/components/BlogPost/Header"
import { Highlight } from "@/components/BlogPost/Highlight"
import { JsonLd } from "@/components/JsonLd/JsonLd"
import { getSiteUrl } from "@/lib/site"

export const metadata = {
  title: "Surviving AI World as a Stubborn Old Developer — Kadir Yazıcı",
  description:
    "Suggestions from a stubborn old developer on using AI tools daily without handing over the whole job.",
  openGraph: {
    title: "Surviving AI World as a Stubborn Old Developer — Kadir Yazıcı",
    description:
      "Suggestions from a stubborn old developer on using AI tools daily without handing over the whole job.",
    type: "article",
    publishedTime: "2026-07-04",
  },
  twitter: {
    card: "summary",
    title: "Surviving AI World as a Stubborn Old Developer — Kadir Yazıcı",
    description:
      "Suggestions from a stubborn old developer on using AI tools daily without handing over the whole job.",
  },
  alternates: {
    canonical: "/blog/surviving-ai-world-as-a-stubborn-old-developer",
  },
}

export default function SurvivingAiWorldPage() {
  return (
    <Page
      pathname="/blog/surviving-ai-world-as-a-stubborn-old-developer"
      title="Blog"
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Surviving AI World as a Stubborn Old Developer",
          description:
            "Suggestions from a stubborn old developer on using AI tools daily without handing over the whole job.",
          datePublished: "2026-07-04",
          dateModified: "2026-07-04",
          mainEntityOfPage: getSiteUrl("/blog/surviving-ai-world-as-a-stubborn-old-developer"),
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
        title="Surviving AI World as a Stubborn Old Developer"
        date="July 4, 2026"
      >
        <p>
          If you are a stubborn old developer like me (25 y.o.) who doesn&apos;t
          like full AI driven development because of a long experience in the
          field (Web 7 Years) and writing systems from mind without even thinking
          but still wanting to use AI tools and doesn&apos;t want to be behind, I
          have some suggestions that I use daily in my workflow.
        </p>

        <Header>Your own SKILL.MD</Header>
        <p>
          We old folks have some strict coding style that occured in multiple
          years thanks to writing code by hand, failing hard, refactoring systems
          in your free time or when needed and we want pretty code.
        </p>
        <p>
          That&apos;s why I spent a day writing my own{" "}
          <Highlight>SKILL.MD</Highlight> file by having a reflective perspective
          into my habits of writing code and with Claude I made a highly detailed
          coding guide for my agent.
        </p>
        <p>
          It&apos;s like <Highlight>airbnb-eslint</Highlight> but for Claude. It
          contains how it should format the code, how to extract props of react
          components, when to use switch and when to use lookup objects, if/else
          try/catch placements, calling functions with <Highlight>void</Highlight>{" "}
          keyword, using <Highlight>.catch()</Highlight> instead of try/catch. How
          variable naming should be, how enums should be used, doing early returns
          instead of if/else statements and list goes on an on....
        </p>
        <p>
          I&apos;m not going to share it here because it&apos;s big but you got
          the point.
        </p>

        <Header>Quickly conclude if AI or You will do it faster.</Header>
        <p>
          I can use shortcuts and terminal commands easily, and I have reflexes
          that make my job easier than simply opening an AI agent and telling it
          what to do. Some easy code deduplication, or renaming a variable etc..
        </p>
        <p>
          If you take more time than AI, it&apos;s time to create a detailed
          markdown content for the agent to follow. Instead of{" "}
          <Highlight>fix this</Highlight> or{" "}
          <Highlight>line 180 gives error</Highlight> simply give the agent what
          needs to be done. Think of it like coding in pure english, tell it how
          to make the coding structure, how to flow the data, what you do not want
          etc.
        </p>

        <Header>
          Maybe inline suggestions are more than enough most of the time
        </Header>
        <p>
          I have Github Copilot subscription and Codex subscription (Claude is
          from the business yo.). The only reason why I keep paying for Github
          Copilot is the inline suggestion system. I love it, I love how it
          predicts what I&apos;m going to do by the name of the variable or my
          last edit. For a stubborn old folk like me, this is more than enough
          most of the time.
        </p>

        <Header>Boilerplating</Header>
        <p>
          This is where I love AI agents. I am a{" "}
          <Highlight>create new project every week</Highlight> developer and I
          love developing open source libraries which has 0 downloads. When I have
          a thing in my mind my first instinct is to go and start coding for
          DOPAMINE.... and that&apos;s the trap. Because later I get enough
          dopamine from it and move on to the next project.
        </p>
        <p>
          Instead of writing code for a new project, I start a fressssshh markdown
          file and type my ideas, and then how files should be, how systems should
          work, and I even create TypeScript types for systems for agent to follow
          and then I let the agent code what I strictly detailed in the file.
        </p>
      </BlogPost>
    </Page>
  )
}
