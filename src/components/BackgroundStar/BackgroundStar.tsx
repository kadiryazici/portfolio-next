"use client"

import { useEffect, useState } from "react"
import type { ComponentProps, CSSProperties } from "react"
import { cn } from "@/lib/utils"
import styles from "./BackgroundStar.module.css"

const stars = [
  {
    left: "8%",
    top: "12%",
    "--star-x": "32vmax",
    "--star-y": "24vmax",
    "--star-angle": "36.87deg",
  },
  {
    left: "72%",
    top: "16%",
    "--star-x": "-32vmax",
    "--star-y": "24vmax",
    "--star-angle": "143.13deg",
  },
  {
    left: "16%",
    top: "76%",
    "--star-x": "28vmax",
    "--star-y": "-28vmax",
    "--star-angle": "-45deg",
  },
] satisfies (CSSProperties & Record<"--star-x" | "--star-y" | "--star-angle", string>)[]

const backgroundStars = [
  { left: "7%", top: "19%", width: 2, opacity: 0.3 },
  { left: "83%", top: "8%", width: 3, opacity: 0.2 },
  { left: "24%", top: "43%", width: 2, opacity: 0.25 },
  { left: "91%", top: "62%", width: 2, opacity: 0.35 },
  { left: "12%", top: "79%", width: 3, opacity: 0.2 },
  { left: "68%", top: "88%", width: 2, opacity: 0.3 },
  { left: "57%", top: "31%", width: 1.5, opacity: 0.25 },
  { left: "43%", top: "67%", width: 2, opacity: 0.2 },
  { left: "34%", top: "11%", width: 2, opacity: 0.3 },
  { left: "76%", top: "47%", width: 3, opacity: 0.2 },
  { left: "5%", top: "54%", width: 1.5, opacity: 0.3 },
  { left: "95%", top: "34%", width: 2, opacity: 0.25 },
  { left: "31%", top: "92%", width: 2, opacity: 0.2 },
  { left: "52%", top: "53%", width: 1.5, opacity: 0.2 },
  { left: "18%", top: "27%", width: 2, opacity: 0.25 },
  { left: "62%", top: "73%", width: 3, opacity: 0.2 },
  { left: "46%", top: "5%", width: 1.5, opacity: 0.3 },
  { left: "88%", top: "82%", width: 2, opacity: 0.25 },
  { left: "38%", top: "36%", width: 2, opacity: 0.2 },
  { left: "73%", top: "22%", width: 1.5, opacity: 0.3 },
  { left: "9%", top: "94%", width: 2, opacity: 0.25 },
  { left: "97%", top: "14%", width: 3, opacity: 0.2 },
  { left: "28%", top: "61%", width: 1.5, opacity: 0.25 },
  { left: "59%", top: "95%", width: 2, opacity: 0.3 },
  { left: "81%", top: "70%", width: 2, opacity: 0.2 },
  { left: "3%", top: "38%", width: 1.5, opacity: 0.3 },
  { left: "66%", top: "41%", width: 3, opacity: 0.2 },
  { left: "49%", top: "83%", width: 2, opacity: 0.25 },
] satisfies CSSProperties[]

export type BackgroundStarProps = ComponentProps<"div">

export function BackgroundStar(props: BackgroundStarProps) {
  const { className, ...attrs } = props
  const [shootingStarCount, setShootingStarCount] = useState(0)

  useEffect(() => {
    let timeout: number

    function scheduleNextStar() {
      timeout = window.setTimeout(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setShootingStarCount((count) => count + 1)
        }

        scheduleNextStar()
      }, 7000 + Math.random() * 8000)
    }

    scheduleNextStar()

    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <div
      {...attrs}
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-clip text-accent",
        className,
      )}
    >
      {backgroundStars.map((star, index) => (
        <span
          key={star.left}
          className={cn(
            "absolute aspect-square rounded-full bg-white blur-[0.6px]",
            index >= 16 && "hidden md:block",
          )}
          style={star}
        />
      ))}
      {shootingStarCount > 0 && (
        <span
          key={shootingStarCount}
          className={cn(styles.star, "motion-reduce:hidden")}
          style={stars[(shootingStarCount - 1) % stars.length]}
        />
      )}
    </div>
  )
}
