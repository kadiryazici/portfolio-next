import { Constants } from "@/constants"
import { Icons } from "../Icons"
import type { ReactNode } from "react"

export const navigationLinks = [
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
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/kadiryzc",
    icon: <Icons.Linkedin />,
    target: "_blank",
  },
  {
    name: "X / Twitter",
    href: Constants.twitter,
    icon: <Icons.TwitterX />,
    target: "_blank",
  },
] as const satisfies ReadonlyArray<{
  name: string
  href: string
  icon: ReactNode
  target?: "_blank"
}>
