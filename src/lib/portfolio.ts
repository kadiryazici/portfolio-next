export const portfolioHome = {
  role: "Full-Stack Engineer",
  title: "Kadir Yazıcı",
  tagline: "I build full-stack systems for products people rely on.",
  description:
    "From accessible interfaces to performance and complex product workflows, I turn ideas into software that feels clear, fast, and reliable.",
} as const

export const experiences = [
  {
    company: "Seam",
    role: "Software Developer - Full Time",
    fromTo: ["2024/10", "2026/08"],
    logoUrl: "/logos/seam.webp",
    videoUrls: [
      ["/videos/seam/seam-2.mp4", "/videos/seam/seam-2.webm"],
      ["/videos/seam/seam-1.mp4", "/videos/seam/seam-1.webm"],
    ],
    tags: ["Next.js", "Strapi", "Web Components", "Zustand", "Accessibility", "Performance"],
    description:
      "Building web components and complex UI systems with Next.js and React. API and state management, performance optimization and refactoring, plus open-source libraries.",
    achievements: [
      "Recreated the marketing website frontend with Next.js and Strapi.",
      "Implemented Strapi integration and API endpoints.",
      "Optimized the marketing network through caching, reducing load times by 80%.",
      "Developed reusable Web Components for customers.",
      "Handled state management with Zustand.",
      "Implemented accessible UI components for the dashboard application.",
      "Implemented animated UI visuals and graphics.",
      "Resolved performance issues in the dashboard application.",
      "Fixed minor bugs in Back-End endpoints.",
    ],
  },
  {
    company: "Wope",
    role: "Frontend Engineer - Full Time",
    fromTo: ["2021/09", "2024/10"],
    logoUrl: "/logos/wope.png",
    videoUrls: [
      ["/videos/wope/wope-1.mp4", "/videos/wope/wope-1.webm"],
      ["/videos/wope/wope-2.mp4", "/videos/wope/wope-2.webm"],
      ["/videos/wope/wope-3.mp4", "/videos/wope/wope-3.webm"],
      ["/videos/wope/wope-4.mp4", "/videos/wope/wope-4.webm"],
      ["/videos/wope/wope-5.mp4", "/videos/wope/wope-5.webm"],
    ],
    tags: ["Vue", "AG Grid", "Web Workers", "Pinia", "Onboarding", "Network Optimization", "Stripe"],
    description:
      "Building UI components from scratch, handling animations, writing performant code, and owning app state and logic.",
    achievements: [
      "Built a comprehensive UI component library from scratch with Vue.",
      "Implemented performant table rendering with AG Grid virtualization.",
      "Used Web Workers to improve table performance.",
      "Handled state management with Pinia.",
      "Implemented onboarding for new customers.",
      "Implemented Stripe payment flows.",
      "Implemented custom network handling to improve performance and optimize requests.",
    ],
  },
  {
    company: "CryptoSea",
    role: "Frontend Engineer - Contract",
    fromTo: ["2024/04", "2024/07"],
    logoUrl: "/logos/cryptosea.jpg",
    videoUrls: [["/videos/cryptosea/cryptosea-1.mp4", "/videos/cryptosea/cryptosea-1.webm"]],
    tags: ["Vue", "TypeScript", "Qwik", "SSR", "Stripe"],
    description:
      "Building payment, analytics, backend integration, and user management flows.",
    achievements: [
      "Implemented Stripe payment flows.",
      "Integrated analytics and backend APIs.",
      "Built user management flows.",
      "Implemented server-side rendering with Qwik.",
    ],
  },
] as const

export const featuredProjects = [
  {
    name: "Gitification",
    subtitle: "Desktop product",
    description:
      "A lightweight desktop menubar app for managing GitHub notifications without leaving your workflow.",
    purpose:
      "It brings releases, subscriptions, and CI activity into one quiet, glanceable interface.",
    website: "https://github.com/Gitification-App/gitification",
    stack: ["Vue", "TypeScript", "Rust", "Tauri", "Tailwind CSS"],
    image: "/projects/gitification.png",
    logoImage: "/projects/gitification-logo.png",
  },
] as const

export const openSourceProjects = [
  {
    name: "Bottom Sheet Vue 3",
    subtitle: "Vue component library",
    description:
      "A touch-supported bottom sheet component library for Vue 3, designed for mobile-friendly interfaces.",
    purpose:
      "Created in the pre-shadcn era as a focused, reusable UI primitive with swipe gestures, slots, teleporting, and configurable behavior.",
    website: "https://github.com/kadiryazici/bottom-sheet-vue3",
    stack: ["Vue 3", "TypeScript", "SCSS", "Vite"],
  },
  {
    name: "Auto Namespace Imports",
    subtitle: "VS Code extension",
    description:
      "A VS Code extension that makes TypeScript namespace imports easier to discover and insert through autocomplete.",
    purpose:
      "It suggests namespace imports for workspace files and packages, supports custom aliases, and respects TypeScript path resolution settings.",
    website: "https://github.com/kadiryazici/typescript-namespace-imports-vscode-plugin",
    stack: ["TypeScript", "VS Code API", "Autocomplete", "tsconfig"],
  },
  {
    name: "Wowerlay",
    subtitle: "Vue popover library",
    description: "A popover library for Vue 3 applications, powered by Floating UI.",
    purpose:
      "It provides scoped overlays, transitions, and lifecycle-aware mounting for floating Vue components.",
    website: "https://github.com/wopehq/wowerlay",
    stack: ["Vue 3", "TypeScript", "Floating UI", "Popovers"],
  },
  {
    name: "Vue 3 Replacer",
    subtitle: "Vue component library",
    description: "A focused text replacer component for Vue 3 applications.",
    purpose:
      "Built as a small, reusable interface primitive for text replacement workflows.",
    website: "https://github.com/kadiryazici/vue3-replacer",
    stack: ["Vue 3", "TypeScript", "Vite", "Component Library"],
  },
] as const
