"use client"

import { cn } from "@/lib/utils";
import { Fragment, MouseEvent, ToggleEvent, useEffect, useId, useRef, useState, type ComponentProps } from "react";

export function TimePickerButton(props: ComponentProps<"button">) {
  const {
    className,
    children,
    ...attrs
  } = props;

  const anchorName = `--${useId()}`
  const [popoverVisible, setPopoverVisible] = useState(false)

  return (
    <>
      <button
        {...attrs}
        className={cn("active:bg-blue-600 font-semibold flex items-center gap-3 cursor-pointer rounded-lg py-2 px-4 bg-blue-500 hover:bg-[color-mix(in_srgb,currentColor_20%,var(--color-blue-500))]", className)}
        onClick={() => void setPopoverVisible(v => !v)}
        popoverTarget={anchorName}
        popoverTargetAction="toggle"
      >
        <ClockMouseFollowIcon
          className="text-[24px]"
          style={{ anchorName }}
        />
        <span>{children}</span>
      </button>

      <PickerPopover
        id={anchorName}
        style={{ positionAnchor: anchorName }}
      />
    </>
  )
}

function ClockMouseFollowIcon(props: ComponentProps<"div">) {
  const {
    className,
    ...attrs
  } = props;

  const iconRef = useRef<HTMLDivElement>(null)
  const minuteHandRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const icon = iconRef.current
      const minuteHand = minuteHandRef.current

      if (!icon || !minuteHand) {
        return
      }

      const bounds = icon.getBoundingClientRect()
      const centerX = bounds.left + bounds.width / 2
      const centerY = bounds.top + bounds.height / 2

      const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX) * (180 / Math.PI) + 90
      minuteHand.style.transform = `rotate(${angle}deg)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handStyles = cn("rounded-full w-[2px] bg-current origin-[50%_calc(100%-1px)]")

  return (
    <div
      ref={iconRef}
      className={cn("relative border-[2px] w-[1em] h-[1em] border-current rounded-full", className)}
      {...attrs}
    >
      <div className="flex justify-center items-end absolute top-[15%] left-0 right-0 pt-[5px] h-[35%] rounded-full">
        <div
          className={cn("shrink minute-hand absolute h-full", handStyles)}
          ref={minuteHandRef}
        />
        <div
          className={cn("shrink hour-hand absolute -rotate-90 h-2/3", handStyles)}
        />

        <div className="[anchor-name:var(--clock-anchor-name)] invisible pointer-events-none size-[1px] inset-0 m-auto" />
      </div>
    </div>
  );
}

type PickerPopoverProps = ComponentProps<"div"> & {
  onValueChange?: (value: [number, number]) => void
}

function createDigitPosition(values: number[], radius: number) {
  return values.map((value, index) => {
    const angle = (index / values.length) * Math.PI * 2

    return {
      value,
      left: 50 + Math.sin(angle) * radius,
      top: 50 - Math.cos(angle) * radius,
    }
  })
}

const hourDigits = createDigitPosition(
  [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  40,
)

const minuteDigits = createDigitPosition(
  [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
  40,
)

const innerHourDigits = createDigitPosition(
  [24, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
  25,
)

function PickerPopover(props: PickerPopoverProps) {
  const {
    className,
    style = {},
    ref,
    onValueChange,
    ...attrs
  } = props

  const [phase, setPhase] = useState<"hour" | "minute">("minute")
  const [hour, setHour] = useState(12)
  const [minute, setMinute] = useState(25)

  const handleOnToggle = (e: ToggleEvent<HTMLDivElement>) => {
    setPhase("hour")
    if (e.newState === "open") {
      setHour(12)
      setMinute(25)
    }
  }

  const elRef = useRef<HTMLDivElement>(null)

  const handleSelectHour = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return
    }

    const digit = Number(e.target.getAttribute("data-digit-value"))
    setHour(digit)
    setPhase("minute")
  }

  const handleSelectMinute = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return
    }

    const digit = Number(e.target.getAttribute("data-digit-value"))
    setMinute(digit)
    elRef.current?.togglePopover(false)
    onValueChange?.([hour, minute])
  }

  const sharedDigitStyles = cn("inline-grid size-[2.5ch] place-items-center rounded-full hover:bg-blue-400/60 hover:ring-blue-400/30 cursor-pointer absolute -translate-x-1/2 -translate-y-1/2")
  const outerDigitStyles = cn(sharedDigitStyles, "text-gray-950 text-[16px] font-[500] hover:ring-5")
  const innerHourDigitStyles = cn(sharedDigitStyles, "text-gray-600 text-[13px] hover:ring-3")

  return (
    <div
      {...attrs}
      className={cn("p-2 shadow-md open:starting:[transform:scale(0)] open:starting:opacity-0 open:starting:blur-[20px] absolute bg-slate-200 shadow-[inset_0_0_20px_10px_rgba(0,0,0,0.3)] rounded-full", className)}
      popover="auto"
      onToggle={handleOnToggle}
      style={{
        width: "min(80vw, 220px)",
        positionArea: "center",
        transitionTimingFunction: "linear(0, 0.013 1%, 0.051 2.2%, 0.404 9.8%, 0.51 12.6%, 0.602 15.5%, 0.683 18.7%, 0.754 22.2%, 0.813 26%, 0.861 30.2%, 0.9 34.8%, 0.931 40%, 0.972 52.7%, 0.992 70.2%, 1)",
        transitionProperty: "all",
        transitionDuration: "500ms",
        willChange: "transform, opacity, filter",
        ...style,
      }}
      ref={(el) => {
        elRef.current = el

        if (typeof ref === "function") {
          ref(elRef.current)
        } else if (ref) {
          ref.current = elRef.current
        }
      }}
    >
      <div className="relative aspect-square w-full">
        <div className="absolute inset-0 size-[8px] m-auto rounded-full bg-gray-700 shadow-xs" />

        {phase === "hour" && (
          <Fragment>
            {hourDigits.map((digit) => (
              <span
                onClick={handleSelectHour}
                data-digit-value={String(digit.value)}
                key={digit.value}
                className={outerDigitStyles}
                style={{
                  left: `${digit.left}%`,
                  top: `${digit.top}%`,
                }}
                role="button"
              >
                {digit.value}
              </span>
            ))}
            {innerHourDigits.map((digit) => (
              <span
                onClick={handleSelectHour}
                data-digit-value={String(digit.value)}
                key={digit.value}
                className={innerHourDigitStyles}
                style={{
                  left: `${digit.left}%`,
                  top: `${digit.top}%`,
                }}
                role="button"
              >
                {digit.value}
              </span>
            ))}
          </Fragment>
        )}

        {phase === "minute" && minuteDigits.map((digit) => (
          <span
            key={digit.value}
            className={outerDigitStyles}
            style={{
              left: `${digit.left}%`,
              top: `${digit.top}%`,
            }}
            role="button"
            data-digit-value={String(digit.value)}
            onClick={handleSelectMinute}
          >
            {digit.value}
          </span>
        ))}
      </div>
    </div >
  )
}
