import { ShieldCheck } from "lucide-react"

import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/motion/fade-in"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { SectionHeading } from "@/components/sections/section-heading"

const PLANS = [
  {
    name: "Health",
    price: "৳299",
    period: "/mo",
    featured: false,
    cta: "Get started",
    features: ["24/7 telemedicine", "500+ hospital discounts", "Medicine cashback"],
  },
  {
    name: "Family",
    price: "৳799",
    period: "/mo",
    featured: true,
    cta: "Get started",
    features: [
      "Everything in Health",
      "Cover up to 5 members",
      "Specialist consultations",
      "Hospital cashback",
    ],
  },
  {
    name: "Corporate",
    price: "Custom",
    period: "",
    featured: false,
    cta: "Contact sales",
    features: [
      "Tailored employee cover",
      "Cashless facility",
      "Dedicated account manager",
      "B2B billing",
    ],
  },
]

export function PlansSection() {
  return (
    <section id="plans" className="bg-[#f6f8fd] py-[60px]">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
        <FadeIn className="mb-[34px]">
          <SectionHeading
            align="center"
            eyebrow="Choose your cover"
            title="Membership plans"
            className="mx-auto"
          />
          <p className="mt-2 text-center text-[13px] text-[#6b7490]">
            Simple monthly plans for individuals, families, and companies.
          </p>
        </FadeIn>

        <Stagger className="grid gap-5 md:grid-cols-3">
          {PLANS.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl bg-white p-[26px]",
                  plan.featured
                    ? "border-2 border-[#2a5be0] shadow-[0_16px_36px_rgba(42,91,224,.14)]"
                    : "border border-[#e6eaf4]"
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-[11px] left-1/2 -translate-x-1/2 rounded-full bg-[#2a5be0] px-[14px] py-1 text-[10px] font-extrabold tracking-[.08em] text-white">
                    MOST POPULAR
                  </span>
                )}
                <div className="text-[13px] font-bold text-[#6b7490]">
                  {plan.name}
                </div>
                <div className="mt-2 mb-5 flex items-baseline gap-1">
                  <span className="text-[30px] font-extrabold leading-none text-[#0f1b3d]">
                    {plan.price}
                  </span>
                  <span className="text-[12px] font-medium text-[#6b7490]">
                    {plan.period}
                  </span>
                </div>
                <ul className="mb-7 grid flex-1 gap-[9px]">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-[12.5px] leading-relaxed text-[#3c4257]"
                    >
                      <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#19b8a6]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#plans"
                  className={cn(
                    "mt-auto inline-flex w-full items-center justify-center rounded-[10px] px-5 py-[11px] text-[13px] font-bold transition-colors",
                    plan.featured
                      ? "bg-[#2a5be0] text-white hover:bg-[#1c46c2]"
                      : "border-[1.5px] border-[#c9d4ef] text-[#2a5be0] hover:bg-[#f0f5ff]"
                  )}
                >
                  {plan.cta}
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
