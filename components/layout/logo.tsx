import Image from "next/image"

import { cn } from "@/lib/utils"

/**
 * Wellbeing Hub brand logo. Defaults to the vertical lockup; pass `white` to use
 * the horizontal white version for dark surfaces (e.g. the footer).
 */
export function Logo({
  className,
  white = false,
}: {
  className?: string
  white?: boolean
}) {
  if (white) {
    return (
      <Image
        src="/Wellbeing-Hub-H-White.png"
        alt="Wellbeing Hub"
        width={500}
        height={300}
        priority
        className={cn("h-15 w-auto", className)}
      />
    )
  }

  return (
    <Image
      src="/Wellbeing-Hub-H.jpg"
      alt="Wellbeing Hub"
      width={500}
      height={300}
      priority
      className={cn("h-15 w-auto", className)}
    />
  )
}
