import { defineConfig } from "vite"
import vinext from "vinext"
import { nitro } from "nitro/vite"
import tailwindcss from "@tailwindcss/vite"
import { cn } from "cn/vite"

export default defineConfig(({ command, isPreview }) => ({
  plugins: [
    vinext({
      prerender: true,
    }),
    cn({ content: ["src/**/*.{ts,tsx}"], out: "src/lib/cn-tables.ts" }),
    // Nitro's dev environment has no runner for the RSC request handler.
    (command === "build" || isPreview) && nitro(),
    tailwindcss(),
  ],
}))
