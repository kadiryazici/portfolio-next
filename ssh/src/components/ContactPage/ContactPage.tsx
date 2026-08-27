import { Constants } from "../../../../src/constants"
import { TerminalPage } from "../TerminalPage/TerminalPage"

const content = `# Contact

- Email: ${Constants.email}
- GitHub: ${Constants.github}
- LinkedIn: ${Constants.linkedin}
- X: ${Constants.twitter}`

export function ContactPage() {
  return (
    <TerminalPage
      content={content}
      subtitle="kadir@portfolio:~$ cat contact.md"
      title="Get in touch"
    />
  )
}
