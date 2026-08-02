"use client"

import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode, useState } from "react";

export type ExperienceCardProps = ComponentProps<"div"> & {
  videoUrls: string[]
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

  const [activeVideoUrl, setActiveVideoUrl] = useState(videoUrls[0])

  const handleVideoEnd = () => {
    const index = videoUrls.indexOf(activeVideoUrl)

    if (index === videoUrls.length - 1) {
      setActiveVideoUrl(videoUrls[0])
      return
    }

    setActiveVideoUrl(videoUrls[index + 1])
  }

  return (
    <div
      {...attrs}
      className={cn(
        "flex flex-col gap-2"
      )}
    >
      <div className="overflow-hidden justify-center items-center flex flex-row gap-12 *:shrink-0 flex-nowrap">
        <div className="overflow-hidden w-fit rounded-xl">
          <video
            src={activeVideoUrl}
            autoPlay
            muted
            className="overflow-hidden w-full max-w-[700px] "
            key={activeVideoUrl}
            onEnded={handleVideoEnd}
          />
        </div>
      </div>

      <div className="flex flex-row gap-2 flex-nowrap items-start">
        <img
          src={logoUrl}
          className="size-16 object-contain shrink-0 rounded-xl"
        />

        <div className="w-full">
          <h2 className="text-xl">
            {title}
          </h2>
          <p className="text-base m-0">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="w-full">
        {description}
      </div>

      <div className="w-full">
        <span>Vue</span>
      </div>
    </div>
  )
}
