import { createRoot } from "@opentui/react";
import { createServer } from "@opentui/ssh";
import { TerminalPortfolio } from "./components/TerminalPortfolio/TerminalPortfolio";

const server = createServer({ auth: "open" })
  .serve(session => {
    const root = createRoot(session.renderer)
    root.render(<TerminalPortfolio />)
    session.onClose(() => {
      root.unmount()
    })
  })

await server.listen(2222, "0.0.0.0")
