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

const TESTIMONIALS = [
  {
    name: "Fahmida R.",
    tag: "Family plan user",
    quote:
      "I claimed hospital cashback and received it within a week. The process was genuinely simple.",
    bg: "bg-[#2a5be0]",
  },
  {
    name: "Rajib H.",
    tag: "Health plan user",
    quote:
      "Whenever my daughter needed a doctor at night, Wellbeing Hub doctors were always available and kind.",
    bg: "bg-[#19b8a6]",
  },
  {
    name: "Kamrul B.",
    tag: "Health plan user",
    quote:
      "The discounts at partner hospitals saved me real money during a difficult time. Grateful.",
    bg: "bg-[#1c3a8f]",
  },
  {
    name: "Sharmin A.",
    tag: "Family plan user",
    quote:
      "Medicine arrived the same evening I uploaded the prescription. My parents rely on it now.",
    bg: "bg-[#0e9c84]",
  },
  {
    name: "Tanvir I.",
    tag: "Corporate client",
    quote:
      "Our company wellness camp was arranged end to end. Employees still talk about it.",
    bg: "bg-[#d1571f]",
  },
  {
    name: "Nusrat J.",
    tag: "Health plan user",
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
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-0">
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
