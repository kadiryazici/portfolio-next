# AGENTS.md

This is the onboarding guide for the Kadir Yazici portfolio. Read it before
changing code. It documents the application as it exists today, not an earlier
version of the design.

## Product and visual direction

`kadiryazici.dev` is a personal software-developer portfolio with experience,
projects, contact details, and a small technical blog.

The UI is a dark, desktop-workspace-inspired portfolio rather than a marketing
landing page. The persistent navigation is a tall sidebar on desktop and a
compact top block on small screens. Content lives in a narrow editorial column
beside it.

- Near-black main canvas (`--color-bg`) and a darker sidebar (`--color-sidebar`)
- Off-white primary copy; muted gray for supporting copy
- Yellow is the single active accent. Use it for state, emphasis, and small
  signals, not broad background fills.
- Repeated content is displayed in dark translucent panels with subtle white
  borders, backdrop blur, inset highlights, and soft shadows.
- Cards commonly use `18px` radii; the sidebar uses `24px`; compact controls
  use smaller radii.
- The UI font is Sora, loaded in `src/app/layout.tsx` and exposed as
  `--font-body`. Do not introduce another display font without a clear reason.
- Motion is intentionally restrained: the sidebar uses Motion for the selected
  route surface and cards use short color/border transitions.

Do not add gradients, colorful decoration, large marketing heroes, light-theme
variants, or generic dashboard chrome. Keep the interface quiet and direct.

## Stack and commands

- **vinext** App Router with Vite and Nitro
- **React 19** and TypeScript
- **Tailwind CSS v4** via `@tailwindcss/vite`; there is no Tailwind config file
- **motion** for the small amount of layout animation
- `cn()` in `src/lib/utils.ts` combines `clsx` and `tailwind-merge`

```bash
pnpm dev       # local vinext development server
pnpm build     # production Vite build
pnpm preview   # preview the production build
npx tsc --noEmit
```

There is no test runner configured. For UI work, verify the affected desktop
and mobile states in the browser after type checking and building. Do not assume
that a standard `next` command exists: this project uses vinext.

## Route structure

```
src/app/
  layout.tsx                               # fonts, global metadata, JSON-LD
  page.tsx                                 # home / hero
  experience/page.tsx                      # work history
  projects/page.tsx                        # products and open source
  contact/page.tsx                         # contact channels
  blog/page.tsx                            # blog index
  blog/<slug>/page.tsx                     # individual posts
  preview/time-picker-button/page.tsx      # isolated UI experiment; noindex
  robots.ts                                # /robots.txt metadata route
  sitemap.ts                               # /sitemap.xml metadata route
```

Every public page wraps its content in `<Page pathname="..." title="...">`.
`Page` owns the responsive application shell and mounts `Sidebar`. Put regular
page content inside `PageMain`, which maintains the readable content width.
Use `ContentHeader` for titled subpages. `Page`'s `pathname` drives the active
sidebar state, so it must match the route exactly.

Route modules use default exports because the App Router requires them. Named
exports are used everywhere else.

## Components and ownership

```
src/components/
  Sidebar/              # persistent navigation, social links, active motion
  Page/                 # outer app shell
  PageMain/             # constrained main-content wrapper
  ContentHeader/        # eyebrow + page H1
  Hero/                 # homepage introduction and primary links
  ExperienceCard/       # client-side rotating work media card
  Projects/             # selected product data and cards
  OpenSource/           # open-source project data and cards
  ProjectCard/          # linked project presentation
  Contact/              # email and GitHub rows
  BlogPost/             # post wrapper, headings, highlights, blockquotes
  Button/               # button/link primitive and visual variants
  LinkCard/             # large navigational call-to-action card
  AppIcon/              # small stroke-icon set
  Icons.tsx             # shared filled navigation/social icon collection
  JsonLd/               # JSON-LD script helper
  TimePickerButton/     # standalone client interaction experiment
  SettingsDialog/       # unused settings-dialog experiment
```

Keep one primary component per folder as `components/Name/Name.tsx`. Constants
for that component can live beside it as `Name.constants.ts`. `Icons.tsx` is an
intentional shared-file exception. Do not move content data into a CMS or add a
state layer unless the feature genuinely needs one.

