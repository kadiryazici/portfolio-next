import { useKeyboard } from "@opentui/react"
import { useState } from "react"
import { BlogPage } from "../BlogPage/BlogPage"
import { ContactPage } from "../ContactPage/ContactPage"
import { ExperiencePage } from "../ExperiencePage/ExperiencePage"
import { HomePage } from "../HomePage/HomePage"
import { ProjectsPage } from "../ProjectsPage/ProjectsPage"
import { TerminalSidebar } from "../TerminalSidebar/TerminalSidebar"
import { terminalRoutes, type TerminalRoute } from "../../terminal"

export function TerminalPortfolio() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedRoute = getSelectedRoute(selectedIndex)

  useKeyboard((key) => {
    const routeIndex = getRouteIndexFromShortcut(key.name)

    if (routeIndex === null) {
      return
    }

    key.preventDefault()
    setSelectedIndex(routeIndex)
  })

  return (
    <box
      backgroundColor="#09090b"
      flexDirection="column"
      height="100%"
      padding={1}
    >
      <box
        flexDirection="row"
        justifyContent="space-between"
        marginBottom={1}
      >
        <text fg="#facc15">kadir@portfolio:~$ open {selectedRoute}</text>
        <text fg="#71717a">1-5 pages | arrows browse | ctrl+c exit</text>
      </box>

      <box flexDirection="row" flexGrow={1} gap={1}>
        <TerminalSidebar selectedIndex={selectedIndex} />
        <TerminalRoutePage route={selectedRoute} />
      </box>
    </box>
  )
}

function TerminalRoutePage(props: { route: TerminalRoute }) {
  const { route } = props

  if (route === "experience") {
    return <ExperiencePage />
  }

  if (route === "projects") {
    return <ProjectsPage />
  }

  if (route === "blog") {
    return <BlogPage />
  }

  if (route === "contact") {
    return <ContactPage />
  }

  return <HomePage />
}

function getSelectedRoute(index: number): TerminalRoute {
  const selectedRoute = terminalRoutes[index]

  if (selectedRoute) {
    return selectedRoute.value
  }

  return "home"
}

function getRouteIndexFromShortcut(shortcut: string) {
  if (shortcut === "1") {
    return 0
  }

  if (shortcut === "2") {
    return 1
  }

  if (shortcut === "3") {
    return 2
  }

  if (shortcut === "4") {
    return 3
  }

  if (shortcut === "5") {
    return 4
  }

  return null
}
