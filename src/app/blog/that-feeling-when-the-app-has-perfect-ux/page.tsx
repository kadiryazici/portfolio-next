import { Page } from "@/components/Page/Page"
import { BlogPost } from "@/components/BlogPost/BlogPost"
import { Header } from "@/components/BlogPost/Header"
import { Highlight } from "@/components/BlogPost/Highlight"
import { Blockquote } from "@/components/BlogPost/Blockquote"
import { JsonLd } from "@/components/JsonLd/JsonLd"
import { getSiteUrl } from "@/lib/site"

export const metadata = {
  title: "That Feeling When the App Has Perfect UX — Kadir Yazıcı",
  description:
    "A frontend developer's reflections on what makes UI/UX feel right — hotkey pools, z-index management, and the chase for cohesive design.",
  openGraph: {
    title: "That Feeling When the App Has Perfect UX — Kadir Yazıcı",
    description:
      "A frontend developer's reflections on what makes UI/UX feel right — hotkey pools, z-index management, and the chase for cohesive design.",
    type: "article",
    publishedTime: "2026-07-09",
  },
  twitter: {
    card: "summary",
    title: "That Feeling When the App Has Perfect UX — Kadir Yazıcı",
    description:
      "A frontend developer's reflections on what makes UI/UX feel right — hotkey pools, z-index management, and the chase for cohesive design.",
  },
  alternates: {
    canonical: "/blog/that-feeling-when-the-app-has-perfect-ux",
  },
}

export default function PerfectUxPage() {
  return (
    <Page
      pathname="/blog/that-feeling-when-the-app-has-perfect-ux"
      title="Blog"
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "That Feeling When the App Has Perfect UX",
          description:
            "A frontend developer's reflections on what makes UI/UX feel right — hotkey pools, z-index management, and the chase for cohesive design.",
          datePublished: "2026-07-09",
          dateModified: "2026-07-09",
          mainEntityOfPage: getSiteUrl("/blog/that-feeling-when-the-app-has-perfect-ux"),
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
        title="That Feeling When the App Has Perfect UX"
        date="July 9, 2026"
      >
        <p>
          You know there are some apps that give you pleasure when you use them.
          Navigating through the app feels like an act of love instead of just
          doing a task.
        </p>
        <p>
          As a frontend developer who has been working in the field for 6 years,
          I did reinvent the wheel a lot of times. I was obsessed with
          centralized management of the state, I was obsessed with a UI that
          every part of it communicating with each other.
        </p>

        <Blockquote>
          <em>It was perfect</em> — Homelander
        </Blockquote>

        <p>
          Imagine a dialog knows that a tooltip is visible inside it and it
          should do some stuff different according to that tooltip. And maybe a
          dialog has another dialog inside it which opens a popover and all the
          components should know about each other. The popover must be aware
          that it&apos;s triggered by an element inside the dialog content and
          it should behave differently. Maybe change its keyboard navigation or
          something else.
        </p>

        <Header>Hotkey Management</Header>
        <p>
          Focus management requires some solid state management and
          communication between components. If you go with the easy route and do
          an event bubbling blocker, I have bad news for you that it&apos;s not
          good. I remember that I created a hotkey management pool system that
          was working perfectly. It was doing it by a{" "}
          <strong>request</strong> system. When a popover is opened it requires
          a specific key from the pool, and every component has a
          <strong>weight</strong> (means the one that weighs more goes down in
          the list gets picked up) a.k.a <strong>priority</strong>. If the key
          is already taken by a component with a higher priority, the lower
          priority component will not be able to use that key and on unmount it
          will unregister itself from the key pool. But what if the component
          requires the key and has the same or higher priority? Then it&apos;s
          added to a stack which holds registration of the listeners and runs
          the fattest one and last one.
        </p>

        <Header>One key to rule them all</Header>
        <p>
          Is it just me or do you also feel that <Highlight>CMD + P</Highlight>{" "}
          command menu can easily kill most of the hotkeys, even UI&apos;s
          itself in some areas. I usually find myself doing{" "}
          <Highlight>CMD + P</Highlight> then typing the thing I want to have
          instead of using the hotkeys. And thanks to the{" "}
          <Highlight>fuzzy-search</Highlight> algorithms I sometimes just write
          three to four characters for the action I want to happen.
        </p>

        <Header>A centralized z-index system</Header>
        <p>
          When you use a virtual DOM library like React, and you want to create
          a floating element you usually use <Highlight>createPortal</Highlight>{" "}
          because you want that content to be at the top and you use a floating
          positioner so it looks like it belongs to the trigger. But portalling
          doesn&apos;t guarantee that z-index will always be correct and the
          last opened one will be at the top.
        </p>
        <p>
          I think you can guess what I created to overcome this thing, of course
          a z-index pool. What I did was just store a global z-index starting
          from 100 and every time a component gets mounted I increase it and
          give it to the next person.
        </p>

        <Header>Last thoughts</Header>
        <p>
          Nowadays I&apos;m using the Zed editor. I was using VS Code for 7
          years and I tried Zed. One thing perfectly caught my eye, the{" "}
          <Highlight>CMD + N</Highlight> handling.
        </p>
        <p>
          Usually a hotkey has one purpose in the UI and it doesn&apos;t change
          very often according to the focus. But Zed editor knows if you are
          focused on the editor, terminal, file manager or agents bar. I
          realized that I quickly adapted to this focus-aware hotkey management.
        </p>
        <p>
          Yeah that&apos;s one of the reasons why UI/UX doesn&apos;t feel
          perfect. If you are not using a single component library that is
          designed to work fully together and 100% configurable, you&apos;re
          going to end up with conflicts between your elements or no
          configuration at all. I remember those days when we didn&apos;t have
          shadcn, headlessui, base-ui etc. I still do create my own Popovers and
          Dialogs, but I use positioner libraries like floating-ui.
        </p>
      </BlogPost>
    </Page>
  )
}
