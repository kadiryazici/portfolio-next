import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export type PageMainProps = ComponentProps<"main">

export function PageMain(props: PageMainProps) {
  const { children, className, ...attrs } = props

  return (
    <main
      {...attrs}
      className={cn("mx-auto w-full max-w-3xl px-4 pb-20", className)}
    >
      {children}
    </main>
  )
}
