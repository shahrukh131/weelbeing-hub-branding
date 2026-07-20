import { Stagger, StaggerItem } from "@/components/motion/stagger"

/**
 * NOTE: these describe how the platform works, not performance history.
 * Any volume claim here (patients served, hospitals onboarded, consultations
 * completed) must be replaced with a figure the business can substantiate
 * before it is published. Unverified metrics on a health service are a
 * regulatory and trust risk, not a copy decision.
 */
const STATS = [
  { value: "24/7", label: "Telemedicine access" },
  { value: "100%", label: "Verified doctors" },
  { value: "4", label: "Ways to book care" },
  { value: "1", label: "Card, every partner" },
]

/** Trust stats band, presented as a contained panel. */
export function StatsSection() {
  return (
    <section className="mx-auto w-full max-w-[1000px] px-4 py-14 sm:px-6 lg:px-0">
      <Stagger className="grid grid-cols-2 gap-5 text-center sm:grid-cols-4">
        {STATS.map(({ value, label }) => (
          <StaggerItem
            key={label}
            className="flex flex-col items-center text-center"
          >
            <div className="text-[30px] font-extrabold tracking-tight text-[#2a5be0]">
              {value}
            </div>
            <div className="mt-1 text-[12px] text-[#6b7490]">{label}</div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