## Content locations

- **Homepage copy and primary links:** `src/components/Hero/Hero.tsx`
- **Experience entries, media, tags, and achievements:**
  `src/app/experience/page.tsx`
- **Selected product:** `src/components/Projects/Projects.tsx`
- **Open-source projects:** `src/components/OpenSource/OpenSource.tsx`
- **Contact page:** `src/components/Contact/Contact.tsx`
- **Persistent email and social links:** `src/components/Sidebar/Sidebar.tsx`
- **Blog index data:** `src/lib/posts.ts`
- **Site URL and absolute URL helper:** `src/lib/site.ts`

When adding a blog post:

1. Add its `slug`, display `date`, and ISO `publishedAt` date to `src/lib/posts.ts`.
2. Create `src/app/blog/<slug>/page.tsx` using `Page` and `BlogPost`.
3. Add unique metadata with title, description, Open Graph article fields, and
   an `alternates.canonical` path.
4. Add a `BlogPosting` JSON-LD block through `JsonLd`.

The sitemap reads `posts` automatically. Do not add preview or experimental
routes to it.

## SEO and metadata

- `src/lib/site.ts` defines the production origin. Use `getSiteUrl()` to build
  absolute URLs rather than hardcoding the domain.
- `layout.tsx` owns the site-wide metadata, `metadataBase`, Open Graph/Twitter
  defaults, and `WebSite`/`Person` JSON-LD.
- Every indexable page has a route-level canonical URL. Maintain this when
  adding a public route.
- `robots.ts` allows the site but blocks `/preview/`; `sitemap.ts` lists the
  indexable routes and posts.
- Keep `/preview/*` pages `noindex, nofollow`.
- Preserve semantic heading order, descriptive image alt text, and unique page
  titles/descriptions. Decorative media uses empty alt text.

## Styling rules

Global theme tokens and base element styles live in `src/styles/globals.css`.
Use the token-backed Tailwind utilities (`bg-bg`, `bg-sidebar`, `text-ink`,
`text-ink-muted`, `text-ink-soft`, `text-accent`, and so on) before adding raw
values. Existing panels deliberately use a few precise translucent white and
neutral utilities; match them for visual consistency.

- Write mobile-first Tailwind classes. Add `md:` and `lg:` enhancements for the
  desktop shell and panel layouts.
- Keep content columns readable (`PageMain` is `max-w-3xl`) rather than making
  every page full-width.
- Use `AppIcon` or `Icons` before drawing another SVG. Add an icon to the
  appropriate shared set only when it will be reused.
- Buttons use the `Button` component when the existing variants fit. Use actual
  links for navigation and external destinations.
- Include visible keyboard focus states and retain `aria-current` on active nav
  items. Client interactions must work with pointer, keyboard, and reduced
  motion where applicable.
- Do not add `overflow` to an ancestor of the sticky desktop sidebar. It breaks
  sticky positioning.
- The base link color rule intentionally lives in `@layer base`, so Tailwind
  `text-*` utilities can override it. Keep it there.

## Code conventions

Follow the `code-like-me` skill for implementation work.

- Use function declarations for named functions and `type` aliases instead of
  interfaces.
- Component props extend `ComponentProps<"...">`; destructure props inside the
  function body and forward remaining attributes to the root element.
- Use named exports for components and helpers; App Router page/layout defaults
  are the required exception.
- Use `cn()` for class composition, especially when a class is conditional.
- Prefer `const`, early returns, explicit data, and object maps over clever
  abstractions or enums.
- Use double quotes, no semicolons, trailing commas, and one JSX prop per line.
- Keep file-local helpers below their component and module constants above it.
- Do not revert or reformat unrelated in-progress work. This repository may be
  intentionally dirty during visual iteration.

## Assets

```
public/
  me.png, me.jpg                    # portrait assets
  logos/                             # company logos for experience cards
  projects/                          # project screenshots and logos
  videos/<company>/                  # experience-card screen recordings
```

Use local paths beginning with `/`. Preserve intrinsic aspect ratios and add
descriptive `alt` text to content images. Experience videos are muted and
autoplayed by `ExperienceCard`; avoid adding large media to the initial home
route without a performance reason.
