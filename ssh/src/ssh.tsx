import { createRoot } from "@opentui/react";
import { createServer } from "@opentui/ssh";
import { TerminalPortfolio } from "./components/TerminalPortfolio/TerminalPortfolio";

const hostKeyPath = process.env.SSH_HOST_KEY_PATH
const port = Number(process.env.SSH_PORT) || 2222

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

await server.listen(port, "0.0.0.0")
