"use client"

import * as React from "react"
import Image from "next/image"
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Hospital,
  Lightbulb,
  LockKeyhole,
  Medal,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Stethoscope,
  Target,
  UsersRound,
} from "lucide-react"
import { motion, useInView, useReducedMotion } from "motion/react"

import aboutImage from "@/lib/images/about-us.jpg"
import { CallbackTrigger } from "@/components/callback/callback-trigger"
import { SectionHeading } from "@/components/sections/section-heading"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const STATS = [
  { value: 1, suffix: " Cr+", label: "Patients served" },
  { value: 500, suffix: "+", label: "Partner hospitals" },
  { value: 16, suffix: " L+", label: "Consultations done" },
  { value: 64, suffix: "", label: "Districts covered" },
]

const OBJECTIVES = [
  {
    icon: Hospital,
    iconClassName: "bg-[#e9f0ff] text-[#2a5be0]",
    title: "Accessible healthcare",
    desc: "Making healthcare available anytime, anywhere through digital solutions.",
  },
  {
    icon: Stethoscope,
    iconClassName: "bg-[#e6f7f3] text-[#0e9c84]",
    title: "Telemedicine support",
    desc: "Connecting patients with qualified doctors for instant online consultations.",
  },
  {
    icon: Lightbulb,
    iconClassName: "bg-[#fff4e0] text-[#b07914]",
    title: "Smart digital solutions",
    desc: "AI-powered healthcare tools, digital prescriptions, and health monitoring.",
  },
  {
    icon: UsersRound,
    iconClassName: "bg-[#fdeee6] text-[#d1571f]",
    title: "Family healthcare",
    desc: "Helping expatriates manage healthcare for loved ones back home.",
  },
]

const WHY_ROWS = [
  {
    icon: ShieldCheck,
    iconClassName: "bg-[#e9f0ff] text-[#2a5be0]",
    title: "Trusted medical network",
    desc: "Experienced doctors, specialists, 500+ hospitals, and healthcare partners.",
  },
  {
    icon: Medal,
    iconClassName: "bg-[#e6f7f3] text-[#0e9c84]",
    title: "Affordable healthcare services",
    desc: "Quality care designed to remain accessible and cost-effective for every family.",
  },
  {
    icon: Smartphone,
    iconClassName: "bg-[#fff4e0] text-[#b07914]",
    title: "Digital convenience",
    desc: "Easy appointment booking, online reports, prescriptions, and health records.",
  },
  {
    icon: LockKeyhole,
    iconClassName: "bg-[#fdeee6] text-[#d1571f]",
    title: "Secure and reliable",
    desc: "Patient privacy, transparency, and medical coordination you can trust.",
  },
]

const TESTIMONIALS = [
  {
    quote:
      "I claimed hospital cashback and received it within a week. The process was genuinely simple.",
    initial: "F",
    name: "Fahmida R.",
    role: "Family plan user",
    className: "bg-[#2a5be0]",
  },
  {
    quote:
      "Whenever my daughter needed a doctor at night, Wellbeing Hub doctors were always available and kind.",
    initial: "R",
    name: "Rajib H.",
    role: "Health plan user",
    className: "bg-[#19b8a6]",
  },
  {
    quote:
      "The discounts at partner hospitals saved me real money during a difficult time. Grateful.",
    initial: "K",
    name: "Kamrul B.",
    role: "Health plan user",
    className: "bg-[#1c3a8f]",
  },
]

const CREDENTIAL_CHIPS = ["500+ hospitals", "64 districts", "24/7 support"]

