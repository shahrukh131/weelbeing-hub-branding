import { FlaskConical, HeartPulse, Stethoscope, Wallet } from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { SectionHeading } from "@/components/sections/section-heading"
import { CallbackTrigger } from "@/components/callback/callback-trigger"

const SERVICES = [
  {
    icon: Wallet,
    title: "Health card",
    body: "Consultation benefits and discounted tests across every partner hospital, tracked as you use them.",
  },
  {
    icon: FlaskConical,
    title: "Diagnostic tests",
    body: "Book tests at partner hospitals with clear pricing, preparation guidance and turnaround times.",
  },
  {
    icon: HeartPulse,
    title: "Wellbeing services",
    body: "Preventive and lifestyle care beyond the chamber - nutrition, therapy and physiotherapy sessions.",
  },
  {
    icon: Stethoscope,
    title: "Doctor consult",
    body: "Consult experienced doctors securely and conveniently, by video or in person.",
  },
]

export function ServiceSection() {
  return (
    <section id="services" className="bg-[#f6f8fd] py-[60px]">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
        <FadeIn className="mb-[34px]">
          <SectionHeading
            align="center"
            eyebrow="Service"
            title="Everything you need, in one place"
          />
        </FadeIn>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, body }) => (
            <StaggerItem key={title}>
              <div className="h-full rounded-2xl border border-[#e6eaf4] bg-white p-[22px] transition-all hover:border-[#2a5be0] hover:shadow-[0_10px_28px_rgba(42,91,224,.1)]">
                <span className="mb-[14px] flex size-10 items-center justify-center rounded-xl bg-[#e9f0ff] text-[#2a5be0]">
                  <Icon className="size-[17px]" />
                </span>
                <h3 className="text-[14.5px] font-bold text-[#0f1b3d]">
                  {title}
                </h3>
                <p className="mt-1.5 text-[12px] leading-[1.55] text-[#6b7490]">
                  {body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[linear-gradient(90deg,#1c3a8f,#2a5be0)] p-[22px_28px] text-white">
            <div>
              <div className="text-[16px] font-bold">
                Every visit, kept in one place.
              </div>
              <p className="mt-1 text-[12.5px] text-white/85">
                Consultations, prescriptions and test records stay with you -
                not scattered across hospitals.
              </p>
            </div>
            <CallbackTrigger className="inline-flex items-center gap-2 rounded-[10px] bg-white px-5 py-[11px] text-[12.5px] font-bold text-[#1c46c2] transition-colors hover:bg-[#f0f5ff]">
              Get started
            </CallbackTrigger>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
