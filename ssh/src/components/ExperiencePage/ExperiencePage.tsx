import { experiences } from "../../../../src/lib/portfolio"
import { markdownStyle } from "../../terminal"

export function ExperiencePage() {
  return (
    <box
      border
      borderColor="#3f3f46"
      borderStyle="rounded"
      flexDirection="column"
      flexGrow={1}
      minWidth={0}
      padding={1}
    >
      <box flexShrink={0} border={["bottom"]} borderColor="#3f3f46" flexDirection="column">
        <text fg="#fafafa" wrapMode="word">
          <strong>Experience shaped by product work.</strong>
        </text>
        <text fg="#a1a1aa" marginTop={1}>
          kadir@portfolio:~$ cat experience.md
        </text>
      </box>

      <scrollbox
        focused
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
        {experiences.map((experience) => (
          <box
            flexDirection="column"
            key={experience.company}
            marginBottom={1}
            width="100%"
          >
            <text fg="#fafafa" wrapMode="word">
              <strong>{">"} {experience.company}</strong>
            </text>
            <text fg="#a1a1aa" marginTop={1} wrapMode="word">
              {experience.role} | {experience.fromTo.join(" - ")}
            </text>
            <markdown
              conceal
              content={getExperienceContent(experience)}
              marginTop={1}
              syntaxStyle={markdownStyle}
              width="100%"
            />
            <box height={1} width="100%" border={["top"]} borderColor="#3f3f46" />
          </box>
        ))}
      </scrollbox>
    </box>
  )
}

function getExperienceContent(experience: (typeof experiences)[number]) {
  return `${experience.description}

**Stack:** ${experience.tags.join(", ")}

**Achievements:**
${experience.achievements.map((achievement) => `- ${achievement}`).join("\n")}`
}
