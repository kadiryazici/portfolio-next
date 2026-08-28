import indexHtml from "./index.html"

export function serveHttp() {
  Bun.serve({
    hostname: "127.0.0.1",
    port: process.env.HTTP_PORT ?? 8080,
    routes: {
      "/*": indexHtml
    }
  })

}
