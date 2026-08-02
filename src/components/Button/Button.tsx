import { ButtonPaddingStyles, ButtonVariantStyles } from "@/components/Button/Button.constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import type { ComponentProps, ReactNode } from "react"

export type ButtonProps = ComponentProps<"button"> & {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  variant: keyof typeof ButtonVariantStyles
  padding: keyof typeof ButtonPaddingStyles
  href?: string
  target?: string
  rel?: string
  loading?: boolean
}

export function Button(props: ButtonProps) {
  const {
    className,
    children,
    variant,
    padding,
    leftIcon,
    rightIcon,
    type = "button",
    loading = false,
    disabled = false,
    href,
    target,
    rel,
    ...attrs
  } = props

  const buttonClassName = cn(
    "relative inline-flex shrink-0 items-center justify-center gap-2 rounded-xl font-semibold",
    "transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300",
    ButtonVariantStyles[variant],
    ButtonPaddingStyles[padding],
    (disabled || loading) && "pointer-events-none opacity-50",
    className,
  )

  const content = (
    <>
      {leftIcon && (
        <span className={cn("inline-grid shrink-0 place-items-center text-base", loading && "opacity-0")}>
          {leftIcon}
        </span>
      )}
      <span className={cn("inline-block", loading && "opacity-0")}>
        {children}
      </span>
      {rightIcon && (
        <span className={cn("inline-grid shrink-0 place-items-center text-base", loading && "opacity-0")}>
          {rightIcon}
        </span>
      )}
      {loading && (
        <span
          aria-hidden="true"
          className="absolute size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      )}
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        aria-disabled={disabled || loading}
        className={buttonClassName}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      {...attrs}
      type={type}
      disabled={disabled || loading}
      className={buttonClassName}
    >
      {content}
    </button>
  )
}
