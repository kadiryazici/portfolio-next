import "@opentui/react/runtime-plugin-support"
import { createCliRenderer } from "@opentui/core"
import { createRoot } from "@opentui/react"
import { TerminalPortfolio } from "./components/TerminalPortfolio/TerminalPortfolio"

const renderer = await createCliRenderer()

createRoot(renderer).render(<TerminalPortfolio />)
