import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"

export type SectionProps = ComponentProps<"section"> & {
  index: string
  label: string
  children: ReactNode
}

export function Section(props: SectionProps) {
  const { index, label, children, className, ...attrs } = props

  return (
    <section
      {...attrs}
      className={cn(
        "scroll-mt-28 border-t border-line py-12 md:py-16",
        className,
      )}
    >
      <div className="mb-10 flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em]">
        <span className="text-accent">{index}</span>
        <span className="text-slate-300">{label}</span>
      </div>

      {children}
    </section>
  )
}
