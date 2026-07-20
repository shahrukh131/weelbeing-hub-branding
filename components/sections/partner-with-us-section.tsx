import { ArrowRight, Briefcase, Building2, Stethoscope } from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { SectionHeading } from "@/components/sections/section-heading"

const AUDIENCES = [
  {
    icon: Stethoscope,
    title: "For doctors",
    body: "Manage one schedule across every hospital you practise at. Conflicts are prevented automatically, and each hospital's terms stay separate and private.",
    points: [
      "One calendar, all your chambers",
      "Earnings visible in one place",
      "You control your availability",
    ],
    cta: "Join as a doctor",
  },
  {
    icon: Building2,
    title: "For hospitals & partners",
    body: "Reach patients digitally while keeping full control of your catalogue, pricing and staff. Hospitals, clinics, diagnostic centres and wellbeing providers all welcome.",
    points: [
      "Your services, your prices",
      "Appointments, patients and revenue in one console",
      "Your data stays yours",
    ],
    cta: "Partner with us",
  },
  {
    icon: Briefcase,
    title: "For agents",
    body: "Represent Wellbeing Hub or a partner hospital in your community. Complete training, get verified, and earn on everything you sell.",
    points: [
      "Structured training and certification",
      "Every sale tracked to you",
      "Transparent commission",
    ],
    cta: "Become an agent",
  },
]

/** Acquisition entry points for the three non-patient participant types. */
export function PartnerWithUsSection() {
  return (
    <section id="partner-with-us" className="bg-white py-[60px]">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
        <FadeIn className="mb-[34px]">
          <SectionHeading
            align="center"
            eyebrow="Join the network"
            title="Built for everyone in care"
          />
          <p className="mt-2 text-center text-[13px] text-[#6b7490]">
            Wellbeing Hub works because doctors, hospitals and agents work with us.
          </p>
        </FadeIn>

        <Stagger className="grid gap-5 md:grid-cols-3">
          {AUDIENCES.map(({ icon: Icon, title, body, points, cta }) => (
            <StaggerItem key={title}>
              <div className="flex h-full flex-col rounded-2xl border border-[#e6eaf4] bg-white p-[26px] transition-all hover:border-[#2a5be0] hover:shadow-[0_10px_28px_rgba(42,91,224,.1)]">
                <span className="mb-[14px] flex size-10 items-center justify-center rounded-xl bg-[#e9f0ff] text-[#2a5be0]">
                  <Icon className="size-[17px]" />
                </span>
                <h3 className="text-[15px] font-bold text-[#0f1b3d]">{title}</h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#6b7490]">
                  {body}
                </p>
                <ul className="mt-[18px] mb-6 grid flex-1 gap-[9px]">
                  {points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-[12.5px] leading-relaxed text-[#3c4257]"
                    >
                      <span className="mt-[7px] size-1 shrink-0 rounded-full bg-[#19b8a6]" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#partner-with-us"
                  className="mt-auto inline-flex w-full items-center justify-center gap-1.5 rounded-[10px] border-[1.5px] border-[#c9d4ef] px-5 py-[11px] text-[13px] font-bold text-[#2a5be0] transition-colors hover:border-[#2a5be0] hover:bg-[#f0f5ff]"
                >
                  {cta}
                  <ArrowRight className="size-[15px]" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
