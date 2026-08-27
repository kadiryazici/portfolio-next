import { terminalRoutes } from "../../terminal"

export type TerminalSidebarProps = {
  selectedIndex: number
}

export function TerminalSidebar(props: TerminalSidebarProps) {
  const { selectedIndex } = props

  return (
    <box
      border
      borderColor="#3f3f46"
      flexDirection="column"
      maxWidth={22}
      minWidth={22}
      padding={1}
      width={22}
      borderStyle="rounded"
    >
      <text fg="#a1a1aa" marginBottom={1}>
        <strong>PAGES ({terminalRoutes.length})</strong>
      </text>
      {terminalRoutes.map((route, index) => {
        const selected = index === selectedIndex

        return (
          <box
            backgroundColor={selected ? "#27272a" : "transparent"}
            key={route.value}
            marginBottom={1}
            paddingLeft={1}
            paddingRight={1}
          >
            <text fg={selected ? "#facc15" : "#d4d4d8"} wrapMode="word">
              {selected ? "> " : "  "}
              {route.label} ({route.shortcut})
            </text>
          </box>
        )
      })}
      <box flexGrow={1} />
      <text fg="#71717a">press 1 - 5</text>
    </box>
  )
}
