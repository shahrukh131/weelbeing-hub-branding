"use client"

import * as React from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { CallbackTrigger } from "@/components/callback/callback-trigger"
import { SectionHeading } from "@/components/sections/section-heading"

type Offer = {
  tag: string
  tagClassName: string
  ends: string
  title: string
  desc: string
  price: string
  cta: string
}

const OFFERS: Offer[] = [
  {
    tag: "Health checkup",
    tagClassName: "bg-[#e6f7f3] text-[#0e9c84]",
    ends: "Ends in 3 days",
    title: "Diabetes screening package",
    desc: "HbA1c, fasting sugar, lipid profile - home sample collection included.",
    price: "\u09F3990",
    cta: "Book now",
  },
  {
    tag: "Health card",
    tagClassName: "bg-[#e9f0ff] text-[#2a5be0]",
    ends: "Ongoing",
    title: "Consultation benefits across the network",
    desc: "One card, accepted at every partner hospital. Benefits tracked as you use them.",
    price: "View tiers",
    cta: "Explore",
  },
  {
    tag: "Wellbeing",
    tagClassName: "bg-[#fdeee6] text-[#d1571f]",
    ends: "Limited slots",
    title: "Nutrition & physiotherapy sessions",
    desc: "Preventive care beyond the chamber, bookable by the session.",
    price: "৳750",
    cta: "Book now",
  },
  {
    tag: "Package",
    tagClassName: "bg-[#e9f0ff] text-[#2a5be0]",
    ends: "Ends 20 Jul",
    title: "Eid Family Health Package",
    desc: "Full-body checkup for 4 members with a free specialist consultation included.",
    price: "\u09F31,499",
    cta: "Book now",
  },
  {
    tag: "Health checkup",
    tagClassName: "bg-[#e6f7f3] text-[#0e9c84]",
    ends: "This month",
    title: "Full-body checkup - women",
    desc: "Thyroid, CBC, vitamin D and gynecologist consult, home sample collection.",
    price: "\u09F31,290",
    cta: "Book now",
  },
  {
    tag: "Telemedicine",
    tagClassName: "bg-[#fff4e0] text-[#b07914]",
    ends: "Ongoing",
    title: "First video consult at \u09F399",
    desc: "Talk to a certified GP over video within 10 minutes, any hour of the day.",
    price: "\u09F399",
    cta: "Consult now",
  },
]

export function OffersRail() {
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
    <section id="offers" className="bg-white pb-[52px]">
      <div className="mx-auto w-full max-w-[1240px] px-4 pt-1 sm:px-6 lg:px-0">
        <div className="mb-[18px] flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Ongoing promotions"
            title="Offers & packages for you"
            titleClassName="text-[23px]"
          />
          <div className="flex items-center gap-[14px]">
            <a
              href="#offers"
              className="inline-flex items-center gap-1 whitespace-nowrap text-[12.5px] font-bold text-[#2a5be0] hover:underline"
            >
              View all offers
              <ArrowRight className="size-3.5" />
            </a>
            <div className="flex gap-2">
              <CarouselArrow
                label="Previous offer"
                onClick={() => api?.scrollPrev()}
                disabled={!canPrev}
              >
                <ChevronLeft className="size-4" />
              </CarouselArrow>
              <CarouselArrow
                label="Next offer"
                onClick={() => api?.scrollNext()}
                disabled={!canNext}
              >
                <ChevronRight className="size-4" />
              </CarouselArrow>
            </div>
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
            {OFFERS.map((o) => (
              <CarouselItem
                key={o.title}
                className="pl-5 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="flex h-full min-h-[224px] flex-col rounded-2xl border border-[#e6eaf4] bg-white p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-[10.5px] font-extrabold tracking-[.06em] uppercase ${o.tagClassName}`}
                    >
                      {o.tag}
                    </span>
                    <span className="text-[12px] font-semibold text-[#e05a2a]">
                      {o.ends}
                    </span>
                  </div>
                  <h3 className="mt-[18px] text-[16px] font-bold leading-snug text-[#0f1b3d]">
                    {o.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-[#6b7490]">
                    {o.desc}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-[#eef0f6] pt-3">
                    <span className="text-[18px] font-extrabold text-[#0f1b3d]">
                      {o.price}
                    </span>
                    <CallbackTrigger className="inline-flex items-center gap-1 whitespace-nowrap text-[13px] font-bold text-[#2a5be0] hover:underline">
                      {o.cta}
                      <ArrowRight className="size-3.5" />
                    </CallbackTrigger>
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
      className="inline-flex size-[34px] cursor-pointer items-center justify-center rounded-full border-[1.5px] border-[#c9d4ef] bg-white text-[#2a5be0] transition-colors hover:border-[#2a5be0] hover:bg-[#f0f5ff] disabled:cursor-not-allowed disabled:opacity-40"
    >
      {children}
    </button>
  )
}
