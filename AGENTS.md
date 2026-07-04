# AGENTS.md

Read this first. It's the onboarding for anyone (human or agent) working on this
project — what it is, how it's built, and the conventions you must follow.

A single-page personal portfolio for Kadir Yazıcı, plus a small blog. Dark,
restrained, **Zed-inspired** aesthetic: near-black background, off-white text,
one blue accent used sparingly, monospace labels, thin dividers, generous
whitespace. No gradients.

## Stack

- **vinext** (Vite-based Next.js reimplementation) — App Router style (`src/app`)
- **React 19**, **TypeScript**
- **Tailwind CSS v4** (config-less, `@theme` in CSS)
- `cn()` helper = `clsx` + `tailwind-merge` (`src/lib/utils.ts`)

## Run & verify

```bash
pnpm dev      # dev server on http://localhost:3000
pnpm build
pnpm start
```

- **The owner usually keeps their own dev server running on port 3000. Do NOT
  start `pnpm dev` or bind port 3000 yourself** — you'll conflict with theirs.
- Verify changes with `npx tsc --noEmit` (there is no `next` package installed,
  only vinext — see the caveat below). For a live look, ask the owner to check
  their running server.
- vinext sometimes needs a clean restart to pick up **newly created** files
  (module-resolution cache): `pkill -f vinext; pnpm dev`. Only the owner should
  do this on their own server.

## Structure

```
src/
  app/
    layout.tsx                 # <html>, fonts, viewport meta, mounts <Background/> only
    page.tsx                   # <Page pathname="/"> + <Hero/> + <Experience/> + <Contact/>
    blog/
      page.tsx                 # blog index — `posts` array + thin-divider list
      <slug>/page.tsx          # one file per post, renders <BlogPost>
  components/
    Background/                # fixed monochrome backdrop (faint grid + soft glow, no color)
    Page/                      # shell: sticky glass nav + footer, wraps children (was "Notebook")
    Section/                   # section wrapper: mono index ("01") + label + content
    Hero/                      # "About" — name, role, bio, buttons, avatar
    Experience/                # six roles, data in the `jobs` array in-file
    Contact/                   # email link + GitHub (username)
    GithubIcon/                # shared GitHub SVG, used by Contact + Page footer
    BlogPost/                  # blog content primitives (see below)
  styles/globals.css           # @theme tokens, base layer, fade-up utility
  lib/utils.ts                 # cn()
```

## Routes

- `/` — the home page. About / Experience / Contact are **sections on this one
  page** (`#about`, `#experience`, `#contact`).
- `/blog` — blog index. Posts are a module-level `posts` array (`slug/title/date`)
  in `app/blog/page.tsx`.
- `/blog/<slug>` — one folder per post; the page renders `<BlogPost>`.

### Nav (`components/Page/Page.tsx`)

- Two items only: **About** (`/`) and **Blog** (`/blog`). The logo links to `/`.
- Active state is derived from the `pathname` prop, passed by each page at the
  route level. `Page` is a server component — no client hooks needed.
  Every page module wraps its content in `<Page pathname="…">`.

## Blog content system (`components/BlogPost/`)

The blog is intentionally **"markdown but not markdown"** — the markup symbols
are visible, but content is composed from components, not parsed markdown.

- `BlogPost.tsx` — wrapper. Props: `title`, `date`, `children`. Renders a
  `← Blog` back link, the title, a mono date label, then the content.
- `Header.tsx` — a section heading that renders a visible `##` (accent mono)
  before the text.
- `Highlight.tsx` — inline `<code>` chip that renders visible backticks around
  its content.

A post page is minimal boilerplate:

```tsx
<BlogPost title="..." date="July 4, 2026">
  <p>...</p>
  <Header>Section title</Header>
  <p>... <Highlight>inline code</Highlight> ...</p>
</BlogPost>
```

To add a post: create `app/blog/<slug>/page.tsx` using `<BlogPost>`, then add an
entry to the `posts` array in `app/blog/page.tsx`.

## Design system (`src/styles/globals.css`)

Tokens live in `@theme`, so they're usable as Tailwind utilities (`bg-bg`,
`text-ink`, `text-ink-muted`, `border-line`, `text-accent`, `font-mono`, …):

- **Background**: `--color-bg` `#08080a`, `--color-bg-2` `#0d0d10`
- **Text**: `--color-ink` (off-white), `--color-ink-muted`, `--color-ink-soft`
- **Lines/surfaces**: `--color-line`, `--color-line-strong`, `--color-surface`, `--color-surface-hover`
- **Accent**: `--color-accent` `#4c8dff`, `--color-accent-hover` — the ONLY color; use sparingly
- **Fonts**: `--font-body` = Inter, `--font-mono` = JetBrains Mono (loaded in `layout.tsx`)
- **Utility**: `fade-up` (entrance animation)

## Conventions (follow these — several are load-bearing)

1. **Coding style is Kadir's `code-like-me` style.** `function` declarations
   (never `const X = () =>` for named functions); props typed as
   `ComponentProps<"x"> & {…}` and **destructured in the body**, never the
   signature; `cn()` for any conditional class; named exports only (no default
   exports); `type` over `interface`; object maps over enums; early returns;
   `const` over `let`; **no semicolons**; **double quotes**; Stroustrup braces;
   trailing commas; one JSX prop per line. Invoke the `code-like-me` skill at the
   start of a session before writing code.
2. **Mobile-first breakpoints.** Base classes = mobile; `md:` = desktop. Do NOT
   use `max-[…]` breakpoints.
3. **Link colors live in `@layer base`.** The global `a { color }` rule is inside
   `@layer base` on purpose so Tailwind `text-*` utilities win. If you move it
   out, every link turns blue again (real bug). Links with no `text-*` class fall
   back to the blue accent; add `text-ink`/`text-ink-muted` where you want
   otherwise.
4. **No ancestor `overflow` on the sticky header's chain.** `position: sticky`
   breaks if any ancestor has `overflow-x/y: hidden|clip|auto`. Don't reintroduce
   `overflow-x: hidden` on `html`/`body`/wrappers.
5. **One component per folder**: `components/Name/Name.tsx`. File-local helpers go
   below the component; module constants above.

## Content — where to edit

- **Bio / name / buttons**: `components/Hero/Hero.tsx`
- **Jobs**: the `jobs` array in `components/Experience/Experience.tsx`
  (`name, website (string | null), period, role, type, detail, stack`;
  `website: null` → non-link row, no `↗`).
- **Email / GitHub**: `components/Contact/Contact.tsx` (email `kyzc411@gmail.com`,
  GitHub `github.com/kadiryazici`). The footer GitHub link lives in
  `components/Page/Page.tsx`.
- **Site metadata**: `app/layout.tsx`; per-page metadata via `export const metadata`.

## Known open items

- Verify narrow-mobile (~360px) on a real device / DevTools — headless macOS
  screenshots clamp to ~500px min width and misrepresent the render.
- CryptoSea and House in Korea have `website: null` (no URL yet).
- Tech-stack lines in `jobs` are curated (~5 items); expand if you want full lists.
- Avatar is the GitHub avatar URL; swap for a local `public/*` if preferred.
