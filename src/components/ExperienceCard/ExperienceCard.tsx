"use client"

import type { ComponentProps, ReactNode } from "react"
import { startTransition, useEffect, useId, useRef, useState } from "react"
// Namespace access avoids vinext’s canary shim rewriting every React import.
import * as React from "react"
import { cn } from "@/lib/utils"
import { LiquidDiv } from "../LiquidDiv/LiquidDiv"
import { Icons } from "../Icons"
import { createPortal } from "react-dom"

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
  const videoTransitionName = useId()
  const playbackTimeRef = useRef(0)

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
    playbackTimeRef.current = 0
    if (activeVideoIndex === videoUrls.length - 1) {
      setActiveVideoIndex(0)
      return
    }

    setActiveVideoIndex(activeVideoIndex + 1)
  }

  const [popupOpen, setPopupOpen] = useState(false)
  const [popupSource, setPopupSource] = useState("")

  useEffect(() => {
    if (!popupOpen) {
      return
    }

    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") {
        startTransition(() => setPopupOpen(false))
      }
    }

    window.addEventListener("keyup", handler)

    return () => {
      window.removeEventListener("keyup", handler)
    }
  }, [popupOpen])

  return (
    <LiquidDiv
      {...attrs}
      className={cn(
        "flex flex-col rounded-3xl bg-white/[0.04] transition-[border-color,background-color,transform,box-shadow] duration-300",
        className,
      )}
    >
      {popupOpen && (
        createPortal(
          <div className="isolate p-3 md:p-6 z-[100] isolate overflow-hidden fixed inset-0 m-auto w-[calc(100%-2rem)] md:w-4/5 max-w-[1270px] aspect-video rounded-3xl">
            <LiquidDiv
              className="starting:delay-600 starting:opacity-0 starting:scale-80 delay-600 z-[50] cursor-pointer transition-all duration-600 z-[20] absolute right-4 top-4 md:right-8 md:top-8 text-white size-10 md:size-12 rounded-full bg-bg-2/60 inline-grid place-items-center motion-reduce:transition-none"
              type="button"
              as="button"
              aria-label="Close video"
              onClick={() => startTransition(() => setPopupOpen(false))}
            >
              <Icons.Close className="text-[24px]" />
            </LiquidDiv>

            <React.ViewTransition
              name={videoTransitionName}
              share="video-popup"
              default="none"
            >
              <video
                autoPlay
                muted
                playsInline
                loop
                className="z-[10] absolute inset-0 m-auto aspect-square shadow-lg size-full object-cover scale-101 rounded-2xl border border-neutral-700"
                src={popupSource}
                onLoadedMetadata={(event) => {
                  event.currentTarget.currentTime = playbackTimeRef.current
                }}
                onTimeUpdate={(event) => {
                  playbackTimeRef.current = event.currentTarget.currentTime
                }}
              />
            </React.ViewTransition>
          </div>,
          document.body
        )
      )}

      <div className="rounded-t-3xl flex items-center justify-center overflow-hidden border-b border-white/[0.08] bg-black/30 p-1.5 md:p-2">
        <div
          ref={videoRef}
          className="relative aspect-[13/7] w-full overflow-hidden rounded-2xl bg-black shadow-[0_8px_24px_rgba(0,0,0,0.28)]"
        >
          {!popupOpen && (
            <div className="relative size-full overflow-hidden rounded-2xl bg-black">
              <div className="rounded-[inherit] z-[5] inset-0 absolute border border-neutral-700" />

              <button
                className="z-[20] cursor-pointer absolute inset-0 grid place-items-center group focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
                type="button"
                aria-label="Expand video"
                onClick={() => {
                  startTransition(() => {
                    setPopupSource(activeVideoUrls.find((videoUrl) => videoUrl.endsWith(".mp4")) ?? activeVideoUrls[0])
                    setPopupOpen(true)
                  })
                }}
              >
                <LiquidDiv className="opacity-0 blur-md duration-450 group-hover:blur-none group-hover:opacity-100 transition-all group-hover:scale-130 grid place-items-center text-white size-[64px] rounded-full absolute inset-0 m-auto bg-bg-2/60">
                  <Icons.FullScreen className="text-[32px]" />
                </LiquidDiv>
              </button>

              {isVideoInView && (
                <React.ViewTransition
                  name={videoTransitionName}
                  share="video-popup"
                  default="none"
                >
                  <video
                    autoPlay
                    loop={videoUrls.length === 1}
                    muted
                    playsInline
                    className="rounded-3xl size-full object-cover scale-101"
                    key={activeVideoUrls[0]}
                    onEnded={handleVideoEnd}
                    onLoadedMetadata={(event) => {
                      event.currentTarget.currentTime = playbackTimeRef.current
                    }}
                    onTimeUpdate={(event) => {
                      playbackTimeRef.current = event.currentTarget.currentTime
                    }}
                  >
                    {activeVideoUrls.map((videoUrl) => (
                      <source
                        src={videoUrl}
                        key={videoUrl}
                        type={getVideoMimeType(videoUrl)}
                      />
                    ))}
                  </video>
                </React.ViewTransition>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-row flex-nowrap items-start gap-3 px-5 pb-0 pt-5 md:gap-4 md:px-6 md:pt-6">
        <img
          src={logoUrl}
          className="size-12 shrink-0 rounded-2xl border border-white/[0.1] bg-white/[0.06] object-contain shadow-[0_5px_14px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.08)] md:size-14"
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
          <LiquidDiv
            className="inline-flex min-h-7 items-center rounded-full px-3 text-[12px] font-medium leading-none text-ink-soft"
            key={tag}
          >
            {tag}
          </LiquidDiv>
        ))}
      </div>
    </LiquidDiv>
  )
}

function getVideoMimeType(videoUrl: string) {
  if (videoUrl.endsWith(".mp4")) {
    return "video/mp4"
  }

  return "video/webm"
}
