import { SyntaxStyle } from "@opentui/core"

export const markdownStyle = SyntaxStyle.fromStyles({
  heading: { fg: "#fafafa", bold: true },
  strong: { fg: "#fafafa", bold: true },
  em: { fg: "#a1a1aa", italic: true },
  code: { fg: "#facc15" },
  default: { fg: "#e4e4e7" },
})

export const terminalRoutes = [
  { label: "Home", shortcut: "1", value: "home" },
  { label: "Experience", shortcut: "2", value: "experience" },
  { label: "Projects", shortcut: "3", value: "projects" },
  { label: "Contact", shortcut: "4", value: "contact" },
  { label: "Blog", shortcut: "5", value: "blog" },
] as const

export type TerminalRoute = (typeof terminalRoutes)[number]["value"]
