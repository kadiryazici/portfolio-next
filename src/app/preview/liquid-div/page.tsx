import { LiquidDiv } from "@/components/LiquidDiv/LiquidDiv"

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function PreviewPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <LiquidDiv className="w-[300px] h-[300px] rounded-[64px]" />
    </div>
  )
}
