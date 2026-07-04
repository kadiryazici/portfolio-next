import { defineConfig } from "vite"
import vinext from "vinext"
import { nitro } from "nitro/vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    vinext(),
    nitro({
      preset: "static",
      prerender: {
        crawlLinks: true,
        routes: ["/"],
      },
    }),
    tailwindcss(),
  ],
})