export function AboutPageSection() {
  const statsRef = React.useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.35 })
  const reduceMotion = useReducedMotion()

  return (
    <main className="flex-1 bg-white text-[#0f1b3d]">
      <section className="relative z-0 overflow-hidden bg-[linear-gradient(120deg,#0f1b3d,#1c3a8f_62%,#1e6fa8)] px-4 pb-32 pt-20 text-white sm:px-6 lg:px-0 lg:pb-44">
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 16, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-[120px] -top-[140px] size-[420px] rounded-full bg-[#2a5be0]/35"
        />
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -18, 0], x: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-180px] right-[120px] size-[320px] rounded-full bg-[#19b8a6]/20"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,.05)_1px,transparent_1px)] bg-[length:22px_22px] opacity-50" />

        <Reveal className="relative mx-auto max-w-[1240px]">
          <p className="mb-4 text-[11px] font-bold tracking-[.04em] text-[#8fa5dd]">
            Home / <span className="text-white">About us</span>
          </p>
          <h1 className="max-w-[640px] text-[34px] font-extrabold leading-[1.12] sm:text-[46px]">
            Care that follows your family, wherever life takes them.
          </h1>
          <p className="mt-4 max-w-[540px] text-[14.5px] leading-[1.65] text-[#b8c2dd]">
            Wellbeing Hub connects Bangladeshi families and expatriates with
            trusted doctors, discounted hospitals, and medicine at their
            doorstep - anytime, anywhere.
          </p>
        </Reveal>
      </section>

      <section className="relative z-10 px-4 sm:px-6 lg:px-0">
        <Reveal className="relative z-10 mx-auto -mt-20 grid max-w-[1240px] overflow-hidden rounded-[20px] border border-[#eef0f6] bg-white shadow-[0_24px_60px_rgba(15,27,61,.14)] lg:-mt-[110px] lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden bg-[linear-gradient(135deg,#1c3a8f,#2a5be0_55%,#19b8a6)]">
            <Image
              src={aboutImage}
              alt="Wellbeing Hub healthcare support"
              fill
              preload
              className="object-cover opacity-75 mix-blend-luminosity"
              sizes="(min-width: 1024px) 620px, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,58,143,.82),rgba(42,91,224,.66),rgba(25,184,166,.56))]" />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,.16)_1.5px,transparent_1.5px)] bg-[length:18px_18px]" />
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-7 left-7 rounded-2xl bg-white/15 p-4 backdrop-blur"
            >
              <HeartPulse className="size-11 text-white" />
            </motion.div>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Who we are"
              title="A healthcare partner for families at home and abroad"
              titleClassName="text-[26px]"
            />
            <p className="mt-4 text-[13.5px] leading-[1.7] text-[#5b6478]">
              Wellbeing Hub is a healthcare support platform dedicated to
              connecting Bangladeshi expatriates and their families with
              reliable, affordable, and accessible medical services.
            </p>
            <p className="mt-3 text-[13.5px] leading-[1.7] text-[#5b6478]">
              From routine consultations to critical medical support -
              telemedicine, emergency assistance, specialist care, and trusted
              hospital partnerships - we make care easier to coordinate.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {CREDENTIAL_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[#e6eaf4] px-3.5 py-1.5 text-[11.5px] font-semibold text-[#3c4257] transition-colors hover:border-[#2a5be0] hover:text-[#2a5be0]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section
        ref={statsRef}
        className="mx-auto grid max-w-[1000px] grid-cols-2 gap-6 px-4 py-13 text-center sm:px-6 md:grid-cols-4 lg:px-0"
      >
        {STATS.map((stat, index) => (
          <StatItem
            key={stat.label}
            stat={stat}
            inView={statsInView}
            delay={index * 0.08}
          />
        ))}
      </section>

      <section className="bg-[#f6f8fd] px-4 py-16 sm:px-6 lg:px-0">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="relative pb-14">
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative min-h-[340px] overflow-hidden rounded-[20px] bg-[linear-gradient(160deg,#0f1b3d,#1c3a8f_55%,#0e9c84)] shadow-[0_20px_48px_rgba(15,27,61,.18)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,.1)_1.5px,transparent_1.5px)] bg-[length:20px_20px]" />
              <div className="absolute -right-14 -top-14 size-[220px] rounded-full bg-white/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <CheckCircle2 className="size-18 text-white drop-shadow-xl" />
              </div>
            </motion.div>
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="absolute inset-x-6 bottom-0 rounded-[18px] border border-[#eef0f6] bg-white p-6 shadow-[0_18px_40px_rgba(15,27,61,.16)] lg:-right-6 lg:left-6"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-[10px] bg-[#e9f0ff] text-[#2a5be0]">
                  <Sparkles className="size-4" />
                </span>
                <h2 className="text-[14px] font-extrabold">Our vision</h2>
              </div>
              <p className="text-[12.5px] leading-[1.6] text-[#5b6478] italic">
                To become the most trusted and comprehensive healthcare service
                provider for Bangladeshi expatriates and their families
                worldwide.
              </p>
            </motion.div>
          </Reveal>

          <Reveal className="pt-1">
            <span className="mb-2 block text-[10.5px] font-extrabold tracking-[.14em] text-[#2a5be0] uppercase">
              What drives us
            </span>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex size-[42px] items-center justify-center rounded-[13px] bg-[#e9f0ff] text-[#2a5be0]">
                <Target className="size-5" />
              </span>
              <h2 className="text-[24px] font-extrabold">Our mission</h2>
            </div>
            <p className="text-[13.5px] leading-[1.75] text-[#5b6478]">
              To make quality healthcare accessible, affordable, and reliable
              for families and expatriates - wherever they are. Through seamless
              telemedicine, experienced medical professionals, and fast
              coordination, we simplify how families receive care.
            </p>
            <p className="mt-4 text-[13.5px] leading-[1.75] text-[#5b6478]">
              We promote preventive healthcare awareness, wellness programs, and
              long-term health solutions through strong partnerships with
              trusted hospitals, clinics, and insurance providers.
            </p>
            <CallbackTrigger className="mt-6 rounded-[10px] bg-[#2a5be0] px-6 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#1c46c2]">
              Learn how we work
            </CallbackTrigger>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-[72px] sm:px-6 lg:px-0">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <SectionHeading
              eyebrow="Core objectives"
              title="What we focus on"
              align="center"
            />
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {OBJECTIVES.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <IconCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef3fd] px-4 py-16 sm:px-6 lg:px-0">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14">
          <Reveal>
            <SectionHeading
              eyebrow="Why Wellbeing Hub"
              title="Built on trust, designed for families"
            />
            <p className="mt-4 max-w-[400px] text-[13.5px] leading-[1.7] text-[#5b6478]">
              Every part of our service - from booking to cashback - is
              designed so that caring for your family feels simple,
              transparent, and dependable.
            </p>
            <CallbackTrigger className="mt-6 rounded-[10px] bg-[#2a5be0] px-6 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#1c46c2]">
              Get started today
            </CallbackTrigger>
          </Reveal>

          <div className="flex flex-col gap-3.5">
            {WHY_ROWS.map((row, index) => (
              <Reveal key={row.title} delay={index * 0.06}>
                <div className="flex gap-4 rounded-[15px] border border-transparent bg-white p-5 transition-all hover:border-[#c9d4ef] hover:bg-[#fbfcff]">
                  <span
                    className={cn(
                      "flex size-[38px] shrink-0 items-center justify-center rounded-[11px]",
                      row.iconClassName
                    )}
                  >
                    <row.icon className="size-4" />
                  </span>
                  <div>
                    <h3 className="text-[14px] font-bold">{row.title}</h3>
                    <p className="mt-1 text-[12.5px] leading-[1.55] text-[#6b7490]">
                      {row.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-0">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <SectionHeading
              eyebrow="Real experiences"
              title="What our patients say"
              align="center"
            />
            <p className="mx-auto mt-3 max-w-[420px] text-center text-[13.5px] leading-[1.7] text-[#6b7490]">
              Satisfaction from the people we serve.
            </p>
          </Reveal>
          <Reveal className="mt-11">
            <TestimonialsCarousel />
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="bg-[linear-gradient(90deg,#1c3a8f,#2a5be0)] px-4 py-11 text-white sm:px-6 lg:px-0">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-[20px] font-extrabold">
                Ready to put your family&apos;s health first?
              </h2>
              <p className="mt-1.5 text-[13px] text-white/85">
                Join over 1 crore patients across 64 districts - or talk to our
                team first.
              </p>
            </div>
            <CallbackTrigger className="w-fit whitespace-nowrap rounded-[10px] bg-white px-6 py-3 text-[13px] font-bold text-[#1c46c2] transition-colors hover:bg-[#f0f5ff]">
              Get a callback
            </CallbackTrigger>
          </div>
        </section>
      </Reveal>
    </main>
  )
}

function TestimonialsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [paused, setPaused] = React.useState(false)
  const reduceMotion = useReducedMotion()

  React.useEffect(() => {
    if (!api || paused || reduceMotion) return

    const timer = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
        return
      }
      api.scrollTo(0)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [api, paused, reduceMotion])

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mb-4 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => api?.scrollPrev()}
          className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-[#dbe4f7] bg-white text-[#2a5be0] transition-colors hover:border-[#2a5be0] hover:bg-[#f0f5ff]"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => api?.scrollNext()}
          className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-[#bfd0f9] bg-white text-[#2a5be0] transition-colors hover:border-[#2a5be0] hover:bg-[#f0f5ff]"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-5">
          {TESTIMONIALS.map((item) => (
            <CarouselItem
              key={item.name}
              className="pl-5 md:basis-1/2 lg:basis-1/3"
            >
              <TestimonialCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

function TestimonialCard({ item }: { item: (typeof TESTIMONIALS)[number] }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.015 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full min-h-[262px] flex-col rounded-[20px] border border-[#dfe6f5] bg-white px-7 py-7 shadow-none transition-colors hover:border-[#2a5be0] hover:shadow-[0_18px_36px_rgba(42,91,224,.1)]"
    >
      <div className="flex items-center gap-1 text-[#19b8a6]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="size-4 fill-current" />
        ))}
      </div>
      <p className="mt-5 flex-1 text-[15px] leading-[1.65] text-[#3c4257]">
        &quot;
        {item.quote}
        &quot;
      </p>
      <div className="mt-8 flex items-center gap-3">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "flex size-11 items-center justify-center rounded-full text-[16px] font-bold text-white",
              item.className
            )}
          >
            {item.initial}
          </span>
          <div>
            <h3 className="text-[14px] font-extrabold text-[#0f1b3d]">
              {item.name}
            </h3>
            <p className="text-[12px] text-[#6b7490]">{item.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.18 })
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      animate={inView || reduceMotion ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function StatItem({
  stat,
  inView,
  delay,
}: {
  stat: (typeof STATS)[number]
  inView: boolean
  delay: number
}) {
  const value = useCountUp(stat.value, inView)

  return (
    <Reveal delay={delay}>
      <div>
        <div className="text-[32px] font-extrabold text-[#2a5be0]">
          {value}
          {stat.suffix}
        </div>
        <p className="mt-1 text-[12px] text-[#6b7490]">{stat.label}</p>
      </div>
    </Reveal>
  )
}

function IconCard({
  icon: Icon,
  iconClassName,
  title,
  desc,
}: (typeof OBJECTIVES)[number]) {
  return (
    <div className="h-full rounded-2xl border border-[#e6eaf4] bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#2a5be0] hover:shadow-[0_14px_32px_rgba(42,91,224,.12)]">
      <span
        className={cn(
          "mb-4 flex size-[42px] items-center justify-center rounded-[13px]",
          iconClassName
        )}
      >
        <Icon className="size-5" />
      </span>
      <h3 className="text-[14.5px] font-bold">{title}</h3>
      <p className="mt-1.5 text-[12px] leading-[1.6] text-[#6b7490]">
        {desc}
      </p>
    </div>
  )
}

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = React.useState(0)
  const reduceMotion = useReducedMotion()

  React.useEffect(() => {
    if (!active) return
    if (reduceMotion) return

    let frame = 0
    const start = performance.now()
    const duration = 1200

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, reduceMotion, target])

  return reduceMotion && active ? target : value
}
