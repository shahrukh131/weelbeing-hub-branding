import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: React.ReactNode
  align?: "left" | "center"
  className?: string
  titleClassName?: string
}

/** Shared section heading matched to the landing-page reference. */
export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(align === "center" && "text-center", className)}
    >
      <span className="mb-2 block text-[10.5px] font-extrabold tracking-[.14em] text-[#2a5be0] uppercase">
        {eyebrow}
      </span>
      {title ? (
        <h2
          className={cn(
            "text-[28px] font-extrabold leading-[1.2] text-[#0f1b3d]",
            titleClassName
          )}
        >
          {title}
        </h2>
      ) : null}
    </div>
  )
}
