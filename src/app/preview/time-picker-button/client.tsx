"use client"

import { TimePickerButton } from "@/components/TimePickerButton/TimePickerButton";
import { useState } from "react";

function prependZero(num: number): string {
  return num.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
}

export function TimePickerButtonClient() {
  const [value, setValue] = useState<[number, number] | null>(null)
  return (
    <>
      <TimePickerButton onValueChange={setValue}>
        {value == null ? "Pick Time" : `Time: ${prependZero(value[0])}:${prependZero(value[1])}`}
      </TimePickerButton>
    </>
  )
}
