import type { ComponentProps, ReactNode } from "react"
import { AppIcon } from "@/components/AppIcon/AppIcon"
import { cn } from "@/lib/utils"

export type ProjectCardProps = ComponentProps<"a"> & {
  imageUrl?: string
  logoUrl?: string
  title: ReactNode
  subtitle: ReactNode
  description: ReactNode
  purpose: ReactNode
  tags: readonly string[]
}

export function ProjectCard(props: ProjectCardProps) {
  const {
    imageUrl,
    logoUrl,
    title,
    subtitle,
    description,
    purpose,
    tags,
    className,
    ...attrs
  } = props

  return (
    <a
      {...attrs}
      className={cn(
        "group flex flex-col-reverse lg:flex-row overflow-hidden rounded-[18px] border border-white/[0.09] bg-white/[0.035] text-ink no-underline shadow-[0_24px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-[border-color,background-color,transform,box-shadow] duration-300 hover:border-white/[0.15] hover:bg-white/[0.05]",
        className,
      )}
    >
      <div className="flex flex-col gap-[inherit] w-full">
        <div className="flex flex-row flex-nowrap items-center gap-3 px-5 pb-0 pt-5 md:gap-4 md:px-6 md:pt-6">
          {logoUrl != null && (
            <img
              src={logoUrl}
              alt=""
              className="size-12 shrink-0 rounded-[11px] border border-white/[0.1] bg-white/[0.06] object-contain shadow-[0_5px_14px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.08)] md:size-14"
            />
          )}

          <div className="min-w-0 w-full">
            <div className="flex items-center justify-between gap-4">
              <h2 className="m-0 text-[17px] font-semibold leading-6 tracking-normal text-ink md:text-lg">
                {title}
              </h2>
              <AppIcon
                name="arrow"
                className="size-4 shrink-0 text-ink-soft transition-colors group-hover:text-accent"
              />
            </div>
            <p className="m-0 mt-0.5 text-[13px] leading-5 text-ink-soft md:text-sm">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="w-full px-5 pt-4 text-[14px] leading-6 text-ink-soft md:px-6 md:pt-5 md:text-[15px] md:leading-7">
          <p className="m-0 text-[inherit] leading-[inherit] text-ink-soft">
            {description}
          </p>
          <p className="mb-0 mt-3 text-[13px] leading-6 text-ink-muted md:text-[14px]">
            {purpose}
          </p>
        </div>

        <div className="flex w-full flex-wrap gap-2 px-5 pb-5 pt-4 md:px-6 md:pb-6 md:pt-5">
          {tags.map((tag) => (
            <span
              className="inline-flex min-h-7 items-center rounded-full border border-white/[0.08] bg-white/[0.055] px-3 text-[12px] font-medium leading-none text-ink-soft"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {imageUrl != null && (
        <div className="flex items-center justify-center overflow-hidden border-b border-white/[0.08] bg-black/30 p-1.5 md:p-2">
          <div className="relative w-full overflow-hidden rounded-xl bg-black shadow-[0_8px_24px_rgba(0,0,0,0.28)]">
            <div className="absolute inset-0 z-10 rounded-[inherit] border border-neutral-700" />

            <img
              src={imageUrl}
              alt={`${String(title)} application interface`}
              className="aspect-[992/794] w-full object-cover object-left-top"
            />
          </div>
        </div>
      )}
    </a>
  )
}
