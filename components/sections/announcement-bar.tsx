"use client"

import * as React from "react"
import { ArrowRight, X } from "lucide-react"

const PROMO = {
  tag: "New",
  line: "Eid Special - 40% off Family Health Packages till 20 July",
}

/** Dismissible promotional strip matched to the reference landing page. */
export function AnnouncementBar() {
  const [visible, setVisible] = React.useState(true)

  if (!visible) return null

  return (
    <div className="relative z-[60] bg-[linear-gradient(90deg,#0f1b3d,#1c3a8f)] text-white">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-center gap-3 px-10 py-2.5 text-center text-[12.5px]">
        <span className="hidden shrink-0 rounded-full bg-white/20 px-2.5 py-0.5 text-[10.5px] font-bold tracking-[.08em] uppercase sm:inline">
          {PROMO.tag}
        </span>
        <span className="min-w-0 truncate font-semibold">{PROMO.line}</span>
        <a
          href="#offers"
          className="inline-flex shrink-0 items-center gap-1 font-bold text-[#8fd8ff] underline underline-offset-4 transition-colors hover:text-white"
        >
          Claim offer
          <ArrowRight className="size-3.5" />
        </a>
      </div>
      <button
        type="button"
        aria-label="Dismiss announcement"
        onClick={() => setVisible(false)}
        className="absolute right-2 top-1/2 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
      >
        <X className="size-4" />
      </button>
    </div>
  )
}
