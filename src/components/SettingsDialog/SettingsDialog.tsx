"use client"

import { useImperativeHandle, useRef, type ComponentProps, type Ref } from "react"
import { AppIcon } from "@/components/AppIcon/AppIcon"
import { cn } from "@/lib/utils"

export type SettingsDialogInstance = {
  open(): void
  close(): void
}

export type SettingsDialogProps = Omit<ComponentProps<"dialog">, "ref"> & {
  instanceRef?: Ref<SettingsDialogInstance>
}

export function SettingsDialog(props: SettingsDialogProps) {
  const { instanceRef, className, ...attrs } = props
  const dialogRef = useRef<HTMLDialogElement>(null)

  useImperativeHandle(instanceRef, () => ({
    open() {
      dialogRef.current?.showModal()
    },
    close() {
      dialogRef.current?.close()
    },
  }), [])

  return (
    <dialog
      {...attrs}
      ref={dialogRef}
      className={cn(
        "fixed inset-0 m-auto w-[min(440px,calc(100%-32px))] rounded-[18px] border border-white/70",
        "bg-dialog p-0 text-ink shadow-dialog backdrop:bg-black/20 backdrop:backdrop-blur-[2px]",
        className,
      )}
    >
      <header className="flex items-start justify-between gap-6 px-5 pb-4 pt-5">
        <div>
          <h2 className="m-0 text-[18px] font-semibold text-ink">Settings</h2>
          <p className="mb-0 mt-1 text-[13px] leading-5 text-ink-soft">Portfolio interface preferences</p>
        </div>

        <form method="dialog">
          <button
            type="submit"
            aria-label="Close settings"
            title="Close"
            className={cn(
              "grid size-7 cursor-pointer place-items-center rounded-full border-0 bg-black/[0.06] p-0",
              "text-ink-muted",
            )}
          >
            <AppIcon
              name="close"
              className="size-3.5"
            />
          </button>
        </form>
      </header>

      <div className="mx-3 mb-3 overflow-hidden rounded-[10px] bg-white/70 shadow-settings-group">
        <div className="flex items-center gap-3 px-3.5 py-3">
          <span className="grid size-7 shrink-0 place-items-center rounded-[7px] bg-accent text-white">
            <AppIcon
              name="appearance"
              className="size-4"
            />
          </span>
          <span className="flex-1 text-[14px] font-medium text-ink">Appearance</span>
          <span className="rounded-[7px] bg-black/[0.06] px-2.5 py-1 text-[12px] font-medium text-ink-muted">
            Light
          </span>
        </div>

        <div className="mx-3.5 border-t border-line" />

        <div className="flex items-center gap-3 px-3.5 py-3">
          <span className="grid size-7 shrink-0 place-items-center rounded-[7px] bg-black/[0.08] text-ink-muted">
            <AppIcon
              name="settings"
              className="size-4"
            />
          </span>
          <span className="flex-1 text-[14px] font-medium text-ink">Interface motion</span>
          <span className="rounded-[7px] bg-black/[0.06] px-2.5 py-1 text-[12px] font-medium text-ink-muted">
            Off
          </span>
        </div>
      </div>
    </dialog>
  )
}
