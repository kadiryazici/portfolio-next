import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export type PageMainProps = ComponentProps<"main">

export function PageMain(props: PageMainProps) {
  const { children, className, ...attrs } = props

  return (
    <main
      {...attrs}
      className={cn("mx-auto w-full pb-8 md:pb-12", className)}
    >
      {children}
    </main>
  )
}
