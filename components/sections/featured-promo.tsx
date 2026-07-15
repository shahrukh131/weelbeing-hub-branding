"use client"

import * as React from "react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"
import { CallbackTrigger } from "@/components/callback/callback-trigger"

type Promo = {
  badge: string
  off: string
  title: string
  desc: string
  perks: string[]
  price: string
  old?: string
  cta: string
}

const FEATURED_PROMOS: Promo[] = [
  {
    badge: "Eid special",
    off: "40% OFF",
    title: "Eid Family Health Package",
    desc: "Full-body checkup for 4 family members with free specialist consultation and medicine cashback. Home sample collection across 64 districts.",
    perks: ["4 members", "Free consult", "Cashback"],
    price: "৳1,499",
    old: "৳2,500",
    cta: "Book package",
  },
  {
    badge: "Health checkup",
    off: "30% OFF",
    title: "Diabetes screening at home",
    desc: "HbA1c, fasting sugar and lipid profile with home sample collection. Digital report within 24 hours, reviewed by a certified doctor.",
    perks: ["Home collection", "Report in 24h", "Doctor review"],
    price: "৳990",
    old: "৳1,400",
    cta: "Book screening",
  },
  {
    badge: "For teams",
    off: "FREE",
    title: "Corporate wellness camp",
    desc: "On-site health screening for companies with 50+ employees - BP, sugar, BMI and a doctor Q&A session, fully arranged by our team.",
    perks: ["50+ employees", "On-site", "Fully arranged"],
    price: "Free",
    cta: "Contact sales",
  },
]

const ROTATE_MS = 6000

export function FeaturedPromo() {
  const [idx, setIdx] = React.useState(0)
  const [paused, setPaused] = React.useState(false)

  React.useEffect(() => {
    if (paused) return
    const t = setInterval(
      () => setIdx((i) => (i + 1) % FEATURED_PROMOS.length),
      ROTATE_MS
    )
    return () => clearInterval(t)
  }, [paused])

  const promo = FEATURED_PROMOS[idx]

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[20px] bg-[linear-gradient(120deg,#1c3a8f,#2a5be0_55%,#19b8a6)] p-[30px] text-white shadow-[0_24px_48px_rgba(28,58,143,.25)]"
    >
      <div className="pointer-events-none absolute -bottom-20 -right-16 size-[260px] rounded-full bg-white/10" />
      <div className="pointer-events-none absolute -top-[70px] right-10 size-[170px] rounded-full bg-white/[0.08]" />

      <div className="absolute right-7 top-8 z-10 flex gap-1.5">
        {FEATURED_PROMOS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show promotion ${i + 1}`}
            aria-current={i === idx ? "true" : undefined}
            onClick={() => setIdx(i)}
            className={cn(
              "h-[7px] cursor-pointer rounded-full transition-all duration-300",
              i === idx ? "w-[18px] bg-white" : "w-[7px] bg-white/40"
            )}
          />
        ))}
      </div>

      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={promo.title}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-0 flex min-h-[240px] flex-col justify-between"
        >
          <div className="relative flex flex-wrap gap-2">
            <span className="rounded-full bg-white/20 px-3 py-1 text-[10.5px] font-bold tracking-[.06em] uppercase">
              {promo.badge}
            </span>
            <span className="rounded-full bg-[#ffd166] px-3 py-1 text-[10.5px] font-extrabold text-[#4a3200]">
              {promo.off}
            </span>
          </div>

          <div className="relative mt-4">
            <h3 className="max-w-[380px] text-[26px] font-extrabold leading-[1.2]">
              {promo.title}
            </h3>
            <p className="mt-2 max-w-[380px] text-[13px] leading-[1.55] text-white/85">
              {promo.desc}
            </p>
          </div>

          <div className="relative mt-4 flex flex-wrap gap-[9px]">
            {promo.perks.map((perk) => (
              <span
                key={perk}
                className="rounded-full border border-white/25 bg-white/15 px-[13px] py-[5px] text-[11.5px] font-semibold"
              >
                {perk}
              </span>
            ))}
          </div>

          <div className="relative mt-5 flex items-center justify-between gap-3">
            <div className="text-[22px] font-extrabold">
              {promo.price}
              {promo.old ? (
                <span className="ml-2 text-[13px] font-medium text-white/65 line-through">
                  {promo.old}
                </span>
              ) : null}
            </div>
            <CallbackTrigger className="rounded-[10px] bg-white px-[22px] py-[11px] text-[13px] font-bold text-[#1c46c2] transition-colors hover:bg-[#f0f5ff]">
              {promo.cta}
            </CallbackTrigger>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
