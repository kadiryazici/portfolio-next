import { ButtonPaddingStyles, ButtonVariantStyles } from "@/components/Button/Button.constants"
import { cn } from "@/lib/utils"
import type { ComponentProps, ReactNode } from "react"
import Link from "vinext/shims/link"

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
    "relative inline-flex shrink-0 items-center justify-center gap-2 rounded-[9px] font-medium no-underline",
    "transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    ButtonVariantStyles[variant],
    ButtonPaddingStyles[padding],
    (disabled || loading) && "pointer-events-none opacity-50",
    className,
  )

  const content = (
    <>
      {leftIcon != null && (
        <span className={cn("inline-grid shrink-0 place-items-center", loading && "opacity-0")}>
          {leftIcon}
        </span>
      )}
      {children != null && (
        <span className={cn("inline-block", loading && "opacity-0")}>
          {children}
        </span>
      )}
      {rightIcon != null && (
        <span className={cn("inline-grid shrink-0 place-items-center", loading && "opacity-0")}>
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
        {...attrs as any}
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
