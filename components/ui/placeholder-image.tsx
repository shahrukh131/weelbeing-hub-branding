import { ImageIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type PlaceholderImageProps = React.ComponentProps<"div"> & {
  label?: string
}

/**
 * Neutral, aspect-correct placeholder standing in for a real photo.
 * Swap for <Image> later — keep the wrapper's sizing/rounding classes.
 */
export function PlaceholderImage({
  label,
  className,
  children,
  ...props
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "group/ph relative flex items-center justify-center overflow-hidden bg-linear-to-br from-brand/15 via-muted to-brand-purple/15 text-muted-foreground",
        className
      )}
      {...props}
    >
      {/* Photographic depth: sweeping sheen, radial vignette, inner highlight */}
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,rgba(255,255,255,0.25),transparent_60%)]" />
      <span className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.12)]" />
      <span className="pointer-events-none absolute -inset-x-1/4 -top-1/2 h-full rotate-12 bg-linear-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-1000 ease-out group-hover/ph:translate-y-[220%] group-hover/ph:opacity-100" />
      {children ?? (
        <span className="relative flex flex-col items-center gap-2 text-xs font-medium">
          <ImageIcon className="size-6 opacity-50" />
          {label ? <span className="opacity-70">{label}</span> : null}
        </span>
      )}
    </div>
  )
}
