import { AlertTriangle, BadgeCheck, FileLock2, Lock, ScrollText } from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { SectionHeading } from "@/components/sections/section-heading"

const SIGNALS = [
  {
    icon: BadgeCheck,
    title: "Every doctor is verified",
    body: "Medical council registration is checked before any doctor appears on the platform. Incomplete profiles are never listed.",
  },
  {
    icon: ScrollText,
    title: "Every hospital is reviewed",
    body: "Partners submit operating licences, trade licences and tax registration. Only approved institutions can accept bookings.",
  },
  {
    icon: Lock,
    title: "Your records stay yours",
    body: "A doctor sees your history only if they have consulted you. Hospitals see only their own visits. Agents never see clinical information at all.",
  },
  {
    icon: FileLock2,
    title: "Secure by design",
    body: "Verified sign-in, encrypted credentials, and a full record of who accessed what - so nothing happens to your account unseen.",
  },
]

/** Trust, verification and compliance signals, plus the emergency disclaimer. */
export function TrustSection() {
  return (
    <section id="trust" className="bg-[#f6f8fd] py-16">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
        <FadeIn className="mb-[34px]">
          <SectionHeading
            align="center"
            eyebrow="Why you can trust us"
            title="Verified care, protected data"
          />
          <p className="mt-2 text-center text-[13px] text-[#6b7490]">
            Health information is sensitive. We treat it that way.
          </p>
        </FadeIn>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SIGNALS.map(({ icon: Icon, title, body }) => (
            <StaggerItem key={title}>
              <div className="h-full rounded-2xl border border-[#e6eaf4] bg-white p-[22px]">
                <span className="mb-[14px] flex size-10 items-center justify-center rounded-xl bg-[#e6f7f4] text-[#19b8a6]">
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
          <div className="flex items-start gap-3 rounded-2xl border border-[#f2d9c4] bg-[#fdf6ef] p-[18px_22px]">
            <AlertTriangle className="mt-[1px] size-[18px] shrink-0 text-[#d1571f]" />
            <p className="text-[12.5px] leading-[1.6] text-[#5b6478]">
              <span className="font-bold text-[#0f1b3d]">
                Not for medical emergencies.
              </span>{" "}
              Wellbeing Hub supports scheduled consultations and planned care. If
              you are experiencing a medical emergency, contact your nearest
              emergency department or call your local emergency number
              immediately.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
