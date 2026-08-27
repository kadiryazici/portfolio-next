"use client"

import type { ComponentProps } from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const sshCommand = "ssh ssh.kadiryazici.dev"

export type SSHChipProps = ComponentProps<"button">

export function SSHChip(props: SSHChipProps) {
  const { className, onClick, type = "button", ...attrs } = props
  const [copied, setCopied] = useState(false)

  async function handleChipClick(event: React.MouseEvent<HTMLButtonElement>) {
    await navigator.clipboard.writeText(sshCommand)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
    onClick?.(event)
  }

  return (
    <button
      {...attrs}
      aria-label="Copy SSH command"
      className={cn(
        "fixed right-3 bottom-3 z-50 inline-flex h-9 items-center rounded-[9px] border border-white/10 bg-sidebar px-3 font-mono text-[12px] text-ink shadow-[0_10px_28px_rgba(0,0,0,0.3)] transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
      onClick={(event) => void handleChipClick(event)}
      title="Copy SSH command"
      type={type}
    >
      {copied ? "Copied" : sshCommand}
    </button>
  )
}
