import { Constants } from "../../../../src/constants"
import { portfolioHome } from "../../../../src/lib/portfolio"
import { TerminalPage } from "../TerminalPage/TerminalPage"

const content = `# ${portfolioHome.role}

${portfolioHome.tagline}

${portfolioHome.description}

## Links

- GitHub: ${Constants.github}
- LinkedIn: ${Constants.linkedin}
- X: ${Constants.twitter}
- Email: ${Constants.email}`

export function HomePage() {
  return (
    <TerminalPage
      content={content}
      subtitle="kadir@portfolio:~$ cat about.md"
      title={portfolioHome.title}
    />
  )
}
