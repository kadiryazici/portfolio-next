export const ButtonVariantStyles = {
  primary: "bg-yellow-600 text-white shadow-sm hover:bg-yellow-500",
  secondary: "bg-ink-950 text-white shadow-sm hover:bg-ink-800",
  tertiary: "border border-surface-3 bg-white text-txt-1 shadow-sm hover:bg-surface-2",
  ghost: "bg-transparent text-txt-1 hover:bg-surface-2",
  ghostPrimary: "bg-transparent text-primary-600 hover:bg-primary-50",
} as const

export const ButtonPaddingStyles = {
  none: "p-0",
  sm: "min-h-8 px-3 py-1.5 text-xs",
  md: "min-h-10 px-4 py-2 text-sm",
  lg: "min-h-12 px-5 py-3 text-sm",
  icon: "size-10 p-2.5 text-base",
} as const
