import { CalendarCheck, FlaskConical, HeartPulse, Layers } from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { SectionHeading } from "@/components/sections/section-heading"
import { CallbackTrigger } from "@/components/callback/callback-trigger"

const BOOKABLE = [
  {
    icon: CalendarCheck,
    title: "Doctor consultations",
    body: "Choose a specialist, see real availability across their hospitals, and book the slot that works for you.",
    points: ["Video or in-person", "Verified specialists", "Instant confirmation"],
  },
  {
    icon: FlaskConical,
    title: "Diagnostic tests",
    body: "Compare tests across partner hospitals with clear pricing, preparation guidance, and turnaround times.",
    points: ["Book several tests at once", "Prep instructions upfront", "Results in your records"],
  },
  {
    icon: HeartPulse,
    title: "Wellbeing services",
    body: "Preventive and lifestyle care beyond the doctor's chamber - nutrition, therapy, physiotherapy and more.",
    points: ["Session-based booking", "Clear duration and price", "In-person or online"],
  },
  {
    icon: Layers,
    title: "Health packages",
    body: "Hospital-curated bundles of tests and services at a single price, with everything you use tracked for you.",
    points: ["One upfront price", "Set validity period", "Usage tracked automatically"],
  },
]

/** Core bookable offerings, mapped to the platform's booking modules. */
export function BookingServicesSection() {
  return (
    <section id="booking" className="bg-[#f6f8fd] py-16">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
        <FadeIn className="mb-[34px]">
          <SectionHeading
            align="center"
            eyebrow="What you can book"
            title="Care that fits your life"
          />
          <p className="mt-2 text-center text-[13px] text-[#6b7490]">
            Consultations, tests, wellbeing sessions and packages - booked in one place.
          </p>
        </FadeIn>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BOOKABLE.map(({ icon: Icon, title, body, points }) => (
            <StaggerItem key={title}>
              <div className="flex h-full flex-col rounded-2xl border border-[#e6eaf4] bg-white p-[22px] transition-all hover:border-[#2a5be0] hover:shadow-[0_10px_28px_rgba(42,91,224,.1)]">
                <span className="mb-[14px] flex size-10 items-center justify-center rounded-xl bg-[#e9f0ff] text-[#2a5be0]">
                  <Icon className="size-[17px]" />
                </span>
                <h3 className="text-[14.5px] font-bold text-[#0f1b3d]">
                  {title}
                </h3>
                <p className="mt-1.5 text-[12px] leading-[1.55] text-[#6b7490]">
                  {body}
                </p>
                <ul className="mt-[14px] grid gap-1.5 border-t border-[#e6eaf4] pt-[14px]">
                  {points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-1.5 text-[11.5px] leading-[1.5] text-[#3c4257]"
                    >
                      <span className="mt-[6px] size-1 shrink-0 rounded-full bg-[#19b8a6]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#e6eaf4] bg-white p-[22px_28px]">
            <div>
              <div className="text-[15px] font-bold text-[#0f1b3d]">
                Not sure what you need?
              </div>
              <p className="mt-1 text-[12.5px] text-[#6b7490]">
                Request a callback and our team will help you find the right
                doctor, test or package.
              </p>
            </div>
            <CallbackTrigger className="inline-flex items-center rounded-[10px] bg-[#2a5be0] px-5 py-[11px] text-[12.5px] font-bold text-white transition-colors hover:bg-[#1c46c2]">
              Get a callback
            </CallbackTrigger>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
