"use client"

import { TimePickerButton } from "@/components/TimePickerButton/TimePickerButton";
import { useState } from "react";

export function TimePickerButtonClient() {
  const [value, setValue] = useState<[number, number] | null>(null)
  return (
    <>
      <TimePickerButton onValueChange={setValue}>
        {value == null ? "Pick Time" : `Time: ${value[0]}:${value[1]}`}
      </TimePickerButton>
    </>
  )
}
