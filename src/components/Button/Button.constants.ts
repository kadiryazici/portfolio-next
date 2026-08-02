export const ButtonVariantStyles = {
  primary: "bg-accent text-bg hover:bg-yellow-500",
  secondary: "border border-white/[0.1] bg-white/[0.06] text-ink hover:bg-white/[0.1]",
  icon: "border border-white/[0.1] bg-white/[0.06] text-ink hover:bg-white/[0.1]",
  ghost: "bg-transparent text-ink-soft hover:bg-white/[0.06] hover:text-ink",
} as const

export const ButtonPaddingStyles = {
  none: "p-0",
  sm: "h-8 px-3 text-[12px]",
  md: "h-10 px-4 text-[14px]",
  lg: "h-12 px-5 text-[15px]",
  icon: "size-10 p-0",
} as const
