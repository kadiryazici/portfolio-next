import { cn } from "@/lib/utils"
import type { ComponentProps, ElementType } from "react"

export type LiquidDivProps<As extends ElementType = "div"> = Omit<ComponentProps<As>, "as" | "material"> & {
  as?: As
  material?: "content" | "control" | "navigation" | "selection"
}

export function LiquidDiv<As extends ElementType = "div">(props: LiquidDivProps<As>) {
  const { className, children, as: As = "div", material = "content", ...attrs } = props
  const Element: ElementType = As

  return (
    <Element
      {...attrs}
      data-glass={material}
      className={cn("liquid-glass isolate relative bg-sidebar/70", className)}
    >
      {children}
    </Element>
  )
}
