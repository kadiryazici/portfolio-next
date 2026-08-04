"use client"

import type { ComponentProps, KeyboardEvent, ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import Link from "vinext/shims/link"
import { AppIcon } from "@/components/AppIcon/AppIcon"
import { Icons } from "@/components/Icons"
import { SidebarLink } from "@/components/Sidebar/SidebarLink"
import { cn } from "@/lib/utils"

const navigationLinks = [
  {
    name: "Experience",
    href: "/experience",
    icon: <Icons.Star />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <Icons.Box />,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: <Icons.BookOpen />,
  },
] as const satisfies ReadonlyArray<MobileSidebarLinkData>

const socialLinks = [
  {
    name: "Contact Me",
    href: "mailto:kyzc411@gmail.com",
    icon: <Icons.Message />,
  },
  {
    name: "Github",
    href: "https://github.com/kadiryazici",
    icon: <Icons.Github />,
    target: "_blank",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/kadiryzc",
    icon: <Icons.Linkedin />,
    target: "_blank",
  },
  {
    name: "X / Twitter",
    href: "https://x.com/kadiryazicidev",
    icon: <Icons.TwitterX />,
    target: "_blank",
  },
] as const satisfies ReadonlyArray<MobileSidebarLinkData>

const drawerId = "mobile-navigation-drawer"

type MobileSidebarLinkData = {
  name: string
  href: string
  icon: ReactNode
  target?: "_blank"
}

export type MobileSidebarProps = ComponentProps<"header"> & {
  pathname: string
}

export function MobileSidebar(props: MobileSidebarProps) {
  const { pathname, className, ...attrs } = props
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  function handleMenuOpen() {
    setIsOpen(true)
  }

  function handleMenuClose() {
    setIsOpen(false)
    menuButtonRef.current?.focus()
  }

  function handleDrawerKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      event.preventDefault()
      handleMenuClose()
      return
    }

    if (event.key !== "Tab") {
      return
    }

    const focusableElements = drawerRef.current?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    )
    const firstFocusableElement = focusableElements?.[0]
    const lastFocusableElement = focusableElements?.[focusableElements.length - 1]

    if (!firstFocusableElement || !lastFocusableElement) {
      return
    }

    if (event.shiftKey && document.activeElement === firstFocusableElement) {
      event.preventDefault()
      lastFocusableElement.focus()
      return
    }

    if (!event.shiftKey && document.activeElement === lastFocusableElement) {
      event.preventDefault()
      firstFocusableElement.focus()
    }
  }

  const overlayTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.24, ease: "easeOut" as const }
  const drawerTransition = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 240, damping: 30, mass: 0.9 }

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
          ref={menuButtonRef}
          type="button"
          aria-controls={drawerId}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label="Open navigation"
          title="Open navigation"
          onClick={handleMenuOpen}
          className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-transparent text-ink-soft transition-colors hover:bg-white/[0.06] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <AppIcon
            name="menu"
            className="size-5"
          />
        </button>
      </header>

      {isMounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={overlayTransition}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-[2px] md:hidden"
            >
              <button
                type="button"
                tabIndex={-1}
                aria-hidden="true"
                onClick={handleMenuClose}
                className="absolute inset-0 cursor-default"
              />

              <motion.aside
                ref={drawerRef}
                id={drawerId}
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-navigation-title"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={drawerTransition}
                onKeyDown={handleDrawerKeyDown}
                className="relative z-10 ml-auto flex h-full w-[min(320px,calc(100%-32px))] flex-col gap-2 border-l border-white/[0.1] bg-sidebar p-3 shadow-[-24px_0_70px_rgba(0,0,0,0.32)]"
              >
                <div className="flex items-center justify-between gap-4 px-2.5 py-2">
                  <span
                    id="mobile-navigation-title"
                    className="text-[13px] font-medium text-ink-soft"
                  >
                    Navigation
                  </span>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    aria-label="Close navigation"
                    title="Close navigation"
                    onClick={handleMenuClose}
                    className="grid size-9 shrink-0 place-items-center rounded-[10px] border border-white/[0.1] bg-white/[0.06] text-ink transition-colors hover:bg-white/[0.1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <AppIcon
                      name="close"
                      className="size-4"
                    />
                  </button>
                </div>

                <Link
                  href="/"
                  aria-current={pathname === "/" ? "page" : undefined}
                  onClick={handleMenuClose}
                  className="flex items-center gap-3 rounded-[16px] px-2.5 py-3 text-ink no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <img
                    src="/me.webp"
                    alt="Kadir Yazıcı"
                    className="size-10 rounded-[11px] object-cover shadow-avatar"
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-[15px] font-semibold leading-5">Kadir Yazıcı</span>
                    <span className="block truncate text-[12px] text-ink-soft">Full-Stack Engineer</span>
                  </span>
                </Link>

                <nav
                  aria-label="Portfolio"
                  className="flex flex-col gap-0.5"
                >
                  {navigationLinks.map((link) => (
                    <SidebarLink
                      key={link.href}
                      href={link.href}
                      icon={link.icon}
                      active={pathname.startsWith(link.href)}
                      onClick={handleMenuClose}
                    >
                      {link.name}
                    </SidebarLink>
                  ))}
                </nav>

                <div className="mt-auto flex flex-col">
                  <div className="mb-2 h-px w-full bg-neutral-800" />
                  {socialLinks.map((link) => (
                    <SidebarLink
                      key={link.href}
                      href={link.href}
                      icon={link.icon}
                      target={"target" in link ? link.target : undefined}
                      active={false}
                      onClick={handleMenuClose}
                    >
                      {link.name}
                    </SidebarLink>
                  ))}
                </div>
              </motion.aside>

            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  )
}
