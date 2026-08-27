import { createRoot } from "@opentui/react";
import { createServer } from "@opentui/ssh";
import { TerminalPortfolio } from "./components/TerminalPortfolio/TerminalPortfolio";

const hostKeyPath = process.env.SSH_HOST_KEY_PATH

const server = createServer({
  auth: "open",
  hostKey: hostKeyPath ? { path: hostKeyPath } : undefined,
})
  .serve(session => {
    const root = createRoot(session.renderer)
    root.render(<TerminalPortfolio />)
    session.onClose(() => {
      root.unmount()
    })
  })

await server.listen(2222, "0.0.0.0")
