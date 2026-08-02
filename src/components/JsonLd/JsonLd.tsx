import type { ComponentProps } from "react"

export type JsonLdProps = ComponentProps<"script"> & {
  data: Record<string, unknown>
}

export function JsonLd(props: JsonLdProps) {
  const { data, ...attrs } = props

  return (
    <script
      {...attrs}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
