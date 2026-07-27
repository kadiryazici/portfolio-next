import { TimePickerButton } from "@/components/TimePickerButton/TimePickerButton";

export default function PreviewPage() {
  return (
    <div className="h-screen w-screen  flex items-center justify-center">
      <TimePickerButton>
        Pick Time
      </TimePickerButton>
    </div>
  )
}
