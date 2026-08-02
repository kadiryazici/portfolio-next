import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"

export type SectionProps = ComponentProps<"section"> & {
  label: string
  children: ReactNode
}

export function Section(props: SectionProps) {
  const { label, children, className, ...attrs } = props

  return (
    <section
      {...attrs}
      className={cn(
        "scroll-mt-6 border-t border-line py-14 md:py-20",
        className,
      )}
    >
      <h2 className="mb-9 mt-0 text-[13px] font-semibold uppercase text-ink-soft">
        {label}
      </h2>

      {children}
    </section>
  )
}
