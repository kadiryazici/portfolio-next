import { defineConfig } from "vite"
import vinext from "vinext"
import { nitro } from "nitro/vite"
import tailwindcss from "@tailwindcss/vite"
import { cn } from "cn/vite"

export default defineConfig(() => ({
  plugins: [
    vinext({
      prerender: true,
      nextConfig: {
        output: "export"
      }
    }),
    cn({ content: ["src/**/*.{ts,tsx}"], out: "src/lib/cn-tables.ts" }),
    nitro(),
    tailwindcss(),
  ],
}))
