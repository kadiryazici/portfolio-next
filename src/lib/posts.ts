export const posts = [
  {
    slug: "building-an-ssh-portfolio",
    title: "Building an SSH Portfolio",
    shortTitle: "SSH Portfolio",
    date: "September 2, 2026",
    publishedAt: "2026-09-02",
    description:
      "How I learned SSH, terminal user interfaces, and virtual machines to build and host an SSH version of my portfolio.",
    terminalContent: `I came across terminal.shop while surfing the web, and its SSH-based system amazed me instantly. I wondered how it worked and what SSH actually was. I had a lot to learn.

SSH is a protocol built on TCP connections, mainly used for remote terminal access to virtual machines. You can also serve a terminal process over an SSH session, which makes it a great home for TUI apps. A TUI is like a frontend app rendered as text instead of graphics. That limits interface freedom, but the limits improve imagination.

I decided to build an SSH version of my portfolio. I had never seen an SSH portfolio before, and I wanted to be one of the exceptions. First, I had to learn about SSH, virtual machines, and TUIs.

## Learning TUI and VM

Learning TUI was not difficult thanks to @opentui/react. It took about 30 minutes to get started, and serving it with Bun was straightforward.

The bigger problem was serving it over my domain. My main HTTP server runs on Vercel, which does not support SSH functionality. I researched Oracle Free VM and set up a user account, a virtual machine, port forwarding, remote SSH control, an SSL certificate, a subdomain, and an automatic restart system for crashes.

It took a whole night to set up a virtual machine for the first time. I would not have done it this quickly without ChatGPT: I asked for instructions one by one, and it answered my questions accurately. AI is an amazing learning opportunity.

I am glad I learned SSH development. That is one more skill for my CV.

Check it out with: ssh ssh.kadiryazici.dev`,
  },
  {
    slug: "from-swe-to-curtain",
    title: "Making Curtains as a Software Developer",
    shortTitle: "Making Curtains",
    date: "August 15, 2026",
    publishedAt: "2026-08-15",
    description:
      "After being laid off, a frontend-heavy developer reflects on learning a family curtain business and finding calm in making pleated curtains by hand.",
    terminalContent: `After a layoff, I found myself looking for something that felt concrete. I had been coding since I was 13 and worked professionally since I was 19, but suddenly I had too much time to think about what came next.

I tried learning Swift, SwiftUI, and PostgreSQL. The important distinction was whether I was learning syntax I already understood or meeting a genuinely new problem. PostgreSQL got my attention because it was unfamiliar in the right way.

## Let's get to the curtains

I visited a friend who works in her family's curtain business and offered to help five hours a day. I learned the work in a day and started making pleated curtains the next.

The repetitive physical work was unexpectedly calming. It felt like a Celeste speedrun: the task is familiar, every retry makes you more precise, and there is always a small improvement to find.

I still program. But making something by hand for part of the day is a much better use of my energy than endlessly reading bad news about the job market.`,
  },
  {
    slug: "that-feeling-when-the-app-has-perfect-ux",
    title: "That Feeling When the App Has Perfect UX",
    shortTitle: "Perfect UX",
    date: "July 9, 2026",
    publishedAt: "2026-07-09",
    description:
      "A full-stack engineer's reflections on what makes UI/UX feel right: hotkey pools, z-index management, and the chase for cohesive design.",
    terminalContent: `Some applications are simply enjoyable to use. Moving through them feels intentional because every part of the UI understands the others.

As a full-stack engineer, I have repeatedly built systems around that feeling: centralized state, components that can coordinate, and interfaces that keep working when their complexity grows.

## Hotkey management

Focus management needs a real ownership model. I built a hotkey pool where each component requests keys with a priority. A lower-priority component cannot take an owned key; equal or higher priority requests join a stack and the most relevant handler runs.

## One key to rule them all

Command palettes can replace a surprising number of shortcuts. With fuzzy search, typing a few characters is often faster than memorizing a scattered map of key combinations.

## A centralized z-index system

Portals do not automatically solve stacking order. A simple global z-index counter made floating layers predictable: every mounted overlay receives the next value.

Good UX is rarely one magic component. It is the accumulated result of systems designed to cooperate.`,
  },
  {
    slug: "surviving-ai-world-as-a-stubborn-old-developer",
    title: "Surviving AI World as a Stubborn Old Developer",
    shortTitle: "A Stubborn Old Developer",
    date: "July 4, 2026",
    publishedAt: "2026-07-04",
    description:
      "Suggestions from a stubborn old developer on using AI tools daily without handing over the whole job.",
    terminalContent: `I use AI tools every day, but I do not want fully AI-driven development to replace the parts of programming I care about. The useful question is not whether to use them; it is where they save real time.

## Your own SKILL.md

Years of writing code create preferences about structure, naming, error handling, and when to extract abstractions. I wrote those preferences down in a detailed SKILL.md so an agent can follow the same working rules.

## Decide who is faster

For a quick rename or a small cleanup, terminal reflexes are often faster than opening an agent. For bigger work, I write a clear Markdown brief describing architecture, data flow, constraints, and what I do not want.

## Inline suggestions

Inline completion remains valuable because it predicts the next local step without interrupting the flow. It is often enough when I already know what I am building.

## Boilerplating

Agents are especially helpful at the beginning of a project. I write the idea, file structure, systems, and types first, then let the agent implement the detailed plan instead of burning all the initial energy on repetitive setup.`,
  },
] as const
