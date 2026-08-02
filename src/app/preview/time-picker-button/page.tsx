import { TimePickerButtonClient } from "./client"

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function PreviewPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <TimePickerButtonClient />
    </div>
  )
}
