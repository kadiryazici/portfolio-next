"use client"

import type { ComponentProps, MouseEvent } from "react"
import { useRef } from "react"
import Link from "vinext/shims/link"
import { AppIcon } from "@/components/AppIcon/AppIcon"
import { SidebarContent } from "@/components/Sidebar/SidebarContent/SidebarContent"
import { cn } from "@/lib/utils"

const drawerId = "mobile-navigation-drawer"
const dialogOpenCommand = {
  command: "show-modal",
  commandfor: drawerId,
} as const
const dialogCloseCommand = {
  command: "close",
  commandfor: drawerId,
} as const

export type MobileSidebarProps = ComponentProps<"header"> & {
  pathname: string
}

export function MobileSidebar(props: MobileSidebarProps) {
  const { pathname, className, ...attrs } = props
  const dialogRef = useRef<HTMLDialogElement>(null)

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target !== event.currentTarget) {
      return
    }

    dialogRef.current?.close()
  }

  return (
    <>
      <header
        {...attrs}
        className={cn(
          "sticky top-2.5 z-30 flex w-full items-center justify-between rounded-[18px] border border-white/[0.09] bg-sidebar p-2.5 shadow-sidebar md:hidden",
          className,
        )}
      >
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          aria-label="Kadir Yazıcı home"
          className="group flex min-w-0 items-center gap-3 rounded-[12px] px-2.5 py-2 text-ink no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <img
            src="/me.webp"
            alt=""
            className="size-9 shrink-0 rounded-[10px] object-cover shadow-avatar"
          />
          <span className="truncate text-[15px] font-semibold leading-5 text-ink transition-colors group-hover:text-accent">
            Kadir Yazıcı
          </span>
        </Link>

        <button
          {...dialogOpenCommand}
          type="button"
          aria-controls={drawerId}
          aria-haspopup="dialog"
          aria-label="Open navigation"
          title="Open navigation"
          className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-transparent text-ink-soft transition-colors hover:bg-white/[0.06] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <AppIcon
            name="menu"
            className="size-5"
          />
        </button>
      </header>

      <dialog
        ref={dialogRef}
        id={drawerId}
        closedby="any"
        aria-labelledby="mobile-navigation-title"
        onClick={handleBackdropClick}
        className="mobile-navigation-dialog fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-[min(320px,calc(100%-32px))] max-w-none flex-col gap-2 border-l border-white/[0.1] bg-sidebar p-3 text-ink shadow-[-24px_0_70px_rgba(0,0,0,0.32)] md:hidden"
      >
        <div className="flex items-center justify-between gap-4 px-2.5 py-2">
          <span
            id="mobile-navigation-title"
            className="text-[13px] font-medium text-ink-soft"
          >
            Navigation
          </span>
          <button
            {...dialogCloseCommand}
            autoFocus
            type="button"
            aria-label="Close navigation"
            title="Close navigation"
            className="grid size-9 shrink-0 place-items-center rounded-[10px] border border-white/[0.1] bg-white/[0.06] text-ink transition-colors hover:bg-white/[0.1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <AppIcon
              name="close"
              className="size-4"
            />
          </button>
        </div>

        <SidebarContent pathname={pathname} />
      </dialog>
    </>
  )
}
