import { ClipboardList, FileText, FlaskConical, Upload } from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { SectionHeading } from "@/components/sections/section-heading"
import { CallbackTrigger } from "@/components/callback/callback-trigger"

const RECORDS = [
  {
    icon: ClipboardList,
    title: "Visit history",
    body: "Every consultation you have booked, across every hospital you have visited.",
  },
  {
    icon: FileText,
    title: "Prescriptions",
    body: "Prescriptions issued to you, kept where you can find them again.",
  },
  {
    icon: FlaskConical,
    title: "Test records",
    body: "Diagnostic bookings and results, held alongside the rest of your history.",
  },
  {
    icon: Upload,
    title: "Your own uploads",
    body: "Add reports from elsewhere so your health picture stays in one place.",
  },
]

/** Health records and continuity of care (SRS 4.4.14). */
export function HealthRecordsSection() {
  return (
    <section id="records" className="bg-white py-16">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
        <FadeIn className="mb-[34px]">
          <SectionHeading
            align="center"
            eyebrow="Continuity of care"
            title="Your health history, in one place"
          />
          <p className="mt-2 text-center text-[13px] text-[#6b7490]">
            Care usually ends up scattered across the hospitals that provided
            it. Here, it follows you.
          </p>
        </FadeIn>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RECORDS.map(({ icon: Icon, title, body }) => (
            <StaggerItem key={title}>
              <div className="h-full rounded-2xl border border-[#e6eaf4] bg-white p-[22px]">
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
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#e6eaf4] bg-[#f6f8fd] p-[22px_28px]">
            <div>
              <div className="text-[15px] font-bold text-[#0f1b3d]">
                You decide who sees what.
              </div>
              <p className="mt-1 text-[12.5px] text-[#6b7490]">
                A doctor can see your history only if they have consulted you.
                Hospitals see only their own visits. Agents see none of it.
              </p>
            </div>
            <CallbackTrigger className="inline-flex items-center rounded-[10px] bg-[#2a5be0] px-5 py-[11px] text-[12.5px] font-bold text-white transition-colors hover:bg-[#1c46c2]">
              Get started
            </CallbackTrigger>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
