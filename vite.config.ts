import { defineConfig } from "vite"
import vinext from "vinext"
import { nitro } from "nitro/vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig(() => ({
  plugins: [
    vinext({
      prerender: true
    }),
    nitro(),
    tailwindcss(),
  ],
}))
