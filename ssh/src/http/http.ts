import indexHtml from "./index.html"

export function serveHttp() {
  Bun.serve({
    hostname: "0.0.0.0",
    port: process.env.HTTP_PORT ?? 8080,
    routes: {
      "/*": indexHtml
    }
  })

}
