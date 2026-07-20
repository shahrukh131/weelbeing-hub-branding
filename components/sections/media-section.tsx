"use client"

import * as React from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { FadeIn } from "@/components/motion/fade-in"
import { SectionHeading } from "@/components/sections/section-heading"

const ARTICLES = [
  {
    tag: "Industry news",
    title: "New telemedicine platform improves patient access",
    body: "Faster specialist consultations through digital healthcare services.",
  },
  {
    tag: "Industry news",
    title: "Advanced cardiology services now available",
    body: "Expanding expert heart care with modern diagnostic technology.",
  },
  {
    tag: "Industry news",
    title: "Healthcare innovation initiative launched",
    body: "Integrating smart medical solutions for better patient outcomes.",
  },
  {
    tag: "Health tips",
    title: "Managing diabetes during the summer months",
    body: "Practical guidance from our endocrinology specialists.",
  },
  {
    tag: "Announcement",
    title: "New partner hospitals join the network",
    body: "More doctors, tests and wellbeing services now bookable in district towns.",
  },
  {
    tag: "Health tips",
    title: "When to take your child to a pediatrician",
    body: "Warning signs every parent should know, explained simply.",
  },
]

export function MediaSection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [paused, setPaused] = React.useState(false)
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

  React.useEffect(() => {
    if (!api || paused) return
    const timer = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
        return
      }
      api.scrollTo(0)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [api, paused])

  return (
    <section id="media" className="bg-[#f6f8fd] px-4 py-[60px] sm:px-6 lg:px-0">
      <div className="mx-auto w-full max-w-[1240px]">
        <FadeIn className="mb-[34px] text-center">
          <SectionHeading
            align="center"
            eyebrow="Media"
            title="News & health updates"
          />
        </FadeIn>

        <div className="mb-[14px] flex items-center justify-end gap-[14px]">
          <a
            href="#media"
            className="inline-flex items-center gap-1 whitespace-nowrap text-[12.5px] font-bold text-[#2a5be0] hover:underline"
          >
            See all updates
            <ArrowRight className="size-3.5" />
          </a>
          <div className="flex gap-2">
            <CarouselArrow
              label="Previous update"
              onClick={() => api?.scrollPrev()}
              disabled={!canPrev}
            >
              <ChevronLeft className="size-4" />
            </CarouselArrow>
            <CarouselArrow
              label="Next update"
              onClick={() => api?.scrollNext()}
              disabled={!canNext}
            >
              <ChevronRight className="size-4" />
            </CarouselArrow>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", dragFree: true }}
          className="w-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <CarouselContent className="-ml-5">
            {ARTICLES.map((a) => (
              <CarouselItem
                key={a.title}
                className="pl-5 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="flex h-full min-h-[326px] flex-col overflow-hidden rounded-2xl border border-[#e6eaf4] bg-white transition-all hover:-translate-y-0.5 hover:border-[#2a5be0] hover:shadow-[0_10px_28px_rgba(42,91,224,.1)]">
                  <div className="flex h-[130px] items-center justify-center bg-[repeating-linear-gradient(45deg,#e6ecfa,#e6ecfa_10px,#eef2fc_10px,#eef2fc_20px)] font-mono text-[11px] text-[#8b96b8]">
                    news image
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <div className="text-[10px] font-extrabold tracking-[.1em] text-[#2a5be0] uppercase">
                      {a.tag}
                    </div>
                    <h3 className="text-[14px] font-bold leading-[1.35] text-[#0f1b3d]">
                      {a.title}
                    </h3>
                    <p className="flex-1 text-[12px] leading-[1.5] text-[#6b7490]">
                      {a.body}
                    </p>
                    <button
                      type="button"
                      className="mt-1 w-full rounded-[9px] border-[1.5px] border-[#c9d4ef] py-[9px] text-[12px] font-bold text-[#2a5be0] transition-colors hover:bg-[#f0f5ff]"
                    >
                      More details
                    </button>
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
