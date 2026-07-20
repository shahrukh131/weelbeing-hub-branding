import { MapPin, ScanSearch, SlidersHorizontal, Star } from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { SectionHeading } from "@/components/sections/section-heading"

const STEPS = [
  {
    icon: MapPin,
    title: "Search near you",
    body: "Find partner hospitals, clinics and diagnostic centres by location or by name.",
  },
  {
    icon: SlidersHorizontal,
    title: "Filter what matters",
    body: "Narrow by location, institution type and the services actually available there.",
  },
  {
    icon: ScanSearch,
    title: "See everything on offer",
    body: "Doctors, tests, wellbeing services and packages - all on one hospital profile.",
  },
  {
    icon: Star,
    title: "Compare before you book",
    body: "Prices, preparation guidance and turnaround times shown upfront, not after.",
  },
]

/** Hospital search and discovery - the top of the patient funnel (SRS 4.4.4-4.4.5). */
export function DiscoverySection() {
  return (
    <section id="discovery" className="bg-white py-16">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
        <FadeIn className="mb-[34px]">
          <SectionHeading
            align="center"
            eyebrow="Find care"
            title="Know before you book"
          />
          <p className="mt-2 text-center text-[13px] text-[#6b7490]">
            No more calling around. See what each hospital offers, and what it
            costs, in one place.
          </p>
        </FadeIn>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, body }) => (
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
      </div>
    </section>
  )
}
