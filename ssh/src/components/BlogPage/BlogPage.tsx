import { useKeyboard } from "@opentui/react"
import { useState } from "react"
import { posts } from "../../../../src/lib/posts"
import { TerminalPage } from "../TerminalPage/TerminalPage"

const curtainImage = new URL(
  "../../../../public/posts/from-swe-to-curtain/curtains.webp",
  import.meta.url,
).pathname

const BlogMode = {
  List: "list",
  Post: "post",
} as const

type BlogMode = (typeof BlogMode)[keyof typeof BlogMode]

export function BlogPage() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [mode, setMode] = useState<BlogMode>(BlogMode.List)
  const selectedPost = getSelectedPost(selectedIndex)

  useKeyboard((key) => {
    if (mode === BlogMode.Post) {
      if (key.name === "escape") {
        key.preventDefault()
        setMode(BlogMode.List)
      }

      return
    }

    if (key.name === "up") {
      key.preventDefault()
      setSelectedIndex((currentIndex) => Math.max(0, currentIndex - 1))
      return
    }

    if (key.name === "down") {
      key.preventDefault()
      setSelectedIndex((currentIndex) =>
        Math.min(posts.length - 1, currentIndex + 1),
      )
      return
    }

    if (key.name === "return") {
      key.preventDefault()
      setMode(BlogMode.Post)
    }
  })

  const content = `${selectedPost.description}

${selectedPost.terminalContent}`

  if (mode === BlogMode.List) {
    return (
      <box
        border
        borderColor="#3f3f46"
        flexDirection="column"
        flexGrow={1}
        minWidth={0}
        padding={1}
      >
        <text fg="#fafafa">
          <strong>Blog</strong>
        </text>
        <text fg="#a1a1aa" marginTop={1}>
          Writing
        </text>
        <box flexDirection="column" marginTop={1}>
          {posts.map((post, index) => {
            const selected = index === selectedIndex

            return (
              <box
                backgroundColor={selected ? "#27272a" : "transparent"}
                flexDirection="row"
                justifyContent="space-between"
                key={post.slug}
                padding={1}
              >
                <text fg={selected ? "#facc15" : "#f4f4f5"} wrapMode="word">
                  {selected ? "> " : "  "}
                  <strong>{post.title}</strong>
                </text>
                <text fg="#a1a1aa">{post.date}</text>
              </box>
            )
          })}
        </box>
        <box flexGrow={1} />
        <text fg="#71717a">arrows select | enter open</text>
      </box>
    )
  }

  return (
    <TerminalPage
      content={content}
      imageSource={
        selectedPost.slug === "from-swe-to-curtain"
          ? curtainImage
          : undefined
      }
      subtitle={`${selectedPost.date} | arrows scroll | esc blog`}
      title={selectedPost.title}
    />
  )
}

function getSelectedPost(index: number) {
  const selectedPost = posts[index]

  if (selectedPost) {
    return selectedPost
  }

  const firstPost = posts[0]

  if (firstPost) {
    return firstPost
  }

  throw new Error("At least one blog post is required for the terminal UI")
}
