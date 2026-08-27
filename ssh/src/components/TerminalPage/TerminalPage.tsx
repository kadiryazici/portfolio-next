import { markdownStyle } from "../../terminal"

export type TerminalPageProps = {
  content: string
  imageSource?: string
  subtitle: string
  title: string
}

export function TerminalPage(props: TerminalPageProps) {
  const { content, imageSource, subtitle, title } = props

  return (
    <box
      border
      borderColor="#3f3f46"
      flexDirection="column"
      flexGrow={1}
      minWidth={0}
      padding={1}
      borderStyle="rounded"
    >
      <box
        flexDirection="column"
        width="100%"
        border={["bottom"]}
        borderColor="#3f3f46"
      >
        <text fg="#fafafa" wrapMode="word">
          <strong>{title}</strong>
        </text>
        <text fg="#a1a1aa" marginTop={1} wrapMode="word">
          {subtitle}
        </text>
      </box>
      <scrollbox
        focused
        key={title}
        marginTop={1}
        scrollY
        style={{
          viewportOptions: { backgroundColor: "#09090b" },
          scrollbarOptions: {
            trackOptions: {
              backgroundColor: "#18181b",
              foregroundColor: "#facc15",
            },
          },
        }}
      >
        {imageSource && (
          <image
            fit="cover"
            height={10}
            marginTop={1}
            protocol="auto"
            source={imageSource}
            width="100%"
          />
        )}

        <markdown
          conceal
          content={content}
          syntaxStyle={markdownStyle}
          width="100%"
        />
      </scrollbox>
    </box>
  )
}
