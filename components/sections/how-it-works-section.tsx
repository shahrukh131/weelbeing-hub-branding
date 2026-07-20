import { CalendarCheck, FileHeart, Search } from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { SectionHeading } from "@/components/sections/section-heading"

const STEPS = [
  {
    icon: Search,
    title: "Find your care",
    body: "Search partner hospitals and doctors, and compare tests, services and packages.",
    iconClass: "bg-[#e9f0ff] text-[#2a5be0]",
  },
  {
    icon: CalendarCheck,
    title: "Book and pay",
    body: "Pick a real available slot, see the price upfront, and confirm in one step.",
    iconClass: "bg-[#2a5be0] text-white",
  },
  {
    icon: FileHeart,
    title: "Get care, keep records",
    body: "Attend by video or in person - prescriptions and results stay in your records.",
    iconClass: "bg-[#2a5be0] text-white",
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
        <FadeIn className="mb-[34px]">
          <SectionHeading
            align="center"
            eyebrow="Three simple steps"
            title="How it works"
          />
          <p className="mt-2 text-center text-[13px] text-[#6b7490]">
            From search to consultation, we keep it simple.
          </p>
        </FadeIn>

        <Stagger className="grid gap-5 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, body, iconClass }, i) => (
            <StaggerItem key={title}>
              <div className="h-full rounded-2xl border border-[#e6eaf4] bg-white p-6">
                <div className="mb-[14px] flex items-center gap-3">
                  <span className={`flex size-10 items-center justify-center rounded-xl ${iconClass}`}>
                    <Icon className="size-[17px]" />
                  </span>
                  <span className="text-[22px] font-extrabold text-[#c9d4ef]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-[15px] font-bold text-[#0f1b3d]">
                  {title}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#6b7490]">
                  {body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
