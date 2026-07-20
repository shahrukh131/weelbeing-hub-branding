"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { FadeIn } from "@/components/motion/fade-in"
import { SectionHeading } from "@/components/sections/section-heading"

/**
 * PLACEHOLDER CONTENT - NOT REAL REVIEWS.
 *
 * These are illustrative and must be replaced with genuine, attributable
 * patient reviews before this section is published. Fabricated testimonials
 * on a health service are a trust and compliance exposure, not filler copy.
 *
 * Quotes below deliberately reference only capability the platform actually
 * has, so replacements stay truthful even if the copy is reused.
 */
const TESTIMONIALS = [
  {
    name: "Fahmida R.",
    tag: "Health Card holder",
    quote:
      "Seeing the consultation fee before I confirmed made a real difference. No surprises at the counter.",
    bg: "bg-[#2a5be0]",
  },
  {
    name: "Rajib H.",
    tag: "Patient",
    quote:
      "My daughter needed a doctor and we did the consultation by video the same day, from home.",
    bg: "bg-[#19b8a6]",
  },
  {
    name: "Kamrul B.",
    tag: "Health Card holder",
    quote:
      "Being able to compare test prices across hospitals before booking saved us a lot.",
    bg: "bg-[#1c3a8f]",
  },
  {
    name: "Sharmin A.",
    tag: "Patient",
    quote:
      "My father's prescriptions and reports are finally in one place instead of a folder at home.",
    bg: "bg-[#0e9c84]",
  },
  {
    name: "Tanvir I.",
    tag: "Patient",
    quote:
      "Booking the health package was straightforward, and I could see exactly what was included.",
    bg: "bg-[#d1571f]",
  },
  {
    name: "Nusrat J.",
    tag: "Patient",
    quote:
      "Booked a specialist for my father in a district town - something we never managed before.",
    bg: "bg-[#5b6fe8]",
  },
]

export function TestimonialsSection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [canPrev, setCanPrev] = React.useState(false)
  const [canNext, setCanNext] = React.useState(false)

  React.useEffect(() => {
    if (!api) return
    const update = () => {
      setCanPrev(api.canScrollPrev())
      setCanNext(api.canScrollNext())
    }
    update()
    api.on("select", update)
    api.on("reInit", update)
    return () => {
      api.off("select", update)
      api.off("reInit", update)
    }
  }, [api])

  return (
    <section className="bg-[#f6f8fd] px-4 py-16 sm:px-6 lg:px-0">
      <div className="mx-auto w-full max-w-[1240px]">
        <FadeIn className="mb-[34px] text-center">
          <SectionHeading
            align="center"
            eyebrow="Real experiences"
            title="What our patients say"
          />
          <p className="mt-2 text-[13px] text-[#6b7490]">
            Satisfaction from the people we serve.
          </p>
        </FadeIn>

        <div className="mb-[14px] flex justify-end gap-2">
          <CarouselArrow
            label="Previous testimonial"
            onClick={() => api?.scrollPrev()}
            disabled={!canPrev}
          >
            <ChevronLeft className="size-4" />
          </CarouselArrow>
          <CarouselArrow
            label="Next testimonial"
            onClick={() => api?.scrollNext()}
            disabled={!canNext}
          >
            <ChevronRight className="size-4" />
          </CarouselArrow>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", dragFree: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-5">
            {TESTIMONIALS.map((t) => (
              <CarouselItem
                key={t.name}
                className="pl-5 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="flex h-full min-h-[210px] flex-col rounded-2xl border border-[#e6eaf4] bg-white p-6">
                  <div className="mb-[14px] flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-[13px] fill-[#19b8a6] text-[#19b8a6]"
                      />
                    ))}
                  </div>
                  <p className="flex-1 text-[13px] leading-[1.6] text-[#3c4257]">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="mt-[14px] flex items-center gap-[11px]">
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full ${t.bg} text-[13px] font-bold text-white`}
                    >
                      {t.name[0]}
                    </span>
                    <div>
                      <div className="text-[12.5px] font-bold text-[#0f1b3d]">
                        {t.name}
                      </div>
                      <div className="text-[11px] text-[#6b7490]">{t.tag}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

function CarouselArrow({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string
  disabled: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="inline-flex size-[34px] items-center justify-center rounded-full border-[1.5px] border-[#c9d4ef] bg-white text-[#2a5be0] transition-colors hover:border-[#2a5be0] hover:bg-[#f0f5ff] disabled:opacity-40"
    >
      {children}
    </button>
  )
}
