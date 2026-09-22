import { Constants } from "@/constants"
import { Icons } from "../Icons"
import type { ReactNode } from "react"

export const navigationLinks = [
  {
    name: "About",
    href: "/",
    icon: (
      <img
        src="/me.webp"
        alt="Kadir Yazıcı"
        className="size-[1em] rounded-full"
      />
    ),
  },
  {
    name: "Experience",
    href: "/experience",
    icon: <Icons.StarDuotone />,
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
] as const satisfies ReadonlyArray<{
  name: string
  href: string
  icon: ReactNode
  target?: "_blank"
}>

export const socialLinks = [
  {
    name: "Contact Me",
    href: `mailto:${Constants.email}`,
    icon: <Icons.Message />,
  },
  {
    name: "Github",
    href: "https://github.com/kadiryazici",
    icon: <Icons.Github />,
    target: "_blank",
  },
] as const satisfies ReadonlyArray<{
  name: string
  href: string
  icon: ReactNode
  target?: "_blank"
}>
