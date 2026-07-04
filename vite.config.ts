import { defineConfig } from "vite"
import vinext from "vinext"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [vinext(), tailwindcss()],
})
