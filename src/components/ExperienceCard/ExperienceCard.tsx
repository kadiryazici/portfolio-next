"use client"

import type { ComponentProps, ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export type ExperienceCardProps = ComponentProps<"div"> & {
  videoUrls: string[][]
  title: ReactNode
  subtitle: ReactNode,
  description: ReactNode,
  tags: string[],
  logoUrl: string,
  fromTo: [string, string]
}

export function ExperienceCard(props: ExperienceCardProps) {
  const {
    videoUrls,
    title,
    subtitle,
    tags,
    logoUrl,
    description,
    fromTo,
    className,
    ...attrs
  } = props

  const [activeVideoIndex, setActiveVideoIndex] = useState(0)
  const [isVideoInView, setIsVideoInView] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)
  const activeVideoUrls = videoUrls[activeVideoIndex]

  useEffect(() => {
    const videoElement = videoRef.current

    if (!videoElement) {
      return
    }

    const observer = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) {
        return
      }

      setIsVideoInView(true)
      observer.disconnect()
    })

    observer.observe(videoElement)

    return () => {
      observer.disconnect()
    }
  }, [])

  function handleVideoEnd() {
    if (activeVideoIndex === videoUrls.length - 1) {
      setActiveVideoIndex(0)
      return
    }

    setActiveVideoIndex(activeVideoIndex + 1)
  }

  return (
    <div
      {...attrs}
      className={cn(
        "flex flex-col overflow-hidden rounded-[18px] border border-white/[0.09] bg-white/[0.035] shadow-[0_24px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-[border-color,background-color,transform,box-shadow] duration-300",
        className,
      )}
    >
      <div className="flex items-center justify-center overflow-hidden border-b border-white/[0.08] bg-black/30 p-1.5 md:p-2">
        <div
          ref={videoRef}
          className="relative aspect-[13/7] w-full overflow-hidden rounded-xl bg-black shadow-[0_8px_24px_rgba(0,0,0,0.28)]"
        >
          <div className="rounded-[inherit] z-[5] inset-0 absolute border border-neutral-700" />
          {isVideoInView && (
            <video
              autoPlay
              loop={videoUrls.length === 1}
              muted
              playsInline
              className="size-full object-cover scale-101"
              key={activeVideoUrls[0]}
              onEnded={handleVideoEnd}
            >
              {activeVideoUrls.map((videoUrl) => (
                <source
                  src={videoUrl}
                  key={videoUrl}
                  type={getVideoMimeType(videoUrl)}
                />
              ))}
            </video>
          )}
        </div>
      </div>

      <div className="flex flex-row flex-nowrap items-start gap-3 px-5 pb-0 pt-5 md:gap-4 md:px-6 md:pt-6">
        <img
          src={logoUrl}
          className="size-12 shrink-0 rounded-[11px] border border-white/[0.1] bg-white/[0.06] object-contain shadow-[0_5px_14px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.08)] md:size-14"
        />

        <div className="min-w-0 w-full">
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <h2 className="m-0 text-[17px] font-semibold leading-6 tracking-normal text-ink md:text-lg">
              {title}
            </h2>
            <span className="text-yellow-500 shrink-0 font-mono text-[11px] leading-5 text-ink-muted">
              {fromTo[0]} → {fromTo[1]}
            </span>
          </div>
          <p className="m-0 mt-0.5 text-[13px] leading-5 text-ink-soft md:text-sm">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="w-full px-5 pt-4 text-[14px] leading-6 text-ink-soft [&_strong]:font-medium [&_strong]:text-ink md:px-6 md:pt-5 md:text-[15px] md:leading-7">
        {description}
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
  )
}

function getVideoMimeType(videoUrl: string) {
  if (videoUrl.endsWith(".mp4")) {
    return "video/mp4"
  }

  return "video/webm"
}
