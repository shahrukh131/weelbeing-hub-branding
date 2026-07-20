import { Apple, MapPinned, Play, Smartphone } from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { SectionHeading } from "@/components/sections/section-heading"

const COVERAGE = [
  { label: "Dhaka", note: "Full network" },
  { label: "Chattogram", note: "Full network" },
  { label: "Sylhet", note: "Growing" },
  { label: "Rajshahi", note: "Growing" },
  { label: "Khulna", note: "Growing" },
  { label: "Nationwide", note: "Video consultations" },
]

/**
 * Coverage and app download. Mobile is the primary patient channel (SRS 4.2.1).
 *
 * NOTE: the coverage list and store links are placeholders. Replace with
 * confirmed service areas and real store URLs before publishing.
 */
export function CoverageAppSection() {
  return (
    <section id="coverage" className="bg-[#f6f8fd] py-[60px]">
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-[60px] lg:px-0">
        <FadeIn>
          <SectionHeading
            eyebrow="Where we work"
            title="Care near you, wherever you are"
          />
          <p className="mt-[14px] max-w-[400px] text-[13px] leading-[1.6] text-[#5b6478]">
            Our partner network keeps growing. Video consultations reach anyone
            with a connection - in-person care depends on which hospitals have
            joined near you.
          </p>

          <div className="mt-[22px] flex max-w-[440px] flex-wrap gap-2.5">
            {COVERAGE.map(({ label, note }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-[#dbe3f5] bg-white px-4 py-2 text-[12px] font-semibold text-[#0f1b3d]"
              >
                <MapPinned className="size-[13px] text-[#2a5be0]" />
                {label}
                <span className="text-[11px] font-medium text-[#6b7490]">
                  {note}
                </span>
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.1}>
          <div className="rounded-2xl border border-[#e6eaf4] bg-white p-[26px]">
            <span className="mb-[14px] flex size-10 items-center justify-center rounded-xl bg-[#e9f0ff] text-[#2a5be0]">
              <Smartphone className="size-[17px]" />
            </span>
            <h3 className="text-[16px] font-bold text-[#0f1b3d]">
              Built for your phone
            </h3>
            <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#6b7490]">
              Book, consult and check your records from the app - the way most
              of our patients use Wellbeing Hub.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#coverage"
                className="inline-flex items-center gap-2.5 rounded-[10px] bg-[#0f1b3d] px-5 py-[11px] text-white transition-colors hover:bg-[#1c3a8f]"
              >
                <Apple className="size-[18px]" />
                <span className="text-left leading-tight">
                  <span className="block text-[9.5px] text-white/70">
                    Download on the
                  </span>
                  <span className="block text-[12.5px] font-bold">
                    App Store
                  </span>
                </span>
              </a>
              <a
                href="#coverage"
                className="inline-flex items-center gap-2.5 rounded-[10px] bg-[#0f1b3d] px-5 py-[11px] text-white transition-colors hover:bg-[#1c3a8f]"
              >
                <Play className="size-[18px]" />
                <span className="text-left leading-tight">
                  <span className="block text-[9.5px] text-white/70">
                    Get it on
                  </span>
                  <span className="block text-[12.5px] font-bold">
                    Google Play
                  </span>
                </span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
