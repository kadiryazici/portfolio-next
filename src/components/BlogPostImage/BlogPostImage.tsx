import type { ComponentProps } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export type BlogPostImageProps = ComponentProps<"figure"> & {
  src: string
  alt: string
  width: number
  height: number
}

export function BlogPostImage(props: BlogPostImageProps) {
  const { src, alt, width, height, className, ...attrs } = props

  return (
    <figure
      {...attrs}
      className={cn(
        "overflow-hidden rounded-[18px] border border-white/[0.09] bg-white/[0.035] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl md:p-2",
        className,
      )}
    >
      <div className="overflow-hidden rounded-xl border border-neutral-700 bg-black shadow-[0_8px_24px_rgba(0,0,0,0.28)]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 768px) 768px, calc(100vw - 40px)"
          className="h-auto w-full"
          unoptimized
        />
      </div>
    </figure>
  )
}
