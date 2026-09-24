import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

const markers = Array.from({ length: 180 }, (_, index) => index)

export type MePicProps = ComponentProps<"figure">

export function MePic(props: MePicProps) {
  const { className, ...attrs } = props

  return (
    <figure
      {...attrs}
      className={cn("relative aspect-square w-[400px] max-w-full p-6 sm:p-10", className)}
    >
      <img
        src="/me-banner-wide.webp"
        alt="Kadir Yazıcı with a bicycle beside a lake"
        width={330}
        height={330}
        className="starting:opacity-0 starting:blur-sm starting:scale-110 duration-1000 transition-all delay-300 block aspect-square h-auto w-full rounded-full object-cover"
      />

      <div
        aria-hidden="true"
        className="starting:opacity-0 starting:blur-sm starting:scale-130 duration-2000 transition-all delay-1500 pointer-events-none absolute inset-0 animate-spin [animation-duration:120s] motion-reduce:animate-none"
      >
        <svg
          viewBox="0 0 394 394"
          fill="none"
          className="size-full text-accent"
        >
          {markers.map((index) => (
            <line
              key={index}
              x1={197}
              y1={4}
              x2={197}
              y2={index % 5 === 0 ? 20 : 14}
              stroke="currentColor"
              strokeWidth={index % 5 === 0 ? 1 : 1}
              strokeOpacity={index % 5 === 0 ? 0.4 : 0.2}
              vectorEffect="non-scaling-stroke"
              transform={`rotate(${index * 2} 197 197)`}
            />
          ))}
        </svg>
      </div>
    </figure>
  )
}
