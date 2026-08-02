import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export type HeaderProps = ComponentProps<"h2"> & {
  children: string
}

export function Header(props: HeaderProps) {
  const { children, className, id, ...attrs } = props
  const headingId = id ?? createHeadingId(children)

  return (
    <h2
      {...attrs}
      id={headingId}
      className={cn(
        "mb-4 mt-12 flex items-baseline gap-2 text-[20px] font-semibold leading-7 text-ink md:mt-14 md:text-[24px]",
        className,
      )}
    >
      <span className="font-mono text-[13px] font-medium text-accent">##</span>
      <a
        href={`#${headingId}`}
        className="text-ink no-underline transition-colors hover:text-accent"
      >
        {children}
      </a>
    </h2>
  )
}

function createHeadingId(children: string) {
  return children
    .toLowerCase()
    .trim()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, "")
}
